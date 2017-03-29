import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bases',
  templateUrl: './bases.component.html',
  styleUrls: ['./bases.component.css']
})
export class BasesComponent implements OnInit {

  public value:number=100;
  convertedValue:string;

  constructor() { }

  ngOnInit() {
  }

  convertFromDecimal(radix: number):string {
    console.log(this.value.toString(16));
    this.convertedValue = this.value.toString(16);
    return this.value.toString(16);
  }


}
