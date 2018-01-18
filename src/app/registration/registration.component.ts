import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { NgModule } from '@angular/core';


@Component({
    templateUrl: './registration.component.html',
    selector: 'app-registration',
    styleUrls: ['../form.css']

})
export class RegistrationComponent {

    
    header;
    user = {

       fname:'',
       lname:'',
        mno:'',
        email: '',
        password: '',
        cpass:''
    }
    constructor(private http: Http) {
        
        
        this.header = new Headers;
    }
    register() {
        if (this.user.password != this.user.cpass)
        {
            alert("Passwords do not match")
           
        }
        else
        {
            this.http.post('http://localhost:8000/registration', { fname:this.user.fname,lname:this.user.lname,mno:this.user.mno,email:this.user.email, password:this.user.password,cpass:this.user.cpass}, { headers: this.header }).subscribe(data => {
                let response = data.json()
                console.log(response);
                alert(response.msg)
                if(response.success==true){
                      
                        window.location.href = 'http://localhost:4200/login';
                    }
                    else{}
                        
                 }
                
            , err => {
                let error = err.json();
                console.log("Error: ", error)
            })  
        }
       
    }
}




