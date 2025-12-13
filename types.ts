
export interface Member {
  name: string;
  age: string;
  state: string;
  skills: string;
  date: string;
}

export interface Benefit {
  id: number;
  text: string;
  highlight?: boolean;
}

export interface SocialProof {
  id: number;
  type: 'earning' | 'chat' | 'ad';
  imageUrl: string;
  caption: string;
}

export interface LibraryCategory {
  title: string;
  icon: string;
  description: string;
  items: string[];
}