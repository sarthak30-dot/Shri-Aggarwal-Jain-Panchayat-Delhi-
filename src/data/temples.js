import imgLalMandir           from '../assets/lal_mandir_real_web.jpg';
import imgLalMandirJhanki     from '../assets/lal_mandir_interior_real_web.jpg';
import imgChotaMandir         from '../assets/chota_mandir_real_web.jpg';
import imgBadaMandir          from '../assets/bada_mandir_real_web.jpg';
import imgNayaMandir          from '../assets/temple_naya_mandir_web.jpg';
import imgNayaMandir2         from '../assets/temple_naya_mandir_2_web.jpg';
import imgNayaMandir_carving  from '../assets/temple_naya_mandir_carving_web.jpg';
import imgNayaMandir_interior from '../assets/temple_naya_mandir_interior_web.jpg';

const galleryOf = (globResult) =>
  Object.keys(globResult).sort().map((key) => globResult[key]);

const lalMandirGallery  = galleryOf(import.meta.glob('../assets/gallery/lal-mandir/*.jpg', { eager: true, import: 'default' }));
const badaMandirGallery = galleryOf(import.meta.glob('../assets/gallery/bada-mandir/*.jpg', { eager: true, import: 'default' }));
const chotaMandirGallery = galleryOf(import.meta.glob('../assets/gallery/chota-mandir/*.jpg', { eager: true, import: 'default' }));

