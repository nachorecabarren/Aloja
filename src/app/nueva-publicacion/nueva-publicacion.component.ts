import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'nueva-publicacion',
  templateUrl: './nueva-publicacion.component.html',
  styleUrls: ['./nueva-publicacion.component.css']
})
export class NuevaPublicacionComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  public cancelar() {
    this.location.back();
  }

}
