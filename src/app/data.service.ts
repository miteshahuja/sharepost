import { Injectable } from '@angular/core';

import { Headers, RequestOptions } from '@angular/http';

 import { map } from 'rxjs/operators';
import { HttpClientModule  } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()
export class DataService {

  result: any;

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<any>  {
   // return this._http.get('/api/users')
     //     .pipe(map((result: any) => this.result = result));
  // }
  return this._http.get('/api/users').pipe(map(response => response));
}
}
