import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public city: string;

  constructor() { }

  ngOnInit(): void {
  }

  updateFilter(): void {
  }

}
