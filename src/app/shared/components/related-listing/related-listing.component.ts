import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-related-listing',
  templateUrl: './related-listing.component.html',
  styleUrls: ['./related-listing.component.scss'],
   animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: '{{ enterTransform }}', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ], { params: { enterTransform: 'translateX(100%)' } }),

      transition(':leave', [
        animate('500ms ease-in', style({ transform: '{{ leaveTransform }}', opacity: 0 }))
      ], { params: { leaveTransform: 'translateX(-100%)' } })
    ])
  ]
})
export class RelatedListingComponent implements OnInit {
properties = [
    {
      title: 'Exclusive 4 Bedroom Maisonette',
      image: '../assets/img/product-3/4.jpg',
      price: '#690,000,000',
      type: '',
      badges: ['For Sale', 'Featured', 'Available For Sale'],
      tags: ['For Sale', 'Featured', 'Available For Sale'],
      location: 'Ikoyi, Lagos.',
      beds: 4,
      baths: 4
    },
    {
      title: 'Outstanding 5-Bedroom Smart Home',
      image: '../assets/img/product-3/3.jpg',
      price: '#900,000,000',
      type: '',
      badges: ['For Sale', 'Featured'],
      tags: ['For Sale', 'Featured'],
      location: 'Chevron',
      beds: 5,
      baths: 5
    },
    {
      title: 'Magnificent 4 Bedroom Maisonette',
      image: '../assets/img/product-3/2.jpg',
      price: '#250,000,000',
      type: '',
      badges: ['For Sale', 'Featured', 'Available For Sale'],
      tags: ['For Sale', 'Featured', 'Available For Sale'],
      location: 'Lekki Phase 1, Lagos.',
      beds: 4,
      baths: 4
    },
    {
      title: '2 units of 4 Bedroom Terrace',
      image: '../assets/img/product-3/1.jpg',
      price: '$1,200,000',
      type: '',
      badges: ['For Sale', 'Featured', 'Available For Sale'],
      tags: ['For Sale', 'Featured', 'Available For Sale'],
      location: 'Ikoyi, Lagos.',
      beds: 4,
      baths: 4
    },
    {
      title: 'Luxury Penthouse with Lagoon View',
      image: '../assets/img/product-3/5.jpg',
      price: '#760,000,000',
      type: '',
      badges: ['For Sale', 'Featured'],
      tags: ['For Sale'],
      location: 'Banana Island',
      beds: 6,
      baths: 6
    },
    {
      title: 'Modern 3 Bedroom Apartment',
      image: '../assets/img/product-3/6.jpg',
      price: '$1,000,000',
      type: '',
      badges: ['For Sale', 'Featured'],
      tags: ['Available For Sale'],
      location: 'Victoria Island',
      beds: 3,
      baths: 3
    },
    {
      title: 'Affordable Duplex in Ajah',
      image: '../assets/img/product-3/7.jpg',
      price: '#920,000,000',
      type: '',
      badges: ['For Sale'],
      tags: ['For Sale'],
      location: 'Ajah, Lagos.',
      beds: 4,
      baths: 4
    }
  ];

  visibleProperties: any[] = [];
  startIndex = 0;
  itemsPerSlide = 4;
  intervalId: any;
  direction: 'left' | 'right' = 'right';

  ngOnInit(): void {
    this.calculateItemsPerSlide();
    this.updateVisibleProperties();
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    this.calculateItemsPerSlide();
    this.updateVisibleProperties();
  }

  calculateItemsPerSlide(): void {
    const width = window.innerWidth;
    if (width < 600) {
      this.itemsPerSlide = 1;
    } else if (width < 1024) {
      this.itemsPerSlide = 2;
    } else {
      this.itemsPerSlide = 4;
    }

    const maxIndex = Math.ceil(this.properties.length / this.itemsPerSlide) - 1;
    if (this.startIndex > maxIndex) {
      this.startIndex = 0;
    }
  }

  updateVisibleProperties(): void {
    this.visibleProperties = [];
    for (let i = 0; i < this.itemsPerSlide; i++) {
      const index = (this.startIndex + i) % this.properties.length;
      this.visibleProperties.push(this.properties[index]);
    }
  }

  nextSlide(): void {
    this.startIndex = (this.startIndex + 1) % this.properties.length;
    this.direction = 'right';
    this.updateVisibleProperties();
  }

  prevSlide(): void {
    this.startIndex = (this.startIndex - 1 + this.properties.length) % this.properties.length;
    this.direction = 'left';
    this.updateVisibleProperties();
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 6000); // Slide every 4 seconds
  }
}
