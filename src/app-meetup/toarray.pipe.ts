import { Pipe, PipeTransform } from '@angular/core';

//
// Pipe that converts an object to an array. Each element in the array is an object with two values:
// key: the original key in the object
// value: the value at that key
//
@Pipe({ name: 'toArray', pure: true })
export class ToArrayPipe implements PipeTransform {
    constructor () {
    }

    transform(value: object): object[] {
        if (!value) return [];
        return Object.keys(value).map(function (key) { return {key, value:value[key]}; });
    }
}
