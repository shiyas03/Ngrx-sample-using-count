import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterState } from '../state/counter.state';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  counter!: number;
  counterSubscription! : Subscription;
  constructor(private store: Store<{ counter: counterState }>) { }

  ngOnInit(): void {
    this.counterSubscription = this.store.select('counter').subscribe(data=>{
      this.counter = data.counter
    })
  }

  ngOnDestroy(): void {
    if(this.counterSubscription){
      this.counterSubscription.unsubscribe();
    }
  }

}
