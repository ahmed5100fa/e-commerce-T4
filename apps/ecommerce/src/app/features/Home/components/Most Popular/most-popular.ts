import { Subscription } from 'rxjs';
import { Component, inject } from '@angular/core';
import { SecondHeader } from 'apps/ecommerce/src/app/shared/components/secondHeader/secondHeader';
import { ProductService } from '../../services/ProductService/product-service';
import { Product } from 'apps/ecommerce/src/app/shared/interfaces/card-product';
import { Card } from 'apps/ecommerce/src/app/shared/components/card/card';

@Component({
  selector: 'most-popular-section',
  standalone: true,
  imports: [SecondHeader, Card],
  templateUrl: './most-popular.html',
  styleUrls: ['./most-popular.scss'],
})
export class MostPopularSection {
  private readonly proudctService = inject(ProductService);

  proudctsList: Product[] = [];
  subscription = new Subscription();

  ngOnInit(): void {
    this.subscription = this.proudctService.getProducts().subscribe({
      next: (res) => {
        this.proudctsList = res.products.slice(0, 12);
      },
    });
  }
}
