"use client";

import type { CSSProperties } from "react";
import { order, sections } from "@/lib/data";
import type { SectionId } from "@/lib/data";
import styles from "./Menu.module.css";

interface MenuProps {
  open: boolean;
  onOpenSection: (id: SectionId) => void;
}

export function Menu({ open, onOpenSection }: MenuProps) {
  return (
    <div className={`${styles.menu}${open ? ` ${styles.menuOpen}` : ""}`}>
      <div className={styles.list}>
        {order.map((id, i) => {
          const section = sections[id];
          return (
            <button
              type="button"
              className={styles.row}
              key={id}
              style={{ "--rd": `${0.12 + i * 0.05}s` } as CSSProperties}
              onClick={() => onOpenSection(id)}
            >
              <span className={styles.letter}>{section.letter}</span>
              <span className={styles.title}>{section.title}</span>
              <span className={styles.lede}>{section.lede}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
