import imgSahityaSadhan from '../assets/library_sahitya_sadhan_web.jpg';

const libraryGalleryFiles = import.meta.glob('../assets/gallery/library/*.jpg', { eager: true, import: 'default' });
const libraryGallery = Object.keys(libraryGalleryFiles).sort().map((key) => libraryGalleryFiles[key]);

export const dharamshalaPlaces = [
  {
    id: 'jain-bhavan-delhi',
    name: 'Jain Bhavan — Delhi',
    nameHindi: 'जैन भवन — दिल्ली',
    location: 'Old Delhi',
    tagline: 'Community home in the heart of the capital.',
    desc: 'A Jain community hall and rest house located in the heart of Old Delhi. Jain Bhavan serves as a gathering point for pilgrims, community meetings, and religious events organised by the Shri Digambar Jain Panchayat. Accommodation is available for visiting Jain devotees at nominal cost.',
    facilities: ['Pilgrim accommodation', 'Community hall', 'Prayer space', 'Jain kitchen (satvik meals)'],
    contact: 'Contact Panchayat Office for bookings',
  },
  {
    id: 'jain-bhavan-mahaveerji',
    name: 'Jain Bhavan — Mahaveerji',
    nameHindi: 'जैन भवन — महावीरजी',
    location: 'Mahaveerji, Rajasthan',
    tagline: "A pilgrim's home near the sacred shrine.",
    desc: 'Located near the revered Shri Mahaveerji temple complex in Rajasthan — one of the most important Digambara Jain pilgrimage destinations — this Jain Bhavan provides comfortable and affordable accommodation for pilgrims travelling from Delhi for darshan.',
    facilities: ['Pilgrim rooms', 'Dharamshala-style lodging', 'Proximity to main temple', 'Paryushana special arrangements'],
    contact: 'Contact Panchayat Office for bookings',
  },
  {
    id: 'sahitya-sadhan',
    name: 'Sahitya Sadhan (Library)',
    nameHindi: 'साहित्य साधन (पुस्तकालय)',
    location: 'Old Delhi',
    image: imgSahityaSadhan,
    images: libraryGallery,
    tagline: 'Preserving knowledge, one manuscript at a time.',
    desc: 'Sahitya Sadhan is the literary and archival arm of the Panchayat — a repository of Jain manuscripts, scriptures, and scholarly texts accumulated over centuries. The library holds rare palm-leaf manuscripts, printed texts on Jain cosmology, philosophy, and history, and is open to researchers and devotees seeking spiritual study.',
    facilities: ['Ancient manuscript collection', 'Reference library', 'Open to researchers', 'Jain philosophy & cosmology texts'],
    contact: 'Open during Panchayat office hours',
  },
  {
    id: 'udaseen-ashram',
    name: 'Udaseen Ashram',
    nameHindi: 'उदासीन आश्रम',
    location: 'Old Delhi',
    tagline: 'Detachment, discipline, and devotion.',
    desc: 'The Udaseen Ashram is connected to the Udaseen monastic tradition — a sect known for its emphasis on complete renunciation and detachment from worldly affairs. The ashram provides a place of spiritual retreat, meditation, and religious discourse. It is open to devotees seeking guidance in the path of liberation.',
    facilities: ['Meditation space', 'Religious discourse', 'Monastic guidance', 'Spiritual retreat'],
    contact: 'Contact Panchayat for visiting hours',
  },
  {
    id: 'naya-mandir-dharamshala',
    name: 'Naya Mandir Dharamshala',
    nameHindi: 'नया मंदिर धर्मशाला',
    location: 'Dharampura, Old Delhi',
    tagline: 'Rest, reflect, and return to practice.',
    desc: "Part of the Naya Mandir complex — Delhi's first shikhara temple — the Dharamshala offers accommodation directly within the temple premises. Pilgrims visiting for major festivals such as Paryushana, Mahavir Jayanti, or Diwali can stay on-site, waking to the morning bells and the scent of incense from the sanctum.",
    facilities: ['Temple-side accommodation', 'Festival season capacity', 'Satvik dining arrangements', 'Access to library and prayer hall'],
    contact: 'Contact Panchayat Office for bookings',
  },
];
