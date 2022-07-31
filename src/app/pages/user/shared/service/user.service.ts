import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { of, take, map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public existsUserName(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (!control?.value && control.value === '') {
        return of(null);
      } 
      const random = Math.random() < 0.5;
      return of(random).pipe(
        take(1),
        map(res => {
          return res ? {userExists: true} : null;
        })
      );
    };
  }
}
