import { MetaData } from './../../shared/interfaces/testimonials.interface';
import { Component, computed, DestroyRef, effect, inject, signal } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from '../../shared/interfaces/card-product';
import { Card } from '../../shared/components/card/card';
import { Paginator, PaginatorModule, PaginatorState } from 'primeng/paginator';
import { Spinner } from '../../shared/components/spinner/spinner';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-products',
  imports: [Card, PaginatorModule, Spinner, RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  private readonly _productsService = inject(ProductsService);
  products = signal<Product[]>([]);
  pagesinfo = signal<MetaData>({ currentPage: 0, totalPages: 0, limit: 0, totalItems: 0 });
  first = 0;
  rows = 12;
  totalPages = computed(() => Math.ceil(this.pagesinfo().totalItems/this.rows));

  isLoading = this._productsService.isLoading;
     private destroyRef = inject(DestroyRef);

  constructor(){
    effect(()=>{
      const productsData = this._productsService.products();
      this.products.set(productsData.products);
      this.pagesinfo.set(productsData.metadata);
    })
  }

  ngOnInit(){
    this.loadProducts(this.first, this.rows);
  }
  onPageChange(event:PaginatorState){
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 12;
      this.loadProducts(this.first, this.rows);
  }
  loadProducts(first:number,limit:number){
    const page = Math.floor(first / limit) + 1;

    this._productsService.getProducts(page,limit);
  }
  
}
