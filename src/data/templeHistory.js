// Archival historical records translated from the Shahjahanabad manuscript.
// Keyed by the same slug used in temples.js — the detail page does a lookup by slug.
// Only temples with manuscript coverage have entries here; missing = no history section shown.

export const templeHistoryMap = {

  'lal-mandir': {
    name: 'Shri Digambar Jain Lal Mandir Ji',
    alternateNames: ['Lashkari Mandir', 'Urdu Mandir'],
    locality: 'Opposite Red Fort, Chandni Chowk',
    city: 'Delhi-6',
    eraEstablished: '1656 CE (Reign of Mughal Emperor Shah Jahan)',
    consecrationDate: 'Original central idols 1491 CE (VS 1548); Reconstructed 1878 CE',
    prominentFigures: [
      'Ramchand (devout Jain soldier)',
      'Emperor Aurangzeb',
      'Lala Parasdas (1878 CE patron)',
      'Acharya Shantisagar Ji Maharaj',
      'Gordon Sanderson (British historian)',
    ],
    moolnayakDeity: 'Shri 1008 Bhagwan Parshvanatha — Manokamna Purna (Wish-Fulfilling)',
    architecturalHighlights: [
      'Monumental red Kota stone exterior built opposite the Red Fort',
      'Inner vaults and spires adorned with hand-painted pure gold leaf murals',
      'Officially designated protected heritage monument by the Archaeological Survey of India (ASI)',
      'Dedicated sanctum for Goddess Padmavati alongside the principal altar',
    ],
    historicalEvents: [
      {
        title: 'Origins as Lashkari Mandir (1656 CE)',
        period: '1656 CE',
        description:
          "Founded by Ramchand, a devout Jain soldier in the imperial Mughal army camp (Lashkar). He discovered an ancient idol of the 23rd Tirthankara, Bhagwan Parshvanatha, installed it in his camp quarters, and began daily worship. Fellow soldiers and local citizens joined; the sanctuary became celebrated as 'Lashkari Mandir' (Soldiers' Temple). The adjacent military bazaar gave it another name: 'Urdu Mandir.'",
      },
      {
        title: "Aurangzeb's Farman & The Drum Miracle (1658 CE)",
        period: '1658 CE',
        description:
          "After seizing power, Aurangzeb issued an imperial decree banning the ceremonial kettle-drum (Naggada) during evening Aarti. By divine intervention, the drum continued beating automatically on schedule without any human contact. Aurangzeb visited incognito, witnessed the miracle, revoked his ban, and granted imperial protection for unobstructed daily worship. British historian Gordon Sanderson corroborated this account in 'The List of Muhammadan and Hindu Monuments.'",
      },
      {
        title: 'Historic Consecration of the Central Idols (1491 CE)',
        period: '1491 CE (VS 1548)',
        description:
          'The three sacred statues at the central altar were originally consecrated in 1491 CE (Vikram Samvat 1548) — predating the temple walls by 165 years. This date was independently corroborated by British historian Gordon Sanderson.',
      },
      {
        title: 'Grand Reconstruction by Lala Parasdas (1878 CE)',
        period: '1878 CE',
        description:
          'Until the 18th century the complex remained modest, housing a single altar. Lala Parasdas funded an extensive 8 lakh rupee restoration, transforming the single-altar shrine into the monumental red sandstone complex seen today opposite the Red Fort.',
      },
      {
        title: 'ASI Heritage Recognition & Multan Idols',
        period: 'Post-1947',
        description:
          'The Archaeological Survey of India designated the monument an official protected heritage structure. Following the 1947 partition, sacred Tirthankara idols were safely transported from Multan (now Pakistan) and consecrated in dedicated new altars here.',
      },
    ],
    uniqueFeatures: [
      "Houses Delhi's renowned Charity Birds Hospital (Pakshi Aspatal) — free veterinary surgery, treatment, and sanctuary for injured birds",
      'Welcomed Acharya Shantisagar Ji Maharaj during his historic arrival in North India — a revered centre for monk gatherings and Chaturmas',
      'Manuscript source: Pages 1 & 3 of the Shahjahanabad archival record',
    ],
  },

  'naya-mandir': {
    name: 'Shri Digambar Jain Naya Mandir Ji',
    alternateNames: ['New Temple Dharampura', "Delhi's First Shikhara Temple"],
    locality: 'Dharampura, Chandni Chowk',
    city: 'Delhi-6',
    eraEstablished: '1807 CE',
    prominentFigures: [
      'Lala Harsukh Rai Ji (Royal Treasurer — builder of 53 Jain temples)',
      'Pandit Daulatram Ji (Author of Chhahdhala)',
    ],
    moolnayakDeity: 'Shri 1008 Adinath Bhagwan — White Marble in Samavasarana Pavilion',
    architecturalHighlights: [
      'Exquisite floral and avian pietra-dura semi-precious stone inlay — individual micro-feather textures sculpted directly into stone, comparable to the Taj Mahal',
      'Central 48-fluted Shikhara inscribed with Acharya Manatunga\'s Bhaktamar Stotra verses in pure gold ink — Delhi\'s first formal temple spire under Mughal rule',
      'Vault ceiling murals rendered in natural organic vegetable pigments and plant-juice extracts',
      'Outer doorways framed in solid silver engraved with the Namokar Mantra and the 24 Tirthankaras',
      'No electric lighting in the sanctum — all rituals conducted solely under natural daylight (Shuddha Terapanth tradition)',
    ],
    historicalEvents: [
      {
        title: 'Construction by Lala Harsukh Rai Ji (1807 CE)',
        period: '1807 CE',
        description:
          "Erected at an immense cost of 8 lakh rupees when daily wages were only 4 annas for masons. To keep the endeavour free from personal pride, Lala Harsukh Rai invited ordinary devotees to contribute small coins and gold pieces, uniting the entire community.",
      },
      {
        title: "Delhi's First Raised Spire (Shikhara)",
        period: '1807 CE',
        description:
          "Following Lal Mandir — which bore no exterior spire during Mughal rule — Naya Mandir became the first Jain shrine in Delhi built with a formal raised Shikhara, earning the name 'Naya Mandir' (New Temple).",
      },
      {
        title: 'Samadhi Marana of Pandit Daulatram Ji',
        description:
          'The revered philosopher, scholar, and poet who authored Chhahdhala attained his final ascetic demise (Samadhi Marana) at this sanctum — one of the most distinguished spiritual events in Old Delhi Jain history.',
      },
      {
        title: 'Hastinapur Idol Relocation',
        description:
          'The prominent idol of Shri 1008 Shantinath Bhagwan currently venerated at the great pilgrimage centre of Hastinapur was originally relocated from Naya Mandir.',
      },
      {
        title: 'Bicentennial Vidhan Milestone (December 2024)',
        period: 'December 2024',
        description:
          'The temple community completed its 200th consecutive monthly Vidhan ritual — a testament to unbroken liturgical continuity spanning two centuries.',
      },
    ],
    uniqueFeatures: [
      'Shastra Bhandar: ~1,800 ancient manuscripts in Prakrit and Apabhramsha, including rare texts inscribed in gold ink',
      'Annual ceremonial gemstone Abhisheka held exclusively on Anant Chaturdashi',
      'Consecrated under the strict Digambar Shuddha Terapanth Aamnaya tradition',
      'Manuscript source: Pages 13 & selected pages of the Shahjahanabad archival record',
    ],
  },

  'kucha-seth-bada-mandir': {
    name: 'Shri Digambar Jain Bada Mandir Ji',
    alternateNames: ['Kucha Seth Bada Mandir'],
    locality: 'Kucha Seth, Dariba Kalan',
    city: 'Delhi-6',
    eraEstablished: '1828–1834 CE',
    consecrationDate: '1834 CE',
    prominentFigures: [
      'Lala Saligram (Imperial Treasurer / Khazanchi, 1825 CE)',
      'Nagar Seth Lala Gulab Rai (founding lineage)',
      'Lala Ishwari Prasad (builder)',
      'Raja Shagun Chand (the challenger)',
    ],
    moolnayakDeity: 'Shri 1008 Adinath Bhagwan — Rare Kasauti (Touchstone) Stone',
    architecturalHighlights: [
      "Moolnayak sculpted from pure Kasauti (touchstone) — one of only three such icons in all of India; the mineral is exceptionally hard and requires extraordinary skill to carve",
      'Vault ceilings decorated with gold-embossed murals depicting the Panch Kalyanaks and biographies of celebrated Digambar ascetics',
      '270 consecrated idols across five extensive altars — collections exceeding many stand-alone temples',
    ],
    historicalEvents: [
      {
        title: "The Lineage of Royal Treasurers",
        description:
          "The temple's founding family traces back to Nagar Seth Lala Gulab Rai. His sixth-generation descendant, Lala Saligram, managed Mughal-British transition finances and was appointed Imperial Treasurer (Khazanchi) in 1825. By 1877 he served as official government treasurer for Delhi, Gurgaon, and Karnal, honoured at the Delhi Durbar as Honorary Magistrate. His street is still called 'Khazanchi Wali Gali.'",
      },
      {
        title: 'The Incident at Naya Mandir & Ishwari Prasad\'s Vow (1828 CE)',
        period: '1828 CE',
        description:
          "Lala Saligram's son, Lala Ishwari Prasad, routinely performed the morning ceremonial bath (Prakshal) with Raja Shagun Chand at Naya Mandir. One morning Ishwari Prasad arrived late; the Raja had finished. When Ishwari Prasad objected, Raja Shagun Chand challenged: 'The worship of God cannot be delayed for any person. If this offends you, why do you not build your own temple?' Taking this as a personal vow, Ishwari Prasad resolved to build an architectural counterpart.",
      },
      {
        title: 'Construction & Consecration (1828–1834 CE)',
        period: '1828–1834 CE',
        description:
          "Foundation work began in 1828 in Kucha Seth — the historic cul-de-sac of jewellers in Dariba Kalan, populated by wealthy Jain merchant families since the reign of Shah Jahan. After six years of labour, the temple was consecrated in 1834 as 'Bada Mandir.'",
      },
    ],
    uniqueFeatures: [
      '2,000-year-old Parshvanatha statue with Panchbalyati figures; a 700-year-old Tirthankara statue',
      "Standing (Khadgasana) Bhagwan Shreyansanatha idol — recovered from an ancient orchard well before consecration",
      'Historic intellectual seat (Gaddi) for scholastic philosophical debate and textual analysis across North India',
      'Manuscript source: Pages 4 & 5 of the Shahjahanabad archival record',
    ],
  },

  'kucha-seth-chhota-mandir': {
    name: 'Shri Digambar Jain Chhota Mandir Ji',
    alternateNames: ['Kucha Seth Chhota Mandir'],
    locality: 'Kucha Seth, Dariba Kalan',
    city: 'Delhi-6',
    eraEstablished: '1840–1846 CE',
    prominentFigures: [
      'Indraj (jeweller\'s employee & devotee)',
      'Lala Ishwari Prasad (co-patron)',
      'Gordon Sanderson (British historian — documented the rescue)',
    ],
    moolnayakDeity: 'Shri 1008 Chandraprabhu Bhagwan — 8th Tirthankara',
    architecturalHighlights: [
      'Erected directly opposite Bada Mandir on residential land donated by Indraj — built without prior planning, inspired entirely by devotion',
      'Six altars: the miraculous Chandraprabhu idol, five altars of ancient stone and metallic figures, and a shrine to Goddess Padmavati',
    ],
    historicalEvents: [
      {
        title: 'The Dream of Indraj & The Afghan Merchant',
        period: '~1840 CE',
        description:
          "An Afghan merchant arrived in Dariba Kalan attempting to sell a confiscated ancient Jain idol. Negotiations failed for two days. That night, Bhagwan Chandraprabhu appeared in Indraj's dream — bound in ropes, imploring rescue. The next morning, Indraj liquidated his savings, mortgaged his family ornaments, and sold the lease rights to his jeweller's shop to raise 500 rupees. He purchased the statue and presented it — along with his own home as the building site — to the Jain community.",
      },
      {
        title: 'British Historical Documentation',
        description:
          "This act of devotion was recorded by British architectural historian Gordon Sanderson in his official government documentation — making it one of the few Old Delhi temple origin stories with independent colonial-era corroboration.",
      },
      {
        title: 'Construction & Dedication (1840–1846 CE)',
        period: '1840–1846 CE',
        description:
          "Construction began in 1840, supported by Lala Ishwari Prasad. Six years later the temple was dedicated as 'Chhota Mandir' — situated directly opposite Bada Mandir in Kucha Seth.",
      },
    ],
    uniqueFeatures: [
      'Built without prior planning — an entirely spontaneous act of faith and sacrifice',
      'One of the few Old Delhi temples whose miraculous origin is corroborated by British archival records',
      'Manuscript source: Page 6 of the Shahjahanabad archival record',
    ],
  },

  'panchayati-mandir': {
    name: 'Panchayati Mandir Ji',
    alternateNames: ['Old Delhi Panchayati Jain Mandir'],
    locality: 'Kinari Bazaar, Old Delhi',
    city: 'Delhi-6',
    eraEstablished: 'Historical Shahjahanabad',
    prominentFigures: [
      'Local Old Delhi Jain Panchayat (custodians)',
      'Multan Refugee Community (1947)',
    ],
    moolnayakDeity: 'Shri 1008 Munisuvrata Nath & Shri 1008 Neminath Bhagwan',
    architecturalHighlights: [
      'Navgrah Tirthankar Vedi — a dedicated altar for the Nine Planetary Tirthankaras with nine planetary idols for astrological peace (Grah Shanti)',
      'Sandstone Parshvanatha icon enthroned upon an intricate multi-coiled serpent',
      'Rare idol seated on a closed Kamandalu-shaped lotus pedestal',
      'Ground-floor shrine dedicated to Kshetrapal Baba featuring detailed gold-leaf artwork',
    ],
    historicalEvents: [
      {
        title: 'Partition Sanctuary — Multan Evacuation (1947)',
        period: '1947',
        description:
          'Served as the primary sacred repository for ancient Tirthankara icons evacuated from Multan (now Pakistan) during the 1947 Partition of India — preserving relics that would otherwise have been lost forever.',
      },
      {
        title: '12-Year Bahubali Mahamastakabhisheka Tradition',
        description:
          'Observes the sacred grand Panchamrit bathing ritual of Bhagwan Bahubali once every 12 years — mirroring the great Shravanabelagola ceremony in miniature.',
      },
      {
        title: 'Rare Iconographic Emblems (Chinha Parivartan)',
        description:
          'Houses rare idols documenting historical modifications to sectarian iconographic emblems (Chinha Parivartan) — an invaluable visual record of intra-Jain sectarian history.',
      },
    ],
    uniqueFeatures: [
      "Rare depiction of Goddess Padmavati seated on a swan — 'Hansvahini Ma Padmavati' — an iconographic form found in very few temples nationally",
      'Manuscript source: Page 11 of the Shahjahanabad archival record',
    ],
  },

};

// Convenience lookup — returns null if no history exists for a given temple slug
export function getTempleHistory(slug) {
  return templeHistoryMap[slug] ?? null;
}
