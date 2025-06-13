import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

tabs: string[] = ['BUY', 'RENT', 'SHORT LET'];
  activeTab = 'BUY';

  location: string[] = [
    'Abuja', 'Agungi', 'Ajah', 'Apo', 'Asokoro', 'Banana Island'
  ];

  propertyTypes: string[] = [
    'Apartment', 'Duplex', 'Terrace', 'Penthouse', 'Land', 'Maisonette'
  ];

  selectedLocation: string = '';
  selectedType: string = '';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }


}
