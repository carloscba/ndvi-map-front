import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {

  constructor(private http: Http) { 

  }

  get(){
    
    return this.http.get('https://randomuser.me/api/').map(response => {
      return response.json();
    });

  }

}
