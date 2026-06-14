"use client";

import { SectionBody } from "@/components/sections/SectionBody";
import { sections } from "@/lib/data";
import type { SectionId } from "@/lib/data";
import styles from "./SectionView.module.css";

interface SectionViewProps {
  id: SectionId;
  open: boolean;
  onClose: () => void;
  onOpenSection: (id: SectionId) => void;
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
