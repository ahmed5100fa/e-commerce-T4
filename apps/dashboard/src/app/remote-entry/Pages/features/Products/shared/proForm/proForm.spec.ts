import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProForm } from './proForm';

describe('ProForm', () => {
  let component: ProForm;
  let fixture: ComponentFixture<ProForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ProForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
