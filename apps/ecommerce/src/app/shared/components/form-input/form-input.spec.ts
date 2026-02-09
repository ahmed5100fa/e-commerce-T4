import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormInput } from './form-input';

describe('FormInput', () => {
  let component: FormInput<string>;
  let fixture: ComponentFixture<FormInput<string>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormInput],
    }).compileComponents();

    fixture = TestBed.createComponent<FormInput<string>>(FormInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
