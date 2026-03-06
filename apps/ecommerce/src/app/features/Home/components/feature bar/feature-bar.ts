import { Component } from '@angular/core';
import {
  LucideAngularModule,
  Van,
  RefreshCcw,
  ShieldCheck,
  Headset,
} from 'lucide-angular';
import { featureIcon } from './components/feature component/feature-bar-icon';

@Component({
  selector: 'feature-bar',
  imports: [LucideAngularModule, featureIcon],

  templateUrl: './feature-bar.html',
  styleUrls: ['./feature-bar.scss'],
})
export class FeatureBar {
  test = Van;
  features = [
    { head: 'Free Delivery', text: 'For orders above 120 EGP', icon: Van },
    { head: 'Get Refund', text: 'Refunds within 30 days', icon: RefreshCcw },
    { head: 'Safe Payment', text: '100% Secure Payment', icon: ShieldCheck },
    { head: '24/7 Support', text: 'Contact us at any time', icon: Headset },
  ];
}
