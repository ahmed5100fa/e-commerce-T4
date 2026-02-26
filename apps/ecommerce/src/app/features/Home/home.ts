import { Component } from '@angular/core';
import { Navbar } from "../../layouts/main layout/navbar/navbar";
import { BestSelling } from "./components/best-selling/best-selling";

@Component({
  selector: 'home-page',
  imports: [Navbar, BestSelling],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class HomePageComponent {}
