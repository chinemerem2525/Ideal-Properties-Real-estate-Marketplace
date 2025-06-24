import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { TopListingsComponent } from './components/top-listings/top-listings.component';
import { BrowsePropertiesCtaComponent } from './components/browse-properties-cta/browse-properties-cta.component';
import { ApartmentsComponent } from './components/apartments/apartments.component';
import { FormsModule } from '@angular/forms';
import { RelatedListingComponent } from './components/related-listing/related-listing.component';
import { RouterModule } from '@angular/router';
import { AllShortletsComponent } from './components/all-shortlets/all-shortlets.component';
import { AllShortletsSingleComponent } from './components/all-shortlets-single/all-shortlets-single.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FeaturedComponent,
    TopListingsComponent,
    BrowsePropertiesCtaComponent,
    ApartmentsComponent,
    RelatedListingComponent,
    AllShortletsComponent,
    AllShortletsSingleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
    exports: [
    HeaderComponent,
    FooterComponent,
    FeaturedComponent,
    TopListingsComponent,
    BrowsePropertiesCtaComponent,
    ApartmentsComponent,
    RelatedListingComponent,
    AllShortletsComponent,
    AllShortletsSingleComponent

  ]
})
export class SharedModule { }
