/**
 * The 24 ways in — the manifesto field's seed data.
 *
 * "24W" = "twenty-four ways in" (Tony ratified, 2026-06-14). Each card is one
 * entryway into Tony's ecosystem: a person, project, place, tool, or concept.
 *
 * SEED STATUS — this is a BUILD seed, not the final curation. The real entries
 * below are justified from the content inventory
 * (Deliverables/2026-06-14-24win-content-inventory.md). The remaining slots are
 * explicit placeholders. The final 24-card curation is TONY'S CONTENT TASK —
 * see the build note. `status: 'real'` = inventory-backed; `'placeholder'` =
 * to be filled by Tony; `'private'` = an intentionally reserved/withheld slot.
 *
 * `category` is the surface label (the chip). `stamp` maps it to the design
 * system's stamp/category-accent token (person -> name, concept -> number).
 */

export type WayCategory = 'person' | 'project' | 'place' | 'tool' | 'concept';

export type StampCategory = 'number' | 'name' | 'project' | 'place' | 'tool';

export interface Way {
  /** 01–24, two-digit stamp number. */
  n: string;
  category: WayCategory;
  title: string;
  description?: string;
  status: 'real' | 'placeholder' | 'private';
  /** Bento span hint — varies the field so it is never a symmetric grid. */
  span?: 'wide' | 'tall';
  /** Optional outbound entryway (subdomain / property). */
  href?: string;
}

/** person -> name, concept -> number; the rest are 1:1. */
export const STAMP_CATEGORY: Record<WayCategory, StampCategory> = {
  person: 'name',
  project: 'project',
  place: 'place',
  tool: 'tool',
  concept: 'number',
};

export const WAYS: Way[] = [
  // 01 — the meta-entry: the system itself.
  {
    n: '01',
    category: 'concept',
    title: 'Twenty-four ways in',
    description:
      'One system, twenty-four entryways. The field you are reading is the way in.',
    status: 'real',
    span: 'wide',
  },
  // 02 — Tony / TOE.KNEE.SEE (identity line, not the logo).
  {
    n: '02',
    category: 'person',
    title: 'TOE.KNEE.SEE',
    description: 'Builder, creative, operator. The person the ecosystem orbits.',
    status: 'real',
    href: 'https://tony.24w.in',
  },
  // 03 — The Prana Group LLC (entity framing PENDING Tony — see build note).
  {
    n: '03',
    category: 'project',
    title: 'The Prana Group',
    description: 'The parent entity (framing pending). Where the ventures live.',
    status: 'real',
  },
  // 04 — SETT.LIFE — deepest sub-corpus in the inventory.
  {
    n: '04',
    category: 'project',
    title: 'SETT.LIFE',
    description: 'Movement-ecology platform. Crews, matching, the nocturnal world.',
    status: 'real',
    span: 'tall',
    href: 'https://sett.24w.in',
  },
  // 05 — mySETT.LOG — DM Sans wordmark (lowercase load-bearing).
  {
    n: '05',
    category: 'project',
    title: 'mySETT.LOG',
    description: 'Behavioral tracker — movement journaling, lunar staging, analytics.',
    status: 'real',
  },
  // 06 — the Personal-OS / Obsidian PARA system.
  {
    n: '06',
    category: 'tool',
    title: 'Personal OS',
    description: 'The Obsidian + PARA second brain. Known → Knowledge, do → Action.',
    status: 'real',
  },
  // 07 — Claude Code — the no-coder's force multiplier.
  {
    n: '07',
    category: 'tool',
    title: 'Claude Code',
    description: 'The build layer. How a no-coder ships real systems.',
    status: 'real',
  },
  // 08 — The Fibonacci Fractal method.
  {
    n: '08',
    category: 'concept',
    title: 'Fibonacci Fractal',
    description: 'Each stage built from the two before it. Works alone and as the whole.',
    status: 'real',
    span: 'wide',
  },
  // 09 — Detroit / MI — identity place.
  {
    n: '09',
    category: 'place',
    title: 'Detroit',
    description: 'Home as identity. Where the work is grounded.',
    status: 'real',
  },
  // 10 — notes.24w.in — public writing (greenfield, but a named entryway).
  {
    n: '10',
    category: 'project',
    title: 'notes.24w.in',
    description: 'The public writing surface. Voice defined; corpus is net-new.',
    status: 'placeholder',
  },
  // 11 — app.24w.in — interactive app (purpose pending Tony, Gate-1 #4).
  {
    n: '11',
    category: 'tool',
    title: 'app.24w.in',
    description: 'The interactive app. Purpose pending — auth shell only for now.',
    status: 'placeholder',
  },
  // 12 — SEMISTRY — venture from the inventory's venture list.
  {
    n: '12',
    category: 'project',
    title: 'SEMISTRY',
    description: 'A venture in the field. Card copy to be authored.',
    status: 'placeholder',
  },
  // 13 — a reserved/private slot (the system permits withheld entries).
  {
    n: '13',
    category: 'concept',
    title: 'Reserved',
    description: 'An intentionally private way in. Not every door is public.',
    status: 'private',
  },
  // 14–24 — placeholders for Tony's curation.
  {
    n: '14',
    category: 'person',
    title: 'A person',
    description: 'A collaborator / crew member. To be named.',
    status: 'placeholder',
  },
  {
    n: '15',
    category: 'tool',
    title: 'A tool',
    description: 'Part of the stack. To be named.',
    status: 'placeholder',
    span: 'tall',
  },
  {
    n: '16',
    category: 'project',
    title: 'A project',
    description: 'A venture or build. To be named.',
    status: 'placeholder',
  },
  {
    n: '17',
    category: 'concept',
    title: 'An idea',
    description: 'A framework or principle. To be named.',
    status: 'placeholder',
  },
  {
    n: '18',
    category: 'place',
    title: 'A place',
    description: 'A location that matters. To be named.',
    status: 'placeholder',
  },
  {
    n: '19',
    category: 'project',
    title: 'A project',
    description: 'To be named.',
    status: 'placeholder',
    span: 'wide',
  },
  {
    n: '20',
    category: 'concept',
    title: 'Reserved',
    description: 'A private way in.',
    status: 'private',
  },
  {
    n: '21',
    category: 'tool',
    title: 'A tool',
    description: 'To be named.',
    status: 'placeholder',
  },
  {
    n: '22',
    category: 'person',
    title: 'A person',
    description: 'To be named.',
    status: 'placeholder',
  },
  {
    n: '23',
    category: 'concept',
    title: 'An idea',
    description: 'To be named.',
    status: 'placeholder',
  },
  {
    n: '24',
    category: 'concept',
    title: 'The 24th way',
    description: 'The last door. Closes the system at twenty-four.',
    status: 'real',
    span: 'wide',
  },
];