export const temples = [
  // ── 1 ──────────────────────────────────────────────────────────
  {
    slug: 'lal-mandir',
    name: 'Shree Digambar Jain Lal Mandir',
    established: '1656 CE',
    location: 'Chandni Chowk, opposite Red Fort',
    lat: 28.655778, lng: 77.236278, // exact — Wikipedia infobox, en.wikipedia.org/wiki/Sri_Digambar_Jain_Lal_Mandir
    tagline: "Delhi's oldest. History's witness.",
    desc: "Born from a soldier's tent in Shah Jahan's army, this 370-year-old red sandstone temple stands directly opposite the Red Fort — the only Jain sanctuary built at the gates of Mughal power. Its marble idols were installed in 1491 CE, predating the temple's walls by 165 years. The principal deity is Lord Parshvanatha, the 23rd Tirthankara.",
    highlights: ['Idols from 1491 CE — pre-date the walls', "Survived Aurangzeb's reign intact", 'Republic Day tableau landmark', 'Adjacent Charitable Birds Hospital (est. 1929)'],
    moolnayak: 'Lord Parshvanatha (23rd Tirthankara)',
    featured: true,
    image: '/temple-photos/lal-mandir-exterior.jpg',
    detailHeroImage: imgLalMandirJhanki,
    detailHeroPosition: 'center top',
    images: lalMandirGallery,
    videos: [
      { src: '/videos/lal-mandir-1.mp4', title: 'Lal Mandir — Darshan' },
      { src: '/videos/lal-mandir-2.mp4', title: 'Lal Mandir — Heritage Walk' },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────────
  {
    slug: 'mori-gate-mandir',
    name: 'Shree Digambar Jain Mandir, Mori Gate',
    established: 'Mughal era',
    location: 'Mori Gate, North Delhi',
    lat: 28.664203, lng: 77.223739, // locality-level — OSM "Mori Gate" neighbourhood centroid (no street address available)
    tagline: 'Guardian at the northern threshold.',
    desc: "Positioned near Mori Gate — one of Shahjahanabad's original defensive gates in the northern wall of the walled city — this temple served as the spiritual anchor for Jain families settled in the northern quarters. The gate itself, near the present-day ISBT Kashmere Gate area, was a vital artery of Mughal Delhi's commerce and defence.",
    highlights: ['Near an original Shahjahanabad gate', 'Northern-quarter community temple', 'Mughal-era establishment'],
    moolnayak: 'Lord Adinatha (1st Tirthankara)',
    featured: false,
    image: imgNayaMandir_interior,
    videos: [],
  },

  // ── 3 ──────────────────────────────────────────────────────────
  {
    slug: 'kucha-seth-chhota-mandir',
    name: 'Shree Digambar Jain Chhota Mandir, Kucha Seth',
    established: 'Mughal era',
    location: 'Kucha Seth, Dariba Kalan, Old Delhi',
    lat: 28.65370, lng: 77.23280, // on the real Kucha Seth lane (OSM-geocoded), offset from Bada Mandir — exact building not individually addressed
    tagline: 'Where merchants kept the flame alive.',
    desc: "Kucha Seth — 'Lane of the Banker' — is the oldest continuously inhabited merchant quarter of Shahjahanabad. This Chhota (smaller) Mandir served the Jain banking and trading families of Dariba Kalan, one of Asia's oldest silver jewellery markets. The lane's Jain residents were among the most influential financiers of the Mughal court.",
    highlights: ['In Asia\'s oldest silver market lane', 'Financed by Mughal-era Jain bankers', 'Chhota Mandir of the Seth community'],
    moolnayak: 'Lord Shantinatha (16th Tirthankara)',
    featured: false,
    image: imgChotaMandir,
    images: chotaMandirGallery,
    videos: [],
  },

  // ── 4 ──────────────────────────────────────────────────────────
  {
    slug: 'kucha-seth-bada-mandir',
    name: 'Shree Digambar Jain Bada Mandir, Kucha Seth',
    established: 'c. 1656 CE',
    location: 'Kucha Seth, Dariba Kalan, Old Delhi',
    lat: 28.65375, lng: 77.23330, // on the real Kucha Seth lane (OSM-geocoded: 28.6537,77.2330), offset from Chhota Mandir — exact building not individually addressed
    tagline: 'Where an 800-year silence ended.',
    desc: "The grand sanctuary of the Kucha Seth merchant community. This Bada (larger) Mandir was the neighbourhood shrine of the Jain traders who financed an empire. In 1931, Acharya Shantisagar — the first fully initiated Digambara monk in eight centuries — visited this temple, marking the end of a profound spiritual exile that had lasted since the medieval period.",
    highlights: ['First Digambara monk in 800 years visited (1931)', "Inside Asia's oldest jewellery market", 'Mughal-era foundation stones'],
    moolnayak: 'Lord Parshvanatha (23rd Tirthankara)',
    featured: true,
    image: imgBadaMandir,
    images: badaMandirGallery,
    videos: [],
  },

  // ── 5 ──────────────────────────────────────────────────────────
  {
    slug: 'naya-mandir',
    name: 'Shree Digambar Jain Naya Mandir',
    established: '1807 CE',
    location: 'Dharampura, Old Delhi',
    lat: 28.652778, lng: 77.231778, // exact — Wikipedia infobox, en.wikipedia.org/wiki/Naya_Mandir
    tagline: 'The temple that broke Mughal law.',
    desc: "Raja Harsukh Rai, imperial treasurer to Mughal Emperor Akbar II, spent ₹8 lakh and years lobbying the court for a single permission: to build a shikhara. He became the first in Delhi to erect a temple spire under Mughal rule. The temple's interior is among the best-preserved Mughal-era Jain interiors anywhere — intricate jali screens, carved marble pillars, and a 600-year-old illuminated manuscript kept inside.",
    highlights: ['First shikhara in Mughal Delhi', '1420 CE illuminated manuscript on site', 'Best-preserved Mughal-era Jain interior in Delhi'],
    moolnayak: 'Lord Adinatha (1st Tirthankara)',
    featured: true,
    image: '/temple-photos/naya-mandir-exterior.jpg',
    detailHeroImage: '/temple-photos/naya-mandir-exterior.jpg',
    detailHeroPosition: 'center center',
    videos: [],
  },

  // ── 6 ──────────────────────────────────────────────────────────
  {
    slug: 'panchayati-mandir',
    name: 'Shree Agrawal Digambar Jain Panchayati Mandir',
    established: 'Mughal era',
    location: 'Dharampura, Old Delhi',
    lat: 28.65330, lng: 77.23140, // in the real Dharampura lane cluster (OSM neighbourhood-geocoded, near Naya Mandir) — exact building not individually addressed
    tagline: 'The seat of the Panchayat.',
    desc: "Administrative and spiritual nerve centre of the Agrawal Digambar Jain Samaj Panchayat — the governing body that has protected and managed all 12 temples for centuries. Every festival, every restoration, every charitable act of the community flows from this courtyard. Listed by the National Monuments Authority of India.",
    highlights: ['Seat of Panchayat governance', 'Listed — National Monuments Authority of India', 'Commands all 12 temples & institutions'],
    moolnayak: 'Lord Mahavira (24th Tirthankara)',
    featured: false,
    image: imgNayaMandir2,
    videos: [],
  },

  // ── 7 ──────────────────────────────────────────────────────────
  {
    slug: 'meru-jain-mandir',
    name: 'Shree Digambar Jain Meru Mandir',
    established: 'Historical',
    location: 'Old Delhi',
    lat: 28.65280, lng: 77.23230, // in the real Dharampura lane cluster (OSM neighbourhood-geocoded, near Naya Mandir) — exact building not individually addressed
    tagline: 'Named for the cosmic mountain.',
    desc: "In Jain cosmology, Mount Meru is the axis of the universe — the mountain at the centre of all creation, around which the 14 realms revolve. A temple named Meru carries the weight of that cosmological significance. This mandir is one of the active Digambar Jain sanctuaries managed by the Agrawal Panchayat in Old Delhi.",
    highlights: ['Named after Jain cosmological Mount Meru', 'Active Digambar Jain sanctuary', 'Under Agrawal Panchayat management'],
    moolnayak: 'Lord Parshvanatha (23rd Tirthankara)',
    featured: false,
    image: imgNayaMandir_carving,
    videos: [],
  },

  // ── 8 ──────────────────────────────────────────────────────────
  {
    slug: 'sitaram-bazaar-mandir',
    name: 'Shree Digambar Jain Mandir, Sitaram Bazaar',
    established: 'Historical',
    location: 'Sitaram Bazaar, Old Delhi',
    lat: 28.646232, lng: 77.230442, // OSM-geocoded — "Sitaram Bazar Road" centreline
    tagline: 'A sanctuary in the spice quarter.',
    desc: "Sitaram Bazaar — a lane of Shahjahanabad dating to the 17th century, inhabited historically by merchants and traders — holds this Digambar Jain mandir that has served the local Jain community for generations. Tucked within the historic fabric of the walled city, it reflects how the Jain community was woven into every commercial quarter of Old Delhi.",
    highlights: ['17th-century Shahjahanabad commercial lane', 'Community worship for generations', 'Integrated into the walled city fabric'],
    moolnayak: 'Lord Mahavira (24th Tirthankara)',
    featured: false,
    image: imgNayaMandir_interior,
    videos: [],
  },

  // ── 9 ──────────────────────────────────────────────────────────
  {
    slug: 'raja-bazaar-mandir',
    name: 'Shree Agrawal Digambar Jain Mandir, Raja Bazaar',
    established: 'Historical',
    location: 'Raja Bazaar Road, Jaysinghpura, New Delhi — 110001',
    lat: 28.632126, lng: 77.213793, // OSM-geocoded — "Jain Mandir Marg," literally the lane named after this temple
    tagline: 'Where Old Delhi meets New Delhi in faith.',
    desc: "Located near Shivaji Stadium and Connaught Place, this Agrawal Digambar Jain Mandir sits in Jaysinghpura — historically named after Raja Jai Singh II of Jaipur, who was granted land here by the Mughals. The temple marks the extension of the Agrawal Jain community beyond the walled city into the newer quarters of Delhi.",
    highlights: ['Near Shivaji Stadium, Connaught Place', 'Jain Mandir Marg — lane named after this temple', 'Community extension beyond Shahjahanabad'],
    moolnayak: 'Lord Adinatha (1st Tirthankara)',
    featured: false,
    image: imgNayaMandir2,
    videos: [],
  },

  // ── 10 ──────────────────────────────────────────────────────────
  {
    slug: 'patparganj-mandir',
    name: 'Shree Digambar Jain Mandir, Patparganj',
    established: 'Historical',
    location: 'Patparganj, East Delhi',
    lat: 28.611592, lng: 77.290564, // locality-level — OSM "Patparganj" administrative-area centroid (no street address available)
    tagline: 'Faith follows the community east.',
    desc: "As the Agrawal Jain community expanded eastward across the Yamuna in the 20th century, their faith came with them. The Patparganj mandir reflects the living continuity of Digambar Jain practice in Delhi's newer residential zones — carrying the same traditions, rituals, and community ties established over three centuries in Old Delhi.",
    highlights: ['Community expansion into East Delhi', 'Carries Old Delhi traditions eastward', 'Active Digambar Jain community centre'],
    moolnayak: 'Lord Parshvanatha (23rd Tirthankara)',
    featured: false,
    image: imgNayaMandir_carving,
    videos: [],
  },

  // ── 11 ──────────────────────────────────────────────────────────
  {
    slug: 'sabzi-mandi-baraf-khana-mandir',
    name: 'Shree Digambar Jain Mandir, Sabzi Mandi Baraf Khana',
    established: 'Historical',
    location: 'Baraf Khana, Sabzi Mandi, North Delhi — 110006',
    lat: 28.669170, lng: 77.204430, // locality-level estimate — "Sabzi Mandi" itself isn't in OSM's index; cross-referenced against Roshanara Road/GTB Nagar, the nearest confirmed landmarks
    tagline: 'Devotion in the city\'s trading heart.',
    desc: "The old Sabzi Mandi (vegetable market) quarter of North Delhi was once the largest wholesale market outside the walled city. 'Baraf Khana' — the ice house — was a landmark of the colonial trading infrastructure. Within this bustling commercial zone, the Agrawal Digambar Jain Mandir has stood as a place of stillness and devotion for the trading community settled here.",
    highlights: ["In North Delhi's historic wholesale market quarter", "'Baraf Khana' — colonial trading landmark", 'Digambar Jain presence in trading colonies'],
    moolnayak: 'Lord Adinatha (1st Tirthankara)',
    featured: false,
    image: imgNayaMandir,
    videos: [],
  },

  // ── 12 ──────────────────────────────────────────────────────────
  {
    slug: 'delhi-gate-mandir',
    name: 'Shree Digambar Jain Mandir, Delhi Gate',
    established: 'Historical',
    location: '281, Delhi Gate, Old Delhi',
    lat: 28.639221, lng: 77.240810, // OSM-geocoded — "Delhi Gate" (the historic gate itself)
    tagline: 'First temple through the ancient gate.',
    desc: "Positioned at Delhi Gate — one of the original fourteen gates of Shahjahanabad, built by Shah Jahan in 1648 — this temple has stood at the southern threshold of the walled city for centuries. Every pilgrim and trader who entered through Delhi Gate passed it. It marks the Jain community's presence at the very boundary of the imperial city.",
    highlights: ["At one of Shahjahanabad's 14 original gates (1648)", 'Southern threshold sentinel of the walled city', 'Centuries of arrivals and departures witnessed'],
    moolnayak: 'Lord Mahavira (24th Tirthankara)',
    featured: false,
    image: imgLalMandir,
    videos: [],
  },
];
