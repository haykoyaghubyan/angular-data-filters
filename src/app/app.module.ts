import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {UserModule} from './components/user/user.module';

import { AppRoutes } from './app-routing.module';


@NgModule({
  imports:      [ BrowserModule, AppRoutes, UserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
