import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainCarts } from './main-carts';

describe('MainCarts', () => {
  let component: MainCarts;
  let fixture: ComponentFixture<MainCarts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainCarts],
    }).compileComponents();

    fixture = TestBed.createComponent(MainCarts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
