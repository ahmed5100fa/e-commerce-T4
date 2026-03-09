import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { ProductsService } from '../../products.service';
import { Reviews } from 'apps/ecommerce/src/app/shared/interfaces/reviews';
import { SecondHeader } from "apps/ecommerce/src/app/shared/components/secondHeader/secondHeader";
import { RatingModule } from 'primeng/rating';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { TextareaModule } from 'primeng/textarea';
import { FormGroup } from '@angular/forms';
import { FormInput } from 'apps/ecommerce/src/app/shared/components/form-input/form-input';
import { CustomButton } from "@Ui-components";
@Component({
  selector: 'app-product-review',
  imports: [SecondHeader, RatingModule, FormsModule, DatePipe, FormInput, TextareaModule, ReactiveFormsModule, CustomButton],
  templateUrl: './product-review.html',
  styleUrl: './product-review.scss',
})
export class ProductReview {
  _productService = inject(ProductsService);
  productId = input<string>('');
  reviews = signal<Reviews[]>([]);
  rating:number = 0;

  isloggedIn = signal(true); //temprorary until we have implemented


  formBuilder = inject(FormBuilder);


  reviewForm = this.formBuilder.group({
    title: [''],
    review: [''],
    rating: [0]
  });



  generalRating = computed(() => {
    const reviewsList = this.reviews();
    if (reviewsList.length === 0) return 0;

    const totalRating = reviewsList.reduce((sum, review) => sum + review.rating, 0);
    return totalRating / reviewsList.length;
  });


  ngOnInit(){
    this._productService.getProductReview(this.productId()).subscribe((res:any)=>{
      this.reviews.set(res.reviews);
    });
}
onSubmit(){
  // this part won't do anything for now as said in the video
  if(this.reviewForm.valid){
    const newReview = {
      title: this.reviewForm.value.title!,
      comment: this.reviewForm.value.review!,
      rating: this.reviewForm.value.rating!,
      createdAt: new Date().toISOString()
    };
    this.reviewForm.reset();
  }
}


}

