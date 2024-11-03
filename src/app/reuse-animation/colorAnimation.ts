import { animation, style, animate } from '@angular/animations';

// Define the reusable color animation
export const colorAnimation = animation([
  style({ backgroundColor: '{{startColor}}' }),
  animate('{{duration}}', style({ backgroundColor: '{{endColor}}' })),
]);