import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-parent-child-animation',
  templateUrl: './parent-child-animation.component.html',
  styleUrls: ['./parent-child-animation.component.scss'],
  animations: [
    // The `fadeInOut` trigger defines animations for entering and leaving. The child element fades in when it appears and fades out when it leaves.
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
      // When you click the "Toggle Child Element" button, the child will fade out first. If you click "Remove Parent Element," the parent will disappear immediately, but only after the child has completed its fade-out animation.
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

  // The `toggleChild` method controls the visibility of the child element. The `removeParent` method sets `showParent` to false, which will remove the parent element.
  toggleChild() {
    this.showChild = !this.showChild;
  }

  removeParent() {
    this.showParent = false;
  }
}
