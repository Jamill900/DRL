import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './about-page/about-page.component';
import { AiqumComponent } from './aiqum/aiqum.component';
import { CareersPageComponent } from './careers-page/careers-page.component';
import { MainComponent } from './main/main.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: 'news', component: NewsPageComponent },
  { path: 'careers', component: CareersPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'aiqum', component: AiqumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
