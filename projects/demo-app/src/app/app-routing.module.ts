import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentsComponent } from './styling/appointments/appointments.component';
import { CategoriesComponent } from './styling/categories/categories.component';
import { DashboardsComponent } from './styling/dashboards/dashboards.component';
import { LogoutComponent } from './styling/logout/logout.component';
import { RevenueComponent } from './styling/revenue/revenue.component';
import { SettingsComponent } from './styling/settings/settings.component';
import { RegisterComponent } from './styling/register/register.component';
import { FirstComponent } from './use/first/first.component';
import { AdduserComponent } from './styling/adduser/adduser.component';
import { LoginComponent } from './use/login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component:DashboardsComponent },
  { path: 'revenue',  component:RevenueComponent },
   { path: 'register', component:RegisterComponent },
   { path: 'appointments', component:AppointmentsComponent },
   { path: 'categories', component:CategoriesComponent },
   { path: 'settings', component:SettingsComponent },
   { path: 'logout',  component:LogoutComponent },
   { path: 'first',  component:FirstComponent },
   { path: 'adduser',  component:AdduserComponent},
   { path: 'login',  component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
