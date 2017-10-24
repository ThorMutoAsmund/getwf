import { Component, Input } from '@angular/core';
import { ImageLoader } from './imageloader';

@Component({
  selector: 'frog',
  template: '<img width="{{width}}" src="{{imageLoader.getImagePath(\'treefrog.jpg\')}}" />'
})
export class FrogComponent {
  @Input() width = 70;

  constructor (private imageLoader : ImageLoader) {
  }
}
