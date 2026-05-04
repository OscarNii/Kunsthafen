import { AppEvent } from "../types";
import { addDays, subDays, setHours, setMinutes } from "date-fns";

const today = new Date();

export const MOCK_EVENTS: AppEvent[] = [
  {
    id: "e1",
    title: "VIERACT",
    description: "A profound exploration of minimal muzik and neon lighting, questioning the boundaries of perception.",
    type: "exhibition",
    startDate: setHours(setMinutes(addDays(today, 2), 0), 10).toISOString(),
    endDate: setHours(setMinutes(addDays(today, 10), 0), 18).toISOString(),
    imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507676184212-d0330a15183c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518991316538-23c21cb03598?q=80&w=1000&auto=format&fit=crop" 
    ],
    location: "Main Gallery",
  },
  {
    id: "e2",
    title: "ABGESAGT/ CANCELD: MISSILES",
    description: "Das Musikwochenende mit der Reihe Missilies und Instant Music Club, ist eine von Musiker*innen aus dem Kunsthaus Rhenania organisierte Veranstaltung. Sie findet jeden 2. Monat im Kunsthafen statt.",
    type: "workshop",
    startDate: setHours(setMinutes(addDays(today, 5), 30), 14).toISOString(),
    endDate: setHours(setMinutes(addDays(today, 5), 30), 17).toISOString(),
    imageUrl: "https://kunsthafen.com/wp-content/uploads/2025/01/Missiles-2048x2012.jpg",
    images: [
      "https://kunsthafen.com/wp-content/uploads/2025/01/Missiles-2048x2012.jpg",
      "https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620023474771-b20f18d7f722?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1625902148154-8c823019808e?q=80&w=1000&auto=format&fit=crop"
    ],
    location: "Studio 1",
  },
  {
    id: "e3",
    title: "Silent Echoes - Performance Art",
    description: "An audio-visual performance blending contemporary dance with generative ambient soundscapes.",
    type: "performance",
    startDate: setHours(setMinutes(addDays(today, 7), 0), 20).toISOString(),
    endDate: setHours(setMinutes(addDays(today, 7), 30), 22).toISOString(),
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a1a2a5f564ab?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1493225457124-a1a2a5f564ab?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507676184212-d0330a15183c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533174000255-a2df6a1613bc?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop"
    ],
    location: "The Black Box",
    isRecurring: true,
    seriesId: "s1",
  },
  {
    id: "e4",
    title: "Silent Echoes - Performance Art",
    description: "An audio-visual performance blending contemporary dance with generative ambient soundscapes.",
    type: "performance",
    startDate: setHours(setMinutes(addDays(today, 14), 0), 20).toISOString(),
    endDate: setHours(setMinutes(addDays(today, 14), 30), 22).toISOString(),
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a1a2a5f564ab?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1493225457124-a1a2a5f564ab?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469504512102-900f29606341?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504609774514-cb92d2e29302?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?q=80&w=1000&auto=format&fit=crop"
    ],
    location: "The Black Box",
    isRecurring: true,
    seriesId: "s1",
  },
  {
    id: "e5",
    title: "Future of Web Portfolios",
    description: "A seminar on designing memorable personal websites and avoiding cookie-cutter templates.",
    type: "workshop",
    startDate: setHours(setMinutes(subDays(today, 1), 0), 18).toISOString(),
    endDate: setHours(setMinutes(subDays(today, 1), 0), 20).toISOString(),
    imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
    ],
    location: "Seminar Room B",
  },
  {
    id: "e6",
    title: "Kinetic Sculptures in Motion",
    description: "A performance where robotic installations interact with human dancers in a choreographed mechanical ballet.",
    type: "performance",
    startDate: setHours(setMinutes(addDays(today, 10), 0), 19).toISOString(),
    endDate: setHours(setMinutes(addDays(today, 10), 0), 21).toISOString(),
    imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?q=80&w=1000&auto=format&fit=crop"
    ],
    location: "Main Hall",
  },
  {
    id: "e7",
    title: "Cyberpunk Soundscapes",
    description: "An immersive electronic music experience with reactive visuals and high-fidelity spatial audio.",
    type: "performance",
    startDate: setHours(setMinutes(addDays(today, 12), 30), 21).toISOString(),
    endDate: setHours(setMinutes(addDays(today, 13), 0), 0).toISOString(),
    imageUrl: "https://images.unsplash.com/photo-1514525253344-762272821362?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1514525253344-762272821362?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493225457124-a1a2a5f564ab?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop"
    ],
    location: "The Black Box",
  },
  {
    id: "e8",
    title: "The Void - Immersive Theater",
    description: "A site-specific theater piece where the audience moves through the dark corridors of the Kunsthafen.",
    type: "performance",
    startDate: setHours(setMinutes(addDays(today, 16), 0), 22).toISOString(),
    endDate: setHours(setMinutes(addDays(today, 16), 0), 23).toISOString(),
    imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop"
    ],
    location: "Underground Vaults",
  }
];
