declare interface Painting {
  name: string;
  year: number;
  description: string;
  source: string;
  artist: {
    image: {
      src: string;
      width: number;
      height: number;
    };
    name: string;
  };
  images: {
    thumbnail: {
      src: string;
      height: number;
      width: number;
    };
    hero: {
      small: {
        src: string;
        width: number;
        height: number;
      };
      large: {
        src: string;
        width: number;
        height: number;
      };
    };
    gallery: {
      src: string;
      width: number;
      height: number;
    };
  };
}
