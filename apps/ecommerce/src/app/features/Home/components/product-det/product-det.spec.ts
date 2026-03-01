import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDet } from './product-det';

describe('ProductDet', () => {
  let component: ProductDet;
  let fixture: ComponentFixture<ProductDet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDet],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
