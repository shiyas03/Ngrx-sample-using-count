import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterCustomInputComponent } from './counter-custom-input.component';

describe('CounterCustomInputComponent', () => {
  let component: CounterCustomInputComponent;
  let fixture: ComponentFixture<CounterCustomInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterCustomInputComponent]
    });
    fixture = TestBed.createComponent(CounterCustomInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
