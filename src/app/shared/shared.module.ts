import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppInputModule } from './components/app-input/app-input.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports:[
    AppInputModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
