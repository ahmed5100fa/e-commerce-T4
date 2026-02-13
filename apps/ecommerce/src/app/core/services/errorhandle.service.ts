import { HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { NotificationService } from '@Ui-components';
@Injectable({
  providedIn: 'root',
})
export class HandleError {
  private readonly _toasterOptions = inject(NotificationService);

  handle(err: HttpErrorResponse): void {
    switch (err.status) {
      case 401:
        this._toasterOptions.showError(err.message);
        break;

      case 404:
        this._toasterOptions.showError(err.message);
        break;

      default:
        this._toasterOptions.showError(err.message);
    }
  }
}
