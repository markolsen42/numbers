import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bases',
  templateUrl: './bases.component.html',
  styleUrls: ['./bases.component.css']
})
export class BasesComponent implements OnInit {

  public value:string= "100";
  convertedValue:string;

  constructor() { }

  ngOnInit() {
  }

  convertFromDecimal(radix: number):string {
    return new Number(parseInt(this.value)).toString(radix);
  }


}
