import { Component } from '@angular/core';
import { AuthRightImage } from '../../shared/components/auth-right-image/auth-right-image';
import { DicorImage } from '../../shared/components/image-dicoriton/dicor-image';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-authlayout',
  standalone: true,
  imports: [AuthRightImage, DicorImage, RouterModule],  
  templateUrl: './authlayout.html',
  styleUrls: ['./authlayout.css'], 
})
export class Authlayout {}
