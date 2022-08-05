import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { UserService } from "../pages/user/shared/service/user.service";

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  private logs = [{} as any];

  constructor(private userService: UserService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    this.addRequest(req)
    return next.handle(req)
      .pipe(
        tap(event => {
          this.removeRequestLog(event as HttpResponse<any>);
          console.log(event);
        },
        error => {
          this.addRequestLog(error);
          console.log(error);
        }),
      );
  }

  private addRequest(request: HttpRequest<any>): void {
    this.logs.push({ url: request.url, request: request})
  }

  private removeRequestLog(response: HttpResponse<any>): void {
    this.logs = this.logs.filter(el => {
      return el.url !== response.url;
    });
  }

  private addRequestLog(response: HttpResponse<any>): void {
    this.userService.logs.next(this.createObjectLog(response));
  }

  private createObjectLog(response: HttpResponse<any>): logObject {
    const request = this.logs.find(x => x.url === response.url);
    const time = new Date(Date.now());
    return {
      url: request?.url as string ?? '',
      methodRequest: request?.request.method as string ?? '',
      json: request?.request.body ?? null,
      response: response,
      time: time.toISOString()
    }
  }
}

interface logObject {
  url: string,
  methodRequest: string,
  json?: object,
  response: HttpResponse<any>,
  time: string
}
