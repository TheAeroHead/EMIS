import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
// order matters, be very careful adding in newer/general terms
{ path: 'login', component: LoginComponent },
//{ path: 'appointment', component: AppointmentComponent },
/*{ path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  */
{
	path: '',
	redirectTo: '/login',
	pathMatch: 'full'
},
//{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
	ReactiveFormsModule,
	AppRoutingModule, 
	RouterModule.forRoot( appRoutes, 
	{enableTracing: true}	// for debugging purposes only
	)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
