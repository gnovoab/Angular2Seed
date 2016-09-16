
//Imports
import {Component, OnInit} from "@angular/core";
import {UserService} from "../../shared/user.service";
import {Router} from "@angular/router";

/**
 * Login component
 */
@Component({
    // moduleId: module.id,
    selector: 'my-login',
    templateUrl: 'app/components/login/login.component.html',
    styleUrls: ['app/components/login/login.component.css']
})
export class LoginComponent implements OnInit{

    //Fields
    error: any;

    /**
     * Constructor
     * @param userService
     * @param router
     */
    constructor(private userService: UserService, private router: Router) {}

    /**
     * Init
     */
    ngOnInit(): void {}


    /**
     * Login user
     * @param email
     * @param password
     */
    login(email: string, password: string) {
        this.userService.login(email, password)
            .then(myData => {
                if(this.userService.isLoggedIn()){
                    this.router.navigate(['dashboard']);
                }
            })
            .catch(error => this.error = error);
    }
}
