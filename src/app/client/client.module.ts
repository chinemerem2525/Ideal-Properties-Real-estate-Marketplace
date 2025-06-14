import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ClientRoutingModule } from './client-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { PropertiesComponent } from './properties/properties.component';
import { ServicesComponent } from './services/services.component';
import { ShortStayComponent } from './short-stay/short-stay.component';
import { FormsModule } from '@angular/forms';
import { PropertyDetailComponent } from './property-detail/property-detail.component';

@NgModule({
  declarations: [


    HomeComponent,
        AboutComponent,
        ContactUsComponent,
        NewProjectComponent,
        PropertiesComponent,
        ServicesComponent,
        ShortStayComponent,
        PropertyDetailComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ClientModule { }
