import type { Experience } from "@/types";

export interface EarlierExperience {
  org: string;
  when: string;
  role: string;
}

export const experiences: Experience[] = [
  {
    role: "Senior Front-End Engineer",
    org: "Xplor Technologies / Deciplus",
    when: "Jan 2025 — Now",
    where: "Remote via Seamless Fusion Pvt Ltd",
    body: "Leading frontend on Deciplus with Vue 3 Composition API, Tailwind and PrimeVue. Designed a customizable branding-configuration system with real-time preview; modernized legacy components for performance and scale.",
    tags: ["Vue 3", "Tailwind", "PrimeVue"],
  },
  {
    role: "Founder & Relocation",
    org: "Seamless Fusion Pvt Ltd",
    when: "Oct 2023 — Dec 2024",
    where: "Panaji, Goa, India",
    body: "Established a Private Limited company to support international operations. Helped artists launch their LLP end-to-end — legal setup, websites, branding and growth strategy — and transitioned the Anazvara brand's operations to India.",
    tags: ["Entrepreneurship", "Consulting"],
  },
  {
    role: "Senior Front-End Engineer",
    org: "HyperPlan",
    when: "May 2023 — Sep 2023",
    where: "Remote",
    body: "Full ownership of feature specification and delivery. Shipped clean, scalable Vue.js with comprehensive testing and tight stakeholder alignment.",
    tags: ["Vue.js", "Testing"],
  },
  {
    role: "Senior Front-End Engineer",
    org: "Ankorstore",
    when: "Feb 2022 — May 2023",
    where: "Remote",
    body: "Discovery, refinement and sprint planning. Built modular Vue.js components with 100% Jest coverage, extended the design system, and wrote Cypress tests for advanced flows.",
    tags: ["Vue.js", "Jest", "Cypress"],
  },
  {
    role: "Founder",
    org: "Anazvara — Sustainable Fashion",
    when: "Jan 2018 — Feb 2022",
    where: "Freelance / Asia",
    body: "Founded a small-batch fashion brand around natural-dye techniques. Designed and built the e-commerce, ran production and logistics, grew the brand on Etsy and retail. Travelled Asia; learned Hindi and Russian.",
    tags: ["E-commerce", "Brand"],
  },
  {
    role: "Front-End Engineer",
    org: "SQLI",
    when: "Sep 2015 — Jan 2018",
    where: "France",
    body: "Built enterprise applications in AngularJS for clients including HomeFriend and Silversea (Adobe AEM). Analysed Contentful solutions and built feasibility demos.",
    tags: ["AngularJS", "AEM"],
  },
];

export const earlier: EarlierExperience[] = [
  {
    org: "Linagora / LinShare",
    when: "2014 — 2015",
    role: "Front-End Engineer (AngularJS)",
  },
  { org: "CTZAR", when: "2013 — 2014", role: "Full-Stack Developer" },
  {
    org: "Mobile Health",
    when: "2010 — 2011",
    role: "Web Designer / Integrator",
  },
];
