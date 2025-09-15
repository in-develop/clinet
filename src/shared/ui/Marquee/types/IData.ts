interface IData {
  id: string;
  text: string;
  image?: {
    src: string;
    alt: string;
  };
}

export type { IData };
