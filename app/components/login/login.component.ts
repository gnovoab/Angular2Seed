import { Component } from '@angular/core';

@Component({
    templateUrl: 'app/components/login/login.component.html'
})

export class LoginComponent {

    public user = {};
    public errorMsg = '';

    // constructor(
    //     private _service:AuthenticationService) {}

    login() {
        // if(!this._service.login(this.user)){
        //     this.errorMsg = 'Failed to login';
        // }
    }
}



