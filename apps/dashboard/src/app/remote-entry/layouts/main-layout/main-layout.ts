import { Component } from '@angular/core';
import { Home } from '../../Pages/features/home/home';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-main-layout',
  imports: [Home, RouterLink , RouterOutlet],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {}
