import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from "./components/home/welcome.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";


const appRoutes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent },
  { path: 'dashboard', component: DashboardComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
