import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { UniqueIdService } from '../../../shared/services/unique-id/unique-id.service';
import { UserService } from '../shared/service/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  public form!: FormGroup;
  public idsForInputs: any = this.setIdsForInputs();

  constructor(private formBuilder: FormBuilder,
      private uniqueIdService: UniqueIdService,
      private userService: UserService
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)], [this.userService.existsUserName()], blur],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validators: [confirmePasswordAreEqual],
      updateOn: 'blur'
    })
  }

  public submit(): void {
    console.log(this.form)
  }

  private setIdsForInputs(): any {
    return {
      idEmail: this.uniqueIdService.generateUniqueIDWithPrefix('idEmail'),
      idUserName: this.uniqueIdService.generateUniqueIDWithPrefix('idUserName'),
      idPassword: this.uniqueIdService.generateUniqueIDWithPrefix('idPassword'),
      idConfirmePassord: this.uniqueIdService.generateUniqueIDWithPrefix('idConfirmePassord')
    };
  }

}

export function confirmePasswordAreEqual(formGroup: AbstractControl): ValidationErrors | null {
  const password = formGroup.get('password')?.value ?? ''; 
  const confirmPassword = formGroup.get('confirmPassword')?.value ?? '';
  if (password?.trim() + confirmPassword?.trim()) {
      return password !== confirmPassword ? { confirmPassword: true } as ValidationErrors : null
  } 

  return null;
}
