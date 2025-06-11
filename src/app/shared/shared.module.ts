import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { TopListingsComponent } from './components/top-listings/top-listings.component';
import { BrowsePropertiesCtaComponent } from './components/browse-properties-cta/browse-properties-cta.component';
import { ApartmentsComponent } from './components/apartments/apartments.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FeaturedComponent,
    TopListingsComponent,
    BrowsePropertiesCtaComponent,
    ApartmentsComponent
  ],
  imports: [
    CommonModule
  ],
    exports: [
    HeaderComponent,
    FooterComponent,
    FeaturedComponent,
    TopListingsComponent,
    BrowsePropertiesCtaComponent,
    ApartmentsComponent

  ]
})
export class SharedModule { }
