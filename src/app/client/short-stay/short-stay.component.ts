import { SearchCriteria } from './../../shared/model/shotletSearchCriteria.model';
import { Shortlet } from './../../shared/model/shortlet.model';
import { Component, OnInit } from '@angular/core';
import { ShortletService } from 'src/app/shared/service/shortlet/shortlet.service.ts.service';

@Component({
  selector: 'app-short-stay',
  templateUrl: './short-stay.component.html',
  styleUrls: ['./short-stay.component.scss']
})
export class ShortStayComponent implements OnInit {
 properties: Shortlet[] = [];
  prices: number[] = [50000, 100000, 150000, 200000, 250000, 300000];

searchData: any = {
  location: '',
  purpose: '',
  type: '',
  beds: '',
  minPrice: '',
  maxPrice: ''
};



  constructor(private shortletService: ShortletService) {}

  ngOnInit(): void {
    this.properties = this.shortletService.getShortlets();
  }

  searchProperty() {
    console.log('Searching with:', this.searchData); // Optional debug log
    this.properties = this.shortletService.filterShortlets(this.searchData);
    window.scrollTo({ top: 0 });
  }
}
