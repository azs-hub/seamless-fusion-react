import type { Section } from "@/types";

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

export type SectionId = (typeof SECTION_IDS)[number];

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

export type LetterChar = keyof typeof LETTER_MAP;

export const order: SectionId[] = [...SECTION_IDS];

export const sections = {
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
} satisfies Record<SectionId, Section>;
