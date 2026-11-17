export interface Achievement {
  id: string;
  icon: string;
  title: string;
  category: string;
  date?: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    id: "nasa-space-apps",
    icon: "rocket",
    title: "Participant, NASA Space Apps Challenge 2026 (Virudhunagar local event)",
    category: "NASA Hackathon",
    date: "2026",
    description:
      "Participant at the NASA Space Apps Challenge 2026 (Virudhunagar local event) in a team of 3. Built CELESTIAL X — spatiotemporal fire-event association method (FIRE-FUSE) grouping NASA FIRMS MODIS and VIIRS satellite hotspot detections into persistent events using H3 indexing and Haversine distance.",
  },
  {
    id: "ai-for-bharat",
    icon: "trophy",
    title: "Participant, AI For Bharat Hackathon 2026",
    category: "National Hackathon",
    date: "2026",
    description:
      "Selected at the AI For Bharat Hackathon 2026 with Kisan-Sahayak — a multilingual NLP assistant providing rural farmers access to crop disease diagnostics and market prices in Tamil, Hindi, and English.",
  },
  {
    id: "college-expo",
    icon: "award",
    title: "College Project Expo Recognition",
    category: "Technical Exhibition",
    date: "2026",
    description:
      "Showcased the Live City Pulse ETL pipeline at the college project expo — automated pipeline ingesting weather and AQI data across five global cities into an interactive public dashboard.",
  },
  {
    id: "google-cloud-cert",
    icon: "cloud",
    title: "Google Cloud Data Analytics — Grade O (Outstanding)",
    category: "Cloud Certification",
    date: "2026",
    description:
      "Completed 8-week cloud data analytics programme under AICTE and EduSkills, supported by Google Cloud. Achieved Grade O (Outstanding, the programme's highest performance tier).",
  },
];
