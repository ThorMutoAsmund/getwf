import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'demo-root',
  templateUrl: './demo.component.html',
})
export class DemoComponent {
  title = 'app';
  size = { width: 300, height: 300 };
  showFrog = false;
  name = "Thor";
  today = new Date();
  wallet = 125.50;
  opt : object;
  options = [{id:1,name:"Hans"},{id:2,name:"Niels"},{id:3,name:"Thor"},{id:4,name:"Kenny"}];
  @ViewChild('firstInput') input: ElementRef;

  get dateFormat() {
    return "dd/MM/yy";
  }

  buttonClick(event) {
    console.log(event);
    console.log(this.input.nativeElement.value);
    this.showFrog = true;
  }
}
