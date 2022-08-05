import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UniqueIdService } from '@shared/services/unique-id/unique-id.service';
import { catchError, Observable, of } from 'rxjs';
import { UserService } from '../shared/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;
  public idUserName = '';
  public idPassword = '';

  public logs$!: Observable<any>;

  constructor(private formBuilder: FormBuilder,
      private uniqueIdService: UniqueIdService,
      private userService: UserService,
    ) { }

  public ngOnInit(): void {
    this.createForm();
    this.generateIdForAllInput();
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      userName: ['1', [Validators.required]],
      password: ['1', [Validators.required, Validators.maxLength(5)]]
    });
  }

  public submit(): void {
    console.log(this.form);
    console.log(this.form.get('password')?.hasError('required'));
    console.log(this.form.getRawValue());
  }

  private generateIdForAllInput(): void {
    this.idUserName = this.uniqueIdService.generateUniqueIDWithPrefix('login-user-name');
    this.idPassword = this.uniqueIdService.generateUniqueIDWithPrefix('login-password');
  }

  public teste() {
    this.userService.getData()
    .pipe(
      catchError(x => {
        console.log(x);

        return of(x);
      })
    )
    .subscribe(
      () => {},
      error => {
        console.log(error)
      },
      () => {
        console.log('x')
      }
    );
  }

  public teste2() {
    this.userService.getDataUrl().subscribe();
  }

  public showLog() {
    this.logs$ = this.userService.logs;
  }
}
