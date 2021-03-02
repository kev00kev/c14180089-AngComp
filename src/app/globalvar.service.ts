import { Injectable } from '@angular/core';

@Injectable()
export class GlobalvarService {
  private Data: any = [
    {judul:'',isi:'',tanggal:'',action:''}
  ];
  constructor() { }
  public setdata(data : any){
    this.Data = data;
  }
  public getdata(){
    return this.Data;
  }

}