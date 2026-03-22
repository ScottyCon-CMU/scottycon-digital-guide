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
  ["Connan Room", 1],
  ["McConomy Auditorium", 1],
  ["Kirr Commons", 1],
  ["Wean Commons", 1],
  ["Weigand Gym", 1],
];

export const rooms2 = [
  ["Rangos Auditorium", 2],
  ["Dowd Room", 2],
  ["Danforth Lounge", 2],
  ["Danforth Conference Room", 2],
  ["Pake Room", 2],
  ["Peter, Wright, McKenna Rooms", 2],
];

export const genre = [
  "Specialty",
  "Performance",
  "Gaming",
  "Panels",
  "Anime",
  "Crafts",
  "Vendors",
];

export const events: Event[] = [
  {
    id: 0,
    title: "Lolita 101: A Beginners Guide to J-Fashion",
    startTime: "11:30",
    endTime: "12:30",
    room: ["Connan Room", 1],
    genre: "Panels",
    description: `
    **Hosted by:** *Kei-mart*\nHave you ever wanted to wear lolita fashion but struggle to start? Join us for an fun and inclusive introduction to the fashion where we go over the basics including the history, substyles, and where to find the perfect items to add to your closet!`,
    tags: ["Fashion", "Beginner-Friendly"],
  },
  {
    id: 1,
    title: "Rating your OTPs: Ship or Skip?",
    startTime: "12:45",
    endTime: "13:30",
    room: ["Connan Room", 1],
    genre: "Panels",
    description: `
    **Hosted by:** *Petrichor*\nYear 2: the horrors persist, but so do we! Come to this panel to see if your favorite OTP (one true pairing) survives Petri's harsh judgement.`,
    tags: [""],
  },
  {
    id: 2,
    title: "Pokémon Jeopardy",
    startTime: "13:45",
    endTime: "14:30",
    room: ["Connan Room", 1],
    genre: "Panels",
    description: `
    **Hosted by:** *Zaylese Ali-Orlena & Rashad Moore*\nGet ready to battle your brains at Pokémon Jeopardy—where every Pokémon type is a category and higher money means tougher, trainer-level questions with clues and answer options. Team up, buzz in fast, wager it all in Final Jeopardy, and win Pokémon-themed prizes like cards, trinkets, or stickers to prove you’re the ultimate Pokémon master!`,
    tags: [""],
  },
  {
    id: 3,
    title: "“It's Morphin' Time!” Adapting Super Sentai for the Western Audience",
    startTime: "14:45",
    endTime: "15:30",
    room: ["Connan Room", 1],
    genre: "Panels",
    description: `
    **Hosted by:** *Brigitte Galauner & James Austin*\nDid you know that the popular "Power Rangers" franchise originated in Japan? Join us for an educational presentation and discussion on the origins of "Super Sentai" and how it was adapted into the popular "Power Rangers" series.`,
    tags: [""],
  },
  {
    id: 4,
    title: "Lip Sync for Your Cosplay!",
    startTime: "15:45",
    endTime: "16:45",
    room: ["Connan Room", 1],
    genre: "Panels",
    description: `
    **Hosted by:** *Agape (agapecos) and Miles (starrdustss)*\nBattle it out against your fellow cosplayers in this lipsync for your cosplay! Hosted by Agapecos and Starrdustss, the fan favorite panel returns for another year.`,
    tags: ["Cosplay", "Interactive"],
  },
  {
    id: 5,
    title: "Japanese Racehorse or Perfume Scent?",
    startTime: "17:00",
    endTime: "17:30",
    room: ["Connan Room", 1],
    genre: "Panels",
    description: `
    **Hosted by:** *Audra*\nTo celebrate the year of the horse and the recent otaku interest in Japanese horseracing thanks to Umamusume, test your Japanese racehorse knowledge as we guess if the name belongs to a Japanese Racehorse or Perfume Scent!`,
    tags: [""],
  },
  {
    id: 6,
    title: "Bring Your Hobbies Into Cosplay",
    startTime: "17:45",
    endTime: "18:30",
    room: ["Connan Room", 1],
    genre: "Panels",
    description: `
    **Hosted by:** *Juliana (Eclipse Arts)*\nPut A Hobby In A Cosplay! Learn how to bring in more fun and expression to possibly take your cosplays to the next level!`,
    tags: [""],
  },
  {
    id: 7,
    title: "Majima is Everywhere! A Look at the Real Life Inspirations of the Yakuza Series",
    startTime: "18:45",
    endTime: "19:45",
    room: ["Connan Room", 1],
    genre: "Panels",
    description: `
    **Hosted by:** *Kawaii Neko Productions*\nWhere did this oversized traffic cone come from? Who is that man looking in the window at me? Now he's in the sewer? Majima is everywhere! Come learn all about the real life inspirations behind the hit series Yakuza!`,
    tags: [""],
  },
  {
    id: 8,
    title: "Karaoke",
    startTime: "20:00",
    endTime: "21:00",
    room: ["Connan Room", 1],
    genre: "Specialty",
    description: `
    Join us for some open-mic karaoke and chill! Sing along to your favorite anime hits or video game soundtracks.`,
    tags: ["Music", "Interactive"],
  },
  {
    id: 9,
    title: "Cinema of the Rising Sun: How to Get Into Japanese Film",
    startTime: "11:30",
    endTime: "12:30",
    room: ["Dowd Room", 2],
    genre: "Panels",
    description: `
    **Hosted by:** *Blackmoore Presents*\nInterested in learning more about Japanese culture through its rich history of film? Join us as we show you how to discover your next favorite film!`,
    tags: [""],
  },
  {
    id: 10,
    title: "Domain Expansion Touchdown: The NFL for Anime Fans",
    startTime: "12:45",
    endTime: "13:45",
    room: ["Dowd Room", 2],
    genre: "Panels",
    description: `
    **Hosted by:** *Bamforth Panels*\nThink football is just a boring sportsball for your dad? Think Again! Football is the nerdiest and most anime sport around, and to prove it, I'm going to explain it using exclusively Anime references and comparisons.`,
    tags: [""],
  },
  {
    id: 11,
    title: "Made in the 1900's: “Old” Anime Worth the Watch",
    startTime: "14:00",
    endTime: "15:00",
    room: ["Dowd Room", 2],
    genre: "Panels",
    description: `
    **Hosted by:** *Kawaii Neko Productions*\nDid you know that anime existed before the year 2000? What do you mean you weren't born yet? Come and learn about these older anime that are still worth watching!`,
    tags: [""],
  },
  {
    id: 12,
    title: "Why Cooking is Better in Video Games",
    startTime: "15:30",
    endTime: "16:15",
    room: ["Dowd Room", 2],
    genre: "Panels",
    description: `
    **Hosted by:** *n00dl3g@l*\nCooking is a vital skill that many find annoying... Let's see why that *doesn't* apply to video games.`,
    tags: [""],
  },
  {
    id: 13,
    title: "Samurai Cinema Showdown",
    startTime: "16:30",
    endTime: "17:30",
    room: ["Dowd Room", 2],
    genre: "Panels",
    description: `
    **Hosted by:** *Blackmoore Presents*\nFrom Kurosawa to Miike, we love tales of the samurai, but with so many films out there, it can be hard to know where to start. Come join us to discuss the best of the best and find your next favorite film!`,
    tags: [""],
  },
  {
    id: 14,
    title: "What Is Twisted Wonderland",
    startTime: "19:00",
    endTime: "20:00",
    room: ["Dowd Room", 2],
    genre: "Panels",
    description: `
    **Hosted by:** *Audra Tewell*\nYou have just been transported to a mysterious land where all your favorite Disney villains are now cute anime boys.  Find out what to do next as we give an overblot, I mean overview, of Twisted Wonderland!`,
    tags: [""],
  },
  {
    id: 15,
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
    id: 16,
    title: "Guest of Honor - Phoebe Chan",
    startTime: "13:30",
    endTime: "14:30",
    room: ["Rangos Auditorium", 2],
    genre: "Specialty",
    description:
      `**Phoebe Chan** is coming to ScottyCon 2026!\nYour favorite 2.5D fairytale idol, multi-talented singer-songwriter, voice actress, and streamer will be joining us as our Guest of Honor.`,
    tags: ["VTuber", "Creator"],
  },
  {
    id: 17,
    title: "CMU Jazz Club Performance",
    startTime: "15:00",
    endTime: "15:45",
    room: ["Rangos Auditorium", 2],
    genre: "Performance",
    description: `**Performed By:** *CMU Jazz Club*\nOur mission is to create an environment and provide musicians with the means to explore and develop their interests in the American art form of jazz. We also aim to share our music with the CMU community, providing live entertainment, a relaxing setting, stress relief, and a community of people to spend time with.

    **Setlist:**
**1.** *"Grand Prix!"* (Mario Kart World medley) arr. Zachary Smentek (original pieces by Atsuko Asahi)
**2.** *"Daydream Generation"* (YuYu Hakusho) by Matsuko Mawatari, arr. Kenechukwu Echezona (English lyrics by Sara White and Melody Sentai Harmonyranger)
**3.** *"Above the Skies of Dream Land"* (Kirby series medley) arr. Kenechukwu Echezona (original pieces by Hironobu Inagaki, Atsuyoshi Isemura, Hirokazu Ando, and Megumi Ohara)
**4.** *"Broken Rose"* (NANA medley) arr. Samyukta Athreya (original pieces by Anna Tsuchiya and Olivia Lufkin)
**5.** *"Bad Applelovania!!"* (Touhou x Undertale) by ZUN and TobyFox, arr. Kenechukwu Echezona"`,
    tags: ["Music", "Anime", "Games", "Band"],
  },
  {
    id: 18,
    title: "Tartan Wind Ensemble Performance",
    startTime: "16:00",
    endTime: "16:45",
    room: ["Rangos Auditorium", 2],
    genre: "Performance",
    description: `**Performed By:** *Tartan Wind Ensemble*\nCMU's own concert band plays arrangements of The Legend of Zelda, Spirited Away, Deltarune, and Cuphead! We're here to have fun and are always open to new members.

**Setlist:**
**1.** *Spirited Away*, Joe Hisaishi & Yumi Kimura / Kazuhiro Morita
**2.** *Legend of Zelda Medley*, Various / Lamagna & Sanders
**3.** *Cuphead*, Kristofer Maddigan / Christopher López
**4.** *Hammer of Justice*, Toby Fox / Justin Peng`,
    tags: ["Music", "Anime", "Games", "Band"],
  },
  {
    id: 19,
    title: "Masquerade",
    startTime: "17:00",
    endTime: "17:45",
    room: ["Rangos Auditorium", 2],
    genre: "Specialty",
    description: `A masquerade is a contest for cosplayers/costumers who want to show off their costumes on stage. Some cosplayers choose to perform skits and others show off their craftsmanship to compete for prizes.
At ScottyCon's masquerade, all entries will participate in a walk-on á la fashion show as an opportunity to show off their costume.`,
    tags: ["Cosplay", "Interactive"],
  },
  {
    id: 20,
    title: "Girl Band Party!!!!!",
    startTime: "18:00",
    endTime: "18:30",
    room: ["Rangos Auditorium", 2],
    genre: "Performance",
    description: `**Performed By:** *HamachiKama*\nThe most sterotypical ETC students bring you the most incredible girl band anime music!

**Setlist:**
**1.** *天使にふれたよ!* - 放課後ティータイム
**2.** *誰にもなれない私だから* - トゲナシトゲアリ
**3.** *猛独が襲う (MyGO!!!!! Cover)* - MyGO!!!!!`,
    tags: ["Music", "Band"],
  },
  {
    id: 21,
    title: "VGM and Anime Rock On Flute",
    startTime: "18:30",
    endTime: "19:30",
    room: ["Rangos Auditorium", 2],
    genre: "Performance",
    description: `**Performed By:** *Katie Shesko*\nVideo Game and Anime Cosplaying Flute Player (who plays games fast) performs your favorite video game and anime tunes!

**Setlist:**
**1.** *Skyloft* from Legend of Zelda Hyrule Warriors
**2.** *Sadness and Sorrow* from Naruto
**3.** *Duck Tales Moon Theme*
**4.** *Halo Theme*
**5.** *Corridors of Time* from ChronoTrigger
**6.** *Attack on Titan Theme*
**7.** *Legend of Zelda Tears* of the Kingdom Theme
**8.** *Novigrad Set* from The Witcher 3
**9.** *Crossing Field* by LiSa
**10.** *Weight of Life* from Xenoblade Chronicles 3`,
    tags: ["Music", "Anime", "Games"],
  },
  {
    id: 22,
    title: "Rhythm Game Arcade",
    startTime: "11:00",
    endTime: "21:00",
    room: ["Peter, Wright, McKenna Rooms", 2],
    genre: "Gaming",
    description: `**Hosted By:** *Ikigai Arcade and Rhythm Games Club*\nPresented by Rhythm Games Club and in partnership with Ikigai Arcade, ScottyCon's selection of rhythm game cabinets will be available in Peter/Wright/McKenna from 11 AM to 9 PM.

**List of Cabinets:**
- 4x Wacca
- 2x Chunithm
- Ongeki
- Groove Coaster`,
    tags: ["All-Day"],
  },
  {
    id: 23,
    title: "Arcade & Games",
    startTime: "11:00",
    endTime: "21:00",
    room: ["Pake Room", 2],
    genre: "Gaming",
    description: `**Hosted By:** *CMU Game Creation Society*\nCome play decades worth of CMU student games! You can play on Arcade, Switch, Console or PC. We have a wide variety of games that will satisfy your gamer needs.`,
    tags: ["All-Day"],
  },
  {
    id: 24,
    title: "Smash @ ScottyCon 2026",
    startTime: "11:00",
    endTime: "21:00",
    room: ["Danforth Conference Room", 2],
    genre: "Gaming",
    description: `**Hosted By:** *CMU Esports*\nSmash at ScottyCon is back! Come compete in a Smash Ultimate tournament! Open to players of all skill level and experience, try your hand with local talent. Feel free to play casually with your friends as well!`,
    tags: ["All-Day", "Beginner-Friendly"],
  },
  {
    id: 25,
    title: "Fun with Folds",
    startTime: "11:00",
    endTime: "20:00",
    room: ["Kirr Commons", 1],
    genre: "Crafts",
    description: `**Hosted By:** *Origami Club*\nStop by the Origami Club table for a fun folding session! Fold whatever you like or ask an officer to teach you a model, like the origami Scotty or a fun anime themed model, like Pikachu or Hatsune Miku!`,
    tags: ["Origami", "All-Day"],
  },
  {
    id: 26,
    title: "Crafts in Cosplay",
    startTime: "11:00",
    endTime: "21:00",
    room: ["Danforth Lounge", 2],
    genre: "Crafts",
    description: `**Hosted By:** *Cosplay@CMU*\nCome decorate photocards with our supplies! *(Photocards not provided.)* Take a break from the rest of the con and use our wide array of stickers and sleeves to deck out your cards <3. At all times, the lounge will be home to Scottycon's cherry blossom photobooth. Make sure to snap a commemorative photo with friends with the Sakura backdrop~.`,
    tags: ["Cosplay", "All-Day"],
  },
  {
    id: 27,
    title: "Learn to Play Japanese Mahjong!",
    startTime: "12:00",
    endTime: "16:00",
    room: ["Kirr Commons", 1],
    genre: "Gaming",
    description: `**Hosted By:** *Japanese Mahjong Club*\nCheck out CMU's Japanese Mahjong Club and learn how to play! Play with real mahjong sets and guided teaching with the 98-179 Introduction to Japanese Mahjong StuCo staff. No experience required! All levels of players welcome to join.`,
    tags: ["Beginner-Friendly"],
  },
  {
    id: 28,
    title: "Summer Wars Screening",
    startTime: "11:00",
    endTime: "13:00",
    room: ["McConomy Auditorium", 1],
    genre: "Anime",
    description: `ScottyCon will be screening the 2009 timeless epic by Mamoru Hosoda. See if you can spot CMU's cameo in the film!

Kenji is a shy, part-time moderator for OZ, the virtual reality world that powers everyday life, until pretty and popular Natsuki recruits him to be her fake boyfriend. While posing as an affluent suitor to Natsuki's family, Kenji finds that a rogue A.I. program has stolen his online identity, and Kenji is accused of hacking OZ and causing real-world catastrophes. As the destruction in OZ throws Natsuki's family into disarray, Kenji must unite his newfound connections to overcome an impending cyber apocalypse.`,
    tags: ["Repeating"],
  },
  {
    id: 29,
    title: "Summer Wars Screening",
    startTime: "14:00",
    endTime: "16:00",
    room: ["McConomy Auditorium", 1],
    genre: "Anime",
    description: `ScottyCon will be screening the 2009 timeless epic by Mamoru Hosoda. See if you can spot CMU's cameo in the film!

Kenji is a shy, part-time moderator for OZ, the virtual reality world that powers everyday life, until pretty and popular Natsuki recruits him to be her fake boyfriend. While posing as an affluent suitor to Natsuki's family, Kenji finds that a rogue A.I. program has stolen his online identity, and Kenji is accused of hacking OZ and causing real-world catastrophes. As the destruction in OZ throws Natsuki's family into disarray, Kenji must unite his newfound connections to overcome an impending cyber apocalypse.`,
    tags: ["Repeating"],
  },
  {
    id: 30,
    title: "Summer Wars Screening",
    startTime: "20:00",
    endTime: "22:00",
    room: ["McConomy Auditorium", 1],
    genre: "Anime",
    description: `ScottyCon will be screening the 2009 timeless epic by Mamoru Hosoda. See if you can spot CMU's cameo in the film!

Kenji is a shy, part-time moderator for OZ, the virtual reality world that powers everyday life, until pretty and popular Natsuki recruits him to be her fake boyfriend. While posing as an affluent suitor to Natsuki's family, Kenji finds that a rogue A.I. program has stolen his online identity, and Kenji is accused of hacking OZ and causing real-world catastrophes. As the destruction in OZ throws Natsuki's family into disarray, Kenji must unite his newfound connections to overcome an impending cyber apocalypse.`,
    tags: ["Repeating", "Late-Night"],
  },
  {
    id: 31,
    title: "Artist Alley",
    startTime: "11:00",
    endTime: "20:00",
    room: ["Weigand Gym", 1],
    genre: "Specialty",
    description: `**Hosted By:** *Artist Alley Club*\nAt anime and comic conventions, the artist alley is a section for independent artists to display and sell their work. There will be 100+ CMU student artists selling original and fan merch at ScottyCon's artist alley!`,
    tags: ["Merchandise", "All-Day"],
  },
  {
    id: 32,
    title: "Merchant's Hall",
    startTime: "11:00",
    endTime: "20:00",
    room: ["Weigand Gym", 1],
    genre: "Vendors",
    description: `Peruse our independent merchants in Wiegand Gymnasium!`,
    tags: ["Merchandise", "All-Day"],
  },
  {
    id: 33,
    title: "Cosplay Café (Lunch)",
    startTime: "12:00",
    endTime: "14:00",
    room: ["Danforth Lounge", 2],
    genre: "Vendors",
    description: `**Hosted By:** *Cosplay@CMU*\nStop by the Cosplay Cafe in Danforth Lounge to enjoy food during the con! We will offer premade meals, drinks, and desserts for purchase to be served by our talented cosplayers.`,
    tags: ["Food"],
  },
  {
    id: 34,
    title: "Cosplay Café (Dinner)",
    startTime: "18:00",
    endTime: "20:00",
    room: ["Danforth Lounge", 2],
    genre: "Vendors",
    description: `**Hosted By:** *Cosplay@CMU*\nStop by the Cosplay Cafe in Danforth Lounge to enjoy food during the con! We will offer premade meals, drinks, and desserts for purchase to be served by our talented cosplayers.`,
    tags: ["Food"],
  },
  {
    id: 35,
    title: "Mos Eisley Cantina",
    startTime: "13:00",
    endTime: "18:00",
    room: ["Wean Commons", 1],
    genre: "Vendors",
    description: `**Hosted By:** *Star Wars Club*\nTransport your taste-buds to a galaxy far, far away! Enjoy Star Wars themed Wookie cookies, R2-D2 pancakes, Death Star waffles, Darth Vader paninis, Boba (Fett) and more!`,
    tags: ["Food"],
  },
  {
    id: 36,
    title: "Chinese Treats",
    startTime: "13:00",
    endTime: "18:00",
    room: ["Wean Commons", 1],
    genre: "Vendors",
    description: `**Hosted By:** *Awareness of Roots in Chinese Culture*\nWe are a cultural organization dedicated to spreading awareness for Chinese culture around the CMU and Pittsburgh community! Visit our booth for delicious pork dumplings and tangyuan.`,
    tags: ["Food"],
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