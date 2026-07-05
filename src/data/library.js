import imgSahityaSadhan from '../assets/library_sahitya_sadhan_web.jpg';

const libraryGalleryFiles = import.meta.glob('../assets/gallery/library/*.jpg', { eager: true, import: 'default' });
const libraryGallery = Object.keys(libraryGalleryFiles).sort().map((key) => libraryGalleryFiles[key]);

export const library = {
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
};
