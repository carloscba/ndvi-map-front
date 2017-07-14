import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class ProfilesService {
  url = 'http://127.0.0.1:8000/api/profiles/'
  
  constructor(private http: Http) { }

  get(token){
    return this.http.get(this.url+1).map(response => {
      return response.json();
    });    
  }

}
