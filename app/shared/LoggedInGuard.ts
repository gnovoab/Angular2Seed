

//Imports
import {CanActivate, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {UserService} from "./user.service";

@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(private userService: UserService, private router:Router) {}

    canActivate() {
        if (this.userService.isLoggedIn()) { return true; }
        this.router.navigate(['login']);
        return false;
    }
}
