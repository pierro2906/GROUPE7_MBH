import { ReactNode } from 'react';

export type Signalement = {
  name: string;
  text: string;
  time: number;
  textCount: number;
  color: string;
  icon: ReactNode;
};
