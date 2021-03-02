import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = ', g';

   constructor(
    private router : Router
  ){}

  note = [
    {judul:'',isi:'',tanggal:'',action:''}
  ];
  iJudul = '';
  iIsi = '';
  iTanggal = '';
  iAction = '';
 
  ADDNOTE(){
    this.note.push({judul:this.iJudul,isi:this.iIsi,tanggal:this.iTanggal,action:'0'});
  }
  SAVE(){
    
  }

}
