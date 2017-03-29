import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divisible',
  templateUrl: './divisible.component.html',
  styleUrls: ['./divisible.component.css']
})
export class DivisibleComponent implements OnInit {

public numerator = 2;
  public denominator = 1;
  public isDivisible = true;
  public factors: number[] = [];

  constructor() { }

  ngOnInit() {
    this.doCalculations();
  }

  doCalculations() {
    this.calculateDivisible();
    this.calculateFactors();
  }

  calculateDivisible() {
    this.isDivisible = (this.numerator % this.denominator === 0);
  }

  calculateFactors() {
    this.factors = [1];
    for (let   i = 2 ; i <= this.numerator / 2; i++) {
      if (this.numerator % i === 0) {
        this.factors.push(i);
      }
    }
    this.factors.push(this.numerator);
  }

  isPrime (): boolean {
    return this.factors.length === 2;
  }

  primesUpTo() {
    let primesSoFar = [2];
    let factorFound = false;
    for (let j=3;j<=this.numerator;j++){
      factorFound = false;
      for (let i=0;i<primesSoFar.length;i++){
          if(j % primesSoFar[i]==0){
            factorFound = true;
            break;
          }
      }
      if (!factorFound){
        primesSoFar.push(j);
      }
    }
    return primesSoFar;
  }


}
