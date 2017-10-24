import { Component, Input } from '@angular/core';
import { Size } from './size';

@Component({
  selector: 'snake',
  template: '<img width="{{size.width}}" src="/images/snake.jpg" />'
})
export class SnakeComponent {
   @Input() size: Size = { width:70, height: 70 };
}
