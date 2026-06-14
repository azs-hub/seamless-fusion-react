import { Reveal } from "@/components/Reveal";
import prose from "./ProseSection.module.css";

interface OriginSectionProps {
  active?: boolean;
}

export function OriginSection({ active = false }: OriginSectionProps) {
  return (
    <Reveal className={prose.prose} delay={0.2} active={active}>
      <p className={prose.lead}>
        Paris trained me. India is where I built something of my own.
      </p>
      <p>
        I learned to code in France — Web@cademie at EPITECH, then a
        Master&apos;s in Software Architecture at ETNA — and spent years
        shipping frontend for French and international teams.
      </p>
      <p>
        In 2023 I relocated to Panaji, Goa, and established{" "}
        <strong>Seamless Fusion Pvt Ltd</strong> to support international
        clients from India. Along the way I picked up Hindi and Russian, and a
        habit of building things end-to-end.
      </p>
      <p>
        The name is the idea: stitching two worlds together so the seam
        doesn&apos;t show.
      </p>
    </Reveal>
  );
}
