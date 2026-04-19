import { Component, inject, Input, signal } from '@angular/core';
import { Addressinter } from '../../interfaces/cart-Interface/cart-inter';
import { CartServ } from '../../services/cart-service/cart-serv';
import { ActivatedRoute, Router } from '@angular/router';
import { MapPin, Pencil, Phone, Trash2, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-dynamic-address',
  imports: [LucideAngularModule],
templateUrl: './DynamicAddress.html',
  styleUrl: './DynamicAddress.css',
})
export class DynamicAddress {
  addresses = signal<Addressinter[]>([]);
  private cartService = inject(CartServ);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  readonly icons = [MapPin , Pencil , Trash2 , Phone];
    AddressesResponse() {
    this.cartService.getUserAddresses().subscribe({
      next: (res) => {
        this.addresses.set(res.addresses);
      }
    });
  }

    goToDynamicNewAddress() {
    this.router.navigate(['../dynamicNewAddress'], { relativeTo: this.route });
  }

  ngOnInit(){
    this.AddressesResponse()
  }
}
