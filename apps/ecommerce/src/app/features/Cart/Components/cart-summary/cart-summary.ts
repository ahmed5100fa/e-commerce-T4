import { Component, input, Input } from '@angular/core';
import { LucideAngularModule, MoveRight, TicketPercent } from "lucide-angular";

@Component({
  selector: 'app-cart-summary',
  imports: [LucideAngularModule],
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.css',
})
export class CartSummary {
  isDiscount = input<boolean>(false);
  Subtotal = input<number>(0);
  Discount = input<number>(0);
  Total = input<number>(0);
  icons= [TicketPercent, MoveRight];
}
