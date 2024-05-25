import { animate, style, transition, trigger } from '@angular/animations';

export const itemAnimation = trigger('item', [
  transition(':leave', [
    style({
      opacity: 1,
      transform: 'scale(1)',
      height: '*',
      padding: '*',
      margin: '*'
    }),
    animate(
      '.5s cubic-bezier(0.36, 0, 0.66, -0.56)',
      style({
        opacity: 0,
        transform: 'scale(0.5)',
        height: '0',
        padding: '0',
        margin: '0'
      })
    )
  ]),
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'scale(0.5)',
      height: '0',
      padding: '0',
      margin: '0'
    }),
    animate(
      '.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
      style({
        opacity: 1,
        transform: 'scale(1)',
        height: '*',
        padding: '*',
        margin: '*'
      })
    )
  ])
]);

export const blockInitial = trigger('blockInitial', [transition(':enter', [])]);
