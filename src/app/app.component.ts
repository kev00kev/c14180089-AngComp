import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalvarService } from './globalvar.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = ', g';

   constructor(
    private router : Router,
    public globalvar : GlobalvarService
  ){this.dataglobal = this.globalvar.getdata()}

  note = [
    {judul:'',isi:'',tanggal:'',action:''}
  ];
  iJudul = '';
  iIsi = '';
  iTanggal = '';
  iAction = '';
  dataglobal;
  datatext="";
 
  ADDNOTE(){
    this.note.push({judul:this.iJudul,isi:this.iIsi,tanggal:this.iTanggal,action:'0'});
  }
  SAVE(){
     this.globalvar.setdata(this.note)
     this.dataglobal = this.globalvar.getdata();
     this.router.navigate(["/halaman2/"+this.note]);
  }

}
