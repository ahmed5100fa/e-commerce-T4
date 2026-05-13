import { CommonModule, NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { Stepper } from "../stepper/stepper";

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [RouterOutlet, Stepper],
  templateUrl: './shipping.html',
})
export class Shipping implements OnInit {
private router = inject(Router);
  currentStep = 1;

  ngOnInit() {
    this.updateStep(this.router.url);
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        this.updateStep(e.urlAfterRedirects);
      });
  }

  updateStep(url: string) {
    this.currentStep = url.includes('payment') ? 2 : 1;
  }
}
