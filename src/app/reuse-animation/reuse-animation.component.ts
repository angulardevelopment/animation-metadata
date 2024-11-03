import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, useAnimation } from '@angular/animations';
import { colorAnimation } from './colorAnimation';

@Component({
  selector: 'app-reuse-animation',
  templateUrl: './reuse-animation.component.html',
  styleUrls: ['./reuse-animation.component.scss'],
  animations: [
    trigger('animateColor', [
      transition(':enter, :leave', [
        useAnimation(colorAnimation, {
          params: {
            startColor: 'white',
            endColor: 'blue',
            duration: '1s',
          },
        }),
      ]),
    ]),
  ],
})
export class ReuseAnimationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    // You can toggle a condition to trigger the animation
    showElement = false;

    toggle() {
      this.showElement = !this.showElement;
    }

}

