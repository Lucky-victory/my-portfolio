import {
  trigger,
  transition,
  state,
  style,
  animate,
} from '@angular/animations';

export const slideInOutAnimation = trigger('slideInOutAnimation', [
  state(
    '<=>',
    style({
      right: '0',
    })
  ),
  transition(':enter', [
    style({ right: '-400%' }),
    animate(
      '.5s ease-in-out',
      style({
        right: 0,
      })
    ),
  ]),
  transition(':leave', [
    animate(
      '.5s ease-in-out',
      style({
        right: '-400%',
      })
    ),
  ]),
]);
