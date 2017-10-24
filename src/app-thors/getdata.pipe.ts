import { Pipe, PipeTransform } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Pipe({ name: 'getData', pure: false })
export class GetDataPipe implements PipeTransform {
    constructor (private http: Http) {
    }

    private cachedData: any = null;
    private cachedUrl = '';

    transform(value: string, param: string): string {
        if (value !== this.cachedUrl) {
            this.cachedData = null;
            this.cachedUrl = value;
            this.http.get(`http://${value}.jsontest.com`)
                .map(result => result.json())
                .subscribe(result => this.cachedData = result);

        }
        return this.cachedData ? this.cachedData[param] : null;
    }
}
