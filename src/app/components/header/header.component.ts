import { Component, OnInit } from '@angular/core';
import { faBars, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public icons = { 
    faBars,
    faUserAstronaut
  };
  public menuActive = false;

  constructor() { }

  ngOnInit(): void {
  }

  public showMenu(): void {
    this.menuActive = !this.menuActive;
  }
}
