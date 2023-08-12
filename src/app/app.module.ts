import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import {
  GoogleLoginProvider,
  SocialLoginModule,
  FacebookLoginProvider,
} from "angularx-social-login";
import { AuthGuardService } from "./auth-guard.service";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PersonalInfoComponent } from "./personal-info/personal-info.component";
import { FooterComponent } from "./footer/footer.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HeaderComponent } from "./header/header.component";
import { RegisterComponent } from "./register/register.component";
import { CardComponent } from './card/card.component';
import { NuevaPublicacionComponent } from './nueva-publicacion/nueva-publicacion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent,
    DashboardComponent,
    PersonalInfoComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    RegisterComponent,
    CardComponent,
    NuevaPublicacionComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "login", component: LoginComponent },
      {
        path: "mainpage",
        component: MainPageComponent,
        canActivate: [AuthGuardService],
      },
      { path: "dashboard", component: DashboardComponent },
      { path: "register", component: RegisterComponent },
      {
        path: "personal-info",
        component: PersonalInfoComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: "nueva-publicacion",
        component: NuevaPublicacionComponent
      },
      { path: "**", component: LoginComponent },
    ]),
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    SocialLoginModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: "SocialAuthServiceConfig",
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              "148517665605-jspahbqleats6lvlag9kasc2c11b5g7o.apps.googleusercontent.com"
            ),
          },
          // {
          //   id: FacebookLoginProvider.PROVIDER_ID,
          //   provider: new FacebookLoginProvider('clientId')
          // }
        ],
      },
    },
    AuthGuardService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
