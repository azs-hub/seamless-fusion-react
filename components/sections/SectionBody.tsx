"use client";

import type { ComponentType } from "react";
import type { SectionId } from "@/lib/data";
import { AboutSection } from "./AboutSection";
import { ExperiencesSection } from "./ExperiencesSection";
import { FolioSection } from "./FolioSection";
import { IndexSection } from "./IndexSection";
import { LabSection } from "./LabSection";
import { MoreSection } from "./MoreSection";
import { NowSection } from "./NowSection";
import { OriginSection } from "./OriginSection";
import { ServicesSection } from "./ServicesSection";
import { UsesSection } from "./UsesSection";

export interface SectionBodyProps {
  id: SectionId;
  active: boolean;
  onOpenSection: (id: SectionId) => void;
}

const SECTION_COMPONENTS: Record<
  Exclude<SectionId, "index">,
  ComponentType<{ active?: boolean }>
> = {
  services: ServicesSection,
  experiences: ExperiencesSection,
  about: AboutSection,
  more: MoreSection,
  lab: LabSection,
  folio: FolioSection,
  uses: UsesSection,
  origin: OriginSection,
  now: NowSection,
};

export function SectionBody({ id, active, onOpenSection }: SectionBodyProps) {
  if (id === "index") {
    return <IndexSection active={active} onOpenSection={onOpenSection} />;
  }

  const Component = SECTION_COMPONENTS[id];
  return <Component active={active} />;
}
