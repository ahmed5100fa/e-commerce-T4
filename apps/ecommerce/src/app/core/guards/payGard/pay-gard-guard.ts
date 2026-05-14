import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const payGardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const addressId = route.queryParamMap.get('addressId');

  if(addressId){
    return true;
  }
    router.navigate(['/cart/shipping/address']);
  return false;
};
