import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {

  propertyDetail = [
     {
      propertyId: 'IP28917',
      title: 'Exclusive 4 Bedroom Maisonette',
      propertyStatus: 'For sale',
      image: '../assets/img/product-3/4.jpg',
      price: '#690,000,000',
      type: '',
      badges: ['For Sale', 'Featured', 'Available For Sale'],
      tags: ['For Sale', 'Featured', 'Available For Sale'],
      location: 'Ikoyi, Lagos.',
      rooms: 7,
      beds: 4,
      baths: 4,
      realtorName: 'Tom John',

     }
  ];

  constructor() { }

  ngOnInit(): void {
    this.setupTabs();
  }

  setupTabs(): void {
    const buttons = document.querySelectorAll<HTMLButtonElement>('.tab-btn');
    const contents = document.querySelectorAll<HTMLElement>('.tab-content');

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        buttons.forEach((b) => b.classList.remove('active'));
        contents.forEach((c) => c.classList.remove('active'));

        btn.classList.add('active');
        const targetId = btn.dataset.tab;
        const targetContent = document.getElementById(targetId!);
        if (targetContent) {
          targetContent.classList.add('active');
        }
      });
    });
  }

  callAgent(): void {
    window.location.href = 'tel:08147300000';
  }

  chatWhatsApp(): void {
    window.open('https://wa.me/2348030000000', '_blank');
  }

  requestCallback(): void {
    alert('A callback request has been submitted.');
  }

}
