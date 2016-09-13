import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import {routing, routedComponents} from './app.routing';
import {AppComponent} from "./components/app.component";
import {FormsModule} from "@angular/forms";
import {UserService} from "./shared/user.service";
import {LoggedInGuard} from "./shared/LoggedInGuard";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [AppComponent, routedComponents],
    providers: [
        UserService, LoggedInGuard
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
