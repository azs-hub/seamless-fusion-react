import { Reveal } from "@/components/Reveal";
import { contact } from "@/lib/data";
import styles from "./MoreSection.module.css";

interface MoreSectionProps {
  active?: boolean;
}

export function MoreSection({ active = false }: MoreSectionProps) {
  return (
    <div className={styles.grid}>
      {contact.map((item, index) => {
        const inner = (
          <>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.value}>{item.value}</span>
          </>
        );

        if (item.href) {
          return (
            <Reveal
              key={item.label}
              as="a"
              className={styles.row}
              delay={0.2 + index * 0.06}
              active={active}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {inner}
            </Reveal>
          );
        }

        return (
          <Reveal
            key={item.label}
            className={styles.row}
            delay={0.2 + index * 0.06}
            active={active}
          >
            {inner}
          </Reveal>
        );
      })}
    </div>
  );
}
