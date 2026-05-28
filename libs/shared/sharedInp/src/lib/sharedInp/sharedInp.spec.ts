import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedInp } from './sharedInp';

describe('SharedInp', () => {
  let component: SharedInp;
  let fixture: ComponentFixture<SharedInp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedInp],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedInp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
