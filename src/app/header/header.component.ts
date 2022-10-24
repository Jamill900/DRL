import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
product: any;

  constructor(private modalService: NgbModal, private router: Router) { }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    let element: HTMLElement = document.getElementsByClassName('navbar-toggler')[0] as HTMLElement;
    if (element.getAttribute('aria-expanded') == 'true') {
      element.click();
    }
  }

  ngOnInit(): void {
  }

  showHeader(route: string) {
    return this.router.url.includes(route);
  }

  openLg(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }


  toggleNavBar() {
    let element: HTMLElement = document.getElementsByClassName('navbar-toggler')[0] as HTMLElement;
    if (element.getAttribute('aria-expanded') == 'true') {
      element.click();
    }
  }
}
