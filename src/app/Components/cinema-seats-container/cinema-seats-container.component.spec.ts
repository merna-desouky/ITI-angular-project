import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaSeatsContainerComponent } from './cinema-seats-container.component';

describe('CinemaSeatsContainerComponent', () => {
  let component: CinemaSeatsContainerComponent;
  let fixture: ComponentFixture<CinemaSeatsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CinemaSeatsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CinemaSeatsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
