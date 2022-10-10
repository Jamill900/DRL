import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxBeautifyCursorModule } from 'ngx-beautify-cursor';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ApplyComponent } from './apply/apply.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { NewsComponent } from './news/news.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { CareersPageComponent } from './careers-page/careers-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { AiqumComponent } from './aiqum/aiqum.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ApplyComponent,
    MainComponent,
    AboutComponent,
    ServicesComponent,
    ProductsComponent,
    NewsComponent,
    ServicesPageComponent,
    ProductsPageComponent,
    AboutPageComponent,
    CareersPageComponent,
    NewsPageComponent,
    AiqumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBeautifyCursorModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
