import { Reveal } from "@/components/Reveal";
import { earlier, experiences } from "@/lib/data";
import styles from "./ExperiencesSection.module.css";

interface ExperiencesSectionProps {
  active?: boolean;
}

export function ExperiencesSection({ active = false }: ExperiencesSectionProps) {
  return (
    <div>
      {experiences.map((experience, index) => (
        <Reveal
          key={experience.org}
          className={styles.item}
          delay={0.2 + index * 0.05}
          active={active}
        >
          <div>
            <div className={styles.when}>{experience.when}</div>
            <div className={styles.role}>{experience.role}</div>
            <div className={styles.org}>{experience.org}</div>
            <div className={styles.where}>{experience.where}</div>
          </div>
          <div>
            <div className={styles.body}>{experience.body}</div>
            <div className={styles.tags}>
              {experience.tags.map((tag) => (
                <span className={styles.tag} key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}

      <Reveal className={styles.earlier} delay={0.5} active={active}>
        <div className={styles.earlierHeading}>Earlier</div>
        {earlier.map((entry) => (
          <div className={styles.earlierRow} key={entry.org}>
            <span>
              {entry.role},{" "}
              <strong className={styles.earlierOrg}>{entry.org}</strong>
            </span>
            <span>{entry.when}</span>
          </div>
        ))}
      </Reveal>
    </div>
  );
}
