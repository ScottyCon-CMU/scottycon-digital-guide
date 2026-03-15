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

export type AlleyTable = ArtistTable | VendorTable;

export const alleyTables: AlleyTable[] = [
  {
    type: "artist",
    tableNumber: 1,
    artists: ["Mika Tanaka", "Sora Inoue"],
    description: "Original character prints, acrylic charms, and sticker sheets. Specializing in soft fantasy and pastel aesthetics.",
  },
  {
    type: "artist",
    tableNumber: 2,
    artists: ["Lena Park", "Yuki Flores"],
    description: "Fan art prints of popular shonen anime, enamel pins, and mini zines. Limited edition ScottyCon 2026 exclusive bundles available!",
  },
  {
    type: "vendor",
    tableNumber: 3,
    vendorName: "Pixel Potion Studio",
    description: "Indie game merchandise, retro pixel art prints, and hand-soldered enamel pins. Cash and card accepted.",
  },
  {
    type: "artist",
    tableNumber: 4,
    artists: ["Rei Nakamura", "Casey Ohmura"],
    description: "Watercolor illustrations and hand-bound sketchbooks. Commission slots open — bring your OC references!",
  },
  {
    type: "artist",
    tableNumber: 5,
    artists: ["Hana Kwon", "Tomás Rivera"],
    description: "Crocheted plushies, keychains, and wearable accessories inspired by classic RPG games and magical girl anime.",
  },
  {
    type: "vendor",
    tableNumber: 6,
    vendorName: "Nebula Books & Comics",
    description: "Curated selection of manga, light novels, and indie comics. Buy 3, get 1 free on all used manga this weekend only.",
  },
  {
    type: "artist",
    tableNumber: 7,
    artists: ["Emi Suzuki", "Jin Choi"],
    description: "Gothic and dark fantasy digital prints, tarot-inspired card sets, and custom bookmarks.",
  },
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