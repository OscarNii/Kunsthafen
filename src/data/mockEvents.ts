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
      "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
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
      "https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1571689252452-2bd6c1e3bd29?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
    imageUrl: "https://images.unsplash.com/photo-1578920570481-305090930f1d?q=80&w=2374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1578920570481-305090930f1d?q=80&w=2374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1593573969589-c416b9c926de?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1681830630610-9f26c9729b75?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1571689252452-2bd6c1e3bd29?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
    imageUrl: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1533106958148-daaeab8b83fe?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1681830630610-9f26c9729b75?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1681830630610-9f26c9729b75?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1533106958148-daaeab8b83fe?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
    imageUrl: "https://plus.unsplash.com/premium_photo-1681830630610-9f26c9729b75?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1593573969589-c416b9c926de?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1578920570481-305090930f1d?q=80&w=2374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1571435763834-4d6fbb550bb7?q=80&w=2352&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
    imageUrl: "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1681830630610-9f26c9729b75?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1551696785-927d4ac2d35b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1571435763834-4d6fbb550bb7?q=80&w=2352&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
    imageUrl: "https://images.unsplash.com/photo-1511715282680-fbf93a50e721?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1533106958148-daaeab8b83fe?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1571689252452-2bd6c1e3bd29?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1681830630610-9f26c9729b75?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
    imageUrl: "https://plus.unsplash.com/premium_photo-1681830630610-9f26c9729b75?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1563726351554-179049599895?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1593573969589-c416b9c926de?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1578920570481-305090930f1d?q=80&w=2374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    location: "Underground Vaults",
  }
];
