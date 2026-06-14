import { Reveal } from "@/components/Reveal";
import prose from "./ProseSection.module.css";

interface LabSectionProps {
  active?: boolean;
}

export function LabSection({ active = false }: LabSectionProps) {
  return (
    <Reveal className={prose.prose} delay={0.2} active={active}>
      <p className={prose.lead}>A quiet corner for experiments.</p>
      <p>
        Small studies in interaction, type and motion — the kind of thing this
        very site is made of. Most live as sketches and half-finished repos
        before they earn a place in real work.
      </p>
      <p>
        The current ones live on GitHub. More will appear here as they&apos;re
        ready.
      </p>
      <a
        className={prose.cta}
        href="https://github.com/azs-hub"
        target="_blank"
        rel="noopener noreferrer"
      >
        Wander the repos <span className={prose.arrow}>→</span>
      </a>
    </Reveal>
  );
}
