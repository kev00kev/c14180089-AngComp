import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-halaman3',
  templateUrl: './halaman3.component.html',
  styleUrls: ['./halaman3.component.css']
})
export class Halaman3Component implements OnInit {

  constructor(
    private route : ActivatedRoute
  ) { }

  parJudul : string;
  parIsi : string;
  parTanggal : string;
  parAction : string;


  ngOnInit() {
    let isiJudul=this.route.snapshot.paramMap.get('pJudul');
    let isiIsi=this.route.snapshot.paramMap.get('pIsi');
    let isiTanggal=this.route.snapshot.paramMap.get('pTanggal');
    let isiAction=this.route.snapshot.paramMap.get('pAction');

    this.parJudul = isiJudul;
    this.parIsi = isiIsi;
    this.parTanggal = isiTanggal;
    this.parAction = isiAction;
  }

}