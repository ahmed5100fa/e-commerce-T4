import { Component } from '@angular/core';
import { BreadCrumb } from "../../../shared/breadCrumb/breadCrumb";

@Component({
  selector: 'app-home',
  imports: [BreadCrumb],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
