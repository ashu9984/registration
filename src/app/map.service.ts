import { Injectable } from '@angular/core';
import{Http} from '@angular/http'
import'rxjs/add/operator/map'
@Injectable()
export class MapService {

  constructor(private http:Http) { 

  }
  url='http://localhost:8000/delete/'
  get(){
   return this.http.get("http://localhost:8000/geta").map(result=>result.json());

  }

  
    
}

