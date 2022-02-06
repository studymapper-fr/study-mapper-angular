import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeroHome, HeroClock,HeroCog, HeroShieldExclamation, HeroCheck, HeroLockClosed } from '@ng-icons/heroicons';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgIconsModule.withIcons({  HeroClock, HeroCog,HeroHome, HeroShieldExclamation, HeroCheck,HeroLockClosed })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
