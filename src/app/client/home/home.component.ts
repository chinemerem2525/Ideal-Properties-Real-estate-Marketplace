import { Component, OnInit, OnDestroy, HostListener  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
properties = [
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
    },
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
    }
  ];

   locations = [
    {
      name: 'Ikoyi',
      properties: 474,
      image: '../../../assets/img/neighbour/ikoyi.jpg'
    },
    {
      name: 'Banana Island',
      properties: 54,
      image: '../../../assets/img/neighbour/banana-island.png'
    },
    {
      name: 'Victoria Island',
      properties: 314,
      image: '../../../assets/img/neighbour/visctoria_island.jpg'
    },
    {
      name: 'Eko Atlantic',
      properties: 15,
      image: '../../../assets/img/neighbour/eco-atlantic.jpg'
    },
    {
      name: 'Oniru',
      properties: 85,
      image: '../../../assets/img/neighbour/2.jpg'
    },
    {
      name: 'Lekki',
      properties: 819,
      image: '../../../assets/img/neighbour/lekki.jpeg'
    },
    {
      name: 'Ikate',
      properties: 160,
      image: '../../../assets/img/neighbour/ikate.jpeg'
    },
    {
      name: 'Osapa',
      properties: 63,
      image: '../../../assets/img/neighbour/osapa.jpg'
    },
    {
      name: 'Chevron',
      properties: 14,
      image: '../../../assets/img/neighbour/chevron.jpg'
    }
  ];

  visibleProperties: any[] = [];
  startIndex = 0;
  intervalId: any;
  itemsPerSlide = 4;

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
  onResize() {
    this.calculateItemsPerSlide();
    this.updateVisibleProperties();
  }

  calculateItemsPerSlide() {
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

  nextSlide() {
    this.startIndex = (this.startIndex + this.itemsPerSlide) % this.properties.length;
    this.updateVisibleProperties();
  }

  prevSlide() {
    this.startIndex = (this.startIndex - this.itemsPerSlide + this.properties.length) % this.properties.length;
    this.updateVisibleProperties();
  }

   startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 6000); // Slide every 4 seconds
  }
}
