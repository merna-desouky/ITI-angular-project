import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookYourTicketComponent } from './book-your-ticket.component';

describe('BookYourTicketComponent', () => {
  let component: BookYourTicketComponent;
  let fixture: ComponentFixture<BookYourTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookYourTicketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookYourTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
