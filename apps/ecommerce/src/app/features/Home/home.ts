import { Component } from '@angular/core';
import { Navbar } from "../../layouts/main layout/navbar/navbar";
import { BestSelling } from "./components/best-selling/best-selling";
import { TrustedBy } from "./components/trusted-by/trusted-by";

@Component({
  selector: 'home-page',
  imports: [Navbar, BestSelling, TrustedBy],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class HomePageComponent {}
