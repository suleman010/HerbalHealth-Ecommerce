import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSucessfullComponent } from './order-sucessfull.component';

describe('OrderSucessfullComponent', () => {
  let component: OrderSucessfullComponent;
  let fixture: ComponentFixture<OrderSucessfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSucessfullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSucessfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
