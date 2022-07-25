import { Component, OnInit } from '@angular/core';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  public icons = {
    faHouse
  };

  constructor() { }

  ngOnInit(): void {
  }

}
