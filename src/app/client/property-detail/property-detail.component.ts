import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Property {
  id: string;
  descriptions: string[];
  price: string;
  rooms: number;
  baths: number;
  area: string;
  beds: number;
  yearBuilt: number;
  status: string;
  features: { icon: string; title: string; size: string }[];
  amenities: string[];
  video: { url: string; thumbnail: string };
  author: {
    name: string;
    title: string;
    image: string;
    rating: number;
    reviewCount: number;
    bio: string;
    social: {
      facebook?: string;
      twitter?: string;
      linkedin?: string;
      youtube?: string;
    };
  };
  topRatedProducts: {
    image: string;
    name: string;
    url: string;
    rating: number;
    price: string;
    oldPrice?: string;
  }[];
}

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {
  propertyId!: string;
  property!: Property | undefined;

  allProperties: Property[] = [
    {
      id: 'IP56729',
      descriptions: [
        'Experience ultimate comfort and breathtaking waterfront views in this elegant 4-bedroom duplex, available for daily rent. Perfect for vacations, business stays, or private getaways, this home features spacious en-suite bedrooms, a fully equipped kitchen, and stylish living areas designed for relaxation. Enjoy the serene ambiance and premium amenities while staying in a secure and prime location. Book now for an unforgettable waterfront living experience!',
        'To the left is the modern kitchen with central island, leading through to the unique breakfast family room which feature glass walls and doors out onto the garden and access to the separate utility room.'
      ],
      price: '#800,000,000',
      rooms: 7,
      baths: 2,
      area: '120 sqft',
      beds: 7,
      yearBuilt: 2025,
      status: 'For Sale',
      features: [
        { icon: 'flaticon-double-bed', title: 'Living Room', size: '20 x 16 sq feet' },
        { icon: 'flaticon-double-bed', title: 'Garage', size: '20 x 16 sq feet' },
        { icon: 'flaticon-double-bed', title: 'Dining Area', size: '20 x 16 sq feet' },
        { icon: 'flaticon-double-bed', title: 'Bedroom', size: '20 x 16 sq feet' },
        { icon: 'flaticon-double-bed', title: 'Bathroom', size: '20 x 16 sq feet' },
        { icon: 'flaticon-double-bed', title: 'Gym Area', size: '20 x 16 sq feet' },
        { icon: 'flaticon-double-bed', title: 'Garden', size: '20 x 16 sq feet' },
        { icon: 'flaticon-double-bed', title: 'Parking', size: '20 x 16 sq feet' }
      ],
      amenities: [
        'Air Conditioning', 'Gym', 'Microwave', 'Swimming Pool', 'WiFi',
        'Barbeque', 'Recreation', 'Basketball Court', 'Fireplace',
        'Refrigerator', 'Window Coverings', 'Washer', '24x7 Security', 'Indoor Game'
      ],
      video: {
      url: 'https://www.youtube.com/embed/eWUxqVFBq74?autoplay=1&showinfo=0',
      thumbnail: '../../../assets/img/others/5.jpg' // or wherever your image is located
      },
      author: {
    name: 'Rosalina D. Willaimson',
    title: 'Realtor',
    image: '../../../assets/img/team/4.jpg',
    rating: 3.5,
    reviewCount: 1,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio, odio, eligendi suscipit reprehenderit atque.',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      youtube: '#'
    }
  },
  topRatedProducts: [
    {
      image: '../../../assets/img/product/1.png',
      name: 'Luxury House In Greenville',
      url: 'product-details.html',
      rating: 5,
      price: '$30,000.00',
      oldPrice: '$35,000.00'
    },
    {
      image: '../../../assets/img/product/2.png',
      name: 'Apartment with Subunits',
      url: 'product-details.html',
      rating: 5,
      price: '$30,000.00',
      oldPrice: '$35,000.00'
    },
    {
      image: '../../../assets/img/product/3.png',
      name: '3 Rooms Manhattan',
      url: 'product-details.html',
      rating: 3.5,
      price: '$30,000.00',
      oldPrice: '$35,000.00'
    }
  ]
    }
    // More property objects can go here...
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.propertyId = params.get('id') || '';
      this.property = this.allProperties.find(p => p.id === this.propertyId);
    });

    this.setupTabs();

     const script = document.createElement('script');
  script.src = '../../../assets/js/main.js';
  document.body.appendChild(script);

   window.scrollTo({ top: 0 });
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

      ngAfterViewInit(): void {
  // Load script manually if needed
  const script = document.createElement('script');
  script.src = '../../../assets/js/main.js';
  document.body.appendChild(script);

     window.scrollTo({ top: 0 });
}

}
