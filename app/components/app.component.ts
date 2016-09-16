
//Imports
import {Component} from "@angular/core";
import {UserService} from "../shared/user.service";


/**
 * App component class
 */
@Component({
    selector: 'my-app',
    templateUrl: 'app/components/app.component.html',
    styleUrls: ['app/components/app.component.css']
})
export class AppComponent{

    /**
     * Constructor
     * @param userService
     */
    constructor(private userService: UserService) {}


}
