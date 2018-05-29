import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ConsentComponent } from './consent/consent.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ConsentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [
    LoginComponent,
    RegisterComponent,
    ConsentComponent
  ]
})
export class AppModule { }
