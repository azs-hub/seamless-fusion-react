"use client";

import {
  useLayoutEffect,
  useRef,
  type CSSProperties,
  type KeyboardEvent,
} from "react";
import { sections } from "@/lib/data";
import type { SectionId, WordLetter } from "@/lib/data";
import { sectionNumber } from "@/lib/sectionNumber";
import styles from "./WordLine.module.css";

interface WordLineProps {
  letters: WordLetter[];
  baseIndex: number;
  intro: boolean;
  ready: boolean;
  onOpen: (id: SectionId) => void;
  onInteract: () => void;
}

export function WordLine({
  letters,
  baseIndex,
  intro,
  ready,
  onOpen,
  onInteract,
}: WordLineProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const parent = el.parentElement;
    if (!parent) return;

    const fit = () => {
      el.style.fontSize = "200px";
      const natural = el.scrollWidth;
      if (!natural) return;
      const available = parent.clientWidth;
      el.style.fontSize = `${(200 * available) / natural}px`;
    };

    fit();

    const observer = new ResizeObserver(fit);
    observer.observe(parent);
    window.addEventListener("resize", fit);
    void document.fonts?.ready.then(fit);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", fit);
    };
  }, []);

  return (
    <span className={styles.line} ref={ref}>
      {letters.map((letter, index) => {
        const globalIndex = baseIndex + index;
        const delay = `${0.3 + globalIndex * 0.07}s`;
        const live = letter.sectionId !== null;
        const sectionId = letter.sectionId;
        const section = sectionId ? sections[sectionId] : null;

        const handleKeyDown = (event: KeyboardEvent<HTMLSpanElement>) => {
          if (!live || !sectionId) return;
          if (event.key !== "Enter" && event.key !== " ") return;
          event.preventDefault();
          onOpen(sectionId);
        };

        return (
          <span
            key={`${letter.char}-${index}`}
            className={`${styles.letter}${live ? ` ${styles.letterLive}` : ""}${ready ? ` ${styles.letterReady}` : ""}`}
            role={live ? "button" : undefined}
            tabIndex={live ? 0 : undefined}
            onMouseEnter={live ? onInteract : undefined}
            onClick={
              live && sectionId ? () => onOpen(sectionId) : undefined
            }
            onKeyDown={live ? handleKeyDown : undefined}
          >
            {live && section && sectionId && (
              <span className={styles.tip}>
                <span className={styles.tipInner}>
                  <span className={styles.tipNum}>{sectionNumber(sectionId)}</span>
                  {section.title}
                </span>
                <span className={styles.tipStem} />
              </span>
            )}
            <span
              className={`${styles.glyph}${intro ? ` ${styles.glyphIntro}` : ""}`}
              style={{ "--d": delay } as CSSProperties}
            >
              {letter.char}
            </span>
          </span>
        );
      })}
    </span>
  );
}
