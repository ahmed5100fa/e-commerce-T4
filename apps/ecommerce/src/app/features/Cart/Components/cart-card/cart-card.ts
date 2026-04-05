import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { BrushCleaning, LucideAngularModule, Trash2 } from "lucide-angular";
import { CartServ } from '../../services/cart-service/cart-serv';

@Component({
  selector: 'app-cart-card',
  imports: [LucideAngularModule],
  templateUrl: './cart-card.html',
  styleUrl: './cart-card.css',
})
export class CartCard {
    private _cartService = inject(CartServ);
    @Input() price : number = 0;
    @Input() descreption : string = '';
    @Input() Image : string = '';
    @Input() product_Id : string = '';
    @Input() rateAvg : number = 0;
    @Input() rateCount : number = 0;
    @Input() quantity : number = 0;
    @Output() itemDeleted = new EventEmitter<string>();
    @Output() itemUpdated = new EventEmitter<{quantity: number, productId: string, newTotalPrice?: number}>();
    icons= [BrushCleaning , Trash2];

  UpdateCartProduct(quantity: number , productId: string){
    this._cartService.UpdateCartProduct(quantity , productId).subscribe({
      next : (res: any) => {
        console.log(res);
        this.itemUpdated.emit({
          quantity,
          productId,
          newTotalPrice: res.cart?.totalPrice
        });
      },
      error : (err) => {
        console.log(err);
      }
    })
  }

  increase() {
      this.quantity++;
      this.UpdateCartProduct(this.quantity, this.product_Id);
    }

    decrease() {
      if (this.quantity > 1) {
        this.quantity--;
        this.UpdateCartProduct(this.quantity, this.product_Id);
      }else{
        this.deleteFromCart(this.product_Id)
      }
    }

    deleteFromCart(productId: string) {
      this._cartService.deleteFromCart(productId).subscribe({
        next: (res: any) => {
          console.log(res);
          this.itemDeleted.emit(productId);
          if (res.cart?.totalPrice) {
            this.itemUpdated.emit({
              quantity: 0,
              productId: productId,
              newTotalPrice: res.cart.totalPrice
            });
          }
        },
        error: (err) => console.log(err)
      });
    }
}
