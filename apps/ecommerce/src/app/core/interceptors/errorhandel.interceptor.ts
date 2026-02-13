import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { HandleError } from '../services/errorhandle.service';
import { catchError, throwError } from 'rxjs';

export const err: HttpInterceptorFn = (req, next) => {
  const errorHandler = inject(HandleError);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      errorHandler.handle(error);
      return throwError(() => error);
    }),
  );
};
