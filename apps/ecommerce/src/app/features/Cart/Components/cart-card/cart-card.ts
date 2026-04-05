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
    @Input() price : number = 0;
    @Input() descreption : string = '';
    @Input() Image : string = '';
    @Input() product_Id : string = '';
    @Input() rateAvg : number = 0;
    @Input() rateCount : number = 0;
    @Input() quantity : number = 0;

    icons= [BrushCleaning , Trash2];

}
