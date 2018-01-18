import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';
import { Http ,Headers} from '@angular/http';

import 'rxjs/add/operator/map';

@Component({
    templateUrl:'./contacts.component.html',
    
})
export class ContactsComponent{
     result:any
     _id:string
    users;
    displayedContacts;
    showAll=true;
    constructor(private route: ActivatedRoute, private http: Http){
      
        
       
        
       
    
      
    }
    ngOnInit(){
        
          
        /*this.API().subscribe(x=>{
                this.result=x.users
                
            })*/
        
         }
   API(){
       let url="http://localhost:8000/getAll"
      return this.http.get(url).map(
           res=>res.json()
       )
   }
   call(){

    this.API().subscribe(x=>{
        this.result=x.users
        
    })
   }
}