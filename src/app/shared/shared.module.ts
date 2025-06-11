import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturedComponent } from './components/featured/featured.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FeaturedComponent
  ],
  imports: [
    CommonModule
  ],
    exports: [
    HeaderComponent,
    FooterComponent,
    FeaturedComponent
  ]
})
export class SharedModule { }
