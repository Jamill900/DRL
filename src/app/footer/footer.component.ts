import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import AOS from "aos";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    AOS.init();
  }

  openLg(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  navigateTo(url: string) {
    window.open(url, 'target: _blank');
  }
}
