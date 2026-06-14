import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/data";
import styles from "./ServicesSection.module.css";

interface ServicesSectionProps {
  active?: boolean;
}

export function ServicesSection({ active = false }: ServicesSectionProps) {
  return (
    <div className={styles.grid}>
      {services.map((service, index) => (
        <Reveal
          key={service.no}
          className={styles.item}
          delay={0.2 + index * 0.06}
          active={active}
        >
          <div className={styles.no}>{service.no} —</div>
          <div>
            <div className={styles.title}>{service.title}</div>
            <div className={styles.body}>{service.body}</div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
