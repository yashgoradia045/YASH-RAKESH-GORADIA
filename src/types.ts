export interface MenuItem {
  id: string;
  title: string;
  price: number;
  description: string;
  category: 'classics' | 'signatures' | 'shakes';
  image: string;
  isVeg: boolean;
  isBestSeller?: boolean;
}

export interface QuizQuestion {
  id: number;
  question: string;
  choices: {
    text: string;
    value: string;
    desc: string;
  }[];
}

export interface SmoreStep {
  title: string;
  options: {
    id: string;
    name: string;
    description: string;
    priceModifier: number;
    color: string; // for visualizer rendering
    emoji: string;
  }[];
}

export type ToastType = 'success' | 'info' | 'fire';

export interface ToastMessage {
  id: string;
  text: string;
  type: ToastType;
}

export interface ChronologyAct {
  act: number;
  title: string;
  subtitle: string;
  description: string;
  stylistSecret: string;
  image: string;
  cameraSettings: {
    shutter: string;
    aperture: string;
    iso: string;
    focusPoint: string;
  };
}
