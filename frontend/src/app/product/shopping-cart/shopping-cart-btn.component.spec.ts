import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartBtnComponent } from './shopping-cart-btn.component';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartBtnComponent;
  let fixture: ComponentFixture<ShoppingCartBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
