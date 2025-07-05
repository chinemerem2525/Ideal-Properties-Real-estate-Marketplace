export interface Property {
  id: string;
  title: string;
  location: string;
  isFeatured: boolean;
  mainImage: string;
  images: string[];
  descriptions: string[];
  listedDate: string;
    // listedDate: string;
  price: string;
  rooms: number;
  baths: number;
  area: string;
  beds: number;
  type: string;
  badge: string;
  yearBuilt: number;
  status: string;
  features: { icon: string; title: string; size: string }[];
  // features: string[];
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
