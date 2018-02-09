import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector:'protected-component',
    templateUrl:'./protected.component.html'
})

export class ProtectedComponent implements OnInit{
    
    constructor( private auth:AuthService){

    }

    profile: any;

    ngOnInit(){
        
        if (this.auth.userProfile) {
            this.profile = this.auth.userProfile;
        } else {
            this.auth.getProfile((err, profile) => {
            this.profile = profile;
           });
        }

    }
}