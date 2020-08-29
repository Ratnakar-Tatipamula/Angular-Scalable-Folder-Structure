import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private baseService: BaseService) {
     
   }

  createUser(formDetails: any) {
    console.log('Post Service');
    return this.baseService.createUser(formDetails);
  }

  loginUser(loginDetails: any) {
    console.log('LoginUser Service', loginDetails);
    return this.baseService.loginUser(loginDetails);
  }

}
