export type EventType = "exhibition" | "workshop" | "performance";

export interface AppEvent {
  id: string;
  title: string;
  description: string;
  type: EventType;
  startDate: string; // ISO 8601
  endDate: string; // ISO 8601
  imageUrl: string;
  images?: string[];
  isRecurring?: boolean;
  seriesId?: string;
  location?: string;
}

export interface EventSeries {
  id: string;
  title: string;
  description: string;
}
