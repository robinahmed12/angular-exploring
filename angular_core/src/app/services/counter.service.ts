import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CounterService {

    counter = 0

    constructor() { }
    
    increment(){
        this.counter ++
    }

    decrement(){
        this.counter --
    }

    reset (){
        this.counter = 0
    }

    getCount(){
      return  this.counter
    }
}