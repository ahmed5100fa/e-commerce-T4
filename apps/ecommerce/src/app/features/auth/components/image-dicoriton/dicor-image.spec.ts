import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DicorImage } from './dicor-image';

describe('DicorImage', () => {
  let component: DicorImage;
  let fixture: ComponentFixture<DicorImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DicorImage],
    }).compileComponents();

    fixture = TestBed.createComponent(DicorImage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
