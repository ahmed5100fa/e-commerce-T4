import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecondNav } from './second-nav';

describe('SecondNav', () => {
  let component: SecondNav;
  let fixture: ComponentFixture<SecondNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondNav],
    }).compileComponents();

    fixture = TestBed.createComponent(SecondNav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
