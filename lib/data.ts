export const notices = [
  {
    title: "Wi-Fi",
    message:
      "ScottyCon 2026 has free Wi-Fi! Connect to 'CMU-GUEST' with your email and XXXXXXXX as the password.",
  },
  {
    title: "Lost & Found",
    message:
      "The Lost & Found is located at the UC Info Desk. If you've lost or found an item, please check there!",
  },
];

export interface Event {
  id: string;
  title: string;
  startTime: string; // Format: "HH:MM"
  endTime: string;   // Format: "HH:MM"
  room: [string, number];
  genre: string;
  description: string;
  tags: string[];
}

export const rooms1 = [
  ["Weigand Gym", 1],
  ["McConomy Auditorium", 1],
  ["Connan Room", 1],
  ["Merson Courtyard", 1],
  ["Studio Theater", 1],
  ["Kirr Commons", 1],
];

export const rooms2 = [
  ["Rangos Auditorium", 2],
  ["Danforth Conference Room", 2],
  ["Danforth Lounge", 2],
  ["GM and Foster Rooms", 2],
  ["Peter, Wright, McKenna Rooms", 2],
  ["Dowd Room", 2],
  ["Pake Room", 2],
  ["Class of '87 Room", 2]
];

export const genre = [
    "Specialty",
    "Performance",
    "Gaming",
    "Panels",
    "Anime",
    "Crafts",
    "Food",
];

// Artist Alley
interface TableBase {
  tableNumber: number;
  description: string;
  image?: string;
}

export interface ArtistTable extends TableBase {
  type: "artist";
  artists: string[];
}

export interface VendorTable extends TableBase {
  type: "vendor";
  vendorName: string;
}

export interface InfoTable extends TableBase {
  type: "info";
  title: string;
  hours?: string;
}

export type AlleyTable = ArtistTable | VendorTable | InfoTable;

export const alleyTables: AlleyTable[] = [
  // ── Artist tables (light blue, numbered 1–58) ──────────────────────────────
  {
    type: "artist", tableNumber: 1,
    artists: ["Mika Tanaka", "Sora Inoue"],
    description: "Original character prints, acrylic charms, and sticker sheets. Specializing in soft fantasy and pastel aesthetics.",
  },
  {
    type: "artist", tableNumber: 2,
    artists: ["Lena Park", "Yuki Flores"],
    description: "Fan art prints of popular shonen anime, enamel pins, and mini zines. Limited edition ScottyCon 2026 exclusive bundles available!",
  },
  {
    type: "artist", tableNumber: 3,
    artists: ["Rei Nakamura", "Casey Ohmura"],
    description: "Watercolor illustrations and hand-bound sketchbooks. Commission slots open — bring your OC references!",
  },
  {
    type: "artist", tableNumber: 4,
    artists: ["Hana Kwon", "Tomás Rivera"],
    description: "Crocheted plushies, keychains, and wearable accessories inspired by classic RPG games and magical girl anime.",
  },
  {
    type: "artist", tableNumber: 5,
    artists: ["Emi Suzuki", "Jin Choi"],
    description: "Gothic and dark fantasy digital prints, tarot-inspired card sets, and custom bookmarks.",
  },
  {
    type: "artist", tableNumber: 6,
    artists: ["Yuna Abe"],
    description: "Ink brush illustrations of Japanese folklore and yokai. Custom name stamps available — get yours carved on-site!",
  },
  {
    type: "artist", tableNumber: 7,
    artists: ["Devon Clarke", "Priya Nair"],
    description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last.",
  },
  { type: "artist", tableNumber:  8, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber:  9, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 10, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 11, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 12, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 13, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 14, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 15, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 16, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 17, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 18, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 19, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 20, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 21, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 22, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 23, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 24, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 25, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 26, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 27, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 28, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 29, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 30, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 31, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 32, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 33, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 34, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 35, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 36, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 37, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 38, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 39, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 40, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 41, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 42, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 43, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 44, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 45, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 46, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 47, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 48, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 49, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 50, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 51, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 52, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 53, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 54, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 55, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 56, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },
  { type: "artist", tableNumber: 57, artists: ["Devon Clarke", "Priya Nair"], description: "Minimalist line-art apparel and tote bags. Exclusive ScottyCon collab designs available while supplies last." },

  // ── Vendor tables (pink, IDs -1 through -10) ──────────────────────────────
  {
    type: "vendor", tableNumber: -1,
    vendorName: "Nebula Books & Comics",
    description: "Curated selection of manga, light novels, and indie comics. Buy 3, get 1 free on all used manga this weekend only.",
  },
  {
    type: "vendor", tableNumber: -2,
    vendorName: "Pixel Potion Studio",
    description: "Indie game merchandise, retro pixel art prints, and hand-soldered enamel pins. Cash and card accepted.",
  },
  {
    type: "vendor", tableNumber: -3,
    vendorName: "Cosplay Kingdom",
    description: "Costumes, wigs, props, and accessories for all skill levels. Repairs and alterations available on-site.",
  },
  {
    type: "vendor", tableNumber: -4,
    vendorName: "Galactic Toys & Figures",
    description: "Import figures, model kits, and collectible blind boxes. Specialty items from Japan and Korea.",
  },
  {
    type: "vendor", tableNumber: -5,
    vendorName: "Sakura Sweets",
    description: "Japanese candy, snacks, and drinks. Try our seasonal ScottyCon 2026 mochi sampler box!",
  },
  {
    type: "vendor", tableNumber: -6,
    vendorName: "The Card Vault",
    description: "Trading card games — buying, selling, and trading. Pokemon, Yu-Gi-Oh!, and more. Graded slabs available.",
  },
  {
    type: "vendor", tableNumber: -7,
    vendorName: "Otaku Outfitters",
    description: "Anime-licensed apparel and accessories. T-shirts, hoodies, and hats for a wide range of series.",
  },
  {
    type: "vendor", tableNumber: -8,
    vendorName: "Enchanted Realm Games",
    description: "Tabletop RPG books, dice sets, and accessories. Demo games running throughout the day — drop in any time.",
  },
  {
    type: "vendor", tableNumber: -9,
    vendorName: "Stardust Jewelry",
    description: "Handcrafted gemstone and resin jewelry inspired by anime and fantasy themes. Custom order commissions open.",
  },

  // ── Info tables (dark blue ID -100, green IDs -101 and -102) ──────────────
  {
    type: "info", tableNumber: -100,
    title: "Artist Alley Registration",
    hours: "10:00 AM – 5:00 PM",
    description: "Check in here to receive your table badge, tote bag, and exhibitor packet. Have your confirmation email ready. Staff can also help resolve table assignment issues.",
  },
  {
    type: "info", tableNumber: -101,
    title: "Information Desk",
    hours: "9:00 AM – 6:00 PM",
    description: "General convention information, maps, and lost & found. Staff here can direct you to programming rooms, restrooms, first aid, and accessibility services.",
  },
  {
    type: "info", tableNumber: -102,
    title: "Merchandise & Program Sales",
    hours: "10:00 AM – 5:00 PM",
    description: "Pick up your ScottyCon 2026 program booklet, official merchandise, and limited-run souvenir items. Cash and all major cards accepted.",
  },
];

