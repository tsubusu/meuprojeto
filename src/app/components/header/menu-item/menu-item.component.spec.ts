import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';

import { MenuItemComponent } from './menu-item.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MenuItemComponent', () => {
  let component: MenuItemComponent;
  let fixture: ComponentFixture<MenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuItemComponent ],
      imports: [SharedModule, RouterTestingModule.withRoutes([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
