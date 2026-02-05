import { Component } from '@angular/core';
import { AuthRightImage } from '../shared/components/auth-right-image/auth-right-image';
import { LogincomponentComponent } from '../features/auth/logincomponent/logincomponent.component';
import { DicorImage } from '../shared/components/image-dicoriton/dicor-image';

@Component({
  selector: 'app-authlayout',
  standalone: true,
  imports: [AuthRightImage, LogincomponentComponent, DicorImage],  
  templateUrl: './authlayout.html',
  styleUrls: ['./authlayout.css'], 
})
export class Authlayout {}
