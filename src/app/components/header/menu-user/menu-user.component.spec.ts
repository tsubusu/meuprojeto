import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '@shared/shared.module';

import { MenuUserComponent } from './menu-user.component';

describe('MenuUserComponent', () => {
  let component: MenuUserComponent;
  let fixture: ComponentFixture<MenuUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuUserComponent ],
      imports: [SharedModule, RouterTestingModule.withRoutes([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
