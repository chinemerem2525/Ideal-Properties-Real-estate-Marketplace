import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-shortlets',
  templateUrl: './all-shortlets.component.html',
  styleUrls: ['./all-shortlets.component.scss']
})
export class AllShortletsComponent implements OnInit {
properties = [
  {
    id: 'IP56729',
    image: '../../assets/img/gallery/10.jpg',
    title: 'Stylish 2-Bedroom Apartment',
    location: 'Lekki phase 1',
    beds: 3,
    baths: 2,
    type: '2 Bedroom',
    badges: ['Apartment'],
    badge: 'For Rent',
    price: '₦200,000',
    priceLabel: '/Month'
  },
  {
    id: 'IP56729',
    image: '../../assets/img/img-slide/21.jpg',
    title: 'Luxurious 4-Bedroom Waterfront Duplex',
    location: 'Lekki phase 1',
    beds: 3,
    baths: 2,
    type: '4 Bedroom',
    badges: ['Short Stay'],
    badge: 'For Sale',
    price: '₦270,000',
    priceLabel: '/Day'
  },
  {
    id: 'IP56729',
    image: '../../assets/img/img-slide/32.jpg',
    title: 'Luxurious 2 Bedroom Apartment with Free Wi-Fi',
    location: 'Ikate, Lekki, Lagos.',
    beds: 3,
    baths: 2,
    type: '2 Bedroom',
    badges: ['Apartment'],
    badge: 'For Rent',
    price: '₦270,000',
    priceLabel: '/Day'
  },
  {
    id: 'IP56729',
    image: '../../assets/img/service/21.jpg',
    title: '2 Bedroom Apartment With Bq',
    location: 'Lekki Phase 1, Lagos',
    beds: 3,
    baths: 2,
    type: '2 Bedroom',
    badges: ['Apartment'],
    badge: 'For Rent',
    price: '₦270,000',
    priceLabel: '/Day'
  },
  {
    id: 'IP56729',
    image: '../../assets/img/service/31.jpg',
    title: 'Newly Built 2 Bedroom Flat',
    location: 'Banana Island, Lagos',
    beds: 3,
    baths: 2,
    type: '2 Bedroom',
    badges: ['Apartment'],
    badge: 'For Sale',
    price: '₦190,000',
    priceLabel: '/Day'
  },
  {
    id: 'IP56729',
    image: '../../assets/img/others/8.png',
    title: 'Decent Room And Parlour Self Con',
    location: 'Ikeja, Lagos',
    beds: 3,
    baths: 2,
    type: 'Room And Parlour',
    badges: ['Apartment'],
    badge: 'For Rent',
    price: '₦150,000',
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
    badges: ['Apartment'],
    badge: 'For Rent',
    price: '₦270,000',
    priceLabel: '/Day'
  },
  {
    id: 'IP56729',
    image: '../../assets/img/product-3/2.jpg',
    title: 'Newly Built 1 Bedroom Flat',
    location: 'Ikate, Lagos',
    beds: 3,
    baths: 2,
    type: '1 Bedroom',
    badges: ['Apartment'],
    badge: 'For Sale',
    price: '₦100,000',
    priceLabel: '/Day'
  },
  {
    id: 'IP56729',
    image: '../../assets/img/product-3/3.jpg',
    title: 'Newly Built 3 Bedroom Apartment',
    location: 'Ikoyi, Lagos',
    beds: 3,
    baths: 2,
    type: '3 Bedroom',
    badges: ['Apartment'],
    badge: 'For Rent',
    price: '₦130,000',
    priceLabel: '/Day'
  }
];

  constructor() { }

  ngOnInit(): void {
  }

}
