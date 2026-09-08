export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  thumbnail: string;
  youtubeUrl: string;
  youtubeId?: string;
  channel?: string;
  style?: string;
  views?: string;
  retention?: string;
  techniques?: string[];
  client?: string;
}

export interface SkillItem {
  name: string;
  role: string;
  badge: 'Pr' | 'Ae' | 'Ps' | 'DaVinci';
  color: string;
  bgColor: string;
  borderColor: string;
}

export interface ContactInfo {
  email: string;
  discord: string;
  twitter: string;
  location: string;
}
