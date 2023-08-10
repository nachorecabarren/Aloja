import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlojaServiceService {

  private user = null;

  constructor() { }

  public setUser(user: any) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser() {
    return localStorage.getItem('user')
  }
}
