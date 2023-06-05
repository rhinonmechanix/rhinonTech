import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../services/auth.service';

import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private auth: AuthenticationService,
    ) { }
  canActivate() {
    if (this.auth.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/account/login']);
    return false;
  }
}
