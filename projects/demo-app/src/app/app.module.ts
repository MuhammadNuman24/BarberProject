import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstComponent } from './use/first/first.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './use/dialog/dialog.component';
import { RegisterComponent } from './styling/register/register.component';
import {DashboardsComponent} from './styling/dashboards/dashboards.component';
import{RevenueComponent} from './styling/revenue/revenue.component';
import {AppointmentsComponent} from './styling/appointments/appointments.component';
import{CategoriesComponent} from './styling/categories/categories.component';
import{SettingsComponent} from './styling/settings/settings.component';
import {LogoutComponent} from './styling/logout/logout.component';
import { LoginComponent } from './use/login/login.component';
import{CookieService} from 'ngx-cookie-service';
import { AdduserComponent } from './styling/adduser/adduser.component';
import { CatComponent } from './styling/cat/cat.component';
import { ChangeComponent } from './use/change/change.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    DialogComponent,
    RegisterComponent,
    DashboardsComponent,
    RevenueComponent,
    AppointmentsComponent,
    CategoriesComponent,
    SettingsComponent,
    LogoutComponent,
    LoginComponent,
    AdduserComponent,
    CatComponent,
    ChangeComponent
  ],
  entryComponents:[DialogComponent,RegisterComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MatMenuModule,
    MatDialogModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
