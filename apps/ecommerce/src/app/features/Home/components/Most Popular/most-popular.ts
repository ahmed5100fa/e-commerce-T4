import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { SecondHeader } from 'apps/ecommerce/src/app/shared/components/secondHeader/secondHeader';
import { ProductService } from '../../services/ProductService/product-service';
import { Product } from 'apps/ecommerce/src/app/shared/interfaces/card-product';
import { Card } from 'apps/ecommerce/src/app/shared/components/card/card';
import { OccasionService } from '../../services/Occasion/occasion.service';
import { Occasion } from 'apps/ecommerce/src/app/shared/interfaces/occasions.interface';

@Component({
  selector: 'most-popular-section',
  standalone: true,
  imports: [SecondHeader, Card, CommonModule],
  templateUrl: './most-popular.html',
  styleUrls: ['./most-popular.scss'],
})
export class MostPopularSection {
  private readonly proudctService = inject(ProductService);
  private readonly occasionService = inject(OccasionService);
  // Prop
  occasionLinks: Occasion[] = [
    {
      _id: '',
      createdAt: '',
      name: 'All',
      image: '',
      isSuperAdmin: false,
      productsCount: 0,
      slug: '',
      updatedAt: '',
    },
  ];
  proudctList: Product[] = [];
  filteredList: Product[] = [];
  activeLink: string = '';

  occasionSubscription!: Subscription;
  proudctSubscription!: Subscription;

  // methods

  filterProudcts(link: string, id: string) {
    this.activeLink = link;
    if (id !== '') {
      this.filteredList = this.proudctList.filter(
        (product) => product.occasion === id,
      );
    } else {
      this.filteredList = this.proudctList;
    }
  }

  // life hooks
  ngOnInit(): void {
    this.proudctSubscription = this.proudctService.getProducts().subscribe({
      next: (res) => {
        this.proudctList = res.products.slice(0, 15);
        this.filteredList = this.proudctList;
      },
    });

    this.occasionSubscription = this.occasionService.getOccasions().subscribe({
      next: (res) => {
        for (let o = 0; o < res.occasions.length; o++) {
          this.occasionLinks.push(res.occasions[o]);
        }
      },
    });
  }
  ngOnDestroy(): void {
    this.occasionSubscription.unsubscribe();
    this.proudctSubscription.unsubscribe();
  }
}
