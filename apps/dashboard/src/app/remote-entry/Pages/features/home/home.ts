import { Component, inject } from '@angular/core';
import { BreadCrumb } from "../../../shared/breadCrumb/breadCrumb";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProServ } from '../Products/services/proServ/pro-serv';

@Component({
  selector: 'app-home',
  imports: [BreadCrumb , RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  proService = inject(ProServ);
  id :string = "6a2c098a992612ae599a2414";



  deleteProduct(id : string) {
    this.proService.deleteProduct(id).subscribe({
      next: (res) => {
        console.log('Product deleted successfully', res);
      },
      error: (err) => {
        console.error('Error deleting product', err);
      }
    });
  }
}
