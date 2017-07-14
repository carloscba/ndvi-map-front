import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class LotesService {
  url = 'http://127.0.0.1:8000/api/lotes/'
  
  constructor(private http: Http) { }

  get(token){
    return this.http.get(this.url+1).map(response => {
      return response.json();
    });    
  }

}
