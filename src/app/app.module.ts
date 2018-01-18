import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {ContactsComponent} from './contacts.component';

import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';



import{RegistrationComponent} from './registration/registration.component'
import { LoginComponent } from './login/login.component';
import{HeaderComponent} from'./header.component';
import{FooterComponent} from'./footer.component';
import { MapComponent } from './map/map.component';
import{MapService} from'./map.service'
@NgModule({
  declarations: [
    AppComponent, LoginComponent,ContactsComponent,RegistrationComponent,HeaderComponent,FooterComponent, MapComponent, 
  ],
  
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot([
     {
        path:'',
        component:RegistrationComponent
      },{
        path:'registration',
        component:RegistrationComponent
      },
      {

      path:'contacts',
      component:ContactsComponent
    },{
      path:'login',
      component:LoginComponent
    },{
      path:'map',
      component:MapComponent
    },]),
    HttpModule
  ],
  providers: 
    [MapService],
  bootstrap: [AppComponent]
}) 

export class AppModule { }
