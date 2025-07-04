import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from './../../shared/model/property.model';
import { TopRatedProduct } from './../../shared/model/topRated.model';
import { PropertyDetailService } from 'src/app/shared/service/propertyDetail/property-detail.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {

  propertyId!: string;
  property!: Property | undefined;

  topRatedProducts: TopRatedProduct[] = [
    {
      image: '../../../assets/img/product/1.png',
      name: 'Luxury House In Greenville',
      url: 'product-details.html',
      rating: 5,
      price: '₦300,000,000',
      oldPrice: '₦350,000,000'
    },
    {
      image: '../../../assets/img/product/2.png',
      name: 'Apartment with Subunits',
      url: 'product-details.html',
      rating: 5,
      price: '₦140,000',
      oldPrice: '₦155,000'
    },
    {
      image: '../../../assets/img/product/3.png',
      name: '3 Rooms Manhattan',
      url: 'product-details.html',
      rating: 3.5,
      price: '₦800,000,000',
      oldPrice: '₦890,000,000'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyDetailService
  ) {}

ngOnInit(): void {
  this.route.queryParamMap.subscribe(params => {
    const id = params.get('id') || '';
    const title = params.get('title') || '';

    this.property = this.propertyService.getPropertyByIdAndTitle(id, title);

    if (!this.property) {
      // optionally handle “not found”
      console.warn('Property not found for the given ID and Title.');
    }
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

  callAgent() {
    if (this.property?.contact?.phone) {
      window.location.href = `tel:${this.property.contact.phone}`;
    }
  }

  chatWhatsApp() {
    if (this.property?.contact?.whatsapp) {
      window.open(`https://wa.me/${this.property.contact.whatsapp}`, '_blank');
    }
  }

  requestCallback(): void {
    alert('A callback request has been submitted.');
  }

  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = '../../../assets/js/main.js';
    document.body.appendChild(script);
    window.scrollTo({ top: 0 });
  }
}
