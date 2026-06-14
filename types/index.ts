export interface Section {
  letter: string;
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
