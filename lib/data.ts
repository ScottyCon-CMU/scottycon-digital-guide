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
  images?: string[];
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

export function tableName(table: AlleyTable): string {
    if (table.type === "artist") return table.artists.join(" & ");
    if (table.type === "vendor") return table.vendorName;
    return table.title;
}

import { artistTables, vendorTables, infoTables } from "./alley-tables";
export const alleyTables: AlleyTable[] = [...artistTables, ...vendorTables, ...infoTables];

// Artist Alley Table Rects (visual centers computed from SVG transforms)
// cx = y + 5.4 + tx,  cy = ty - x - 10.8
// Column screen-x centers (left→right): vendor-L=23.9, vendor-R=85.1, F=113.3, E=172.9, D=202.7, C=262.3, B=292.1, A=351.5
// Edge-to-edge corridors: ~40 between groups, ~7–8 within paired columns
export const tableRects = [
  // Row A — tables 1–8  (col 8, cx=351.5, no change)
  { tableNumber:  1, x: 340.7, y: 121.1,  transform: "translate(225 478) rotate(-90)",         cx: 351.5, cy: 126.5  },
  { tableNumber:  2, x: 340.7, y: 157.1,  transform: "translate(189 514) rotate(-90)",         cx: 351.5, cy: 162.5  },
  { tableNumber:  3, x: 340.7, y: 193.1,  transform: "translate(153 550) rotate(-90)",         cx: 351.5, cy: 198.5  },
  { tableNumber:  4, x: 340.7, y: 265.1,  transform: "translate(81 622) rotate(-90)",          cx: 351.5, cy: 270.5  },
  { tableNumber:  5, x: 340.7, y: 301.1,  transform: "translate(45 658) rotate(-90)",          cx: 351.5, cy: 306.5  },
  { tableNumber:  6, x: 340.7, y: 337.1,  transform: "translate(9 694) rotate(-90)",           cx: 351.5, cy: 342.5  },
  { tableNumber:  7, x: 340.7, y: 373.1,  transform: "translate(-27 730) rotate(-90)",         cx: 351.5, cy: 378.5  },
  { tableNumber:  8, x: 340.7, y: 409.1,  transform: "translate(-63 766) rotate(-90)",         cx: 351.5, cy: 414.5  },

  // Row B — tables 9–18  (col 7, cx=292.1, Δtx=−12.6)
  { tableNumber:  9, x: 293.9, y:  85.1,  transform: "translate(201.6 395.2) rotate(-90)",     cx: 292.1, cy:  90.5  },
  { tableNumber: 10, x: 293.9, y: 121.1,  transform: "translate(165.6 431.2) rotate(-90)",     cx: 292.1, cy: 126.5  },
  { tableNumber: 11, x: 293.9, y: 157.1,  transform: "translate(129.6 467.2) rotate(-90)",     cx: 292.1, cy: 162.5  },
  { tableNumber: 12, x: 293.9, y: 193.1,  transform: "translate(93.6 503.2) rotate(-90)",      cx: 292.1, cy: 198.5  },
  { tableNumber: 13, x: 293.9, y: 229.1,  transform: "translate(57.6 539.2) rotate(-90)",      cx: 292.1, cy: 234.5  },
  { tableNumber: 14, x: 293.9, y: 265.1,  transform: "translate(21.6 575.2) rotate(-90)",      cx: 292.1, cy: 270.5  },
  { tableNumber: 15, x: 293.9, y: 301.1,  transform: "translate(-14.4 611.2) rotate(-90)",     cx: 292.1, cy: 306.5  },
  { tableNumber: 16, x: 293.9, y: 337.1,  transform: "translate(-50.4 647.2) rotate(-90)",     cx: 292.1, cy: 342.5  },
  { tableNumber: 17, x: 293.9, y: 373.1,  transform: "translate(-86.4 683.2) rotate(-90)",     cx: 292.1, cy: 378.5  },
  { tableNumber: 18, x: 293.9, y: 409.1,  transform: "translate(-122.4 719.2) rotate(-90)",    cx: 292.1, cy: 414.5  },

  // Row C — tables 19–28  (col 6, cx=262.3, Δtx=−2.8)
  { tableNumber: 19, x: 254.3, y:  85.1,  transform: "translate(171.8 355.6) rotate(-90)",     cx: 262.3, cy:  90.5  },
  { tableNumber: 20, x: 254.3, y: 121.1,  transform: "translate(135.8 391.6) rotate(-90)",     cx: 262.3, cy: 126.5  },
  { tableNumber: 21, x: 254.3, y: 157.1,  transform: "translate(99.8 427.6) rotate(-90)",      cx: 262.3, cy: 162.5  },
  { tableNumber: 22, x: 254.3, y: 193.1,  transform: "translate(63.8 463.6) rotate(-90)",      cx: 262.3, cy: 198.5  },
  { tableNumber: 23, x: 254.3, y: 229.1,  transform: "translate(27.8 499.6) rotate(-90)",      cx: 262.3, cy: 234.5  },
  { tableNumber: 24, x: 254.3, y: 265.1,  transform: "translate(-8.2 535.6) rotate(-90)",      cx: 262.3, cy: 270.5  },
  { tableNumber: 25, x: 254.3, y: 301.1,  transform: "translate(-44.2 571.6) rotate(-90)",     cx: 262.3, cy: 306.5  },
  { tableNumber: 26, x: 254.3, y: 337.1,  transform: "translate(-80.2 607.6) rotate(-90)",     cx: 262.3, cy: 342.5  },
  { tableNumber: 27, x: 254.3, y: 373.1,  transform: "translate(-116.2 643.6) rotate(-90)",    cx: 262.3, cy: 378.5  },
  { tableNumber: 28, x: 254.3, y: 409.1,  transform: "translate(-152.2 679.6) rotate(-90)",    cx: 262.3, cy: 414.5  },

  // Row D — tables 29–38  (col 5, cx=202.7, Δtx=−15.6)
  { tableNumber: 29, x: 207.5, y:  85.1,  transform: "translate(112.2 308.8) rotate(-90)",     cx: 202.7, cy:  90.5  },
  { tableNumber: 30, x: 207.5, y: 121.1,  transform: "translate(76.2 344.8) rotate(-90)",      cx: 202.7, cy: 126.5  },
  { tableNumber: 31, x: 207.5, y: 157.1,  transform: "translate(40.2 380.8) rotate(-90)",      cx: 202.7, cy: 162.5  },
  { tableNumber: 32, x: 207.5, y: 193.42, transform: "translate(3.88 417.12) rotate(-90)",     cx: 202.7, cy: 198.82 },
  { tableNumber: 33, x: 207.5, y: 229.42, transform: "translate(-32.12 453.12) rotate(-90)",   cx: 202.7, cy: 234.82 },
  { tableNumber: 34, x: 207.5, y: 265.1,  transform: "translate(-67.8 488.8) rotate(-90)",     cx: 202.7, cy: 270.5  },
  { tableNumber: 35, x: 207.5, y: 301.1,  transform: "translate(-103.8 524.8) rotate(-90)",    cx: 202.7, cy: 306.5  },
  { tableNumber: 36, x: 207.5, y: 337.1,  transform: "translate(-139.8 560.8) rotate(-90)",    cx: 202.7, cy: 342.5  },
  { tableNumber: 37, x: 207.5, y: 373.1,  transform: "translate(-175.8 596.8) rotate(-90)",    cx: 202.7, cy: 378.5  },
  { tableNumber: 38, x: 207.5, y: 409.1,  transform: "translate(-211.8 632.8) rotate(-90)",    cx: 202.7, cy: 414.5  },

  // Row E — tables 39–48  (col 4, cx=172.9, Δtx=−5.8)
  { tableNumber: 39, x: 167.9, y:  85.1,  transform: "translate(82.4 269.2) rotate(-90)",      cx: 172.9, cy:  90.5  },
  { tableNumber: 40, x: 167.9, y: 121.1,  transform: "translate(46.4 305.2) rotate(-90)",      cx: 172.9, cy: 126.5  },
  { tableNumber: 41, x: 167.9, y: 157.1,  transform: "translate(10.4 341.2) rotate(-90)",      cx: 172.9, cy: 162.5  },
  { tableNumber: 42, x: 167.9, y: 193.1,  transform: "translate(-25.6 377.2) rotate(-90)",     cx: 172.9, cy: 198.5  },
  { tableNumber: 43, x: 167.9, y: 229.1,  transform: "translate(-61.6 413.2) rotate(-90)",     cx: 172.9, cy: 234.5  },
  { tableNumber: 44, x: 167.9, y: 265.1,  transform: "translate(-97.6 449.2) rotate(-90)",     cx: 172.9, cy: 270.5  },
  { tableNumber: 45, x: 167.9, y: 301.1,  transform: "translate(-133.6 485.2) rotate(-90)",    cx: 172.9, cy: 306.5  },
  { tableNumber: 46, x: 167.9, y: 337.1,  transform: "translate(-169.6 521.2) rotate(-90)",    cx: 172.9, cy: 342.5  },
  { tableNumber: 47, x: 167.9, y: 373.1,  transform: "translate(-205.6 557.2) rotate(-90)",    cx: 172.9, cy: 378.5  },
  { tableNumber: 48, x: 167.9, y: 409.1,  transform: "translate(-241.6 593.2) rotate(-90)",    cx: 172.9, cy: 414.5  },

  // Row F — tables 49–58  (col 3, cx=113.3, Δtx=−18.6)
  { tableNumber: 49, x: 121.1, y:  85.1,  transform: "translate(22.8 222.4) rotate(-90)",      cx: 113.3, cy:  90.5  },
  { tableNumber: 50, x: 121.1, y: 121.1,  transform: "translate(-13.2 258.4) rotate(-90)",     cx: 113.3, cy: 126.5  },
  { tableNumber: 51, x: 121.1, y: 157.1,  transform: "translate(-49.2 294.4) rotate(-90)",     cx: 113.3, cy: 162.5  },
  { tableNumber: 52, x: 121.1, y: 193.42, transform: "translate(-85.52 330.72) rotate(-90)",   cx: 113.3, cy: 198.82 },
  { tableNumber: 53, x: 121.1, y: 229.42, transform: "translate(-121.52 366.72) rotate(-90)",  cx: 113.3, cy: 234.82 },
  { tableNumber: 54, x: 121.1, y: 265.1,  transform: "translate(-157.2 402.4) rotate(-90)",    cx: 113.3, cy: 270.5  },
  { tableNumber: 55, x: 121.1, y: 301.1,  transform: "translate(-193.2 438.4) rotate(-90)",    cx: 113.3, cy: 306.5  },
  { tableNumber: 56, x: 121.1, y: 337.1,  transform: "translate(-229.2 474.4) rotate(-90)",    cx: 113.3, cy: 342.5  },
  { tableNumber: 57, x: 121.1, y: 373.1,  transform: "translate(-265.2 510.4) rotate(-90)",    cx: 113.3, cy: 378.5  },
  { tableNumber: 58, x: 121.1, y: 409.1,  transform: "translate(-301.2 546.4) rotate(-90)",    cx: 113.3, cy: 414.5  },
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