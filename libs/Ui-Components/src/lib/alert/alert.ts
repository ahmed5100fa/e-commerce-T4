import { Component } from '@angular/core';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'lib-custom-alert',
  imports: [ToastModule],
  templateUrl: './alert.html',
  styleUrl: './alert.css',
})
export class AlertComponent {}
