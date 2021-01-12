import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SampleService {
    private apiRoot: string;

    constructor(private readonly http: HttpClient) {
        this.apiRoot = '';
    }

    getSampleData(): Observable<any> {
        return this.http.get('../assets/data/sample.json').pipe(
            map((data: any) => {
                return data;
            })
        )
    }


}
