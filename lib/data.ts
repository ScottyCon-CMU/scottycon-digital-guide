export const scottyconDate = "2026-03-28"

export const notices = [
  {
    title: "Wi-Fi",
    message:
      "ScottyCon 2026 has free Wi-Fi! Connect to 'CMU-GUEST' with your email and ANYDVDFD as the password.",
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
  host: string;
  startTime: string; // Format: "HH:MM"
  endTime: string; // Format: "HH:MM"
  room: (typeof rooms)[number];
  genre: (typeof genres)[number];
  description: string;
}

export const rooms = [
  { name: "Wiegand Gym", floor: 1 },
  { name: "McConomy Auditorium", floor: 1 },
  { name: "Connan Room", floor: 1 },
  { name: "Kirr Commons", floor: 1 },
  { name: "Wean Commons", floor: 1 },
  { name: "Rangos Auditorium", floor: 2 },
  { name: "Danforth Lounge", floor: 2 },
  { name: "Danforth Conference Room", floor: 2 },
  { name: "McKenna, Peter, Wright Rooms", floor: 2 },
  { name: "Dowd Room", floor: 2 },
  { name: "Pake Room", floor: 2 },
  { name: "GM and Fosters Room", floor: 2 },
].sort((a, b) => a.name.localeCompare(b.name));

export const genres = [
  "Performance",
  "Gaming",
  "Panel",
  "Anime",
  "Crafts",
  "Vendors",
];

export const genreColors: Record<
  (typeof genres)[number],
  { bg: string; hover: string; text: string }
> = {
  Performance: {
    bg: "bg-rose-400/90",
    hover: "hover:bg-rose-500",
    text: "text-rose-400",
  },
  Gaming: {
    bg: "bg-emerald-400/90",
    hover: "hover:bg-emerald-500",
    text: "text-emerald-400",
  },
  Panel: {
    bg: "bg-sky-400/90",
    hover: "hover:bg-sky-500",
    text: "text-sky-400",
  },
  Anime: {
    bg: "bg-pink-400/90",
    hover: "hover:bg-pink-500",
    text: "text-pink-400",
  },
  Crafts: {
    bg: "bg-amber-400/90",
    hover: "hover:bg-amber-500",
    text: "text-amber-400",
  },
  Vendors: {
    bg: "bg-orange-400/90",
    hover: "hover:bg-orange-500",
    text: "text-orange-400",
  },
};

export const events: Event[] = [
  {
    id: 1,
    title: "Lolita 101: A Beginner's Guide to J-Fashion",
    host: "Kei-mart",
    startTime: "11:30",
    endTime: "12:30",
    room: { name: "Connan Room", floor: 1 },
    genre: "Panel",
    description:
      "Have you ever wanted to wear lolita fashion but struggle to start? Join us for an fun and inclusive introduction to the fashion where we go over the basics including the history, substyles, and where to find the perfect items to add to your closet!",
  },
  {
    id: 2,
    title: "Rating your OTPs: Ship or Skip?",
    host: "Petrichor",
    startTime: "12:45",
    endTime: "13:30",
    room: { name: "Connan Room", floor: 1 },
    genre: "Panel",
    description:
      "Year 2: the horrors persist, but so do we! Come to this panel to see if your favorite pairing survives Petri's harsh judgement.",
  },
  {
    id: 3,
    title: "Pokemon Jeopardy",
    host: "Zaylese Ali-Orena & Rashad Moore",
    startTime: "13:45",
    endTime: "14:30",
    room: { name: "Connan Room", floor: 1 },
    genre: "Panel",
    description:
      "Get ready to battle your brains at Pokémon Jeopardy — where every Pokémon type is a category and higher money means tougher, trainer-level questions with clues and answer options. Team up, buzz in fast, wager it all in Final Jeopardy, and win Pokémon-themed prizes like cards, trinkets, or stickers to prove you're the ultimate Pokémon master!",
  },
  {
    id: 4,
    title:
      "\"It's Morphin' Time!\" Adapting Super Sentai for the Western Audience",
    host: "Brigitte Galauner & James Austin",
    startTime: "14:45",
    endTime: "15:30",
    room: { name: "Connan Room", floor: 1 },
    genre: "Panel",
    description:
      'Did you know that the popular "Power Rangers" franchise originated in Japan? Join us for an educational presentation and discussion on the origins of "Super Sentai" and how it was adapted into the popular "Power Rangers" series.',
  },
  {
    id: 5,
    title: "Lip Sync for Your Cosplay!",
    host: "Agape (agapecos) & Miles (starrdustss)",
    startTime: "15:45",
    endTime: "16:45",
    room: { name: "Connan Room", floor: 1 },
    genre: "Panel",
    description:
      "Battle it out against your fellow cosplayers in this lipsync for your cosplay! Hosted by Agapecos and Starrdustss, the fan favorite panel returns for another year.",
  },
  {
    id: 6,
    title: "Japanese Racehorse or Perfume Scent?",
    host: "Audra",
    startTime: "17:00",
    endTime: "17:30",
    room: { name: "Connan Room", floor: 1 },
    genre: "Panel",
    description:
      "To celebrate the year of the horse and the recent otaku interest in Japanese horseracing thanks to Umamusume, test your Japanese racehorse knowledge as we guess if the name belongs to a Japanese Racehorse or Perfume Scent!",
  },
  {
    id: 7,
    title: "Bring Your Hobbies Into Cosplay",
    host: "Juliana (Eclipse Arts)",
    startTime: "17:45",
    endTime: "18:30",
    room: { name: "Connan Room", floor: 1 },
    genre: "Panel",
    description:
      "Put A Hobby In A Cosplay! Learn how to bring in more fun and expression to possibly take your cosplays to the next level!",
  },
  {
    id: 8,
    title:
      "Majima is Everywhere! A look at the real life inspirations of the Yakuza series",
    host: "Kawaii Neko Productions",
    startTime: "18:45",
    endTime: "19:45",
    room: { name: "Connan Room", floor: 1 },
    genre: "Panel",
    description:
      "Where did this oversized traffic cone come from? Who is that man looking in the window at me? Now he's in the sewer? Majima is everywhere! Come learn all about the real life inspirations behind the hit series Yakuza!",
  },
  {
    id: 9,
    title: "Karaoke",
    host: "ScottyCon Staff",
    startTime: "20:00",
    endTime: "21:00",
    room: { name: "Connan Room", floor: 1 },
    genre: "Panel",
    description:
      "Join us for some open-mic karaoke and chill! Sing along to your favorite anime hits or video game soundtracks.",
  },
  {
    id: 10,
    title: "Cinema of the Rising Sun: How to Get Into Japanese Film",
    host: "Blackmoore Presents",
    startTime: "11:30",
    endTime: "12:30",
    room: { name: "Dowd Room", floor: 2 },
    genre: "Panel",
    description:
      "Interested in learning more about Japanese culture through its rich history of film? Join us as we show you how to discover your next favorite film!",
  },
  {
    id: 11,
    title: "Domain Expansion Touchdown: The NFL for Anime Fans",
    host: "Bamforth Panels",
    startTime: "12:45",
    endTime: "13:45",
    room: { name: "Dowd Room", floor: 2 },
    genre: "Panel",
    description:
      "Think football is just a boring sportsball for your dad? Think Again! Football is the nerdiest and most anime sport around, and to prove it, I'm going to explain it using exclusively Anime references and comparisons.",
  },
  {
    id: 12,
    title: 'Made in the 1900\'s: "Old" Anime Worth the Watch',
    host: "Kawaii Neko Productions",
    startTime: "14:00",
    endTime: "15:00",
    room: { name: "Dowd Room", floor: 2 },
    genre: "Panel",
    description:
      "Did you know that anime existed before the year 2000? What do you mean you weren't born yet? Come and learn about these older anime that are still worth watching!",
  },
  {
    id: 13,
    title: "Why Cooking is Better in Video Games",
    host: "n00dl3g@l",
    startTime: "15:30",
    endTime: "16:15",
    room: { name: "Dowd Room", floor: 2 },
    genre: "Panel",
    description:
      "Cooking is a vital skill that many find annoying... Let's see why that *doesn't* apply to video games",
  },
  {
    id: 14,
    title: "Samurai Cinema Showdown",
    host: "Blackmoore Presents",
    startTime: "16:30",
    endTime: "17:30",
    room: { name: "Dowd Room", floor: 2 },
    genre: "Panel",
    description:
      "From Kurosawa to Miike, we love tales of the samurai, but with so many films out there, it can be hard to know where to start. Come join us to discuss the best of the best and find your next favorite film!",
  },
  {
    id: 15,
    title: "What Is Twisted Wonderland?",
    host: "Audra Tewell",
    startTime: "19:00",
    endTime: "20:00",
    room: { name: "Dowd Room", floor: 2 },
    genre: "Panel",
    description:
      "You have just been transported to a mysterious land where all your favorite Disney villains are now cute anime boys.  Find out what to do next as we give an overblot, I mean overview, of Twisted Wonderland!",
  },
  {
    id: 16,
    title: "ScottyFest",
    host: "Independent Performers",
    startTime: "12:00",
    endTime: "13:15",
    room: { name: "Rangos Auditorium", floor: 2 },
    genre: "Performance",
    description: `Experience a variety of multi-modal performances by talented performers!

12:00-12:05 PM
Gokuraku Jodo (極楽浄土)
Performed by Alison Ding, Miffy Liu, and Xue Jiang

12:05-12:10 PM
Love Language — TXT
Performed by Tiffany Ahn, Amanda Kang, Emma Tong, Inara Kardar, and Kathrine Sun

12:15-12:20 PM
Love It — PinocchioP feat. Hatsune Miku
Performed by Miffy Liu and Anwei Yan

12:20-12:25 PM
《うい麦畑でつかまえて》 Dance Performance
Performed by Anwei Yan

12:25-12:35 PM
Super Mario Sunshine (Bowser Junior's Perspective)
Performed by Lisa

12:35-12:40 PM
The Whole Being Dead Thing!
Performed by Juliana (Eclipse Arts)

12:40-12:45 PM
Bii:-p — xLov
Performed by Mara Barron, Tiffany Ahn, Colin Hollihan, and Kate Coura Bicalho

12:45-12:52 PM
Duel of the Fates
Performed by Star Wars Club`,
  },
  {
    id: 17,
    title: "Guest of Honor: Phoebe-chan",
    host: "Phoebe-chan",
    startTime: "13:30",
    endTime: "14:30",
    room: { name: "Rangos Auditorium", floor: 2 },
    genre: "Performance",
    description:
      "Phoebe Chan is coming to ScottyCon 2026! Your favorite 2.5D fairytale idol, multi-talented singer-songwriter, voice actress, and streamer will be joining us as our Guest of Honor.",
  },
  {
    id: 18,
    title: "CMU Jazz Club Performance",
    host: "CMU Jazz Club",
    startTime: "15:00",
    endTime: "15:45",
    room: { name: "Rangos Auditorium", floor: 2 },
    genre: "Performance",
    description: `Our mission is to create an environment and provide musicians with the means to explore and develop their interests in the American art form of jazz. We also aim to share our music with the CMU community, providing live entertainment, a relaxing setting, stress relief, and a community of people to spend time with.

Setlist:
1. "Grand Prix!" (Mario Kart World medley) arr. Zachary Smentek (original pieces by Atsuko Asahi)
2. "Daydream Generation" (YuYu Hakusho) by Matsuko Mawatari, arr. Kenechukwu Echezona (English lyrics by Sara White and Melody Sentai Harmonyranger)
3. "Above the Skies of Dream Land" (Kirby series medley) arr. Kenechukwu Echezona (original pieces by Hironobu Inagaki, Atsuyoshi Isemura, Hirokazu Ando, and Megumi Ohara)
4. "Broken Rose" (NANA medley) arr. Samyukta Athreya (original pieces by Anna Tsuchiya and Olivia Lufkin)
5. "Bad Applelovania!!" (Touhou x Undertale) by ZUN and TobyFox, arr. Kenechukwu Echezona`,
  },
  {
    id: 19,
    title: "Wind Ensemble Performance",
    host: "Tartan Wind Ensemble",
    startTime: "16:00",
    endTime: "16:45",
    room: { name: "Rangos Auditorium", floor: 2 },
    genre: "Performance",
    description: `CMU's own concert band plays arrangements of The Legend of Zelda, Spirited Away, Deltarune, and Cuphead! We're here to have fun and are always open to new members.

Setlist:
1. Spirited Away, Joe Hisaishi & Yumi Kimura / Kazuhiro Morita
2. Legend of Zelda Medley, Various / Lamagna & Sanders
3. Cuphead, Kristofer Maddigan / Christopher López
4. Hammer of Justice, Toby Fox / Justin Peng`,
  },
  {
    id: 20,
    title: "Masquerade",
    host: "Independent Performers",
    startTime: "17:00",
    endTime: "17:45",
    room: { name: "Rangos Auditorium", floor: 2 },
    genre: "Performance",
    description: `A masquerade is a contest for cosplayers/costumers who want to show off their costumes on stage. Some cosplayers choose to perform skits and others show off their craftsmanship to compete for prizes.

At ScottyCon's masquerade, all entries will participate in a walk-on á la fashion show as an opportunity to show off their costume.`,
  },
  {
    id: 21,
    title: "Girl Band Party!!!!!",
    host: "HamachiKama",
    startTime: "18:00",
    endTime: "18:30",
    room: { name: "Rangos Auditorium", floor: 2 },
    genre: "Performance",
    description: `The most sterotypical ETC students bring you the most incredible girl band anime music!

Setlist:
1. 天使にふれたよ! - 放課後ティータイム
2. 誰にもなれない私だから - トゲナシトゲアリ
3. 猛独が襲う (MyGO!!!!! Cover) - MyGO!!!!!`,
  },
  {
    id: 22,
    title: "VGM and Anime Rock On Flute",
    host: "Katie Shesko",
    startTime: "18:30",
    endTime: "19:30",
    room: { name: "Rangos Auditorium", floor: 2 },
    genre: "Performance",
    description: `Video Game and Anime Cosplaying Flute Player (who plays games fast) performs your favorite video game and anime tunes!

Setlist:
1. Skyloft from Legend of Zelda Hyrule Warriors
2. Sadness and Sorrow from Naruto
3. Duck Tales Moon Theme
4. Halo Theme
5. Corridors of time from ChronoTrigger
6. Attack on Titan Theme
7. Legend of Zelda Tears of the Kingdom Theme
8. Novigrad Set from The Witcher 3
9. Crossing Field by LiSa
10. Weight of Life from Xenoblade Chronicles 3`,
  },
  {
    id: 23,
    title: "Rhythm Game Arcade",
    host: "Ikigai Arcade & Rhythm Games Club",
    startTime: "11:00",
    endTime: "21:00",
    room: { name: "McKenna, Peter, Wright Rooms", floor: 2 },
    genre: "Gaming",
    description: `Presented by Rhythm Games Club and in partnership with Ikigai Arcade, ScottyCon's selection of rhythm game cabinets will be available in Peter/Wright/McKenna from 11 AM-9 PM.

List of Cabinets:
- 4x Wacca
- 2x Chunithm
- Ongeki
- Groove Coaster`,
  },
  {
    id: 24,
    title: "Arcade & Games",
    host: "CMU Game Creation Society",
    startTime: "11:00",
    endTime: "21:00",
    room: { name: "Pake Room", floor: 2 },
    genre: "Gaming",
    description:
      "Come play decades worth of CMU student games! You can play on Arcade, Switch, Console or PC. We have a wide variety of games that will satisfy your gamer needs.",
  },
  {
    id: 25,
    title: "Smash @ ScottyCon 2026",
    host: "CMU Esports",
    startTime: "11:00",
    endTime: "21:00",
    room: { name: "Danforth Conference Room", floor: 2 },
    genre: "Gaming",
    description:
      "Smash at ScottyCon is back! Come compete in a Smash Ultimate tournament! Open to players of all skill level and experience, try your hand with local talent. Feel free to play casually with your friends as well!",
  },
  {
    id: 26,
    title: "Learn to Play Japanese Mahjong!",
    host: "Japanese Mahjong Club",
    startTime: "12:00",
    endTime: "16:00",
    room: { name: "Kirr Commons", floor: 1 },
    genre: "Gaming",
    description:
      "Check out CMU's Japanese Mahjong Club and learn how to play! Play with real mahjong sets and guided teaching with the 98-179 Introduction to Japanese Mahjong StuCo staff. No experience required! All levels of players welcome to join.",
  },
  {
    id: 27,
    title: "Crafts in Cosplay",
    host: "Cosplay@CMU",
    startTime: "11:00",
    endTime: "21:00",
    room: { name: "Danforth Lounge", floor: 2 },
    genre: "Crafts",
    description:
      "Come decorate photocards with our supplies! (Photocards not provided.) Take a break from the rest of the con and use our wide array of stickers and sleeves to deck out your cards <3. At all times, the lounge will be home to Scottycon's cherry blossom photobooth. Make sure to snap a commemorative photo with friends with the Sakura backdrop~",
  },
  {
    id: 28,
    title: "Fun with Folds",
    host: "Origami Club",
    startTime: "11:00",
    endTime: "20:00",
    room: { name: "Kirr Commons", floor: 1 },
    genre: "Crafts",
    description:
      "Stop by the Origami Club table for a fun folding session! Fold whatever you like or ask an officer to teach you a model, like the origami Scotty or a fun anime themed model, like Pikachu or Hatsune Miku!",
  },
  {
    id: 29,
    title: "Summer Wars Screening",
    host: "ScottyCon Staff",
    startTime: "11:00",
    endTime: "13:00",
    room: { name: "McConomy Auditorium", floor: 1 },
    genre: "Anime",
    description: `ScottyCon will be screening the 2009 timeless epic by Mamoru Hosoda. See if you can spot CMU's cameo in the film!

Kenji is a shy, part-time moderator for OZ, the virtual reality world that powers everyday life, until pretty and popular Natsuki recruits him to be her fake boyfriend. While posing as an affluent suitor to Natsuki's family, Kenji finds that a rogue A.I. program has stolen his online identity, and Kenji is accused of hacking OZ and causing real-world catastrophes. As the destruction in OZ throws Natsuki's family into disarray, Kenji must unite his newfound connections to overcome an impending cyber apocalypse.`,
  },
  {
    id: 30,
    title: "Summer Wars Screening",
    host: "ScottyCon Staff",
    startTime: "15:00",
    endTime: "17:00",
    room: { name: "McConomy Auditorium", floor: 1 },
    genre: "Anime",
    description: `ScottyCon will be screening the 2009 timeless epic by Mamoru Hosoda. See if you can spot CMU's cameo in the film!

Kenji is a shy, part-time moderator for OZ, the virtual reality world that powers everyday life, until pretty and popular Natsuki recruits him to be her fake boyfriend. While posing as an affluent suitor to Natsuki's family, Kenji finds that a rogue A.I. program has stolen his online identity, and Kenji is accused of hacking OZ and causing real-world catastrophes. As the destruction in OZ throws Natsuki's family into disarray, Kenji must unite his newfound connections to overcome an impending cyber apocalypse.`,
  },
  {
    id: 31,
    title: "Summer Wars Screening",
    host: "ScottyCon Staff",
    startTime: "20:00",
    endTime: "22:00",
    room: { name: "McConomy Auditorium", floor: 1 },
    genre: "Anime",
    description: `ScottyCon will be screening the 2009 timeless epic by Mamoru Hosoda. See if you can spot CMU's cameo in the film!

Kenji is a shy, part-time moderator for OZ, the virtual reality world that powers everyday life, until pretty and popular Natsuki recruits him to be her fake boyfriend. While posing as an affluent suitor to Natsuki's family, Kenji finds that a rogue A.I. program has stolen his online identity, and Kenji is accused of hacking OZ and causing real-world catastrophes. As the destruction in OZ throws Natsuki's family into disarray, Kenji must unite his newfound connections to overcome an impending cyber apocalypse.`,
  },
  {
    id: 32,
    title: "Artist Alley",
    host: "Artist Alley Club",
    startTime: "11:00",
    endTime: "20:00",
    room: { name: "Wiegand Gym", floor: 1 },
    genre: "Vendors",
    description:
      "At anime and comic conventions, the artist alley is a section for independent artists to display and sell their work. There will be 100+ CMU student artists selling original and fan merch at ScottyCon's artist alley!",
  },
  {
    id: 33,
    title: "Merchant's Hall",
    host: "Independent Sponsors",
    startTime: "11:00",
    endTime: "20:00",
    room: { name: "Wiegand Gym", floor: 1 },
    genre: "Vendors",
    description: "Peruse our independent merchants in Wiegand Gymnasium!",
  },
  {
    id: 34,
    title: "Cosplay Café (Lunch)",
    host: "Cosplay@CMU",
    startTime: "12:00",
    endTime: "14:00",
    room: { name: "Danforth Lounge", floor: 2 },
    genre: "Vendors",
    description:
      "Stop by the Cosplay Cafe in Danforth Lounge to enjoy food during the con! We will offer premade meals, drinks, and desserts for purchase to be served by our talented cosplayers.",
  },
  {
    id: 35,
    title: "Cosplay Café (Dinner)",
    host: "Cosplay@CMU",
    startTime: "18:00",
    endTime: "20:00",
    room: { name: "Danforth Lounge", floor: 2 },
    genre: "Vendors",
    description:
      "Stop by the Cosplay Cafe in Danforth Lounge to enjoy food during the con! We will offer premade meals, drinks, and desserts for purchase to be served by our talented cosplayers.",
  },
  {
    id: 36,
    title: "Mos Eisley Cantina",
    host: "Star Wars Club",
    startTime: "11:30",
    endTime: "17:30",
    room: { name: "Wean Commons", floor: 1 },
    genre: "Vendors",
    description:
      "Transport your taste-buds to a galaxy far, far away! Enjoy Star Wars themed Wookie cookies, R2-D2 pancakes, Death Star waffles, Darth Vader paninis, Boba (Fett) and more!",
  },
  {
    id: 37,
    title: "Chinese Treats",
    host: "Awareness of Roots in Chinese Culture (ARCC)",
    startTime: "11:00",
    endTime: "15:00",
    room: { name: "Wean Commons", floor: 1 },
    genre: "Vendors",
    description:
      "We are a cultural organization dedicated to spreading awareness for Chinese culture around the CMU and Pittsburgh community! Visit our booth for delicious pork dumplings and tangyuan.",
  },
  {
    id: 38,
    title: "Maquia Screening",
    host: "ScottyCon Staff",
    startTime: "17:30",
    endTime: "19:30",
    room: { name: "McConomy Auditorium", floor: 1 },
    genre: "Anime",
    description:
      `What's a convention without anime? Stop by and watch the anime we've selected for everyone!
      
      The people of Iolph are known for two things: their youthful longevity and peaceful lives weaving tapestry. When that is disturbed and their home thrown into chaos by those believing that their blood gifts longer life, Maquia loses not only her friends, but a place to return to.`,
  },
  {
    id: 39,
    title: "Wits and Wagers",
    host: "Vermillion Anime Club",
    startTime: "17:45",
    endTime: "18:30",
    room: { name: "Dowd Room", floor: 2 },
    genre: "Gaming",
    description:
      "Test your luck and your anime knowledge by playing this special anime edition of Wits and Wagers!",
  },
  {
    id: 40,
    title: "Manga Library",
    host: "Our Manga Library",
    startTime: "11:00",
    endTime: "21:00",
    room: { name: "GM and Fosters Room", floor: 2 },
    genre: "Panel",
    description:
      "Want to take a break with a good story? Visit Our Manga Library with over 400 volumes of manga to choose from.",
  },
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
export const alleyTables: AlleyTable[] = [
  ...artistTables,
  ...vendorTables,
  ...infoTables,
];

// Artist Alley Table Rects (visual centers computed from SVG transforms)
// cx = y + 5.4 + tx,  cy = ty - x - 10.8
// Column screen-x centers (left→right): vendor-L=23.9, vendor-R=85.1, F=113.3, E=172.9, D=202.7, C=262.3, B=292.1, A=351.5
// Edge-to-edge corridors: ~40 between groups, ~7–8 within paired columns
export const tableRects = [
  // Row A — tables 1–8  (col 8, cx=351.5, no change)
  {
    tableNumber: 1,
    x: 340.7,
    y: 121.1,
    transform: "translate(225 478) rotate(-90)",
    cx: 351.5,
    cy: 126.5,
  },
  {
    tableNumber: 2,
    x: 340.7,
    y: 157.1,
    transform: "translate(189 514) rotate(-90)",
    cx: 351.5,
    cy: 162.5,
  },
  {
    tableNumber: 3,
    x: 340.7,
    y: 193.1,
    transform: "translate(153 550) rotate(-90)",
    cx: 351.5,
    cy: 198.5,
  },
  {
    tableNumber: 4,
    x: 340.7,
    y: 265.1,
    transform: "translate(81 622) rotate(-90)",
    cx: 351.5,
    cy: 270.5,
  },
  {
    tableNumber: 5,
    x: 340.7,
    y: 301.1,
    transform: "translate(45 658) rotate(-90)",
    cx: 351.5,
    cy: 306.5,
  },
  {
    tableNumber: 6,
    x: 340.7,
    y: 337.1,
    transform: "translate(9 694) rotate(-90)",
    cx: 351.5,
    cy: 342.5,
  },
  {
    tableNumber: 7,
    x: 340.7,
    y: 373.1,
    transform: "translate(-27 730) rotate(-90)",
    cx: 351.5,
    cy: 378.5,
  },
  {
    tableNumber: 8,
    x: 340.7,
    y: 409.1,
    transform: "translate(-63 766) rotate(-90)",
    cx: 351.5,
    cy: 414.5,
  },

  // Row B — tables 9–18  (col 7, cx=292.1, Δtx=−12.6)
  {
    tableNumber: 9,
    x: 293.9,
    y: 85.1,
    transform: "translate(201.6 395.2) rotate(-90)",
    cx: 292.1,
    cy: 90.5,
  },
  {
    tableNumber: 10,
    x: 293.9,
    y: 121.1,
    transform: "translate(165.6 431.2) rotate(-90)",
    cx: 292.1,
    cy: 126.5,
  },
  {
    tableNumber: 11,
    x: 293.9,
    y: 157.1,
    transform: "translate(129.6 467.2) rotate(-90)",
    cx: 292.1,
    cy: 162.5,
  },
  {
    tableNumber: 12,
    x: 293.9,
    y: 193.1,
    transform: "translate(93.6 503.2) rotate(-90)",
    cx: 292.1,
    cy: 198.5,
  },
  {
    tableNumber: 13,
    x: 293.9,
    y: 229.1,
    transform: "translate(57.6 539.2) rotate(-90)",
    cx: 292.1,
    cy: 234.5,
  },
  {
    tableNumber: 14,
    x: 293.9,
    y: 265.1,
    transform: "translate(21.6 575.2) rotate(-90)",
    cx: 292.1,
    cy: 270.5,
  },
  {
    tableNumber: 15,
    x: 293.9,
    y: 301.1,
    transform: "translate(-14.4 611.2) rotate(-90)",
    cx: 292.1,
    cy: 306.5,
  },
  {
    tableNumber: 16,
    x: 293.9,
    y: 337.1,
    transform: "translate(-50.4 647.2) rotate(-90)",
    cx: 292.1,
    cy: 342.5,
  },
  {
    tableNumber: 17,
    x: 293.9,
    y: 373.1,
    transform: "translate(-86.4 683.2) rotate(-90)",
    cx: 292.1,
    cy: 378.5,
  },
  {
    tableNumber: 18,
    x: 293.9,
    y: 409.1,
    transform: "translate(-122.4 719.2) rotate(-90)",
    cx: 292.1,
    cy: 414.5,
  },

  // Row C — tables 19–28  (col 6, cx=262.3, Δtx=−2.8)
  {
    tableNumber: 19,
    x: 254.3,
    y: 85.1,
    transform: "translate(171.8 355.6) rotate(-90)",
    cx: 262.3,
    cy: 90.5,
  },
  {
    tableNumber: 20,
    x: 254.3,
    y: 121.1,
    transform: "translate(135.8 391.6) rotate(-90)",
    cx: 262.3,
    cy: 126.5,
  },
  {
    tableNumber: 21,
    x: 254.3,
    y: 157.1,
    transform: "translate(99.8 427.6) rotate(-90)",
    cx: 262.3,
    cy: 162.5,
  },
  {
    tableNumber: 22,
    x: 254.3,
    y: 193.1,
    transform: "translate(63.8 463.6) rotate(-90)",
    cx: 262.3,
    cy: 198.5,
  },
  {
    tableNumber: 23,
    x: 254.3,
    y: 229.1,
    transform: "translate(27.8 499.6) rotate(-90)",
    cx: 262.3,
    cy: 234.5,
  },
  {
    tableNumber: 24,
    x: 254.3,
    y: 265.1,
    transform: "translate(-8.2 535.6) rotate(-90)",
    cx: 262.3,
    cy: 270.5,
  },
  {
    tableNumber: 25,
    x: 254.3,
    y: 301.1,
    transform: "translate(-44.2 571.6) rotate(-90)",
    cx: 262.3,
    cy: 306.5,
  },
  {
    tableNumber: 26,
    x: 254.3,
    y: 337.1,
    transform: "translate(-80.2 607.6) rotate(-90)",
    cx: 262.3,
    cy: 342.5,
  },
  {
    tableNumber: 27,
    x: 254.3,
    y: 373.1,
    transform: "translate(-116.2 643.6) rotate(-90)",
    cx: 262.3,
    cy: 378.5,
  },
  {
    tableNumber: 28,
    x: 254.3,
    y: 409.1,
    transform: "translate(-152.2 679.6) rotate(-90)",
    cx: 262.3,
    cy: 414.5,
  },

  // Row D — tables 29–38  (col 5, cx=202.7, Δtx=−15.6)
  {
    tableNumber: 29,
    x: 207.5,
    y: 85.1,
    transform: "translate(112.2 308.8) rotate(-90)",
    cx: 202.7,
    cy: 90.5,
  },
  {
    tableNumber: 30,
    x: 207.5,
    y: 121.1,
    transform: "translate(76.2 344.8) rotate(-90)",
    cx: 202.7,
    cy: 126.5,
  },
  {
    tableNumber: 31,
    x: 207.5,
    y: 157.1,
    transform: "translate(40.2 380.8) rotate(-90)",
    cx: 202.7,
    cy: 162.5,
  },
  {
    tableNumber: 32,
    x: 207.5,
    y: 193.42,
    transform: "translate(3.88 417.12) rotate(-90)",
    cx: 202.7,
    cy: 198.82,
  },
  {
    tableNumber: 33,
    x: 207.5,
    y: 229.42,
    transform: "translate(-32.12 453.12) rotate(-90)",
    cx: 202.7,
    cy: 234.82,
  },
  {
    tableNumber: 34,
    x: 207.5,
    y: 265.1,
    transform: "translate(-67.8 488.8) rotate(-90)",
    cx: 202.7,
    cy: 270.5,
  },
  {
    tableNumber: 35,
    x: 207.5,
    y: 301.1,
    transform: "translate(-103.8 524.8) rotate(-90)",
    cx: 202.7,
    cy: 306.5,
  },
  {
    tableNumber: 36,
    x: 207.5,
    y: 337.1,
    transform: "translate(-139.8 560.8) rotate(-90)",
    cx: 202.7,
    cy: 342.5,
  },
  {
    tableNumber: 37,
    x: 207.5,
    y: 373.1,
    transform: "translate(-175.8 596.8) rotate(-90)",
    cx: 202.7,
    cy: 378.5,
  },
  {
    tableNumber: 38,
    x: 207.5,
    y: 409.1,
    transform: "translate(-211.8 632.8) rotate(-90)",
    cx: 202.7,
    cy: 414.5,
  },

  // Row E — tables 39–48  (col 4, cx=172.9, Δtx=−5.8)
  {
    tableNumber: 39,
    x: 167.9,
    y: 85.1,
    transform: "translate(82.4 269.2) rotate(-90)",
    cx: 172.9,
    cy: 90.5,
  },
  {
    tableNumber: 40,
    x: 167.9,
    y: 121.1,
    transform: "translate(46.4 305.2) rotate(-90)",
    cx: 172.9,
    cy: 126.5,
  },
  {
    tableNumber: 41,
    x: 167.9,
    y: 157.1,
    transform: "translate(10.4 341.2) rotate(-90)",
    cx: 172.9,
    cy: 162.5,
  },
  {
    tableNumber: 42,
    x: 167.9,
    y: 193.1,
    transform: "translate(-25.6 377.2) rotate(-90)",
    cx: 172.9,
    cy: 198.5,
  },
  {
    tableNumber: 43,
    x: 167.9,
    y: 229.1,
    transform: "translate(-61.6 413.2) rotate(-90)",
    cx: 172.9,
    cy: 234.5,
  },
  {
    tableNumber: 44,
    x: 167.9,
    y: 265.1,
    transform: "translate(-97.6 449.2) rotate(-90)",
    cx: 172.9,
    cy: 270.5,
  },
  {
    tableNumber: 45,
    x: 167.9,
    y: 301.1,
    transform: "translate(-133.6 485.2) rotate(-90)",
    cx: 172.9,
    cy: 306.5,
  },
  {
    tableNumber: 46,
    x: 167.9,
    y: 337.1,
    transform: "translate(-169.6 521.2) rotate(-90)",
    cx: 172.9,
    cy: 342.5,
  },
  {
    tableNumber: 47,
    x: 167.9,
    y: 373.1,
    transform: "translate(-205.6 557.2) rotate(-90)",
    cx: 172.9,
    cy: 378.5,
  },
  {
    tableNumber: 48,
    x: 167.9,
    y: 409.1,
    transform: "translate(-241.6 593.2) rotate(-90)",
    cx: 172.9,
    cy: 414.5,
  },

  // Row F — tables 49–58  (col 3, cx=113.3, Δtx=−18.6)
  {
    tableNumber: 49,
    x: 121.1,
    y: 85.1,
    transform: "translate(22.8 222.4) rotate(-90)",
    cx: 113.3,
    cy: 90.5,
  },
  {
    tableNumber: 50,
    x: 121.1,
    y: 121.1,
    transform: "translate(-13.2 258.4) rotate(-90)",
    cx: 113.3,
    cy: 126.5,
  },
  {
    tableNumber: 51,
    x: 121.1,
    y: 157.1,
    transform: "translate(-49.2 294.4) rotate(-90)",
    cx: 113.3,
    cy: 162.5,
  },
  {
    tableNumber: 52,
    x: 121.1,
    y: 193.42,
    transform: "translate(-85.52 330.72) rotate(-90)",
    cx: 113.3,
    cy: 198.82,
  },
  {
    tableNumber: 53,
    x: 121.1,
    y: 229.42,
    transform: "translate(-121.52 366.72) rotate(-90)",
    cx: 113.3,
    cy: 234.82,
  },
  {
    tableNumber: 54,
    x: 121.1,
    y: 265.1,
    transform: "translate(-157.2 402.4) rotate(-90)",
    cx: 113.3,
    cy: 270.5,
  },
  {
    tableNumber: 55,
    x: 121.1,
    y: 301.1,
    transform: "translate(-193.2 438.4) rotate(-90)",
    cx: 113.3,
    cy: 306.5,
  },
  {
    tableNumber: 56,
    x: 121.1,
    y: 337.1,
    transform: "translate(-229.2 474.4) rotate(-90)",
    cx: 113.3,
    cy: 342.5,
  },
  {
    tableNumber: 57,
    x: 121.1,
    y: 373.1,
    transform: "translate(-265.2 510.4) rotate(-90)",
    cx: 113.3,
    cy: 378.5,
  },
  {
    tableNumber: 58,
    x: 121.1,
    y: 409.1,
    transform: "translate(-301.2 546.4) rotate(-90)",
    cx: 113.3,
    cy: 414.5,
  },
];

export const sponsors = [
  {
    name: "Languages, Cultures & Applied Linguistics at CMU",
    logo: "/images/vendors/vendor5.avif",
    website: "https://www.cmu.edu/dietrich/lcal/",
    description:
      "At the Department of Languages, Cultures & Applied Linguitics (LCAL), we prepare students to engage with the world’s complexity through language, culture and communication. By studying Arabic, Chinese, French, German, Italian, Japanese, Korean, Russian and Spanish, students develop the intercultural fluency and critical insight needed to navigate a globally connected, technologically evolving future.",
  },
  {
    name: "Bakery Square",
    logo: "/images/sponsors/bksq.png",
    website: "https://www.bakery-square.com/",
    description:
      "Bakery Square is an open-air shopping mall with tons of dining and retail options as well as frequent community events. We're less than 2 miles from CMU's campus - come visit us!",
  },
  {
    name: "Scotty Labs",
    logo: "/images/sponsors/scottyLab.png",
    website: "https://www.scottylabs.org/",
    description:
      "The best place to build software @ CMU. We're a student-run organization dedicated to building tech that enhances campus life—empowering the Carnegie Mellon University community to create, collaborate, and solve real-world problems through apps and events.",
  },
  {
    name: "Perry's Cards",
    logo: "/images/vendors/vendor6.avif",
    website: "https://perrys-cards.com/",
    description:
      "Perry's Cards is your one-stop shop for all your Pokémon collectibles and other trading card games. We specialize in unique offerings of vintage and modern box sets, trading card packs, graded slabs, raw singles, and Japanese promotional cards. If you like Pokémon, you are sure to find something you'll love.",
  },
  {
    name: "Mystic Mixtures Potion Bar",
    logo: "/images/vendors/vendor2.avif",
    website: "https://mysticmixturespotionbar.com/",
    description:
      "Mystic Mixtures Potion Bar handcrafts fantasy themed beverage mixes that can be enjoyed with or without alcohol! Beverages that are easy to mix and magical to drink. Each potion is made by hand with simple ingredients and can be enjoyed by combining with spirits or with a bit of water for a delicious non-alcoholic beverage. See us on Instagram at @mysticmixturespotionbar."
  },
  {
    name: "Tekko",
    logo: "/images/vendors/vendor1.avif",
    website: "https://tekko.us",
    description:
      "Haven't gotten enough anime and gaming with ScottyCon? Check out Tekko, Pennsylvania's largest anime convention! With a whole weekend packed full of anime, gaming, and pop culture fun, Tekko has something for everyone.",
  },
  {
    name: "Megaroad",
    logo: "/images/vendors/vendor4.avif",
    website: "http://www.megaroad.com/",
    description:
      "Welcome to Megaroad Toys and Entertainment, a family toy and hobby store with an emphasis on Japan and anime-related toys, stationery, and gifts.",
  },
  {
    name: "Kei-mart",
    logo: "/images/vendors/vendor3.avif",
    website: "https://www.instagram.com/keimartshop",
    description:
      "From poofy petticoats to whimsical washi tape, Kei-mart offers unique new and gently used lolita fashion and Japanese novelties! We aim to celebrate beginners and established fashionistas!",
  },
  {
    name: "Secret Manga Shop",
    logo: "/images/sponsors/secretManga.png",
    website: "https://www.secretmangashop.com/",
    description:
      "Secret Manga Shop offers a curated collection of Manga, Awesome Pokemon + Anime + Manga Plush & Figures, Cool Japanese Stationary & Kitchenware, Apparel, and Hard-to-Find Art Supplies for Creating Manga. All make great gifts!!! Open Wednesday through Sunday.",
  },
  {
    name: "Ebisu",
    logo: "/images/vendors/vendor7.webp",
    website: "https://www.instagram.com/ebisupgh/?hl=en",
    description:
      "Ebisu provides high-quality Japanese items and Asian Boutique.",
  },
];

export const members = [
  {
    name: "Braden Lee",
    position: "President",
  },
  {
    name: "Iraine Taine",
    position: "External Vice President",
  },
  {
    name: "Hannah Chen",
    position: "Internal Vice President/Graphic Design Chair",
  },
  {
    name: "Emma Wong",
    position: "Finance Chair",
  },
  {
    name: "Christopher Setiabudi",
    position: "Tech Chair",
  },
  {
    name: "Sharon Chu",
    position: "Advisor",
  },
  {
    name: "Nicole Korber",
    position: "Advisor",
  },
  {
    name: "Tony Li",
    position: "Advisor",
  },
  {
    name: "Jennifer McKee",
    position: "Advisor",
  },
  {
    name: "Alicia Ran",
  },
  {
    name: "Bright Zheng",
  },
  {
    name: "Ivan Zhang",
  },
  {
    name: "John Cao",
  },
  {
    name: "Miranda Ni",
  },
  {
    name: "Sirui Huang",
  },
  {
    name: "Amalia Kutin"
  }
];
