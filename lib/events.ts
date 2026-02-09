

export interface Event {
  id: string;
  title: string;
  startTime: string; // Format: "HH:MM"
  endTime: string;   // Format: "HH:MM"
  room: string;
  genre: string;
  description: string;
  tags: string[];
}

export const rooms = [
  "Main Hall",
  "Conference Room A",
  "Conference Room B",
  "Workshop Space",
  "Gaming Lounge",
];

export const events: Event[] = [
  {
    id: "1",
    title: "Opening Ceremony",
    startTime: "11:00",
    endTime: "11:30",
    room: "Main Hall",
    genre: "General",
    description: "Kick off ScottyCon 2026 with our opening ceremony and welcome announcements.",
    tags: ["opening", "ceremony", "general"],
  },
  {
    id: "2",
    title: "Web Development Workshop",
    startTime: "11:30",
    endTime: "13:00",
    room: "Workshop Space",
    genre: "Workshop",
    description: "Learn modern web development techniques with React and Next.js.",
    tags: ["workshop", "web", "react", "nextjs"],
  },
  {
    id: "3",
    title: "AI Panel Discussion",
    startTime: "12:00",
    endTime: "13:30",
    room: "Conference Room A",
    genre: "Panel",
    description: "Industry experts discuss the future of AI and machine learning.",
    tags: ["panel", "ai", "discussion"],
  },
  {
    id: "4",
    title: "Game Tournament: Smash Bros",
    startTime: "11:00",
    endTime: "15:00",
    room: "Gaming Lounge",
    genre: "Gaming",
    description: "Compete in our Super Smash Bros Ultimate tournament for prizes!",
    tags: ["gaming", "tournament", "smash"],
  },
  {
    id: "5",
    title: "Lunch Break",
    startTime: "13:00",
    endTime: "14:00",
    room: "Main Hall",
    genre: "Break",
    description: "Grab some food and network with other attendees.",
    tags: ["break", "lunch", "networking"],
  },
  {
    id: "6",
    title: "Career Fair",
    startTime: "14:00",
    endTime: "16:00",
    room: "Conference Room B",
    genre: "Career",
    description: "Meet with companies and learn about internship and job opportunities.",
    tags: ["career", "jobs", "networking"],
  },
  {
    id: "7",
    title: "Cybersecurity Workshop",
    startTime: "14:30",
    endTime: "16:00",
    room: "Workshop Space",
    genre: "Workshop",
    description: "Hands-on introduction to ethical hacking and cybersecurity fundamentals.",
    tags: ["workshop", "security", "hacking"],
  },
  {
    id: "8",
    title: "Tech Talk: Open Source",
    startTime: "16:30",
    endTime: "17:30",
    room: "Conference Room A",
    genre: "Talk",
    description: "Contributing to open source: How to get started and make an impact.",
    tags: ["talk", "opensource", "community"],
  },
  {
    id: "9",
    title: "Game Jam Final Presentations",
    startTime: "17:30",
    endTime: "19:00",
    room: "Main Hall",
    genre: "Gaming",
    description: "Teams present their 24-hour game jam creations.",
    tags: ["gaming", "gamejam", "presentation"],
  },
  {
    id: "10",
    title: "Closing Ceremony & Prizes",
    startTime: "19:00",
    endTime: "21:00",
    room: "Main Hall",
    genre: "General",
    description: "Wrap up ScottyCon 2026 with awards, prizes, and closing remarks.",
    tags: ["closing", "ceremony", "prizes"],
  },
];
