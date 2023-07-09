import {Component} from '@angular/core';
import {GoogleLoginProvider, SocialAuthService, FacebookLoginProvider} from 'angularx-social-login';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router,
              private socialAuthService: SocialAuthService) {
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(() => this.router.navigate(['dashboard']));
  }

  login(): void {
    //Not implemented yet. Use this function when api is already done.
  }

  signUp(): void {
    this.router.navigate(['register']);
  }
}
