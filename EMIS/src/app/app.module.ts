import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
//{ path: '**', component: PageNotFoundComponent }
import { AppointmentComponent } from './appointment/appointment.component';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
//import 'hammer.js';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthServiceService } from './auth-service.service';
import { AuthGuard } from './auth.guard';


const appRoutes: Routes = [
  { path: 'appointment', component: AppointmentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'logout', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppointmentComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
	ReactiveFormsModule,
	AppRoutingModule, 
	RouterModule.forRoot( appRoutes, 
	{enableTracing: true}	// for debugging purposes only
	),
	BrowserAnimationsModule,
	MatButtonModule,
	MatCheckboxModule,
	MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
