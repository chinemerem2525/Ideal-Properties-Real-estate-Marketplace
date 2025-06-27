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
 allProperties: Shortlet[] = [];
  filteredProperties: Shortlet[] = [];
  displayedProperties: Shortlet[] = [];

  // Pagination
  currentPage: number = 1;
  pageSize: number = 9;    // how many per page
  totalPages: number = 1;

  prices: number[] = [50000, 100000, 150000, 200000, 250000, 300000, 400000];

  searchData = {
    location: '',
    purpose: '',
    type: '',
    beds: '',
    minPrice: '',
    maxPrice: ''
  };

  constructor(private shortletService: ShortletService) {}

  ngOnInit(): void {
    this.allProperties = this.shortletService.getShortlets();
    this.filteredProperties = this.allProperties;
    this.updateDisplayedProperties();
  }

  searchProperty() {
    this.filteredProperties = this.shortletService.filterShortlets(this.searchData);
    this.currentPage = 1;
    this.updateDisplayedProperties();
  }

  updateDisplayedProperties() {
    this.totalPages = Math.ceil(this.filteredProperties.length / this.pageSize);
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.displayedProperties = this.filteredProperties.slice(start, end);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateDisplayedProperties();
    }
  }
}
