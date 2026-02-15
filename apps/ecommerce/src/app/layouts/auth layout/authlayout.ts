import { Component } from '@angular/core';
import { AuthRightImage } from '../../shared/components/auth-right-image/auth-right-image';
import { LoginComponent } from '../../features/auth/pages/logincomponent/logincomponent';
import { DicorImage } from '../../shared/components/image-dicoriton/dicor-image';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-authlayout',
  standalone: true,
<<<<<<< HEAD
  imports: [AuthRightImage, LoginComponent, DicorImage, RouterModule],
=======
  imports: [AuthRightImage, DicorImage, RouterModule],  
>>>>>>> 27182e56591d6cc9535cb24ac33f727ca124df48
  templateUrl: './authlayout.html',
  styleUrls: ['./authlayout.css'],
})
export class Authlayout {}
