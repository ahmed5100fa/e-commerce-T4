import { Component } from '@angular/core';
import { MainHeader } from "apps/ecommerce/src/app/shared/components/mainHeader/mainHeader";
import { SecondHeader } from "apps/ecommerce/src/app/shared/components/secondHeader/secondHeader";

@Component({
  selector: 'app-galary',
  imports: [MainHeader, SecondHeader],
  templateUrl: './galary.html',
  styleUrl: './galary.scss',
})
export class Galary {

}
