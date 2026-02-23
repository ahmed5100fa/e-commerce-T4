import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthRightImage } from './auth-right-image';

describe('AuthRightImage', () => {
  let component: AuthRightImage;
  let fixture: ComponentFixture<AuthRightImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthRightImage],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthRightImage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
