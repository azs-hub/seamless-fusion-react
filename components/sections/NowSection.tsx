import { Reveal } from "@/components/Reveal";
import prose from "./ProseSection.module.css";

interface NowSectionProps {
  active?: boolean;
}

export function NowSection({ active = false }: NowSectionProps) {
  return (
    <Reveal className={prose.prose} delay={0.2} active={active}>
      <p className={prose.lead}>Building the Deciplus frontend, from Goa.</p>
      <p>
        Right now I&apos;m leading frontend work for{" "}
        <strong>Xplor / Deciplus</strong> in Vue 3, Tailwind and PrimeVue —
        including a branding-configuration system with real-time preview —
        remotely via Seamless Fusion.
      </p>
      <p>
        Based in India, working across time zones, and open to selective
        collaborations and consulting. If the work is interesting,{" "}
        <a href="mailto:contact@seamless-fusion.com">let&apos;s talk</a>.
      </p>
      <p className={prose.note}>Updated June 2026.</p>
    </Reveal>
  );
}
