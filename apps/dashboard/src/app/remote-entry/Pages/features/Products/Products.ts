import { Component } from '@angular/core';
import { AddProduct } from "./pages/addProduct/addProduct";

@Component({
  selector: 'app-products',
  imports: [AddProduct],
  templateUrl: './Products.html',
  styleUrl: './Products.css',
})
export class Products {}
