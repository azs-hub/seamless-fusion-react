/* const lock the type to specific values, not just a Strin[] */
export const SECTION_IDS = [
  "services",
  "experiences",
  "about",
  "more",
  "lab",
  "folio",
  "uses",
  "index",
  "origin",
  "now",
] as const;

/* Lock SectionId to a specific key of SectionIds */
export type SectionId = (typeof SECTION_IDS)[number];

/* const lock the type to specific keys and value shall be one of sectionIds */
export const LETTER_MAP = {
  S: "services",
  E: "experiences",
  A: "about",
  M: "more",
  L: "lab",
  F: "folio",
  U: "uses",
  I: "index",
  O: "origin",
  N: "now",
} as const satisfies Record<string, SectionId>;

/* Lock LetterChar to a specific key of LETTER_MAP */
export type LetterChar = keyof typeof LETTER_MAP;

export interface WordLetter {
  char: string;
  sectionId: SectionId | null;
  word: number;
}

export interface SectionMeta {
  letter: LetterChar;
  title: string;
  lede: string;
}

export interface Service {
  no: string;
  title: string;
  body: string;
}

export interface Experience {
  role: string;
  org: string;
  when: string;
  where: string;
  body: string;
  tags: string[];
}

export interface EarlierExperience {
  org: string;
  when: string;
  role: string;
}

export interface UseGroup {
  group: string;
  items: string[];
}

export interface FolioItem {
  name: string;
  kind: string;
  body: string;
}

export interface ContactItem {
  label: string;
  value: string;
  href: string | null;
}

export interface SiteData {
  WORD: string;
  MAP: typeof LETTER_MAP;
  letters: WordLetter[];
  order: SectionId[];
  sections: Record<SectionId, SectionMeta>;
  services: Service[];
  experiences: Experience[];
  earlier: EarlierExperience[];
  uses: UseGroup[];
  folio: FolioItem[];
  contact: ContactItem[];
}

function buildLetters(word: string, map: typeof LETTER_MAP): WordLetter[] {
  const seen = new Set<string>();
  let wordIndex = 0;
  const letters: WordLetter[] = [];

  for (const ch of word) {
    if (ch === " ") {
      wordIndex += 1;
      continue;
    }

    const sectionId =
      !seen.has(ch) && ch in map ? map[ch as LetterChar] : null;
    seen.add(ch);
    letters.push({ char: ch, sectionId, word: wordIndex });
  }

  return letters;
}

const WORD = "SEAMLESS FUSION";

const order = [...SECTION_IDS];

const sections = {
  services: {
    letter: "S",
    title: "Services",
    lede: "What I build, and how I work with you.",
  },
  experiences: {
    letter: "E",
    title: "Experiences",
    lede: "Six years engineering interfaces — and a few detours that made me better at it.",
  },
  about: {
    letter: "A",
    title: "About",
    lede: "Senior Front-End Engineer. Paris-trained, India-based.",
  },
  more: {
    letter: "M",
    title: "More info",
    lede: "Say hello. I read everything.",
  },
  lab: {
    letter: "L",
    title: "Lab",
    lede: "Experiments, side projects, things made for the joy of making.",
  },
  folio: {
    letter: "F",
    title: "Folio",
    lede: "Selected work. Most of it ships behind a login — here is the shape of it.",
  },
  uses: {
    letter: "U",
    title: "Uses",
    lede: "The stack I reach for, and the languages I speak.",
  },
  index: {
    letter: "I",
    title: "Index",
    lede: "Everything, in one place.",
  },
  origin: {
    letter: "O",
    title: "Origin",
    lede: "Paris → Goa.",
  },
  now: {
    letter: "N",
    title: "Now",
    lede: "What I'm doing at the moment.",
  },
} satisfies Record<SectionId, SectionMeta>;

const services: Service[] = [
  {
    no: "01",
    title: "Front-End Engineering",
    body: "Vue.js and React applications built to last — component architecture, design systems, and real test coverage (Jest, Vue Testing Library, Cypress). Clean, scalable, maintainable code.",
  },
  {
    no: "02",
    title: "Websites & WordPress",
    body: "Marketing sites, portfolios and content platforms. WordPress setup, theming and customization when that's the right tool — accompanying you end-to-end, from first sketch to launch.",
  },
  {
    no: "03",
    title: "SaaS Team Augmentation",
    body: "Drop me into your product team to design and build features at pace. Ownership of specs and delivery, comfortable in remote and multicultural environments.",
  },
  {
    no: "04",
    title: "Consulting & Accompaniment",
    body: "Guidance for founders building their first web presence — branding, strategy, and the technical decisions that are hard to undo later.",
  },
];

const experiences: Experience[] = [
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

const earlier: EarlierExperience[] = [
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

const uses: UseGroup[] = [
  { group: "Core", items: ["JavaScript", "TypeScript", "HTML / CSS"] },
  { group: "Frameworks", items: ["Vue", "Angular", "React"] },
  { group: "Styling", items: ["Tailwind CSS", "Bootstrap"] },
  { group: "Testing", items: ["Jest", "Vue Testing Library", "Cypress"] },
  {
    group: "Data & Tools",
    items: ["MySQL", "Git", "PrimeVue", "Contentful"],
  },
  { group: "Languages", items: ["French", "English", "Russian", "Hindi"] },
];

const folio: FolioItem[] = [
  {
    name: "Deciplus — Branding System",
    kind: "Product · 2025",
    body: "A customizable branding-configuration system with real-time preview, built in Vue 3 + PrimeVue for a fitness SaaS.",
  },
  {
    name: "Ankorstore — Design System",
    kind: "Product · 2022—23",
    body: "Modular, fully-tested Vue components extending a shared design system across a B2B marketplace.",
  },
  {
    name: "Anazvara — E-commerce",
    kind: "Founder · 2018—22",
    body: "A sustainable-fashion storefront I designed, built and operated end-to-end, from product to logistics.",
  },
];

const contact: ContactItem[] = [
  {
    label: "Email",
    value: "anais.siba@gmail.com",
    href: "mailto:anais.siba@gmail.com",
  },
  {
    label: "Studio",
    value: "contact@seamless-fusion.com",
    href: "mailto:contact@seamless-fusion.com",
  },
  {
    label: "LinkedIn",
    value: "in/anais-siba",
    href: "https://www.linkedin.com/in/anais-siba-5483b127/",
  },
  {
    label: "GitHub",
    value: "github.com/azs-hub",
    href: "https://github.com/azs-hub",
  },
  { label: "Based", value: "Paris // Goa", href: null },
];

export const SF_DATA: SiteData = {
  WORD,
  MAP: LETTER_MAP,
  letters: buildLetters(WORD, LETTER_MAP),
  order,
  sections,
  services,
  experiences,
  earlier,
  uses,
  folio,
  contact,
};
