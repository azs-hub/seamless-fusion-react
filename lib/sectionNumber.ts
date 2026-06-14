import { order } from "@/data/sections";
import type { SectionId } from "@/data/sections";

export function sectionNumber(id: SectionId): string {
  const index = order.indexOf(id);
  return String(index + 1).padStart(2, "0");
}
