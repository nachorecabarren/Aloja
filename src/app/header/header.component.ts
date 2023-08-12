import { Component, OnInit } from '@angular/core';
import { AlojaServiceService } from '../aloja-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public sectionOpen: boolean = false;
  public user = null;

  constructor(private alojaService: AlojaServiceService, private router: Router) { }

  ngOnInit(): void {
    this.user =  JSON.parse( localStorage.getItem('user'));
    if (!this.user) {
      this.user = this.alojaService.getUser()
    }
  }

  public open() {
    this.sectionOpen = !this.sectionOpen;
  }

  public publicar() {
    if (!this.router.url.includes('nueva-publicacion')) {
    this.router.navigate(['nueva-publicacion']);
    }
  }

  public misPublicaciones() {
    console.log('Metodo para ver mis publicaciones')
  }

  public miPerfil() {
    console.log(this.user)
  }

  public cerrarSesion() {
    localStorage.setItem('user', null);
    this.router.navigate(['login']);
  }
}
