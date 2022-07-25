import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { RouterTestingModule } from '@angular/router/testing';

describe(AppComponent.name, () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, 
        AppModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the app-header', () => {
    const containAppHeader:HTMLElement = fixture.nativeElement.querySelector('app-header');
    expect(!!containAppHeader).toBeTrue();
  });

  it('should contain the app-footer', () => {
    const containAppFooter:HTMLElement = fixture.nativeElement.querySelector('app-footer');
    expect(!!containAppFooter).toBeTrue();
  });

});
