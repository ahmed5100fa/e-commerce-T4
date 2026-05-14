import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phone, LucideAngularModule, MoveLeft, ArrowRight } from 'lucide-angular';
import { CustomButton } from "@Ui-components";
@Component({
  selector: 'app-payment',
  imports: [LucideAngularModule, CustomButton],
  templateUrl: './Payment.html',
  styleUrl: './Payment.css',
})
export class Payment {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  readonly icons = [MoveLeft];
  arrowIcon = ArrowRight;
  paymentOptions = [
  {
    id: 'cash',
    title: 'Cash on Delivery',
    description: "You'll pay in cash when your order is delivered.",
    image: './Assets/image/Cash.png',
    alt: 'Cash on Delivery'
  },
  {
    id: 'card',
    title: 'Credit Card',
    description: "You'll be securely redirected to Stripe to complete your payment.",
    image: './Assets/image/Cridt.png',
    alt: 'Credit Card'
  }
    ] as const;


  selectedId: string | null = null;
  selectedMethod = signal<'cash' | 'card'>('cash');
  ngOnInit() {
    this.selectedId = this.route.snapshot.queryParamMap.get('addressId');
    console.log('Selected Address ID:', this.selectedId);
  }

  selectMethod(method: 'cash' | 'card') {
    this.selectedMethod.set(method);
  }

  goBack() {
    this.router.navigate(['../address'], { relativeTo: this.route });
  }
}
