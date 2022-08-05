import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { of, take, map, BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public logs = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { }

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

  public getData(): Observable<any> {
    const error = new HttpErrorResponse({ status: 422 });
    //return throwError(() => error);

    const json = {
      teste: 'teste',
      parametro: '2344'
    }
    return this.http.post<any>('http://teste', json, {observe: 'response'});
  }

  public getDataUrl(): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos/1', {observe: 'response'});
  }

}
