import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divisible',
  templateUrl: './divisible.component.html',
  styleUrls: ['./divisible.component.css']
})
export class DivisibleComponent implements OnInit {

public numerator:number = 2;
  public denominator:number = 1;
  public isDivisible:boolean = true;
  public factors:number[] = [];
  public isPrime: boolean = true;

  constructor() { }

  ngOnInit() {
    this.doCalculations()
  }

  doCalculations(){
    this.calculateDivisible();
    this.calculateFactors();
    this.calculateIsPrime()
  }

  calculateDivisible(){
    this.isDivisible = (this.numerator%this.denominator==0)
  }

  calculateFactors(){
    this.factors = [1];
    for (let i=2;i<=this.numerator/2;i++){
      if (this.numerator%i==0){
        this.factors.push(i)
      }
    }
    this.factors.push(this.numerator);
  }

  calculateIsPrime(){
    this.isPrime = this.factors.length==2;
  }


}
