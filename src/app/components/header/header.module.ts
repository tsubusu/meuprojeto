import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { SharedModule } from '../../shared/shared.module';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuUserComponent } from './menu-user/menu-user.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuItemComponent,
    MenuUserComponent
  ],
  imports: [
    RouterModule,
    SharedModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
