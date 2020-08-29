import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient) { }

  public USER_INS_URL = 'api/user-ins';

  createUser(formDetails: any) {
    console.log('Base Service');
    console.log(formDetails);
    const headers = new HttpHeaders()
    .set('Authorization', 'my-auth-token')
    .set('Content-Type', 'application/json');
    this.http.post('api/user-ins', JSON.stringify(formDetails), { headers })
    .subscribe(data => {
      console.log('DATA IS ',data);
    });
  }

  loginUser(loginDetails: any) {
    console.log('Login Base Service');
    this.http.post('api/user-ret', loginDetails)
    .subscribe(data => {
      console.log('Token is ', data);
    })
  }

}
