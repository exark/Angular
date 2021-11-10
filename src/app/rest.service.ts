import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employees } from "./employees";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  url: string = "https://dummy.restapiexample.com/api/v1/employees?fbclid=IwAR3901P08-ordS7z0J4lq9t8fs5s7YMus3_1tLG-QgdKhvaopgmeryMXiUA";

  getData(): Observable<any>{
    return this.http.get<any>(this.url);
  }
}
