import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'scramble'})
export class ScramblePipe implements PipeTransform {
    transform(value: string): string {
        let result = '';
        for (let a=1; a<=value.length; ++a) {
            result += value[value.length - a];
        }
        return result;
    }
}
