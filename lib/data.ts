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