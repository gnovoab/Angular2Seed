import {Component} from "@angular/core";
import {UserService} from "../shared/user.service";

@Component({
    selector: 'my-app',
    templateUrl: 'app/components/app.component.html',
    styleUrls: ['app/components/app.component.css']
})
export class AppComponent{

    constructor(private userService: UserService) {}


}
