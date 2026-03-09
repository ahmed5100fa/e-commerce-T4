import { Component } from '@angular/core';
import { AuthRightImage } from '../../features/auth/components/auth-right-image/auth-right-image';
import { LoginComponent } from '../../features/auth/pages/logincomponent/logincomponent';
import { DicorImage } from '../../features/auth/components/image-dicoriton/dicor-image';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-authlayout',
  standalone: true,
  imports: [AuthRightImage, DicorImage, RouterModule],
  templateUrl: './authlayout.html',
  styleUrls: ['./authlayouts.scss'],
})
export class Authlayout {}
