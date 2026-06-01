import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedPhoneInp } from './sharedPhoneInp';

describe('SharedPhoneInp', () => {
  let component: SharedPhoneInp;
  let fixture: ComponentFixture<SharedPhoneInp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedPhoneInp],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedPhoneInp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
