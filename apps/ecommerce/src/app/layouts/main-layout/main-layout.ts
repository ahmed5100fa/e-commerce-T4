import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';
@Component({
  selector: 'app-main-layout',
  imports: [RouterModule, Footer, Navbar],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {



}
