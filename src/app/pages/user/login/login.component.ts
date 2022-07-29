import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UniqueIdService } from '@shared/services/unique-id/unique-id.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;
  public idUserName = '';
  public idPassword = '';

  constructor(private formBuilder: FormBuilder,
      private uniqueIdService: UniqueIdService,
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

  teste(event: any) {
    console.log(event)
  }
}
