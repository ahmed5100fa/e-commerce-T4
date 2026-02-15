import { Component } from '@angular/core';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'custom-alert',
  imports: [ToastModule],
  templateUrl: './alert.html',
  styleUrl: './alert.css',
})
export class AlertComponent {}
