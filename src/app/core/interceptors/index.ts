import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHeadersInterceptors } from './auth-headers';

export const httpInterceptProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHeadersInterceptors, multi: true }
];