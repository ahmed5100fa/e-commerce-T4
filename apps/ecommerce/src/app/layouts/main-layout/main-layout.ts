import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';
import { Products } from "../../features/products/products";
@Component({
  selector: 'app-main-layout',
  imports: [RouterModule, Footer, Navbar, Products],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {



}
