import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyframes-demo',
  templateUrl: './keyframes-demo.component.html',
  styleUrls: ['./keyframes-demo.component.scss'],
  animations: [
    trigger('myAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-in', style({ opacity: 1 }))
      ]),
    ])
  ]
})
export class KeyframesDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
