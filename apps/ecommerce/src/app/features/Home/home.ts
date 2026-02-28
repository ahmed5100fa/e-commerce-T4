import { Component, Input, OnInit } from '@angular/core';
import { AboutUs } from './components/about-us/about-us';
import { NgOptimizedImage } from '@angular/common';
import { Navbar } from "../../layouts/main layout/navbar/navbar";

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [AboutUs, Navbar],
  templateUrl: `./home.html`,
  styleUrls: ['./home.scss'],
})
export class HomePageComponent {}
