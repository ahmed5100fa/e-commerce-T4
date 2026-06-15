import { Component } from '@angular/core';
import { BreadCrumb } from "../../../shared/breadCrumb/breadCrumb";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [BreadCrumb , RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
