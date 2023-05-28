import { Component } from '@angular/core';
import { counterState } from '../state/counter.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-custom-input',
  templateUrl: './counter-custom-input.component.html',
  styleUrls: ['./counter-custom-input.component.css']
})
export class CounterCustomInputComponent {
  value! : number;

  constructor(private store : Store<{ counter : counterState}>){}

 
}
