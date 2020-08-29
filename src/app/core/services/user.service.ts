import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) {

    }

    postData(formDetails: any) {

        console.log('Inserting User Details');
        console.log(formDetails);
        this.http.post('api/user-ins', JSON.stringify(formDetails)).subscribe(data => {
            console.log(data);
          });
    }

}