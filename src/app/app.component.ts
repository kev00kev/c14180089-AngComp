import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalvarService } from './globalvar.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = ', ADD SOME NOTE';

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
  iAction=true;
  dataglobal;
  datatext="";
  fav="";
  ADDNOTE(){
    //this.note.push({judul:this.iJudul,isi:this.iIsi,tanggal:this.iTanggal,action:'0'});
    this.router.navigate(["/halaman2/"+this.iJudul+"/"+this.iIsi+"/"+this.iTanggal+"/"+this.iAction]);
  }
    ADDNOTE2(){
    //this.note.push({judul:this.iJudul,isi:this.iIsi,tanggal:this.iTanggal,action:'0'});
    this.router.navigate(["/halaman3/"+this.iJudul+"/"+this.iIsi+"/"+this.iTanggal+"/"+this.iAction]);
  }

}
