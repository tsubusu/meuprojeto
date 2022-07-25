import { Component, OnInit } from '@angular/core';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public icons = {
    faCopyright
  };

  constructor() { }

  ngOnInit(): void {
  }

}
