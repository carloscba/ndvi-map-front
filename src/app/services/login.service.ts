import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {

  constructor(private http: Http) {}

  post(data){
    const url = 'http://127.0.0.1:8000/api/login/';
    return this.http.post(url, data).map(response => {
      return response.json();
    });
  }

}
