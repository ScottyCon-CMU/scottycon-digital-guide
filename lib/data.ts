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
  id: number;
  title: string;
  startTime: string; // Format: "HH:MM"
  endTime: string; // Format: "HH:MM"
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
  ["Class of '87 Room", 2],
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
    id: 0,
    title: "ScottyFest",
    startTime: "12:00",
    endTime: "13:15",
    room: ["Rangos Auditorium", 2],
    genre: "Performance",
    description: `
Experience a variety of multi-modal performances by talented performers!

**12:00-12:05 PM**
Gokuraku Jodo (極楽浄土)
*Performed by Alison Ding, Miffy Liu, and Xue Jiang*

**12:05-12:10 PM**
Love Language — TXT
*Performed by Tiffany Ahn, Amanda Kang, Emma Tong, Inara Kardar, and Kathrine Sun*

**12:10-12:15 PM**
Bii:-p — xLov
*Performed by Mara Barron, Tiffany Ahn, Colin Hollihan, and Kate Coura Bicalho*

**12:15-12:20 PM**
Love It — PinocchioP feat. Hatsune Miku
*Performed by Miffy Liu and Anwei Yan*

**12:20-12:25 PM**
《うい麦畑でつかまえて》 Dance Performance
*Performed by Anwei Yan*

**12:25-12:35 PM**
Super Mario Sunshine (Bowser Junior's Perspective)
*Performed by Lisa*

**12:35-12:40 PM**
The Whole Being Dead Thing!
*Performed by Juliana (Eclipse Arts)*

**12:40-12:45 PM**
Bulbel — Mili
*Performed by Merry*

**12:45-12:52 PM**
Duel of the Fates
*Performed by Star Wars Club*`,
    tags: [""],
  },
  {
    id: 1,
    title: "Guest of Honor",
    startTime: "13:30",
    endTime: "14:30",
    room: ["Rangos Auditorium", 2],
    genre: "Performance",
    description:
      `**Phoebe Chan** is coming to ScottyCon 2026! 
      Your favorite 2.5D fairytale idol, multi-talented singer-songwriter, 
      voice actress, and streamer will be 
      joining us as our Guest of Honor.`,
    tags: [""],
  },
  {
    id: 2,
    title: "CMU Jazz Club",
    startTime: "15:00",
    endTime: "15:30",
    room: ["Rangos Auditorium", 2],
    genre: "Performance",
    description: "",
    tags: ["Music"],
  },
];

export const sponsors = [
  {
    name: "Sponsor 1",
    logo: "/images/sponsorDefault.png",
    website: "https://www.google.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    name: "Sponsor 2",
    logo: "/images/sponsorDefault.png",
    website: "https://www.google.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    name: "Sponsor 3",
    logo: "/images/sponsorDefault.png",
    website: "https://www.google.com",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Sponsor 4",
    logo: "/images/sponsorDefault.png",
    website: "https://www.google.com",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Sponsor 5",
    logo: "/images/sponsorDefault.png",
    website: "https://www.google.com",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "Sponsor 6",
    logo: "/images/sponsorDefault.png",
    website: "https://www.google.com",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export const members = [
  {
    name: "Braden Lee",
    position: "President"
  },
  {
    name: "Member 1",
    position: "??"
  },
  {
    name: "Member 2",
    position: "??"
  },
  {
    name: "Member 3",
    position: "??"
  },
  {
    name: "Member 4",
    position: "??"
  },
  {
    name: "Member 5",
    position: "??"
  },
];