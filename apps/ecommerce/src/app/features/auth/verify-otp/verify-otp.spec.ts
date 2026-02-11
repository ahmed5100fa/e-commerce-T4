import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerifyOpt } from './verify-otp';

describe('VerifyOpt', () => {
  let component: VerifyOpt;
  let fixture: ComponentFixture<VerifyOpt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifyOpt],
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyOpt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
