import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiqumComponent } from './aiqum.component';

describe('AiqumComponent', () => {
  let component: AiqumComponent;
  let fixture: ComponentFixture<AiqumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiqumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiqumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
