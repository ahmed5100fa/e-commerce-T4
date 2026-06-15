import { Component } from '@angular/core';
import { AddProduct } from "./pages/addProduct/addProduct";
import { EditProduct } from "./pages/editProduct/editProduct";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-products',
  imports: [ RouterOutlet],
  templateUrl: './Products.html',
  styleUrl: './Products.css',
})
export class Products {}
