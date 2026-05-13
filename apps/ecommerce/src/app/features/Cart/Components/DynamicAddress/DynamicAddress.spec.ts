import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicAddress } from './DynamicAddress';

describe('DynamicAddress', () => {
  let component: DynamicAddress;
  let fixture: ComponentFixture<DynamicAddress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicAddress],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicAddress);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
