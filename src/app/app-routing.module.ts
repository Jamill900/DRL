import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { MainComponent } from './main/main.component';
import { AiqumComponent } from './aiqum/aiqum.component';
import { CoreDbComponent } from './core-db/core-db.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { CareersPageComponent } from './careers-page/careers-page.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: 'news', component: NewsPageComponent },
  { path: 'news/:id', component: NewsDetailsComponent},
  { path: 'careers', component: CareersPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'aiqum', component: AiqumComponent},
  { path: 'core-db', component: CoreDbComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
