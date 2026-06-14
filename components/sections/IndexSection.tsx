import { Reveal } from "@/components/Reveal";
import { order, sections } from "@/lib/data";
import type { SectionId } from "@/lib/data";
import styles from "./IndexSection.module.css";

interface IndexSectionProps {
  active?: boolean;
  onOpenSection: (id: SectionId) => void;
}

export function IndexSection({
  active = false,
  onOpenSection,
}: IndexSectionProps) {
  return (
    <Reveal className={styles.grid} delay={0.2} active={active}>
      {order.map((id) => {
        const section = sections[id];

        return (
          <button
            key={id}
            type="button"
            className={styles.cell}
            onClick={() => onOpenSection(id)}
          >
            <div className={styles.letter}>{section.letter}</div>
            <div className={styles.name}>{section.title}</div>
          </button>
        );
      })}
    </Reveal>
  );
}
