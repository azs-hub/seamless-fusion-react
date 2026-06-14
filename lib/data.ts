import { contact } from "@/data/contact";
import { earlier, experiences } from "@/data/experiences";
import { folio } from "@/data/folio";
import {
  LETTER_MAP,
  order,
  sections,
  type LetterChar,
  type SectionId,
} from "@/data/sections";
import { services } from "@/data/services";
import { uses } from "@/data/uses";
import type {
  ContactItem,
  Experience,
  FolioItem,
  Section,
  Service,
  UseGroup,
} from "@/types";
import type { EarlierExperience } from "@/data/experiences";

export { SECTION_IDS, LETTER_MAP, order, sections } from "@/data/sections";
export { services } from "@/data/services";
export { experiences, earlier, type EarlierExperience } from "@/data/experiences";
export { uses } from "@/data/uses";
export { folio } from "@/data/folio";
export { contact } from "@/data/contact";

export type { SectionId, LetterChar } from "@/data/sections";
export type {
  Section,
  Service,
  Experience,
  UseGroup,
  FolioItem,
  ContactItem,
} from "@/types";

export interface WordLetter {
  char: string;
  sectionId: SectionId | null;
  word: number;
}

export interface SiteData {
  WORD: string;
  MAP: typeof LETTER_MAP;
  letters: WordLetter[];
  order: SectionId[];
  sections: Record<SectionId, Section>;
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
