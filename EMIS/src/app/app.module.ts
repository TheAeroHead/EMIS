import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
// { path: '**', component: PageNotFoundComponent }
import { AppointmentComponent } from './appointment/appointment.component';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
// import 'hammer.js';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthServiceService } from './auth-service.service';
import { AuthGuard } from './auth.guard';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import { PatientComponent } from './patient/patient.component';
import { NurseComponent } from './nurse/nurse.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'appointment', component: AppointmentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'logout', component: LoginComponent },
  { path: 'patient', component: PatientComponent, canActivate: [AuthGuard] },
  { path: 'nurse', component: NurseComponent, canActivate: [AuthGuard] },
  { path: 'doctor', component: DoctorComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppointmentComponent,
    DashboardComponent,
    PatientComponent,
    NurseComponent,
    DoctorComponent,
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
    MatInputModule,
    MatIconModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
