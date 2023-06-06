import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolvedTicketComponent } from './solved-ticket.component';

describe('SolvedTicketComponent', () => {
  let component: SolvedTicketComponent;
  let fixture: ComponentFixture<SolvedTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolvedTicketComponent]
    });
    fixture = TestBed.createComponent(SolvedTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
