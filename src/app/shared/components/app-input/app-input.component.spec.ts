import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInputComponent } from './app-input.component';
import { AppInputModule } from './app-input.module';
import { ControlContainer, ReactiveFormsModule, FormControl } from '@angular/forms';

describe('AppInputComponent', () => {
  let component: AppInputComponent;
  let fixture: ComponentFixture<AppInputComponent>;
  let formControl: FormControl;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppInputModule, ReactiveFormsModule ],
      providers: [
        { provide: ControlContainer, useValue: formControl }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be false shouldShowErrors when exists errors and form control is touched', () => {
    component.formControl = new FormControl();
    component.formControl.setErrors({required: true})
    component.formControl.markAsTouched();
    expect(component.shouldShowErrors())
      .withContext('Testes do metodo shouldShowErrors')
      .toBeTrue();
  });

  it('should be false shouldShowErrors when form control is null', () => {
    component.formControl = null;
    expect(component.shouldShowErrors())
      .withContext('Testes do metodo shouldShowErrors')
      .toBeFalse();
  });

  it('should contain a text listOfErrors when form control is required', () => {
    component.formControl = new FormControl();
    component.formControl.setErrors({required: true})
    expect(component.listOfErrors())
      .withContext('Deve conter O campo é obrigatório.')
      .toContain('O campo é obrigatório.');
  });

  it('should contain a empty text listOfErrors when form control is operator', () => {
    component.formControl = new FormControl();
    component.formControl.setErrors({operator: true})
    expect(component.listOfErrors())
      .toContain('');
  });

  it('should be null listOfErrors when form control null', () => {
    expect(component.listOfErrors())
      .toBeNull();
  });

});
