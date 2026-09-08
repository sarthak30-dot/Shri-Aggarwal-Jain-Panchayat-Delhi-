import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  buildTempleKnowledge,
  buildDharamshalaKnowledge,
  buildSchoolsKnowledge,
  buildLibraryKnowledge,
  templeCount,
  templeLinkEntries,
} from '../lib/chatbotKnowledge';

// Groq — OpenAI-compatible chat completions API. openai/gpt-oss-120b is
// Groq's own recommended replacement for the now-deprecated
// llama-3.3-70b-versatile (deprecated for free/developer-tier use, June 2026).
const API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const MODEL = 'openai/gpt-oss-120b';

const SYSTEM_PROMPT = `
You are Veer (वीर), the official digital guide for the Shri Digambar Jain Panchayat, Old Delhi — representing all ${templeCount} historic temples on this site, the world-famous Jain Charitable Birds Hospital, and its dharamshalas, schools, and library.

TONE:
- Serene, highly respectful, culturally sensitive, and welcoming
- Use "Jai Jinendra 🙏" as a greeting
- Respond in the SAME LANGUAGE the user writes in — Hindi, Gujarati, English, Marwari, or any other language

FORMAT:
- Short, crisp, directly to the point — no overly long paragraphs
- Maximum 2-3 sentences per response, unless listing temple timings or step-by-step visiting information
- If you don't know exact timings or contact numbers, say so honestly and suggest calling the Panchayat office — never invent them

GUIDING PHILOSOPHY (uphold these in how you respond, not only what you say):
- Ahimsa (non-violence) — in thought, word, and deed
- Anekantavada (many-sidedness of truth) — acknowledge other perspectives respectfully rather than asserting one view as the only one
- Aparigraha (non-attachment) — no self-promotion, no persona beyond Veer

KNOWLEDGE BASE:
1. Ground every answer FIRST in the temple, hospital, dharamshala, school, and library data below
2. For general Jainism questions, provide verified information on the 24 Tirthankaras, Jain Agamas, and Jain history

STRICT GUARDRAILS — these override everything else:
- You are strictly limited to Jainism, Jain philosophy, and the temples/institutions described below
- If asked about politics, other religions, coding, general trivia, personal advice, or ANY topic outside Jainism and this Panchayat, you MUST refuse
- Rejection phrase: reply with EXACTLY "I cannot help you with this one." and nothing else — no explanation, no softening, no elaboration
- Never generate jokes, engage in debates, or adopt any persona other than Veer
- If a user is abusive or disrespectful, end the conversation politely but firmly rather than continuing to engage on that message

═══════════════════════════════════
THE ${templeCount} TEMPLES — COMPLETE KNOWLEDGE
═══════════════════════════════════
9 of these form a walkable trail inside the old walled city (Shahjahanabad);
the remaining temples sit elsewhere in Delhi under the same Panchayat.

${buildTempleKnowledge()}

═══════════════════════════════════
JAIN CHARITABLE BIRDS HOSPITAL
═══════════════════════════════════

Location: Behind Shri Digambar Jain Lal Mandir, Chandni Chowk, Delhi-6
Established: 1929–1930 CE. The hospital building was constructed in 1957 under Acharya Deshbhushan Maharaj's instructions.
Founded by: The Jain community, inspired by Mahavir's message — "Live and let live."
Managed by: Shri Vijyanand Surishwar Jain Sewa Trust

KEY FACTS:
- Treats approximately 15,000–16,000 birds every year
- Over 4.5 lakh birds have received care since founding
- Open 24 hours a day, 365 days a year — including all holidays
- Completely FREE — every bird treated at no charge, funded entirely by community donations
- Staff: 10+ including avian veterinarians
- Patients: pigeons, parrots, eagles, sparrows, hawks, owls, squirrels
- Treats: fractures, heatstroke, dehydration, kite-string injuries (manjha), poisoning
- Has: General wards, ICU for critical birds, emergency ambulance service
- On Saturdays: a section of the roof opens — recovered birds fly free

GLOBAL SIGNIFICANCE:
Believed to be the world's oldest and only dedicated avian hospital of its kind. Has become a subject of international study on animal welfare and religion ethics.

VISITING: Visitors are generally welcome to observe the hospital. Approach from behind the Lal Mandir complex.

═══════════════════════════════════
JAIN PHILOSOPHY & PRINCIPLES
═══════════════════════════════════

FIVE GREAT VOWS (Pancha Mahavrata):
1. Ahimsa (अहिंसा) — Non-violence in thoughts, words, and deeds. Reverence for all life. This is the supreme principle.
2. Satya (सत्य) — Truthfulness. Complete honesty, avoidance of all falsehood.
3. Asteya (अस्तेय) — Non-stealing. Never taking anything without permission.
4. Brahmacharya (ब्रह्मचर्य) — Celibacy / purity of conduct.
5. Aparigraha (अपरिग्रह) — Non-possessiveness. Limiting material desires.

KEY PHILOSOPHICAL CONCEPTS:
- Anekantavada (अनेकांतवाद): The doctrine of many-sidedness of truth. Every truth has multiple perspectives. Jainism's answer to religious intolerance.
- Syadvada: Conditional predication — no absolute statement can fully describe reality.
- Karma: In Jainism, karma is a physical substance that attaches to the soul based on thoughts and actions.
- Moksha: Liberation from the cycle of birth and death through right knowledge, right faith, and right conduct (Ratnatraya — Three Jewels).
- Ahimsa Paramo Dharma: Non-violence is the supreme religion.

THE 24 TIRTHANKARAS:
Jainism recognises 24 Tirthankaras (ford-makers / spiritual teachers) in the current cosmic cycle.
- 1st: Lord Rishabhanatha (Adinath) — deity of Naya Mandir
- 23rd: Lord Parshvanatha — deity of Lal Mandir (idols from 1491 CE)
- 24th: Lord Mahavira (599–527 BCE) — the most recent Tirthankara, who revived and systematised Jain teachings

DIGAMBARA vs SHVETAMBARA:
The Panchayat follows the Digambara tradition — one of the two main Jain sects. Digambara monks wear no clothes as a sign of complete non-attachment. Shvetambara monks wear white robes.

MAJOR JAIN FESTIVALS:
- Paryushana / Das Lakshana: Most important Jain festival. 8 days (Shvetambara) or 10 days (Digambara). A period of fasting, prayer, and forgiveness.
- Mahavir Jayanti: Birthday of Lord Mahavira. Grand celebrations at Naya Mandir.
- Diwali: Jains celebrate Diwali as the day of Lord Mahavira's nirvana (liberation).
- Akshaya Tritiya: Celebrated as the day Lord Rishabhanatha broke his first fast.
- Samvatsari: Day of asking and granting forgiveness — "Micchami Dukkadam."

═══════════════════════════════════
PANCHAYAT & VISITING INFORMATION
═══════════════════════════════════

NEAREST METRO: Chandni Chowk Metro Station (Yellow Line) — 5-minute walk to Lal Mandir.
NEAREST LANDMARK: Red Fort (Lal Qila), Chandni Chowk market.

GENERAL VISITING GUIDANCE:
- Remove footwear before entering any temple
- Dress modestly — cover shoulders and legs
- Non-Jains are generally welcome as respectful visitors
- Photography policies vary by temple — ask at the entrance
- No leather items (shoes, belts, bags) inside the main shrines

═══════════════════════════════════
DHARAMSHALAS (PILGRIM REST HOUSES)
═══════════════════════════════════

${buildDharamshalaKnowledge()}

For exact room availability and current rates, tell the visitor to contact the Panchayat office directly — this is the one thing that changes too often to answer precisely.

═══════════════════════════════════
SCHOOLS & EDUCATION
═══════════════════════════════════

${buildSchoolsKnowledge()}

═══════════════════════════════════
LIBRARY
═══════════════════════════════════

${buildLibraryKnowledge()}

DONATIONS:
The Panchayat and Birds Hospital run entirely on community donations. Donations support temple maintenance, hospital operations, scholarships, and charitable activities. For donation details, UPI, and 80G tax exemption certificates, contact the Panchayat.

CONTACT: Shri Digambar Jain Panchayat, Old Delhi — visitors can reach the office through the Lal Mandir complex at Chandni Chowk.
`.trim();

