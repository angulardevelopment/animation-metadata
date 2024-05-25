import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { blockInitial, itemAnimation } from './animations';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [itemAnimation, blockInitial]
})
export class ListComponent {

  todo: Item[] = [
    { id: '0', label: 'Green Beans' },
    { id: '1', label: 'Broccoli' },
    { id: '2', label: 'Fennel' },
    { id: '3', label: 'Radishes' },
    { id: '5', label: 'Chicken' }
  ];

  done: Item[] = [
    { id: '6', label: 'Apples' },
    { id: '7', label: 'Cherries' },
    { id: '8', label: 'Bread' },
    { id: '9', label: 'Milk' },
    { id: '4', label: 'Pears' }
  ];

  private subscription?: Subscription;

  ngAfterViewInit() {
    this.subscription = interval(1000)
      .subscribe(() => {
        if ((Math.random() < 0.5 || this.done.length < 3) && this.todo.length > 2) {
          this.complete(randomItem(this.todo));
        } else {
          this.restore(randomItem(this.done));
        }
      })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  idForItem(index: number, item: Item) {
    return item.id;
  }

  complete(item: Item) {
    const itemIndex = this.todo.indexOf(item);

    this.todo = [
      ...this.todo.slice(0, itemIndex),
      ...this.todo.slice(itemIndex + 1)
    ];

    this.done.push(item);
    this.done.sort(byLabel);
  }

  restore(item: Item) {
    const itemIndex = this.done.indexOf(item);

    this.done = [
      ...this.done.slice(0, itemIndex),
      ...this.done.slice(itemIndex + 1)
    ];

    this.todo.push(item);
    this.todo.sort(byLabel);
  }
}

function byLabel(a: Item, b: Item) {
  return a.label < b.label ? -1 : 1;
}

function randomItem(list: Item[]): Item {
  return list[Math.floor(Math.random() * list.length)];
}


interface Item {
  readonly id: string;
  readonly label: string;
}
