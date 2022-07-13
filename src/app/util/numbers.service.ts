import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {

  constructor() { }

  getRandomNumberBetween(min: number ,max: number){
    return Math.floor(Math.random()*(max-min+1)+min);
  }

}
