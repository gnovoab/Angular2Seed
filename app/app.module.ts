
//Imports
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {routing, routedComponents} from "./app.routing";
import {AppComponent} from "./components/app.component";
import {FormsModule} from "@angular/forms";
import {UserService} from "./shared/user.service";
import {LoggedInGuard} from "./shared/LoggedInGuard";
import {TeamService} from "./components/teams/team.service";
import {TeamFilterPipe} from "./components/teams/team-filter.pipe";

/**
 * Module class
 */
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [AppComponent, routedComponents,  TeamFilterPipe],
    providers: [
        UserService, LoggedInGuard, TeamService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
