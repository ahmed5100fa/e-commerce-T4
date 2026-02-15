import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private readonly messageService = inject(MessageService);

  showSuccess(msg: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Success ',
      detail: msg,
      key: 'br',
      life: 2000,
    });
  }

  showError(msg: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error ',
      detail: msg,
      key: 'br',
      life: 2000,
    });
  }
}
