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

  paranama : any;

  ngOnInit() {
    let isidata=this.route.snapshot.paramMap.get('data');
    this.paranama = isidata;
  }

}