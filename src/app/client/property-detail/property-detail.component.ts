import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  callAgent() {
  window.location.href = 'tel:08147300000';
}

chatWhatsApp() {
  window.open('https://wa.me/2348030000000', '_blank');
}

requestCallback() {
  alert('A callback request has been submitted.');
}

}
