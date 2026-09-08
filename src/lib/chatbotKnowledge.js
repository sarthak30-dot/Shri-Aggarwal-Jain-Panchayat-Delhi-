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
