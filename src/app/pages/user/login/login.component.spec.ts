import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { LoginModule } from './login.module';
import { SharedModule } from '../../../shared/shared.module';

describe(`${LoginComponent.name}`, () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginModule, SharedModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it(`${LoginComponent.name} should create`, () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it(`${LoginComponent.prototype.ngOnInit.name} 
  Should create form when called`, () => {
    component.ngOnInit();
    expect(component.form).toBeTruthy();
  });

  it(`${LoginComponent.prototype.ngOnInit.name} 
  Should generate Id For All Input when called`, () => {
    component.ngOnInit();
    expect(component.idUserName).toContain('login-user-name');
    expect(component.idPassword).toContain('login-password');
  });

  it(`(D) Should return values in form when submited`, () => {
    fixture.detectChanges();
    const password: HTMLInputElement = fixture.nativeElement.querySelector(`#${component.idPassword}`);
    const userName: HTMLInputElement = fixture.nativeElement.querySelector(`#${component.idUserName}`);
    const button: HTMLElement = fixture.nativeElement.querySelector('button');
    password.value = '22';
    userName.value = '22';
    password.dispatchEvent(new Event('input'));
    userName.dispatchEvent(new Event('input'));
    button.click();
    expect(component.form.getRawValue()).toEqual({userName: '22', password: '22'});
  });
});
