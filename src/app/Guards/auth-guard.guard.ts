import { inject } from '@angular/core';

import { AuthServiceService } from '../Services/auth-service.service';
import { Router } from '@angular/router';

export const canActivate = () => {
  const AuthService = inject(AuthServiceService);
  const router = inject(Router);

  if (!AuthService.isLoggedIn()) {
    router.navigate(['/sign-in']);

    return false;
  } else {
    return true;
  }
};
