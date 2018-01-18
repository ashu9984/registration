import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {User} from './shared/user';
@Injectable()
export class UserService{
    headers;
    constructor(private http:Http){
        this.headers=new Headers();
    
    }
    getAllUsers(){
        return this.http.get('http://localhost:8000/getAll',{
            headers:this.headers
        });
    }
   
}