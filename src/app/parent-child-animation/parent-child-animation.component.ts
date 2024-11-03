import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-parent-child-animation',
  templateUrl: './parent-child-animation.component.html',
  styleUrls: ['./parent-child-animation.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('1s', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class ParentChildAnimationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showParent = true;
  showChild = false;

  toggleChild() {
    this.showChild = !this.showChild;
  }

  removeParent() {
    this.showParent = false;
  }
}
