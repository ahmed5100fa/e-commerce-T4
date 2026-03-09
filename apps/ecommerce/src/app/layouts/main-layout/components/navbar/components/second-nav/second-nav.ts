import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-second-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LucideAngularModule], // لازم
  templateUrl: './second-nav.html',
  styleUrls: ['./second-nav.css'],
})
export class SecondNav {}
