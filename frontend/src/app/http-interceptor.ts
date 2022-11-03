import { Token } from './login/token.interface';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptingHandler implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = req.headers.set('Content-Type', 'application/json');

    const localToken = localStorage.getItem('token');

    if (localToken) {
      const token: Token = JSON.parse(localToken);
      headers.set('Authorization', `${token.tipo} ${token.token}`);
    }

    const authReq = req.clone({ headers });
    return next.handle(authReq);
  }
}
