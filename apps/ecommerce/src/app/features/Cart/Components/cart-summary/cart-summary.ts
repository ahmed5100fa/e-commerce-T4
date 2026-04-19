import { Component, inject, input, signal } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { LucideAngularModule, MoveRight, TicketPercent } from "lucide-angular";
import { filter } from 'rxjs';

@Component({
  selector: 'app-cart-summary',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.css',
})
export class CartSummary {

  isDiscount = input<boolean>(false);
  Subtotal = input<number>(0);
  Discount = input<number>(0);
  Total = input<number>(0);

  icons = [TicketPercent, MoveRight];

  private router = inject(Router);

  isMainCart = signal(false);

  ngOnInit() {

    // أول قيمة
    this.isMainCart.set(this.router.url.includes('mainCarts'));

    // listen للتغييرات
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isMainCart.set(this.router.url.includes('mainCarts'));
      });
  }
}
