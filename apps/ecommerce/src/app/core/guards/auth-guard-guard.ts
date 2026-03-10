import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
    const platformId = inject(PLATFORM_ID);

 const token = isPlatformBrowser(platformId)
    ? localStorage.getItem('token')
    : null;

  return token ? router.createUrlTree(['/main/home']) : true;

};
