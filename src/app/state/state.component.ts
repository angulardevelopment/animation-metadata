import { Component, OnInit } from '@angular/core';
import {animate,trigger, state, style, transition} from '@angular/animations';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss'],
  animations: [
    trigger('balloonEffect', [
    state('initial', style({
    backgroundColor: 'green',
    transform: 'scale(1)'
    })),
    state('final', style({
    backgroundColor: 'red',
    transform: 'scale(1.5)'
    })),
    transition('final=>initial', animate('1000ms')),
    transition('initial=>final', animate('1500ms'))
    ]),
    ]
})
export class StateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  currentState='final';
  changeState() {
  this.currentState = this.currentState == 'final' ? 'initial' : 'final';
  }
}
