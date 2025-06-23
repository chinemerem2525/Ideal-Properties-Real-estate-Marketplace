import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-shortlets',
  templateUrl: './all-shortlets.component.html',
  styleUrls: ['./all-shortlets.component.scss']
})
export class AllShortletsComponent implements OnInit {
properties = [
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
