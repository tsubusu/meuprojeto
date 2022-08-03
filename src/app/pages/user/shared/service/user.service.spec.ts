import { TestBed } from '@angular/core/testing';
import { AbstractControl } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { first } from 'rxjs/internal/operators/first';

describe('UserService', () => {
  let service: UserService;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ UserService ]
    }).compileComponents();

    service = TestBed.inject(UserService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`${UserService.prototype.existsUserName().name}
   Should work custom validation when called`, done => {
    let control = { value: '6' }  
    let result: any = service.existsUserName()(control as AbstractControl);

    result
      .pipe(first())
      .subscribe((content: any) => {
        if (content) {
          expect(content).toEqual({userExists: true});
        } else {
          expect(content).toBeNull();
        }
      done();
    });

    httpController.verify();
  });
});