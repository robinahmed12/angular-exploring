import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
 
  constructor(private counterService: CounterService) {}

  ngOnInit(): void {

  }

   get counter() {
    return this.counterService.getCount();
  }

  onIncrement() {
    this.counterService.increment();
  }

  onDecrement() {
    this.counterService.decrement();
  }
  onReset() {
    this.counterService.reset();
  }
  
 
}
