
//Imports
import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {WelcomeComponent} from "./components/home/welcome.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {LoginComponent} from "./components/login/login.component";
import {LoggedInGuard} from "./shared/LoggedInGuard";
import {TeamsComponent} from "./components/teams/teams.component";

//Routes
const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [LoggedInGuard]},
  { path: 'teams', component: TeamsComponent, canActivate: [LoggedInGuard]}
];

//Constants
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
export const routedComponents = [DashboardComponent, WelcomeComponent, LoginComponent, TeamsComponent];
