// Generates the chatbot's factual knowledge from the site's own content
// files (temples, dharamshalas, schools, library) — the same data that
// drives the actual pages. This is the fix for knowledge drift: previously
// ChatWidget.jsx carried a hand-typed copy of "the 14 temples" that quietly
// went stale the moment temples.js was rewritten to the current, real
// 12-temple set. There is now exactly one place temple history lives.

import { temples } from '../data/temples';
import { dharamshalaPlaces } from '../data/dharamshala';
import { schools } from '../data/schools';
import { library } from '../data/library';

function formatTemple(t, i) {
  const lines = [
    `${i + 1}. ${t.name.toUpperCase()}`,
    `Location: ${t.location}`,
    `Established: ${t.established}`,
  ];
  if (t.moolnayak) lines.push(`Main deity (Moolnayak): ${t.moolnayak}`);
  if (t.tagline) lines.push(`In one line: ${t.tagline}`);
  lines.push(`History: ${t.desc}`);
  if (t.highlights?.length) lines.push(`Highlights: ${t.highlights.join('; ')}`);
  return lines.join('\n');
}

export function buildTempleKnowledge() {
  return temples.map(formatTemple).join('\n\n');
}

function formatDharamshala(d) {
  return [
    `${d.name} (${d.nameHindi})`,
    `Location: ${d.location}`,
    d.desc,
    `Facilities: ${d.facilities.join(', ')}`,
    `Booking: ${d.contact}`,
  ].join('\n');
}

export function buildDharamshalaKnowledge() {
  return dharamshalaPlaces.map(formatDharamshala).join('\n\n');
}

function formatSchool(s) {
  return [
    `${s.name} (${s.nameHindi}) — ${s.type}`,
    `Established: ${s.established}`,
    `Location: ${s.location}`,
    s.desc,
    `Programmes: ${s.programmes.join(', ')}`,
    `Students: ${s.students}`,
    `Admission: ${s.admission}`,
  ].join('\n');
}

export function buildSchoolsKnowledge() {
  return schools.map(formatSchool).join('\n\n');
}

export function buildLibraryKnowledge() {
  return [
    `${library.name} (${library.nameHindi})`,
    `Location: ${library.location}`,
    library.desc,
    `Facilities: ${library.facilities.join(', ')}`,
    library.contact,
  ].join('\n');
}

export const templeCount = temples.length;

// Shared short labels — used by the trail map's compact chips and by the
// chatbot's reply-linkifier. One place, so a temple never reads differently
// in two spots on the site.
export const TEMPLE_SHORT_NAME = {
  'mori-gate-mandir': 'Mori Gate Mandir',
  'lal-mandir': 'Lal Mandir',
  'kucha-seth-bada-mandir': 'Bada Mandir',
  'kucha-seth-chhota-mandir': 'Chhota Mandir',
  'naya-mandir': 'Naya Mandir',
  'panchayati-mandir': 'Panchayati Mandir',
  'meru-jain-mandir': 'Meru Mandir',
  'sitaram-bazaar-mandir': 'Sitaram Bazaar Mandir',
  'delhi-gate-mandir': 'Delhi Gate Mandir',
  'raja-bazaar-mandir': 'Raja Bazaar Mandir',
  'sabzi-mandi-baraf-khana-mandir': 'Sabzi Mandi Mandir',
  'patparganj-mandir': 'Patparganj Mandir',
};

// Every text form (full formal name + short alias) that should turn into a
// link to that temple's page when it appears in a chatbot reply. Sorted
// longest-first so "Chhota Mandir, Kucha Seth" wins over the shorter
// "Chhota Mandir" when both would otherwise match the same text.
//
// Also adds a "Shri"-spelled variant of every full name: temples.js spells
// it "Shree" throughout, but "Shri" is the more common English
// transliteration — the model reaches for it naturally and unpredictably,
// so both need to resolve to the same link rather than only the one the
// source data happens to use.
export const templeLinkEntries = temples
  .flatMap((t) => {
    const forms = new Set([t.name]);
    if (t.name.startsWith('Shree ')) forms.add(t.name.replace(/^Shree /, 'Shri '));
    if (TEMPLE_SHORT_NAME[t.slug]) forms.add(TEMPLE_SHORT_NAME[t.slug]);
    return Array.from(forms).map((text) => ({ text, slug: t.slug }));
  })
  .sort((a, b) => b.text.length - a.text.length);
