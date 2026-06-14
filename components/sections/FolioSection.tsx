import { Reveal } from "@/components/Reveal";
import { folio } from "@/lib/data";
import prose from "./ProseSection.module.css";
import styles from "./FolioSection.module.css";

interface FolioSectionProps {
  active?: boolean;
}

export function FolioSection({ active = false }: FolioSectionProps) {
  return (
    <div>
      {folio.map((item, index) => (
        <Reveal
          key={item.name}
          className={styles.row}
          delay={0.2 + index * 0.07}
          active={active}
        >
          <div>
            <div className={styles.name}>{item.name}</div>
            <div className={styles.kind}>{item.kind}</div>
          </div>
          <div className={styles.body}>{item.body}</div>
        </Reveal>
      ))}

      <Reveal delay={0.45} active={active}>
        <a
          className={prose.cta}
          href="https://github.com/azs-hub"
          target="_blank"
          rel="noopener noreferrer"
        >
          See the code on GitHub <span className={prose.arrow}>→</span>
        </a>
      </Reveal>
    </div>
  );
}
