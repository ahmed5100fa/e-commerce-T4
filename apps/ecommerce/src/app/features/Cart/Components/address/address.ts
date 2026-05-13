import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // مهم جداً
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { Addressinter } from '../../interfaces/cart-Interface/cart-inter';
import { CartServ } from '../../services/cart-service/cart-serv';
import { ArrowRight, LucideAngularModule , Phone, X} from "lucide-angular";
import { CustomButton } from "@Ui-components";
@Component({
  selector: 'app-address',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LucideAngularModule, CustomButton],
  templateUrl: './address.html'
})
export class Address implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private cartService = inject(CartServ);
  isModalOpen = signal<boolean>(false);
  selectedAddressId = signal<string>('');
  arrowIcon = ArrowRight;

  readonly icons = [Phone , X];

  addresses = signal<Addressinter[]>([]);

  ngOnInit() {
    this.AddressesResponse();
  }

  AddressesResponse() {
    this.cartService.getUserAddresses().subscribe({
      next: (res) => {
        this.addresses.set(res.addresses);
        if (res.addresses.length > 0) {
          this.selectedAddressId.set(res.addresses[0]._id);
        }
      }
    });
  }

  selectAddress(id: string) {
    this.selectedAddressId.set(id);
  }

  goToPayment() {
    const addressId = this.selectedAddressId();

    if (addressId) {
      this.router.navigate(['../payment'], {
        relativeTo: this.route,
        queryParams: { addressId: addressId }
      });
    } else {
      alert('Please select an address first');
    }
  }


openModal() {
  this.isModalOpen.set(true);
  this.router.navigate(['dynamicAddress'], { relativeTo: this.route });
}

closeModal() {
  this.isModalOpen.set(false);
  this.router.navigate(['./'], { relativeTo: this.route });
}
}
