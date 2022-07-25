import { NgModule } from '@angular/core';
import { UserRegisterComponent } from './user-register.component';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [
    UserRegisterComponent
  ],
  imports: [
    SharedModule,
  ]
})
export class UserRegisterModule { }
