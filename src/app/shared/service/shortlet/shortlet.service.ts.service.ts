import { Injectable } from '@angular/core';
import { Shortlet } from '../../model/shortlet.model';

@Injectable({
  providedIn: 'root'
})
export class ShortletService {
  private shortlets: Shortlet[] = [
    {
      id: 'IP56729',
      image: '../../assets/img/gallery/10.jpg',
      title: 'Stylish 2-Bedroom Apartment',
      location: 'Lekki phase 1',
      beds: 3,
      baths: 2,
      type: 'Apartment',
      badges: ['Short Stay'],
      badge: 'For Rent',
      price: '200,000',
      priceLabel: '/Month'
    },
      {
    id: 'IP56729',
    image: '../../assets/img/img-slide/21.jpg',
    title: 'Luxurious 4-Bedroom Waterfront Duplex',
    location: 'Lekki phase 1',
    beds: 3,
    baths: 2,
    type: 'Apartment',
    badges: ['Short Stay'],
    badge: 'For Sale',
    price: '270,000',
    priceLabel: '/Day'
  },
  {
    id: 'IP56729',
    image: '../../assets/img/img-slide/32.jpg',
    title: 'Luxurious 2 Bedroom Apartment with Free Wi-Fi',
    location: 'Ikate, Lekki, Lagos.',
    beds: 3,
    baths: 2,
    type: 'Apartment',
    badges: ['Short Stay'],
    badge: 'For Rent',
    price: '270,000',
    priceLabel: '/Day'
  },
  {
    id: 'IP56729',
    image: '../../assets/img/service/21.jpg',
    title: '2 Bedroom Apartment With Bq',
    location: 'Lekki Phase 1, Lagos',
    beds: 3,
    baths: 2,
    type: 'Apartment',
    badges: ['Short Stay'],
    badge: 'For Rent',
    price: '270,000',
    priceLabel: '/Day'
  },
  {
    id: 'IP56729',
    image: '../../assets/img/service/31.jpg',
    title: 'Newly Built 2 Bedroom Flat',
    location: 'Banana Island, Lagos',
    beds: 3,
    baths: 2,
    type: 'Apartment',
    badges: ['Short Stay'],
    badge: 'For Sale',
    price: '190,000',
    priceLabel: '/Day'
  },
  {
    id: 'IP56729',
    image: '../../assets/img/others/8.png',
    title: 'Decent Room And Parlour Self Con',
    location: 'Ikeja, Lagos',
    beds: 2,
    baths: 2,
    type: 'Self Con',
    badges: ['Short Stay'],
    badge: 'For Rent',
    price: '150,000',
    priceLabel: '/Day'
  },
  {
    id: 'IP56729',
    image: '../../assets/img/product/3.png',
    title: 'Luxury One Bedroom Mini Flat',
    location: 'Lekki Phase 1, Lagos',
    beds: 3,
    baths: 2,
    type: 'Flat',
    badges: ['Short Stay'],
    badge: 'For Rent',
    price: '270,000',
    priceLabel: '/Day'
  },
  {
    id: 'IP56729',
    image: '../../assets/img/product-3/2.jpg',
    title: 'Newly Built 1 Bedroom Flat',
    location: 'Ikate, Lagos',
    beds: 3,
    baths: 2,
    type: 'FLat',
    badges: ['Short Stay'],
    badge: 'For Sale',
    price: '100,000',
    priceLabel: '/Day'
  },
  {
    id: 'IP56729',
    image: '../../assets/img/product-3/3.jpg',
    title: 'Newly Built 3 Bedroom Apartment',
    location: 'Ikoyi, Lagos',
    beds: 3,
    baths: 2,
    type: 'Apartment',
    badges: ['Short Stay'],
    badge: 'For Rent',
    price: '130,000',
    priceLabel: '/Day'
  }
  ];

   getShortlets(): Shortlet[] {
    return this.shortlets;
  }

  filterShortlets(criteria: any): Shortlet[] {
    return this.shortlets.filter(s => {
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
