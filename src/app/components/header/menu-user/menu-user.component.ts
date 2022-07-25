import { Component, OnInit } from '@angular/core';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.scss']
})
export class MenuUserComponent implements OnInit {
  public icons = {
    faUserAstronaut
  };
  public userActive = false;

  constructor() { }

  ngOnInit(): void {
  }

  public showUser(): void {
    this.userActive = !this.userActive;
  }
}
