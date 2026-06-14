import { Reveal } from "@/components/Reveal";
import { uses } from "@/lib/data";
import styles from "./UsesSection.module.css";

interface UsesSectionProps {
  active?: boolean;
}

export function UsesSection({ active = false }: UsesSectionProps) {
  return (
    <div className={styles.grid}>
      {uses.map((group, index) => (
        <Reveal
          key={group.group}
          className={styles.row}
          delay={0.2 + index * 0.06}
          active={active}
        >
          <div className={styles.group}>{group.group}</div>
          <div className={styles.items}>
            {group.items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
