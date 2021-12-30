import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {LoginComponent} from './component/login/login.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule ],
  declarations: [ AppComponent, LoginComponent,HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
