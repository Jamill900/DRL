import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-aiqum',
  templateUrl: './aiqum.component.html',
  styleUrls: ['./aiqum.component.scss']
})
export class AiqumComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

  scrollToElement(element: any): void {
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
