import type { CSSProperties, ElementType, ReactNode } from "react";
import styles from "./Reveal.module.css";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
  active?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  active = false,
  href,
  target,
  rel,
}: RevealProps) {
  const style = { "--rd": `${delay}s` } as CSSProperties;

  return (
    <Tag
      className={`${styles.reveal}${active ? ` ${styles.revealActive}` : ""}${className ? ` ${className}` : ""}`}
      style={style}
      href={href}
      target={target}
      rel={rel}
    >
      {children}
    </Tag>
  );
}
