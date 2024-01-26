export interface TimelineObject {
  id: number;
  type: string;
  start: string;
  end: string;
  position: string[];
  company: string;
  desc: string[];
  description: string;
  hidden: boolean;
}

export interface TimelineLifeObject {
  id: number;
  start: string;
  end: string;
  title: string;
  subtitle: string;
  description: string;
  cover?: string;
  images?: string[];
  hidden: boolean;
}
