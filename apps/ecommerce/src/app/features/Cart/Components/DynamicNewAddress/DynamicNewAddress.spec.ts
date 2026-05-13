import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicNewAddress } from './DynamicNewAddress';

describe('DynamicNewAddress', () => {
  let component: DynamicNewAddress;
  let fixture: ComponentFixture<DynamicNewAddress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicNewAddress],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicNewAddress);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
