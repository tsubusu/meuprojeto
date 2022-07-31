import { Component, forwardRef, Input, OnChanges, SimpleChanges, OnInit, HostBinding, ChangeDetectorRef } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.scss'],
  
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => AppInputComponent)
  }]
})
export class AppInputComponent implements OnInit {
  @Input() public label = '';
  @Input() public idLabel = '';
  @Input() public ariaLabel = '';
  @Input() public lang = 'en';
  @Input() public value!: string;
  @Input() public disabled = false;
  @Input() public formControlName!: string;

  public onChange = (value: string) => {}; //você precisa dela mesmo com o vazio senão vai dar pau, vai dar erro. 
  public onTouched = () => {};
  public formControl: FormControl<any> | null = {} as any;
  public message!: string;

  constructor(private controlContainer: ControlContainer) { }

  public ngOnInit(): void {
    this.formControl = this.controlContainer && this.controlContainer.control && this.controlContainer.control.get(this.formControlName) as FormControl<any>;
  }

  public writeValue(value: any): void {
    this.value = value;
    this.onChange(value);
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public shouldShowErrors(): boolean {
    if (!this.formControl || !this.formControl.errors)
      return false;

    return this.formControl.errors &&
    (this.formControl.dirty || this.formControl.touched);
  }

  public listOfErrors(): string[] | null {
    const control = this.formControl && this.formControl?.errors;
    if (!control) return null;

    return Object.keys(control)
    .map(field => this.getMessage(field, control[field]));
  }

  private getMessage(type: string, params: any): string {
    if (type && type === 'operator' || type === 'source') { return ''; }
    return AppInputComponent.errorMessages[type](params);
  }

  private static readonly errorMessages: any = {
    'required': () => 'O campo é obrigatório.',
    'minlength': (params: any) => 'O mínimo de caracteres é ' + params.requiredLength,
    'maxlength': (params: any) => 'O máximo de caracteres é ' + params.requiredLength,
    'pattern': (params: any) => (params.requiredPattern === '^[ a-zA-Z0-9_/-]*$')
              ? 'O padrão exigido são letras, números e _ - / ' : 'O padrão exigido é: ' + params.requiredPattern,
    'invalid': () => '',
    'min' : (params: any) => 'O valor mínimo é ' + params.min,
    'max' : (params: any) => 'O valor máximo é ' + params.max,
    'matDatepickerParse': () => 'Data com formato inválido',
    'email': () => 'Email não é valido',
    'userExists': () => 'Usuario ja existe',
    'texto': (params: any) => params
  };
}
