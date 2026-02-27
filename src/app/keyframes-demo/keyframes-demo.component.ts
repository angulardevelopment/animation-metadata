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
  ],
  standalone: false,

})
export class KeyframesDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   loading = false;
  success = false;

  async onClick() {
    if (this.loading) return;
    this.success = false;
    this.loading = true;

    // Simulate async work
    await new Promise(r => setTimeout(r, 1500));

    this.loading = false;
    this.success = true;

    // Reset state after a while
    setTimeout(() => (this.success = false), 1800);
  }

}
