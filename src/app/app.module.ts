import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeroHome, HeroClock,HeroCog, HeroShieldExclamation } from '@ng-icons/heroicons';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({  HeroClock, HeroCog,HeroHome, HeroShieldExclamation })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
