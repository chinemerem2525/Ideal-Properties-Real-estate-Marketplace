export interface Property {
  id: string;
  title: string;
  location: string;
  isFeatured: boolean;
  images: string[];
  descriptions: string[];
  price: string;
  rooms: number;
  baths: number;
  area: string;
  beds: number;
  yearBuilt: number;
  status: string;
  features: { icon: string; title: string; size: string }[];
  amenities: string[];
  video: { url: string; thumbnail: string };
  author: {
    name: string;
    title: string;
    image: string;
    bio: string;
    social: {
      facebook?: string;
      twitter?: string;
      linkedin?: string;
      youtube?: string;
    };
  };
  contact: {
    phone: string;
    whatsapp: string;
  };
}
