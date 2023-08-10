import {Component} from '@angular/core';
import {GoogleLoginProvider, SocialAuthService, FacebookLoginProvider} from 'angularx-social-login';
import {Router} from '@angular/router';
import { AlojaServiceService } from '../aloja-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router,
              private socialAuthService: SocialAuthService,
              private alojaService: AlojaServiceService) {
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(res => {
      this.alojaService.setUser(res)
    })
      .then(() => this.router.navigate(['dashboard']));
  }

  login(): void {
    //Not implemented yet. Use this function when api is already done.
  }

  signUp(): void {
    this.router.navigate(['register']);
  }
}
