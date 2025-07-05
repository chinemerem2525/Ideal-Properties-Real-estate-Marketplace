import { Injectable } from '@angular/core';
import { Property } from './../../model/property.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailService {


  private Api = 'http://localhost:5000/api/properties'


  private allPropertie: Property[] = [
    {
      id: 'IP56729',
      title: 'Luxury 3 Bedroom Maisonette with BQ',
      location: 'Ikoyi, Lagos',
      isFeatured: false,
      mainImage: '../../assets/img/gallery/10.jpg',
      images: [
        '../../../assets/img/img-slide/31.jpg',
        '../../../assets/img/img-slide/32.jpg',
        '../../../assets/img/img-slide/33.jpg',
        '../../../assets/img/img-slide/34.jpg',
        '../../../assets/img/img-slide/35.jpg'
      ],
      descriptions: [
        'Experience ultimate comfort and breathtaking waterfront views in this elegant 4-bedroom duplex, available for daily rent. Perfect for vacations, business stays, or private getaways, this home features spacious en-suite bedrooms, a fully equipped kitchen, and stylish living areas designed for relaxation.',
        'The modern kitchen with central island leads to a unique breakfast family room with glass walls and access to a separate utility room.'
      ],
      listedDate: '15-02-2025',
      price: '₦800,000,000',
      rooms: 7,
      baths: 2,
      type: 'Maisonette',
      badge: 'Sale',
      area: '120 sqft',
      beds: 7,
      yearBuilt: 2025,
      status: 'For Sale',
      features: [
        { icon: 'flaticon-double-bed', title: 'Living Room', size: '20 x 16 sq feet' },
        { icon: 'flaticon-double-bed', title: 'Garage', size: '20 x 16 sq feet' },
        { icon: 'flaticon-double-bed', title: 'Dining Area', size: '20 x 16 sq feet' },
        { icon: 'flaticon-double-bed', title: 'Bedroom', size: '20 x 16 sq feet' },
        { icon: 'flaticon-double-bed', title: 'Bathroom', size: '20 x 16 sq feet' },
        { icon: 'flaticon-double-bed', title: 'Gym Area', size: '20 x 16 sq feet' },
        { icon: 'flaticon-double-bed', title: 'Garden', size: '20 x 16 sq feet' },
        { icon: 'flaticon-double-bed', title: 'Parking', size: '20 x 16 sq feet' }
      ],
      amenities: [
        'Air Conditioning', 'Gym', 'Microwave', 'Swimming Pool', 'WiFi',
        'Barbeque', 'Recreation', 'Basketball Court', 'Fireplace',
        'Refrigerator', 'Window Coverings', 'Washer', '24x7 Security', 'Indoor Game'
      ],
      video: {
        url: 'https://www.youtube.com/embed/eWUxqVFBq74?autoplay=1&showinfo=0',
        thumbnail: '../../../assets/img/others/5.jpg'
      },
      author: {
        name: 'Vanessa E. Hartwell',
        title: 'Senior Realtor',
        image: '../../../assets/img/team/2.jpg',
        bio: "I'm an experienced realtor known for my client-first approach and strong negotiation skills in luxury and commercial real estate.",
        social: {
          facebook: 'https://facebook.com/vanessa.hartwell.realtor',
          twitter: 'https://twitter.com/vanessa_hartwell',
          linkedin: 'https://linkedin.com/in/vanessahartwell',
          youtube: 'https://youtube.com/@vanessahartwellrealtor'
        }
      },
      contact: {
        phone: '09033246432',
        whatsapp: '2349033246432'
      }
    },
  {
    id: 'IP56730',
    title: 'Premium 4 Bedroom Duplex with Sea View',
    location: 'Banana Island, Lagos',
    isFeatured: true,
    mainImage: '../../assets/img/img-slide/21.jpg',
    images: [
      '../../../assets/img/img-slide/31.jpg',
      '../../../assets/img/img-slide/32.jpg',
      '../../../assets/img/img-slide/33.jpg',
      '../../../assets/img/img-slide/34.jpg',
      '../../../assets/img/img-slide/35.jpg'
    ],
    descriptions: [
      'This exclusive 4-bedroom duplex offers unmatched views in one of Lagos\' most secure and luxurious areas.',
      'Ideal for family living with high-end finishes and state-of-the-art security.'
    ],
    listedDate: '15-02-2025',
    price: '₦1,200,000,000',
    rooms: 8,
    baths: 4,
    area: '200 sqft',
    beds: 8,
    type: 'Duplex',
    badge: 'For Sale',
    yearBuilt: 2026,
    status: 'For Sale',
    features: [
      { icon: 'flaticon-double-bed', title: 'Living Room', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Garage', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Dining Area', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Bedroom', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Bathroom', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Gym Area', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Garden', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Parking', size: '20 x 16 sq feet' }
    ],
    amenities: [
      'Air Conditioning', 'Gym', 'Microwave', 'Swimming Pool', 'WiFi',
      'Barbeque', 'Recreation', 'Basketball Court', 'Fireplace',
      'Refrigerator', 'Window Coverings', 'Washer', '24x7 Security', 'Indoor Game'
    ],
    video: {
      url: 'https://www.youtube.com/embed/eWUxqVFBq74?autoplay=1&showinfo=0',
      thumbnail: '../../../assets/img/others/5.jpg'
    },
    author: {
      name: 'Vanessa E. Hartwell',
      title: 'Senior Realtor',
      image: '../../../assets/img/team/2.jpg',
      bio: "I'm an experienced realtor known for my client-first approach and strong negotiation skills in luxury and commercial real estate.",
      social: {
        facebook: 'https://facebook.com/vanessa.hartwell.realtor',
        twitter: 'https://twitter.com/vanessa_hartwell',
        linkedin: 'https://linkedin.com/in/vanessahartwell',
        youtube: 'https://youtube.com/@vanessahartwellrealtor'
      }
    },
    contact: {
      phone: '09033246432',
      whatsapp: '2349033246432'
    }
  },
  {
    id: 'IP56731',
    title: 'Modern 5 Bedroom Detached Duplex',
    location: 'Lekki Phase 2, Lagos',
    isFeatured: true,
    mainImage: '../../assets/img/img-slide/32.jpg',
    images: [
      '../../../assets/img/img-slide/31.jpg',
      '../../../assets/img/img-slide/32.jpg',
      '../../../assets/img/img-slide/33.jpg',
      '../../../assets/img/img-slide/34.jpg',
      '../../../assets/img/img-slide/35.jpg'
    ],
    descriptions: [
      'A beautiful 5-bedroom luxury duplex with easy access to Lekki-Epe Expressway and great infrastructure.',
      'Perfect for families seeking modern comfort in Lekki Phase 2.'
    ],
    listedDate: '15-02-2025',
    price: '₦650,000,000',
    rooms: 9,
    baths: 5,
    type: 'Detached Duplex',
    badge: 'For Rent',
    area: '250 sqft',
    beds: 9,
    yearBuilt: 2025,
    status: 'For Sale',
    features: [
      { icon: 'flaticon-double-bed', title: 'Living Room', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Garage', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Dining Area', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Bedroom', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Bathroom', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Gym Area', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Garden', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Parking', size: '20 x 16 sq feet' }
    ],
    amenities: [
      'Air Conditioning', 'Gym', 'Microwave', 'Swimming Pool', 'WiFi',
      'Barbeque', 'Recreation', 'Basketball Court', 'Fireplace',
      'Refrigerator', 'Window Coverings', 'Washer', '24x7 Security', 'Indoor Game'
    ],
    video: {
      url: 'https://www.youtube.com/embed/eWUxqVFBq74?autoplay=1&showinfo=0',
      thumbnail: '../../../assets/img/others/5.jpg'
    },
    author: {
      name: 'Vanessa E. Hartwell',
      title: 'Senior Realtor',
      image: '../../../assets/img/team/2.jpg',
      bio: "I'm an experienced realtor known for my client-first approach and strong negotiation skills in luxury and commercial real estate.",
      social: {
        facebook: 'https://facebook.com/vanessa.hartwell.realtor',
        twitter: 'https://twitter.com/vanessa_hartwell',
        linkedin: 'https://linkedin.com/in/vanessahartwell',
        youtube: 'https://youtube.com/@vanessahartwellrealtor'
      }
    },
    contact: {
      phone: '09033246432',
      whatsapp: '2349033246432'
    }
  },
  {
    id: 'IP56732',
    title: 'Elegant 4 Bedroom Terrace House',
    location: 'Ikate, Lekki',
    isFeatured: false,
    mainImage: '../../assets/img/service/21.jpg',
    images: [
      '../../../assets/img/img-slide/31.jpg',
      '../../../assets/img/img-slide/32.jpg',
      '../../../assets/img/img-slide/33.jpg',
      '../../../assets/img/img-slide/34.jpg',
      '../../../assets/img/img-slide/35.jpg'
    ],
    descriptions: [
      'A charming and well-designed 4-bedroom terrace house in a serene part of Ikate Lekki.',
      'Secure estate with modern finishes and ample parking space.'
    ],
    listedDate: '15-02-2025',
    price: '₦450,000,000',
    rooms: 6,
    baths: 4,
    type: 'Terrace',
    badge: 'For Sale',
    area: '180 sqft',
    beds: 6,
    yearBuilt: 2025,
    status: 'For Sale',
    features: [
      { icon: 'flaticon-double-bed', title: 'Living Room', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Garage', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Dining Area', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Bedroom', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Bathroom', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Gym Area', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Garden', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Parking', size: '20 x 16 sq feet' }
    ],
    amenities: [
      'Air Conditioning', 'Gym', 'Microwave', 'Swimming Pool', 'WiFi',
      'Barbeque', 'Recreation', 'Basketball Court', 'Fireplace',
      'Refrigerator', 'Window Coverings', 'Washer', '24x7 Security', 'Indoor Game'
    ],
    video: {
      url: 'https://www.youtube.com/embed/eWUxqVFBq74?autoplay=1&showinfo=0',
      thumbnail: '../../../assets/img/others/5.jpg'
    },
    author: {
      name: 'Vanessa E. Hartwell',
      title: 'Senior Realtor',
      image: '../../../assets/img/team/2.jpg',
      bio: "I'm an experienced realtor known for my client-first approach and strong negotiation skills in luxury and commercial real estate.",
      social: {
        facebook: 'https://facebook.com/vanessa.hartwell.realtor',
        twitter: 'https://twitter.com/vanessa_hartwell',
        linkedin: 'https://linkedin.com/in/vanessahartwell',
        youtube: 'https://youtube.com/@vanessahartwellrealtor'
      }
    },
    contact: {
      phone: '09033246432',
      whatsapp: '2349033246432'
    }
  },
  {
    id: 'IP56733',
    title: 'Waterfront Luxury 5 Bedroom Duplex',
    location: 'Eko Atlantic City, Lagos',
    isFeatured: true,
    mainImage: '../../assets/img/service/31.jpg',
    images: [
      '../../../assets/img/img-slide/31.jpg',
      '../../../assets/img/img-slide/32.jpg',
      '../../../assets/img/img-slide/33.jpg',
      '../../../assets/img/img-slide/34.jpg',
      '../../../assets/img/img-slide/35.jpg'
    ],
    descriptions: [
      'Experience modern waterfront living in this spacious 5-bedroom duplex at Eko Atlantic, a secure and luxurious city built on reclaimed land.',
      'Enjoy panoramic ocean views and premium neighborhood amenities.'
    ],
    listedDate: '15-02-2025',
    price: '₦1,500,000,000',
    rooms: 10,
    baths: 5,
    type: 'Duplex',
    badge: 'For Sale',
    area: '300 sqft',
    beds: 10,
    yearBuilt: 2026,
    status: 'For Sale',
    features: [
      { icon: 'flaticon-double-bed', title: 'Living Room', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Garage', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Dining Area', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Bedroom', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Bathroom', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Gym Area', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Garden', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Parking', size: '20 x 16 sq feet' }
    ],
    amenities: [
      'Air Conditioning', 'Gym', 'Microwave', 'Swimming Pool', 'WiFi',
      'Barbeque', 'Recreation', 'Basketball Court', 'Fireplace',
      'Refrigerator', 'Window Coverings', 'Washer', '24x7 Security', 'Indoor Game'
    ],
    video: {
      url: 'https://www.youtube.com/embed/eWUxqVFBq74?autoplay=1&showinfo=0',
      thumbnail: '../../../assets/img/others/5.jpg'
    },
    author: {
      name: 'Vanessa E. Hartwell',
      title: 'Senior Realtor',
      image: '../../../assets/img/team/2.jpg',
      bio: "I'm an experienced realtor known for my client-first approach and strong negotiation skills in luxury and commercial real estate.",
      social: {
        facebook: 'https://facebook.com/vanessa.hartwell.realtor',
        twitter: 'https://twitter.com/vanessa_hartwell',
        linkedin: 'https://linkedin.com/in/vanessahartwell',
        youtube: 'https://youtube.com/@vanessahartwellrealtor'
      }
    },
    contact: {
      phone: '09033246432',
      whatsapp: '2349033246432'
    }
  },
  {
    id: 'IP56734',
    title: 'Elegant 4 Bedroom Villa',
    location: 'Oniru, Victoria Island',
    isFeatured: false,
    mainImage: '../../assets/img/others/8.png',
    images: [
      '../../../assets/img/img-slide/31.jpg',
      '../../../assets/img/img-slide/32.jpg',
      '../../../assets/img/img-slide/33.jpg',
      '../../../assets/img/img-slide/34.jpg',
      '../../../assets/img/img-slide/35.jpg'
    ],
    descriptions: [
      'A beautifully designed 4-bedroom villa in Oniru, Victoria Island with elegant finishes and secure surroundings.',
      'Perfect for those seeking easy access to Victoria Island’s business hub.'
    ],
    listedDate: '15-02-2025',
    price: '₦900,000,000',
    rooms: 8,
    baths: 4,
    type: 'Villa',
    badge: 'For Sale',
    area: '220 sqft',
    beds: 8,
    yearBuilt: 2025,
    status: 'For Sale',
    features: [
      { icon: 'flaticon-double-bed', title: 'Living Room', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Garage', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Dining Area', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Bedroom', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Bathroom', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Gym Area', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Garden', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Parking', size: '20 x 16 sq feet' }
    ],
    amenities: [
      'Air Conditioning', 'Gym', 'Microwave', 'Swimming Pool', 'WiFi',
      'Barbeque', 'Recreation', 'Basketball Court', 'Fireplace',
      'Refrigerator', 'Window Coverings', 'Washer', '24x7 Security', 'Indoor Game'
    ],
    video: {
      url: 'https://www.youtube.com/embed/eWUxqVFBq74?autoplay=1&showinfo=0',
      thumbnail: '../../../assets/img/others/5.jpg'
    },
    author: {
      name: 'Vanessa E. Hartwell',
      title: 'Senior Realtor',
      image: '../../../assets/img/team/2.jpg',
      bio: "I'm an experienced realtor known for my client-first approach and strong negotiation skills in luxury and commercial real estate.",
      social: {
        facebook: 'https://facebook.com/vanessa.hartwell.realtor',
        twitter: 'https://twitter.com/vanessa_hartwell',
        linkedin: 'https://linkedin.com/in/vanessahartwell',
        youtube: 'https://youtube.com/@vanessahartwellrealtor'
      }
    },
    contact: {
      phone: '09033246432',
      whatsapp: '2349033246432'
    }
  },
  {
    id: 'IP56735',
    title: 'Stylish 4 Bedroom Penthouse',
    location: 'Osapa London, Lekki',
    isFeatured: true,
    mainImage: '../../assets/img/product/3.png',
    images: [
      '../../../assets/img/img-slide/31.jpg',
      '../../../assets/img/img-slide/32.jpg',
      '../../../assets/img/img-slide/33.jpg',
      '../../../assets/img/img-slide/34.jpg',
      '../../../assets/img/img-slide/35.jpg'
    ],
    descriptions: [
      'A stylish 4-bedroom penthouse apartment with panoramic views and world-class amenities in Osapa London.',
      'Excellent choice for upscale living close to Lekki Conservation Centre.'
    ],
    listedDate: '15-02-2025',
    price: '₦950,000,000',
    rooms: 8,
    baths: 4,
    type: 'Penthouse',
    badge: 'For Sale',
    area: '230 sqft',
    beds: 8,
    yearBuilt: 2026,
    status: 'For Sale',
    features: [
      { icon: 'flaticon-double-bed', title: 'Living Room', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Garage', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Dining Area', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Bedroom', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Bathroom', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Gym Area', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Garden', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Parking', size: '20 x 16 sq feet' }
    ],
    amenities: [
      'Air Conditioning', 'Gym', 'Microwave', 'Swimming Pool', 'WiFi',
      'Barbeque', 'Recreation', 'Basketball Court', 'Fireplace',
      'Refrigerator', 'Window Coverings', 'Washer', '24x7 Security', 'Indoor Game'
    ],
    video: {
      url: 'https://www.youtube.com/embed/eWUxqVFBq74?autoplay=1&showinfo=0',
      thumbnail: '../../../assets/img/others/5.jpg'
    },
    author: {
      name: 'Vanessa E. Hartwell',
      title: 'Senior Realtor',
      image: '../../../assets/img/team/2.jpg',
      bio: "I'm an experienced realtor known for my client-first approach and strong negotiation skills in luxury and commercial real estate.",
      social: {
        facebook: 'https://facebook.com/vanessa.hartwell.realtor',
        twitter: 'https://twitter.com/vanessa_hartwell',
        linkedin: 'https://linkedin.com/in/vanessahartwell',
        youtube: 'https://youtube.com/@vanessahartwellrealtor'
      }
    },
    contact: {
      phone: '09033246432',
      whatsapp: '2349033246432'
    }
  },
  {
    id: 'IP56736',
    title: 'Modern 3 Bedroom Apartment',
    location: 'Chevron Drive, Lekki',
    isFeatured: false,
    mainImage: '../../assets/img/product-3/2.jpg',
    images: [
      '../../../assets/img/img-slide/31.jpg',
      '../../../assets/img/img-slide/32.jpg',
      '../../../assets/img/img-slide/33.jpg',
      '../../../assets/img/img-slide/34.jpg',
      '../../../assets/img/img-slide/35.jpg'
    ],
    descriptions: [
      'A spacious 3-bedroom apartment in the prestigious Chevron Drive neighborhood.',
      'Designed with modern finishes and a gated secure environment.'
    ],
    listedDate: '15-02-2025',
    price: '₦500,000,000',
    rooms: 5,
    baths: 3,
    type: 'Apartment',
    badge: 'For Rent',
    area: '160 sqft',
    beds: 5,
    yearBuilt: 2025,
    status: 'For Sale',
    features: [
      { icon: 'flaticon-double-bed', title: 'Living Room', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Garage', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Dining Area', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Bedroom', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Bathroom', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Gym Area', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Garden', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Parking', size: '20 x 16 sq feet' }
    ],
    amenities: [
      'Air Conditioning', 'Gym', 'Microwave', 'Swimming Pool', 'WiFi',
      'Barbeque', 'Recreation', 'Basketball Court', 'Fireplace',
      'Refrigerator', 'Window Coverings', 'Washer', '24x7 Security', 'Indoor Game'
    ],
    video: {
      url: 'https://www.youtube.com/embed/eWUxqVFBq74?autoplay=1&showinfo=0',
      thumbnail: '../../../assets/img/others/5.jpg'
    },
    author: {
      name: 'Vanessa E. Hartwell',
      title: 'Senior Realtor',
      image: '../../../assets/img/team/2.jpg',
      bio: "I'm an experienced realtor known for my client-first approach and strong negotiation skills in luxury and commercial real estate.",
      social: {
        facebook: 'https://facebook.com/vanessa.hartwell.realtor',
        twitter: 'https://twitter.com/vanessa_hartwell',
        linkedin: 'https://linkedin.com/in/vanessahartwell',
        youtube: 'https://youtube.com/@vanessahartwellrealtor'
      }
    },
    contact: {
      phone: '09033246432',
      whatsapp: '2349033246432'
    }
  },
  {
    id: 'IP56737',
    title: '5 Bedroom Fully Detached Duplex',
    location: 'Victoria Island Extension, Lagos',
    isFeatured: true,
    mainImage: '../../assets/img/product-3/3.jpg',
    images: [
      '../../../assets/img/img-slide/31.jpg',
      '../../../assets/img/img-slide/32.jpg',
      '../../../assets/img/img-slide/33.jpg',
      '../../../assets/img/img-slide/34.jpg',
      '../../../assets/img/img-slide/35.jpg'
    ],
    descriptions: [
      'This luxury 5-bedroom detached duplex is located in a highly sought-after area with close proximity to VI business district.',
      'Offers modern security, generous parking, and a swimming pool.'
    ],
    listedDate: '15-02-2025',
    price: '₦1,100,000,000',
    rooms: 9,
    baths: 5,
    area: '280 sqft',
    beds: 9,
    type: 'Duplex',
    badge: 'For Sale',
    yearBuilt: 2026,
    status: 'For Sale',
    features: [
      { icon: 'flaticon-double-bed', title: 'Living Room', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Garage', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Dining Area', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Bedroom', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Bathroom', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Gym Area', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Garden', size: '20 x 16 sq feet' },
      { icon: 'flaticon-double-bed', title: 'Parking', size: '20 x 16 sq feet' }
    ],
    amenities: [
      'Air Conditioning', 'Gym', 'Microwave', 'Swimming Pool', 'WiFi',
      'Barbeque', 'Recreation', 'Basketball Court', 'Fireplace',
      'Refrigerator', 'Window Coverings', 'Washer', '24x7 Security', 'Indoor Game'
    ],
    video: {
      url: 'https://www.youtube.com/embed/eWUxqVFBq74?autoplay=1&showinfo=0',
      thumbnail: '../../../assets/img/others/5.jpg'
    },
    author: {
      name: 'Vanessa E. Hartwell',
      title: 'Senior Realtor',
      image: '../../../assets/img/team/2.jpg',
      bio: "I'm an experienced realtor known for my client-first approach and strong negotiation skills in luxury and commercial real estate.",
      social: {
        facebook: 'https://facebook.com/vanessa.hartwell.realtor',
        twitter: 'https://twitter.com/vanessa_hartwell',
        linkedin: 'https://linkedin.com/in/vanessahartwell',
        youtube: 'https://youtube.com/@vanessahartwellrealtor'
      }
    },
    contact: {
      phone: '09033246432',
      whatsapp: '2349033246432'
    }
  }
    // More property objects can go here...
  ];

  constructor(private http: HttpClient) {}

    getAllProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(this.Api);
  }

  getPropertyById(id: string): Observable<Property> {
    const url = `${this.Api}/${id}`

   return this.http.get<Property>(url);
  }
  // getAllProperties(): Property[] {
  //   return this.allPropertie;
  // }

  /**
   * Get a single property by matching BOTH id and title
   */
  getPropertyByIdAndTitle(id: string, title: string): Property | undefined {
    return this.allPropertie.find(
      p => p.id === id && p.title.toLowerCase() === title.toLowerCase()
    );
  }

    filterShortlets(criteria: any): Property[] {
      return this.allPropertie.filter(s => {
        const priceValue = parseInt(s.price.replace(/[^\d]/g, ''), 10);

        return (!criteria.location || s.location.toLowerCase().includes(criteria.location.toLowerCase())) &&
               (!criteria.purpose || s.badge.toLowerCase() === criteria.purpose.toLowerCase()) &&
               (!criteria.type || s.type.toLowerCase() === criteria.type.toLowerCase()) &&
               (!criteria.beds || s.beds === +criteria.beds) &&
               (!criteria.minPrice || priceValue >= +criteria.minPrice) &&
               (!criteria.maxPrice || priceValue <= +criteria.maxPrice);
      });
    }

}