// Artist Alley Table Rects (visual centers computed from SVG transforms)
// cx = y + 5.4 + tx,  cy = ty - x - 10.8
export const tableRects = [
  // Row A - tables 1–8 (x = 340.7)
  { tableNumber:  1, x: 340.7, y: 121.1,  transform: "translate(225 478) rotate(-90)",         cx: 351.5, cy: 126.5  },
  { tableNumber:  2, x: 340.7, y: 157.1,  transform: "translate(189 514) rotate(-90)",         cx: 351.5, cy: 162.5  },
  { tableNumber:  3, x: 340.7, y: 193.1,  transform: "translate(153 550) rotate(-90)",         cx: 351.5, cy: 198.5  },
  { tableNumber:  4, x: 340.7, y: 265.1,  transform: "translate(81 622) rotate(-90)",          cx: 351.5, cy: 270.5  },
  { tableNumber:  5, x: 340.7, y: 301.1,  transform: "translate(45 658) rotate(-90)",          cx: 351.5, cy: 306.5  },
  { tableNumber:  6, x: 340.7, y: 337.1,  transform: "translate(9 694) rotate(-90)",           cx: 351.5, cy: 342.5  },
  { tableNumber:  7, x: 340.7, y: 373.1,  transform: "translate(-27 730) rotate(-90)",         cx: 351.5, cy: 378.5  },
  { tableNumber:  8, x: 340.7, y: 409.1,  transform: "translate(-63 766) rotate(-90)",         cx: 351.5, cy: 414.5  },

  // Row B — tables 9–18 (x = 293.9)
  { tableNumber:  9, x: 293.9, y:  85.1,  transform: "translate(214.2 395.2) rotate(-90)",     cx: 304.7, cy:  90.5  },
  { tableNumber: 10, x: 293.9, y: 121.1,  transform: "translate(178.2 431.2) rotate(-90)",     cx: 304.7, cy: 126.5  },
  { tableNumber: 11, x: 293.9, y: 157.1,  transform: "translate(142.2 467.2) rotate(-90)",     cx: 304.7, cy: 162.5  },
  { tableNumber: 12, x: 293.9, y: 193.1,  transform: "translate(106.2 503.2) rotate(-90)",     cx: 304.7, cy: 198.5  },
  { tableNumber: 13, x: 293.9, y: 229.1,  transform: "translate(70.2 539.2) rotate(-90)",      cx: 304.7, cy: 234.5  },
  { tableNumber: 14, x: 293.9, y: 265.1,  transform: "translate(34.2 575.2) rotate(-90)",      cx: 304.7, cy: 270.5  },
  { tableNumber: 15, x: 293.9, y: 301.1,  transform: "translate(-1.8 611.2) rotate(-90)",      cx: 304.7, cy: 306.5  },
  { tableNumber: 16, x: 293.9, y: 337.1,  transform: "translate(-37.8 647.2) rotate(-90)",     cx: 304.7, cy: 342.5  },
  { tableNumber: 17, x: 293.9, y: 373.1,  transform: "translate(-73.8 683.2) rotate(-90)",     cx: 304.7, cy: 378.5  },
  { tableNumber: 18, x: 293.9, y: 409.1,  transform: "translate(-109.8 719.2) rotate(-90)",    cx: 304.7, cy: 414.5  },

  // Row C — tables 19–28 (x = 254.3)
  { tableNumber: 19, x: 254.3, y:  85.1,  transform: "translate(174.6 355.6) rotate(-90)",     cx: 265.1, cy:  90.5  },
  { tableNumber: 20, x: 254.3, y: 121.1,  transform: "translate(138.6 391.6) rotate(-90)",     cx: 265.1, cy: 126.5  },
  { tableNumber: 21, x: 254.3, y: 157.1,  transform: "translate(102.6 427.6) rotate(-90)",     cx: 265.1, cy: 162.5  },
  { tableNumber: 22, x: 254.3, y: 193.1,  transform: "translate(66.6 463.6) rotate(-90)",      cx: 265.1, cy: 198.5  },
  { tableNumber: 23, x: 254.3, y: 229.1,  transform: "translate(30.6 499.6) rotate(-90)",      cx: 265.1, cy: 234.5  },
  { tableNumber: 24, x: 254.3, y: 265.1,  transform: "translate(-5.4 535.6) rotate(-90)",      cx: 265.1, cy: 270.5  },
  { tableNumber: 25, x: 254.3, y: 301.1,  transform: "translate(-41.4 571.6) rotate(-90)",     cx: 265.1, cy: 306.5  },
  { tableNumber: 26, x: 254.3, y: 337.1,  transform: "translate(-77.4 607.6) rotate(-90)",     cx: 265.1, cy: 342.5  },
  { tableNumber: 27, x: 254.3, y: 373.1,  transform: "translate(-113.4 643.6) rotate(-90)",    cx: 265.1, cy: 378.5  },
  { tableNumber: 28, x: 254.3, y: 409.1,  transform: "translate(-149.4 679.6) rotate(-90)",    cx: 265.1, cy: 414.5  },

  // Row D — tables 29–38 (x = 207.5)
  { tableNumber: 29, x: 207.5, y:  85.1,  transform: "translate(127.8 308.8) rotate(-90)",     cx: 218.3, cy:  90.5  },
  { tableNumber: 30, x: 207.5, y: 121.1,  transform: "translate(91.8 344.8) rotate(-90)",      cx: 218.3, cy: 126.5  },
  { tableNumber: 31, x: 207.5, y: 157.1,  transform: "translate(55.8 380.8) rotate(-90)",      cx: 218.3, cy: 162.5  },
  { tableNumber: 32, x: 207.5, y: 193.42, transform: "translate(19.48 417.12) rotate(-90)",    cx: 218.3, cy: 198.82 },
  { tableNumber: 33, x: 207.5, y: 229.42, transform: "translate(-16.52 453.12) rotate(-90)",   cx: 218.3, cy: 234.82 },
  { tableNumber: 34, x: 207.5, y: 265.1,  transform: "translate(-52.2 488.8) rotate(-90)",     cx: 218.3, cy: 270.5  },
  { tableNumber: 35, x: 207.5, y: 301.1,  transform: "translate(-88.2 524.8) rotate(-90)",     cx: 218.3, cy: 306.5  },
  { tableNumber: 36, x: 207.5, y: 337.1,  transform: "translate(-124.2 560.8) rotate(-90)",    cx: 218.3, cy: 342.5  },
  { tableNumber: 37, x: 207.5, y: 373.1,  transform: "translate(-160.2 596.8) rotate(-90)",    cx: 218.3, cy: 378.5  },
  { tableNumber: 38, x: 207.5, y: 409.1,  transform: "translate(-196.2 632.8) rotate(-90)",    cx: 218.3, cy: 414.5  },

  // Row E — tables 39–48 (x = 167.9)
  { tableNumber: 39, x: 167.9, y:  85.1,  transform: "translate(88.2 269.2) rotate(-90)",      cx: 178.7, cy:  90.5  },
  { tableNumber: 40, x: 167.9, y: 121.1,  transform: "translate(52.2 305.2) rotate(-90)",      cx: 178.7, cy: 126.5  },
  { tableNumber: 41, x: 167.9, y: 157.1,  transform: "translate(16.2 341.2) rotate(-90)",      cx: 178.7, cy: 162.5  },
  { tableNumber: 42, x: 167.9, y: 193.1,  transform: "translate(-19.8 377.2) rotate(-90)",     cx: 178.7, cy: 198.5  },
  { tableNumber: 43, x: 167.9, y: 229.1,  transform: "translate(-55.8 413.2) rotate(-90)",     cx: 178.7, cy: 234.5  },
  { tableNumber: 44, x: 167.9, y: 265.1,  transform: "translate(-91.8 449.2) rotate(-90)",     cx: 178.7, cy: 270.5  },
  { tableNumber: 45, x: 167.9, y: 301.1,  transform: "translate(-127.8 485.2) rotate(-90)",    cx: 178.7, cy: 306.5  },
  { tableNumber: 46, x: 167.9, y: 337.1,  transform: "translate(-163.8 521.2) rotate(-90)",    cx: 178.7, cy: 342.5  },
  { tableNumber: 47, x: 167.9, y: 373.1,  transform: "translate(-199.8 557.2) rotate(-90)",    cx: 178.7, cy: 378.5  },
  { tableNumber: 48, x: 167.9, y: 409.1,  transform: "translate(-235.8 593.2) rotate(-90)",    cx: 178.7, cy: 414.5  },

  // Row F — tables 49–58 (x = 121.1)
  { tableNumber: 49, x: 121.1, y:  85.1,  transform: "translate(41.4 222.4) rotate(-90)",      cx: 131.9, cy:  90.5  },
  { tableNumber: 50, x: 121.1, y: 121.1,  transform: "translate(5.4 258.4) rotate(-90)",       cx: 131.9, cy: 126.5  },
  { tableNumber: 51, x: 121.1, y: 157.1,  transform: "translate(-30.6 294.4) rotate(-90)",     cx: 131.9, cy: 162.5  },
  { tableNumber: 52, x: 121.1, y: 193.42, transform: "translate(-66.92 330.72) rotate(-90)",   cx: 131.9, cy: 198.82 },
  { tableNumber: 53, x: 121.1, y: 229.42, transform: "translate(-102.92 366.72) rotate(-90)",  cx: 131.9, cy: 234.82 },
  { tableNumber: 54, x: 121.1, y: 265.1,  transform: "translate(-138.6 402.4) rotate(-90)",    cx: 131.9, cy: 270.5  },
  { tableNumber: 55, x: 121.1, y: 301.1,  transform: "translate(-174.6 438.4) rotate(-90)",    cx: 131.9, cy: 306.5  },
  { tableNumber: 56, x: 121.1, y: 337.1,  transform: "translate(-210.6 474.4) rotate(-90)",    cx: 131.9, cy: 342.5  },
  { tableNumber: 57, x: 121.1, y: 373.1,  transform: "translate(-246.6 510.4) rotate(-90)",    cx: 131.9, cy: 378.5  },
  { tableNumber: 58, x: 121.1, y: 409.1,  transform: "translate(-282.6 546.4) rotate(-90)",    cx: 131.9, cy: 414.5  },
];

// Events
export const events: Event[] = [
  {
    id: "1",
    title: "ScottyFest",
    startTime: "12:00",
    endTime: "13:00",
    room: ["Rangos Auditorium", 2],
    genre: "Specialty",
    description: "",
    tags: [""],
  },
  {
    id: "2",
    title: "ScottyFest",
    startTime: "13:00",
    endTime: "20:00",
    room: ["Danforth Lounge", 2],
    genre: "Gaming",
    description: "sdfsdfsdfsdf sdfsdfsdfsdfsdf sdfsdfsdfsdfs sdfsdfsdfsdfsd sdfsdfsdfsdfsd sdfsdfs dfs",
    tags: [""],
  },
  {
    id: "3",
    title: "ScottyRest",
    startTime: "11:00",
    endTime: "12:00",
    room: ["Kirr Commons", 1],
    genre: "Gaming",
    description: "",
    tags: [""],
  },
];