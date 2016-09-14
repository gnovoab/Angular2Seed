import {Component, OnInit} from '@angular/core';
import {UserService} from "../../shared/user.service";
import {User} from "./user";
import {Router} from "@angular/router";

@Component({
    // moduleId: module.id,
    selector: 'my-login',
    templateUrl: 'app/components/login/login.component.html',
    styleUrls: ['app/components/login/login.component.css']
})

export class LoginComponent implements OnInit{

    constructor(private userService: UserService, private router: Router) {}

    ngOnInit(): void {
    }

    login(email, password) {
        this.userService.login(email, password)
            .then(myData => {
                if(this.userService.isLoggedIn()){

                    this.router.navigate(['dashboard']);

                    //foward to dashboard
                }

            });

        // this.userService.login(this.user).subscribe(
       //     accessToken => this.accessToken = accessToken,
       //     error =>  this.errorMsg = <any>error);
    }
}


/*

 @Component({


 templateUrl: 'app/components/login/login.component.html',

 })

 */
