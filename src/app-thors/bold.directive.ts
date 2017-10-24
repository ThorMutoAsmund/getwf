import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[myBold]'})
export class BoldDirective {
    
    constructor(
        private el: ElementRef) 
    { 
    }

    @Input() set myBold(condition: boolean) {
        this.el.nativeElement.style.fontWeight = condition ? 'bold' : 'normal';
    }
}
