import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestureDirective } from './gesture.directive';

@NgModule({
  declarations: [GestureDirective],
  imports: [CommonModule],
  exports: [GestureDirective],
})
export class GestureModule {}
