"use client";

import { AboutSection } from "@/components/sections/AboutSection";
import { ExperiencesSection } from "@/components/sections/ExperiencesSection";
import { FolioSection } from "@/components/sections/FolioSection";
import { IndexSection } from "@/components/sections/IndexSection";
import { LabSection } from "@/components/sections/LabSection";
import { MoreSection } from "@/components/sections/MoreSection";
import { NowSection } from "@/components/sections/NowSection";
import { OriginSection } from "@/components/sections/OriginSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { UsesSection } from "@/components/sections/UsesSection";
import { sections } from "@/lib/data";
import type { SectionId } from "@/lib/data";
import styles from "./SectionView.module.css";

interface SectionViewProps {
  id: SectionId;
  open: boolean;
  onClose: () => void;
  onOpenSection: (id: SectionId) => void;
}

function SectionBody({
  id,
  active,
  onOpenSection,
}: {
  id: SectionId;
  active: boolean;
  onOpenSection: (id: SectionId) => void;
}) {
  if (id === "services") {
    return <ServicesSection active={active} />;
  }

  if (id === "experiences") {
    return <ExperiencesSection active={active} />;
  }

  if (id === "about") {
    return <AboutSection active={active} />;
  }

  if (id === "more") {
    return <MoreSection active={active} />;
  }

  if (id === "lab") {
    return <LabSection active={active} />;
  }

  if (id === "index") {
    return <IndexSection active={active} onOpenSection={onOpenSection} />;
  }

  if (id === "folio") {
    return <FolioSection active={active} />;
  }

  if (id === "uses") {
    return <UsesSection active={active} />;
  }

  if (id === "origin") {
    return <OriginSection active={active} />;
  }

  if (id === "now") {
    return <NowSection active={active} />;
  }

  return null;
}

export function SectionView({
  id,
  open,
  onClose,
  onOpenSection,
}: SectionViewProps) {
  const section = sections[id];

  return (
    <div className={`${styles.section}${open ? ` ${styles.sectionOpen}` : ""}`}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div className={styles.bigLetter}>{section.letter}</div>
          <div className={styles.headText}>
            <div className={styles.kicker}>Seamless Fusion</div>
            <h2 className={styles.title}>{section.title}</h2>
            <p className={styles.lede}>{section.lede}</p>
          </div>
        </div>

        <SectionBody id={id} active={open} onOpenSection={onOpenSection} />

        <div className={styles.closeNote}>
          <button type="button" className={styles.closeBtn} onClick={onClose}>
            Close
          </button>
          <span className={styles.closeHint}>— or press Esc</span>
        </div>
      </div>
    </div>
  );
}
