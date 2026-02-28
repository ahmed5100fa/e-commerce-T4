import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecondHeader } from './secondHeader';

describe('SecondHeader', () => {
  let component: SecondHeader;
  let fixture: ComponentFixture<SecondHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(SecondHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
