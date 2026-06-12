import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Occassion } from './Occassion';

describe('Occassion', () => {
  let component: Occassion;
  let fixture: ComponentFixture<Occassion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Occassion],
    }).compileComponents();

    fixture = TestBed.createComponent(Occassion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
