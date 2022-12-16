import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbModal, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import * as AOS from 'aos';

@Component({
  selector: 'app-aiqum',
  templateUrl: './aiqum.component.html',
  styleUrls: ['./aiqum.component.scss']
})
export class AiqumComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    AOS.init();
  }

  images = [1, 2, 3, 4].map((n) => `assets/products/AiQum_${n}.jpg`);

	paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

	togglePaused() {
		if (this.paused) {
			this.carousel.cycle();
		} else {
			this.carousel.pause();
		}
		this.paused = !this.paused;
	}

  scrollToElement(element: any): void {
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  openLg(content: any) {
		this.modalService.open(content, { size: 'lg' });
	}

  onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}

}
