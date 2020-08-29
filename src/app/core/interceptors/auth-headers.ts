import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthHeadersInterceptors implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler){
       console.log('Auth Interceptor');
       console.log('URL IS ', request.url);
       const authToken = 'Secret-Token';
       const authReq = request.clone({ setHeaders: { Authorization: authToken } });
       return  next.handle(authReq);
    }
}