import { Component } from '@angular/core';
import { Navbar } from "../../layouts/main layout/navbar/navbar";

@Component({
  selector: 'home-page',
  imports: [Navbar],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class HomePageComponent {}
