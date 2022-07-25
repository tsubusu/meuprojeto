import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserRegisterModule } from './user-register/user-register.module';
import { LoginModule } from './login/login.module';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule,
    UserRegisterModule,
    LoginModule
  ]
})
export class UserModule { }
