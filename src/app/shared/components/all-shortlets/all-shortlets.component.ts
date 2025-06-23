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
    image: '../../assets/img/product-3/1.jpg',
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
    image: '../../assets/img/product-3/2.jpg',
    agentImage: '../../assets/img/blog/author.jpg',
    title: 'New Apartment Nice View',
    location: 'Belmont Gardens, Chicago',
    beds: 3,
    baths: 2,
    squareFt: 3450,
    badge: 'For Sale',
    price: '$34,900',
    priceLabel: '/Month'
  },
  {
    image: '../../assets/img/product-3/3.jpg',
    agentImage: '../../assets/img/blog/author.jpg',
    title: 'New Apartment Nice View',
    location: 'Belmont Gardens, Chicago',
    beds: 3,
    baths: 2,
    squareFt: 3450,
    badge: 'For Rent',
    price: '$34,900',
    priceLabel: '/Month'
  },
    {
    image: '../../assets/img/product-3/1.jpg',
    agentImage: '../../assets/img/blog/author.jpg',
    title: 'New Apartment Nice View',
    location: 'Belmont Gardens, Chicago',
    beds: 3,
    baths: 2,
    squareFt: 3450,
    badge: 'For Rent',
    price: '$34,900',
    priceLabel: '/Month'
  },
  {
    image: '../../assets/img/product-3/2.jpg',
    agentImage: '../../assets/img/blog/author.jpg',
    title: 'New Apartment Nice View',
    location: 'Belmont Gardens, Chicago',
    beds: 3,
    baths: 2,
    squareFt: 3450,
    badge: 'For Sale',
    price: '$34,900',
    priceLabel: '/Month'
  },
  {
    image: '../../assets/img/product-3/3.jpg',
    agentImage: '../../assets/img/blog/author.jpg',
    title: 'New Apartment Nice View',
    location: 'Belmont Gardens, Chicago',
    beds: 3,
    baths: 2,
    squareFt: 3450,
    badge: 'For Rent',
    price: '$34,900',
    priceLabel: '/Month'
  }
];

  constructor() { }

  ngOnInit(): void {
  }

}
