"use client";

import { useCallback, useEffect, useState } from "react";
import { Chrome } from "@/components/Chrome";
import { Menu } from "@/components/Menu";
import { SectionView } from "@/components/SectionView";
import type { SectionId } from "@/lib/data";
import styles from "./HomePage.module.css";

export function HomePage() {
  const [ready, setReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [displayed, setDisplayed] = useState<SectionId | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const openSection = useCallback((id: SectionId) => {
    setMenuOpen(false);
    setDisplayed(id);
  }, []);

  useEffect(() => {
    if (!displayed) return;

    const timer = setTimeout(() => setOpen(true), 20);
    return () => clearTimeout(timer);
  }, [displayed]);

  const closeSection = useCallback(() => {
    setOpen(false);
    setTimeout(() => setDisplayed(null), 520);
  }, []);

  const goHome = useCallback(() => {
    setMenuOpen(false);
    if (displayed) {
      closeSection();
    }
  }, [displayed]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (menuOpen) setMenuOpen(false);
      else if (displayed) closeSection();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, displayed, closeSection]);

  const overlayUp = !!displayed || menuOpen;

  return (
    <div className={styles.stage}>
      <Chrome
        overlayUp={overlayUp}
        ready={ready}
        menuOpen={menuOpen}
        onGoHome={goHome}
        onToggleMenu={() => setMenuOpen((value) => !value)}
      />

      <Menu open={menuOpen} onOpenSection={openSection} />

      {displayed && (
        <SectionView
          key={displayed}
          id={displayed}
          open={open}
          onClose={closeSection}
          onOpenSection={openSection}
        />
      )}
    </div>
  );
}
