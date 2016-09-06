import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import {AppComponent} from "./components/app.component";
import {FormsModule} from "@angular/forms";
import {WelcomeComponent} from "./components/home/welcome.component";

/* Feature Modules */
// import { ProductModule } from './products/product.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
        // ProductModule
    ],
    declarations: [
        AppComponent,
        WelcomeComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