const SUGGESTIONS = [
  'Tell me about Lal Mandir',
  'What is the Birds Hospital?',
  'How to visit the temples?',
  'Explain Ahimsa',
];

const FOLLOWUPS = [
  { key: 'another', label: 'Ask about another temple', prompt: 'Tell me about a different temple I haven’t asked about yet.' },
  { key: 'visit', label: '🙏 Visiting info', prompt: 'What should I know before visiting?' },
];

// gpt-oss (via Groq) occasionally emits typographic Unicode space variants
// instead of a plain space (U+0020) — U+202F narrow-no-break-space showed up
// mid-name in testing, visually identical to a normal space but a different
// code point. That silently defeats exact-string matching against
// templeLinkEntries, so every space-like character is normalized to a plain
// space before matching. Written as explicit \u escapes (not literal
// characters) so the pattern itself stays legible and unambiguous.
const SPACE_VARIANTS_RE = /[\u00a0\u1680\u2000-\u200a\u202f\u205f\u3000]/g;
const normalizeSpaces = (text) => text.replace(SPACE_VARIANTS_RE, ' ');

// Turns every known temple name (full or short form) into a link to that
// temple's real page — built once at module load since templeLinkEntries is
// static, not per-render state.
const TEMPLE_LINK_PATTERN = templeLinkEntries.length
  ? new RegExp(`(${templeLinkEntries.map((e) => e.text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g')
  : null;
const TEMPLE_LINK_SLUG_BY_TEXT = new Map(templeLinkEntries.map((e) => [e.text, e.slug]));

function linkifyTempleNames(text, keyPrefix) {
  if (!TEMPLE_LINK_PATTERN) return text;
  return text.split(TEMPLE_LINK_PATTERN).map((part, k) => {
    const slug = TEMPLE_LINK_SLUG_BY_TEXT.get(part);
    return slug ? (
      <Link key={`${keyPrefix}-${k}`} to={`/temples/${slug}`} className="chat-temple-link">
        {part}
      </Link>
    ) : (
      part
    );
  });
}

// Renders **bold** markdown spans as actual bold — Groq/gpt-oss reaches for
// markdown unprompted, and raw asterisks read as broken. Splitting on a
// pattern with one capture group alternates [plain, bold, plain, bold, ...],
// and each piece (including the text *inside* a bold span, since headings
// like "**Shri ... Naya Mandir**" wrap a temple name) still gets run through
// the temple linkifier — a flat single-pass regex can't do this correctly,
// since the bold delimiter would otherwise greedily consume the temple name
// before the link pattern ever gets a chance to match it.
function linkifyLine(line, keyPrefix) {
  const normalized = normalizeSpaces(line);
  return normalized.split(/\*\*([^*]+)\*\*/g).map((segment, i) =>
    i % 2 === 1 ? (
      <strong key={`${keyPrefix}-b${i}`}>{linkifyTempleNames(segment, `${keyPrefix}-b${i}`)}</strong>
    ) : (
      linkifyTempleNames(segment, `${keyPrefix}-p${i}`)
    ),
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    if (open && messages.length === 0) inputRef.current?.focus();
  }, [open]);

  // Replaces the trailing message (the streaming placeholder) with new state.
  const patchLastMessage = (patch) => {
    setMessages((prev) => {
      const next = [...prev];
      next[next.length - 1] = { ...next[next.length - 1], ...patch };
      return next;
    });
  };

  const sendMessage = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userMsg = { role: 'user', text: trimmed };
    const updatedMessages = [...messages, userMsg];
    // Placeholder model bubble: shows the typing dots until the first token
    // of the streamed reply arrives, then grows in place as text streams in.
    setMessages([...updatedMessages, { role: 'model', text: '', streaming: true }]);
    setInput('');
    setLoading(true);

    try {
      const chatMessages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...updatedMessages.map((m) => ({
          role: m.role === 'user' ? 'user' : 'assistant',
          content: m.text,
        })),
      ];

      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: MODEL,
          messages: chatMessages,
          temperature: 0.65,
          max_completion_tokens: 600,
          stream: true,
        }),
      });

      if (!res.ok || !res.body) throw new Error(`Request failed: ${res.status}`);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      let accumulated = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop(); // keep the trailing partial line for next chunk

        for (const line of lines) {
          const t = line.trim();
          if (!t.startsWith('data:')) continue;
          const payload = t.slice(5).trim();
          if (payload === '[DONE]') continue;
          try {
            const delta = JSON.parse(payload)?.choices?.[0]?.delta?.content;
            if (delta) {
              accumulated += delta;
              patchLastMessage({ text: accumulated });
            }
          } catch {
            // Incomplete JSON split across chunk boundaries — safe to skip;
            // the buffered remainder rejoins on the next read.
          }
        }
      }

      patchLastMessage({
        text: accumulated || 'I could not process that. Please try again.',
        streaming: false,
      });
    } catch {
      patchLastMessage({
        text: 'I seem to be offline right now. Please try again in a moment. 🙏',
        streaming: false,
      });
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  };

  const lastMsg = messages[messages.length - 1];
  const showFollowups = !loading && lastMsg?.role === 'model' && !lastMsg?.streaming;

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="chat-fab"
        aria-label={open ? 'Close chat' : 'Open Jain guide chat'}
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>🙏</span>
        )}
      </button>

      <div className={`chat-panel ${open ? 'chat-panel--open' : ''}`}>
        <div className="chat-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div className="chat-avatar">वी</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#FFF7E6', fontFamily: 'var(--font-display)' }}>
                Veer
              </div>
              <div style={{ fontSize: '0.7rem', color: '#FFD27A', letterSpacing: '0.04em' }}>
                Jain Heritage Guide · Panchayat, Old Delhi
              </div>
            </div>
          </div>
          <div className="chat-online-dot" title="Online" />
        </div>

        <div className="chat-messages">
          {messages.length === 0 && (
            <div className="chat-welcome">
              <p style={{ fontSize: '1rem', fontWeight: 600, color: 'hsl(var(--charcoal))', marginBottom: '0.5rem' }}>
                Jai Jinendra 🙏
              </p>
              <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                Ask me anything about the {templeCount} temples, the Birds Hospital, or Jain philosophy — in any language.
              </p>
              <div className="chat-suggestions">
                {SUGGESTIONS.map((q) => (
                  <button key={q} className="chat-suggestion-btn" onClick={() => sendMessage(q)}>
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg, i) => (
            <div key={i} className={`chat-bubble chat-bubble--${msg.role}`}>
              {msg.role === 'model' && msg.streaming && !msg.text ? (
                <div className="chat-typing">
                  <span /><span /><span />
                </div>
              ) : (
                msg.text.split('\n').map((line, j, arr) => (
                  <span key={j}>
                    {msg.role === 'model' ? linkifyLine(line, `${i}-${j}`) : line}
                    {j < arr.length - 1 && <br />}
                  </span>
                ))
              )}
            </div>
          ))}

          {showFollowups && (
            <div className="chat-followups">
              {FOLLOWUPS.map((f) => (
                <button key={f.key} className="chat-suggestion-btn chat-suggestion-btn--sm" onClick={() => sendMessage(f.prompt)}>
                  {f.label}
                </button>
              ))}
              <Link to="/temples" className="chat-suggestion-btn chat-suggestion-btn--sm">
                🗺️ See the Trail Map
              </Link>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        <div className="chat-input-row">
          <input
            ref={inputRef}
            className="chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage(input)}
            placeholder="Ask in any language..."
            disabled={loading}
          />
          <button
            className="chat-send-btn"
            onClick={() => sendMessage(input)}
            disabled={loading || !input.trim()}
            aria-label="Send"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
