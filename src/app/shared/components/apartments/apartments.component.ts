import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.scss']
})
export class ApartmentsComponent implements OnInit {

  properties = [
    {
      type: 'Apartment',
      title: 'Stylish 2-Bedroom Apartment',
      location: 'Lekki phase 1',
      price: '170,000',
      beds: 2,
      baths: 2,
      image: '../../../../assets/img/gallery/10.jpg'
    },
    {
      type: 'Apartment',
      title: 'Luxurious 4-Bedroom Waterfront Duplex',
      location: 'Lekki phase 1',
      price: '300,000',
      beds: 4,
      baths: 3,
      image: '../../../../assets/img/img-slide/21.jpg'
    },
    {
      type: 'Apartment',
      title: 'Luxurious 2 Bedroom Apartment with Free Wi-Fi',
      location: 'Ikate, Lekki, Lagos.',
      price: '#120,000',
      beds: 2,
      baths: 2,
      image: '../../../../assets/img/img-slide/32.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
