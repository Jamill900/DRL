import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Career } from '../interfaces/careers';
import AOS from "aos";

@Component({
  selector: 'app-careers-page',
  templateUrl: './careers-page.component.html',
  styleUrls: ['./careers-page.component.scss']
})
export class CareersPageComponent implements OnInit {

  careers: Career[] = [];
  loading = false;

  constructor(private database: DatabaseService) { }

  ngOnInit(): void {
    this.getCareers();
    AOS.init();
  }

  getCareers() {
    this.loading = true;
    this.database.getCareers().subscribe(careers =>
      this.careers = careers);
  }

  navigateTo(url: string) {
    window.open(url, '_blank');
  }

  scrollToElement(element: any): void {
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
