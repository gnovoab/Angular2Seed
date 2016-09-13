


import {CanActivate} from "@angular/router";
import {Injectable} from "@angular/core";
import {UserService} from "./user.service";

@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(private user: UserService) {}

    canActivate() {
        return this.user.isLoggedIn();
    }
}