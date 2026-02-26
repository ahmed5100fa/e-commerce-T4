import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-main-layout',
  imports: [RouterModule, Footer],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {



}
