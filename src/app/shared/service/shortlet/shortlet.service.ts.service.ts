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
  },
  {
  id: 'IP56729',
  image: '../../assets/img/gallery/10.jpg',
  title: 'Modern 3-Bedroom Penthouse with Ocean View',
  location: 'Ikoyi, Lagos',
  beds: 3,
  baths: 3,
  type: 'Penthouse',
  badges: ['Short Stay'],
  badge: 'For Rent',
  price: '550,000',
  priceLabel: '/Day'
},
{
  id: 'IP56729',
  image: '../../assets/img/img-slide/21.jpg',
  title: 'Executive 4-Bedroom Duplex with Pool',
  location: 'Lekki Phase 2, Lagos',
  beds: 4,
  baths: 4,
  type: 'Duplex',
  badges: ['Short Stay'],
  badge: 'For Rent',
  price: '400,000',
  priceLabel: '/Day'
},
{
  id: 'IP56729',
  image: '../../assets/img/img-slide/32.jpg',
  title: 'Luxury 2-Bedroom Apartment in Admiralty Way',
  location: 'Lekki Phase 1, Lagos',
  beds: 2,
  baths: 2,
  type: 'Apartment',
  badges: ['Short Stay'],
  badge: 'For Rent',
  price: '250,000',
  priceLabel: '/Day'
},
{
  id: 'IP56729',
  image: '../../assets/img/service/21.jpg',
  title: 'Spacious Studio Apartment with Balcony',
  location: 'Ikate, Lekki, Lagos',
  beds: 1,
  baths: 1,
  type: 'Studio',
  badges: ['Short Stay'],
  badge: 'For Rent',
  price: '120,000',
  priceLabel: '/Day'
},
{
  id: 'IP56729',
  image: '../../assets/img/service/31.jpg',
  title: 'Furnished 1-Bedroom Flat with Wi-Fi',
  location: 'Victoria Island, Lagos',
  beds: 1,
  baths: 1,
  type: 'Flat',
  badges: ['Short Stay'],
  badge: 'For Rent',
  price: '150,000',
  priceLabel: '/Day'
},
{
  id: 'IP56729',
  image: '../../assets/img/others/8.png',
  title: 'Elegant 2-Bedroom Maisonette',
  location: 'Oniru, Lagos',
  beds: 2,
  baths: 2,
  type: 'Maisonette',
  badges: ['Short Stay'],
  badge: 'For Rent',
  price: '300,000',
  priceLabel: '/Day'
},
{
  id: 'IP56729',
  image: '../../assets/img/product/3.png',
  title: 'Cozy Mini Flat for Short Stay',
  location: 'Ikoyi, Lagos',
  beds: 1,
  baths: 1,
  type: 'Mini Flat',
  badges: ['Short Stay'],
  badge: 'For Rent',
  price: '100,000',
  priceLabel: '/Day'
},
{
  id: 'IP56729',
  image: '../../assets/img/product-3/2.jpg',
  title: 'Newly Built 4 Bedroom Terrace',
  location: 'Lekki Phase 1, Lagos',
  beds: 4,
  baths: 4,
  type: 'Terrace',
  badges: ['Short Stay'],
  badge: 'For Rent',
  price: '350,000',
  priceLabel: '/Day'
},
{
  id: 'IP56729',
  image: '../../assets/img/product-3/3.jpg',
  title: 'Classic 2 Bedroom Apartment with Gym Access',
  location: 'Ikate, Lagos',
  beds: 2,
  baths: 2,
  type: 'Apartment',
  badges: ['Short Stay'],
  badge: 'For Rent',
  price: '220,000',
  priceLabel: '/Day'
},
{
  id: 'IP56729',
  image: '../../assets/img/gallery/10.jpg',
  title: 'Waterfront 5-Bedroom Luxury Villa',
  location: 'Banana Island, Lagos',
  beds: 5,
  baths: 5,
  type: 'Villa',
  badges: ['Short Stay'],
  badge: 'For Rent',
  price: '950,000',
  priceLabel: '/Day'
},
{
  id: 'IP56729',
  image: '../../assets/img/img-slide/21.jpg',
  title: 'Contemporary 1 Bedroom Loft',
  location: 'Victoria Island, Lagos',
  beds: 1,
  baths: 1,
  type: 'Loft',
  badges: ['Short Stay'],
  badge: 'For Rent',
  price: '180,000',
  priceLabel: '/Day'
},
{
  id: 'IP56729',
  image: '../../assets/img/img-slide/32.jpg',
  title: 'Premium 3 Bedroom Apartment with Maid Room',
  location: 'Ikoyi, Lagos',
  beds: 3,
  baths: 3,
  type: 'Apartment',
  badges: ['Short Stay'],
  badge: 'For Rent',
  price: '350,000',
  priceLabel: '/Day'
},
{
  id: 'IP56729',
  image: '../../assets/img/service/21.jpg',
  title: 'Affordable Studio Apartment in Lekki',
  location: 'Lekki Phase 1, Lagos',
  beds: 1,
  baths: 1,
  type: 'Studio',
  badges: ['Short Stay'],
  badge: 'For Rent',
  price: '90,000',
  priceLabel: '/Day'
},
{
  id: 'IP56729',
  image: '../../assets/img/service/31.jpg',
  title: 'Highrise 2 Bedroom Penthouse with Sea View',
  location: 'Oniru, Lagos',
  beds: 2,
  baths: 2,
  type: 'Penthouse',
  badges: ['Short Stay'],
  badge: 'For Rent',
  price: '420,000',
  priceLabel: '/Day'
},
{
  id: 'IP56729',
  image: '../../assets/img/others/8.png',
  title: 'Modern 3 Bedroom Apartment with Swimming Pool',
  location: 'Ikate, Lekki',
  beds: 3,
  baths: 3,
  type: 'Apartment',
  badges: ['Short Stay'],
  badge: 'For Rent',
  price: '310,000',
  priceLabel: '/Day'
},
{
  id: 'IP56729',
  image: '../../assets/img/product/3.png',
  title: 'Furnished Room and Parlour Self-Contained',
  location: 'Lekki Phase 2, Lagos',
  beds: 1,
  baths: 1,
  type: 'Self Con',
  badges: ['Short Stay'],
  badge: 'For Rent',
  price: '110,000',
  priceLabel: '/Day'
},
{
  id: 'IP56729',
  image: '../../assets/img/product-3/2.jpg',
  title: '4 Bedroom Semi Detached Duplex',
  location: 'Banana Island, Lagos',
  beds: 4,
  baths: 4,
  type: 'Duplex',
  badges: ['Short Stay'],
  badge: 'For Rent',
  price: '500,000',
  priceLabel: '/Day'
},
{
  id: 'IP56729',
  image: '../../assets/img/product-3/3.jpg',
  title: 'Luxury 2 Bedroom Apartment with Modern Kitchen',
  location: 'Victoria Island, Lagos',
  beds: 2,
  baths: 2,
  type: 'Apartment',
  badges: ['Short Stay'],
  badge: 'For Rent',
  price: '250,000',
  priceLabel: '/Day'
},
{
  id: 'IP56729',
  image: '../../assets/img/gallery/10.jpg',
  title: 'Serviced 1 Bedroom Apartment in Ikoyi',
  location: 'Ikoyi, Lagos',
  beds: 1,
  baths: 1,
  type: 'Apartment',
  badges: ['Short Stay'],
  badge: 'For Rent',
  price: '190,000',
  priceLabel: '/Day'
},
{
  id: 'IP56729',
  image: '../../assets/img/img-slide/21.jpg',
  title: 'Decent 2 Bedroom Apartment in Oniru',
  location: 'Oniru, Lagos',
  beds: 2,
  baths: 2,
  type: 'Apartment',
  badges: ['Short Stay'],
  badge: 'For Rent',
  price: '210,000',
  priceLabel: '/Day'
},
{
  id: 'IP56729',
  image: '../../assets/img/img-slide/32.jpg',
  title: 'Bright 3 Bedroom Bungalow with Parking',
  location: 'Lekki Phase 2, Lagos',
  beds: 3,
  baths: 3,
  type: 'Bungalow',
  badges: ['Short Stay'],
  badge: 'For Rent',
  price: '260,000',
  priceLabel: '/Day'
},
{
  id: 'IP56729',
  image: '../../assets/img/service/21.jpg',
  title: 'Modern Studio Apartment with Rooftop Access',
  location: 'Victoria Island, Lagos',
  beds: 1,
  baths: 1,
  type: 'Studio',
  badges: ['Short Stay'],
  badge: 'For Rent',
  price: '130,000',
  priceLabel: '/Day'
},
{
  id: 'IP56729',
  image: '../../assets/img/service/31.jpg',
  title: 'Spacious 2 Bedroom Flat with Parking Space',
  location: 'Ikate, Lekki',
  beds: 2,
  baths: 2,
  type: 'Flat',
  badges: ['Short Stay'],
  badge: 'For Rent',
  price: '200,000',
  priceLabel: '/Day'
},
{
  id: 'IP56729',
  image: '../../assets/img/others/8.png',
  title: 'Affordable 1 Bedroom Self-Contained',
  location: 'Lekki Phase 1, Lagos',
  beds: 1,
  baths: 1,
  type: 'Self Con',
  badges: ['Short Stay'],
  badge: 'For Rent',
  price: '80,000',
  priceLabel: '/Day'
},
{
  id: 'IP56729',
  image: '../../assets/img/product/3.png',
  title: '5 Bedroom Fully Detached Mansion',
  location: 'Banana Island, Lagos',
  beds: 5,
  baths: 5,
  type: 'Mansion',
  badges: ['Short Stay'],
  badge: 'For Rent',
  price: '1,200,000',
  priceLabel: '/Day'
},
{
  id: 'IP56729',
  image: '../../assets/img/product-3/2.jpg',
  title: 'Luxury 3 Bedroom Apartment with Ocean Breeze',
  location: 'Oniru, Lagos',
  beds: 3,
  baths: 3,
  type: 'Apartment',
  badges: ['Short Stay'],
  badge: 'For Rent',
  price: '380,000',
  priceLabel: '/Day'
},
{
  id: 'IP56729',
  image: '../../assets/img/product-3/3.jpg',
  title: 'Brand New 2 Bedroom Flat in Victoria Island',
  location: 'Victoria Island, Lagos',
  beds: 2,
  baths: 2,
  type: 'Flat',
  badges: ['Short Stay'],
  badge: 'For Rent',
  price: '220,000',
  priceLabel: '/Day'
},
{
  id: 'IP56729',
  image: '../../assets/img/gallery/10.jpg',
  title: '1 Bedroom Apartment with Private Balcony',
  location: 'Ikoyi, Lagos',
  beds: 1,
  baths: 1,
  type: 'Apartment',
  badges: ['Short Stay'],
  badge: 'For Rent',
  price: '160,000',
  priceLabel: '/Day'
},
{
  id: 'IP56729',
  image: '../../assets/img/img-slide/21.jpg',
  title: 'Elegant Studio Apartment in Lekki Phase 1',
  location: 'Lekki Phase 1, Lagos',
  beds: 1,
  baths: 1,
  type: 'Studio',
  badges: ['Short Stay'],
  badge: 'For Rent',
  price: '100,000',
  priceLabel: '/Day'
},
{
  id: 'IP56729',
  image: '../../assets/img/img-slide/32.jpg',
  title: 'Cozy 2 Bedroom Flat with Gated Security',
  location: 'Ikate, Lagos',
  beds: 2,
  baths: 2,
  type: 'Flat',
  badges: ['Short Stay'],
  badge: 'For Rent',
  price: '200,000',
  priceLabel: '/Day'
},
{
  id: 'IP56729',
  image: '../../assets/img/service/21.jpg',
  title: 'Spacious 4 Bedroom Duplex in Banana Island',
  location: 'Banana Island, Lagos',
  beds: 4,
  baths: 4,
  type: 'Duplex',
  badges: ['Short Stay'],
  badge: 'For Rent',
  price: '600,000',
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
