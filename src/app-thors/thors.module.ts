import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { ImageLoader } from './imageloader';
import { FirstComponent } from './first.component';
import { FrogComponent } from './frog.component';
import { SnakeComponent } from './snake.component';
import { TestForm } from './testform.component';
import { UnlessDirective } from './unless.directive';
import { BoldDirective } from './bold.directive';
import { ScramblePipe } from './scramble.pipe';
import { GetDataPipe } from './getdata.pipe';

@NgModule({
  imports: [
      FormsModule
  ],
  declarations: [
    FirstComponent, FrogComponent, SnakeComponent, TestForm, UnlessDirective, BoldDirective, ScramblePipe, GetDataPipe
  ],
  providers: [ ImageLoader ],
  exports: [
    FirstComponent, FrogComponent, SnakeComponent, TestForm, UnlessDirective, BoldDirective, ScramblePipe, GetDataPipe
  ],
})
export class ThorsModule { }
