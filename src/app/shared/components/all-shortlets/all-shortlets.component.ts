import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-shortlets',
  templateUrl: './all-shortlets.component.html',
  styleUrls: ['./all-shortlets.component.scss']
})
export class AllShortletsComponent implements OnInit {
properties = [
  {
    id: '678564',
    image: '../../assets/img/gallery/10.jpg',
    title: 'Stylish 2-Bedroom Apartment',
    location: 'Lekki phase 1',
    beds: 3,
    baths: 2,
    type: '2 Bed',
    badges: ['Apartment'],
    squareFt: 3450,
    badge: 'For Rent',
    price: '$34,900',
    priceLabel: '/Month'
  },
  {
    image: '../../assets/img/img-slide/21.jpg',
    title: 'Luxurious 4-Bedroom Waterfront Duplex',
    location: 'Lekki phase 1',
    beds: 3,
    baths: 2,
    squareFt: 3450,
    badge: 'For Sale',
    price: '$34,900',
    priceLabel: '/Month'
  },
  {
    image: '../../assets/img/img-slide/32.jpg',
    title: 'Luxurious 2 Bedroom Apartment with Free Wi-Fi',
    location: 'Ikate, Lekki, Lagos.',
    beds: 3,
    baths: 2,
    squareFt: 3450,
    badge: 'For Rent',
    price: '$34,900',
    priceLabel: '/Month'
  },
  {
    image: '../../assets/img/service/21.jpg',
    title: '2 Bedroom Apartment With Bq',
    location: 'Belmont Gardens, Chicago',
    beds: 3,
    baths: 2,
    squareFt: 3450,
    badge: 'For Rent',
    price: '$34,900',
    priceLabel: '/Month'
  },
  {
    image: '../../assets/img/service/31.jpg',
    title: 'Newly Built 2 Bedroom Flat',
    location: 'Banana Island, Lagos',
    beds: 3,
    baths: 2,
    squareFt: 3450,
    badge: 'For Sale',
    price: '₦190,000',
    priceLabel: '/Day'
  },
  {
    image: '../../assets/img/product-3/3.jpg',
    title: 'Decent Room And Parlour Self Con',
    location: 'Ikeja, Lagos',
    beds: 3,
    baths: 2,
    squareFt: 3450,
    badge: 'For Rent',
    price: '₦150,000',
    priceLabel: '/Day'
  },
    {
    image: '../../assets/img/product-3/1.jpg',
    title: 'Luxury One Bedroom Mini Flat',
    location: 'Lekki Phase 1, Lagos',
    beds: 3,
    baths: 2,
    squareFt: 3450,
    badge: 'For Rent',
    price: '₦270,000',
    priceLabel: '/Day'
  },
  {
    image: '../../assets/img/product-3/2.jpg',
    title: 'Newly Built 1 Bedroom Flat',
    location: 'Ikate, Lagos',
    beds: 3,
    baths: 2,
    squareFt: 3450,
    badge: 'For Sale',
    price: '₦100,000',
    priceLabel: '/Day'
  },
  {
    image: '../../assets/img/product-3/3.jpg',
    title: 'Newly Built 3 Bedroom Apartment',
    location: 'Ikoyi, Lagos',
    beds: 3,
    baths: 2,
    squareFt: 3450,
    badge: 'For Rent',
    price: '₦130,000',
    priceLabel: '/Day'
  }
];

  constructor() { }

  ngOnInit(): void {
  }

}
