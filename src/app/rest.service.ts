import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employees } from "./employees";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3000/data";

  getData(): Observable<Employees[]>{
    return this.http.get<Employees[]>(this.url);
  }
}
