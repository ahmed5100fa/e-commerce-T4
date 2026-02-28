import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpecialGiftsCard } from './special-gifts-card';

describe('SpecialGiftsCard', () => {
  let component: SpecialGiftsCard;
  let fixture: ComponentFixture<SpecialGiftsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialGiftsCard],
    }).compileComponents();

    fixture = TestBed.createComponent(SpecialGiftsCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
