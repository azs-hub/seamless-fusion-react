"use client";

import { SF_DATA } from "@/lib/data";
import type { SectionId } from "@/lib/data";
import { WordLine } from "@/components/WordLine";
import styles from "./Hero.module.css";

interface HeroProps {
  intro: boolean;
  ready: boolean;
  hidden: boolean;
  onOpenSection: (id: SectionId) => void;
  onInteract: () => void;
}

export function Hero({
  intro,
  ready,
  hidden,
  onOpenSection,
  onInteract,
}: HeroProps) {
  const word0 = SF_DATA.letters.filter((letter) => letter.word === 0);
  const word1 = SF_DATA.letters.filter((letter) => letter.word === 1);

  return (
    <div className={styles.hero} aria-hidden={hidden}>
      <div className={styles.wordmark}>
        <WordLine
          letters={word0}
          baseIndex={0}
          intro={intro}
          ready={ready}
          onOpen={onOpenSection}
          onInteract={onInteract}
        />
        <WordLine
          letters={word1}
          baseIndex={word0.length}
          intro={intro}
          ready={ready}
          onOpen={onOpenSection}
          onInteract={onInteract}
        />
      </div>
    </div>
  );
}
