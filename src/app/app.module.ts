import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { RegisterModule } from "./components/register/register.module";
import { UIKitModule } from "./uikit/uikit.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import {
  HttpClient,
  HttpClientModule,
  HttpHandler,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";
import { TokenInterceptor } from "./auth/token.interceptor";
import { AuthService } from "./auth/auth.service";
import { StorageService } from "./utility/storage.service";
import { LoginModule } from "./components/login/login.module";
import { NotificationService } from "./utility/notification.service";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { HelpComponent } from "./components/help/help.component";

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, DashboardComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RegisterModule,
    LoginModule,
    UIKitModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    AuthService,
    StorageService,
    NotificationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
