import { Injectable }  from '@angular/core';
import { Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot,
         CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()

export class AuthGuardService implements CanActivate {

    constructor( private auth:AuthService ){

    }

    canActivate( next:ActivatedRouteSnapshot, state:RouterStateSnapshot){
        if ( this.auth.isAuthenticated() ) {
            console.log("Pasó el guard");
            return true;
        } else {
            console.error("No pasó el guard");
            return false;
        }
    }

}