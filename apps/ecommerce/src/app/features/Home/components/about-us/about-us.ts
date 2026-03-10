import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CustomButton } from '@Ui-components';
import { ArrowRight } from 'lucide-angular';

@Component({
  selector: 'app-about-us',
  imports: [CustomButton, NgOptimizedImage],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {
  arrowRight = ArrowRight;
}
