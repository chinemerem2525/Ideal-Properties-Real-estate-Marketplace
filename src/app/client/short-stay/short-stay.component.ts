import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-short-stay',
  templateUrl: './short-stay.component.html',
  styleUrls: ['./short-stay.component.scss']
})
export class ShortStayComponent implements OnInit {

     searchData = {
    location: '',
    purpose: 'shortlet',
    type: '',
    beds: '',
    minPrice: '',
    maxPrice: ''
  };

  prices: number[] = [50000, 100000, 200000, 500000, 1000000, 5000000, 10000000];

  constructor() { }

  ngOnInit(): void {
  }

  searchProperty() {
    console.log('Search Filters:', this.searchData);
    alert('Search triggered! Check console for filters.');
  }
}
