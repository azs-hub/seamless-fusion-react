"use client";

import styles from "./Chrome.module.css";

interface ChromeProps {
  overlayUp: boolean;
  ready: boolean;
  menuOpen: boolean;
  onGoHome: () => void;
  onToggleMenu: () => void;
}

export function Chrome({
  overlayUp,
  ready,
  menuOpen,
  onGoHome,
  onToggleMenu,
}: ChromeProps) {
  return (
    <div className={styles.chrome}>
      <button
        type="button"
        className={`${styles.miniMark}${overlayUp ? ` ${styles.miniMarkVisible}` : ""}`}
        onClick={onGoHome}
        style={{ visibility: overlayUp ? "visible" : "hidden" }}
      >
        Seamless Fusion<span className={styles.sub}>— Anaïs Siba</span>
      </button>
      <span className="flex-1" />
      <button
        type="button"
        className={`${styles.burger}${ready ? ` ${styles.burgerVisible}` : ""}${menuOpen ? ` ${styles.burgerOpen}` : ""}`}
        aria-label="Menu"
        aria-expanded={menuOpen}
        onClick={onToggleMenu}
      >
        <span />
        <span />
        <span />
      </button>
    </div>
  );
}
