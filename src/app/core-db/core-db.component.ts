import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbModal, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-core-db',
	templateUrl: './core-db.component.html',
	styleUrls: ['./core-db.component.scss']
})
export class CoreDbComponent implements OnInit {

	constructor(private modalService: NgbModal) { }

	ngOnInit(): void {
	}

	images = [1, 2, 3, 4, 5].map((n) => `assets/products/CoreDBPhoto${n}.jpg`);

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
