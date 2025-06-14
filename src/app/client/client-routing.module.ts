import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client.component';
import { PropertiesComponent } from './properties/properties.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ShortStayComponent } from './short-stay/short-stay.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';


const routes: Routes = [
   {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'properties',
        component: PropertiesComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'services',
        component: ServicesComponent
      },
      {
        path: 'short-stay',
        component: ShortStayComponent
      },
      {
        path: 'new-project',
        component: NewProjectComponent
      },
      {
        path: 'contact-us',
        component: ContactUsComponent
      },
      {
        path: 'property-detail',
        component: PropertyDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
