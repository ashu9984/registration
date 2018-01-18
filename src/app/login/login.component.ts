import { Component, OnInit } from '@angular/core';import { Http, Headers } from '@angular/http';


@Component({
    templateUrl: './login.component.html',
    selector: 'app-login',
    styleUrls:['../form.css']
})
export class LoginComponent  {
    header;
   
    user={
        email:'',
        password:"",
        
    }

    

    constructor(private http: Http) {
        this.header = new Headers;
    }
    ngOnInit(){
    }
    login() {
        this.http.post('http://localhost:8000/login', {email:this.user.email, password:this.user.password}, { headers: this.header }).subscribe(data => {
            let response = data.json();
            console.log(response);
            alert(response.msg);
            if (response.success==true) {    
                window.location.href = 'http://localhost:4200/contacts';
            }
            else{alert('Login incorrect');}
                
           
           
        }, err => {
            let error = err.json();
            console.log("Error: ", error)
        })
    }
    getAllUser() {
        this.http.get('http://localhost:8000/getAll').subscribe(data => {
          let response = data.json()
          
         console.log(response);
         console.log(response.data)
        
        
        })}
   
}

