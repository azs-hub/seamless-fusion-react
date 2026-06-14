import { Reveal } from "@/components/Reveal";
import prose from "./ProseSection.module.css";

interface AboutSectionProps {
  active?: boolean;
}

export function AboutSection({ active = false }: AboutSectionProps) {
  return (
    <Reveal className={prose.prose} delay={0.2} active={active}>
      <p className={prose.lead}>
        I&apos;m Anaïs — a Senior Front-End Engineer with six years of
        experience building user-centric web applications.
      </p>
      <p>
        I specialise in JavaScript and modern frontend ecosystems — Vue.js
        above all, with Angular and React in my hands too. I care about user
        experience, responsive design, and code that the next person can actually
        maintain.
      </p>
      <p>
        I&apos;ve worked across remote, multicultural teams, and I like
        blending creativity with technical rigour to make products people
        genuinely enjoy using. Today I work from India, trading under{" "}
        <strong>Seamless Fusion Pvt Ltd</strong>.
      </p>
      <p>
        Want to talk?{" "}
        <a href="mailto:contact@seamless-fusion.com">
          contact@seamless-fusion.com
        </a>
      </p>
    </Reveal>
  );
}
