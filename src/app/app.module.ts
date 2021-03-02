import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule, Routes } from '@angular/router';
import { Halaman2Component } from '../halaman2/halaman2.component';
import { GlobalvarService } from './globalvar.service';


const ROUTES : Routes = [
  {path : 'halaman2', component:Halaman2Component},
  {path : 'home/:data', component:Halaman2Component}
]



@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot(ROUTES) ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GlobalvarService]
})
export class AppModule { }
