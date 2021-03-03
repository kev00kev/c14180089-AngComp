import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-halaman2',
  templateUrl: './halaman2.component.html',
  styleUrls: ['./halaman2.component.css']
})
export class Halaman2Component implements OnInit {


 constructor(
    private route : ActivatedRoute
  ) { }

  //parJudul : Array<string> = [];
  //parIsi : Array<string> = [];
  //parTanggal : Array<string> = [];
  //parAction : Array<string> = [];
  parJudul : string;
  parIsi : string;
  parTanggal : string;
  parAction : string;
  ngOnInit() {
    let isiJudul=this.route.snapshot.paramMap.get('pJudul');
    let isiIsi=this.route.snapshot.paramMap.get('pIsi');
    let isiTanggal=this.route.snapshot.paramMap.get('pTanggal');
    let isiAction=this.route.snapshot.paramMap.get('pAction');
   
    //this.parJudul.push(isiJudul);
    //this.parIsi.push(isiIsi);
    //this.parTanggal.push(isiTanggal);
    //this.parAction.push(isiAction);
    this.parJudul = isiJudul;
    this.parIsi = isiIsi;
    this.parTanggal = isiTanggal;
    this.parAction = isiAction;

  }

}