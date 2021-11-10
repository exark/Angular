import { Component, OnInit } from '@angular/core';
import { Employees } from "../employees";
import {RestService} from "../rest.service";

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {
  employees: Employees[] = [];
  employeeName:any;
  p:number=1
  constructor(public rs:RestService) {

  }
  ngOnInit(): void {
    this.rs.getData().subscribe((response) =>{
      this.employees = response;
    })
  }
  key:string = 'id';
  reverse:boolean = false;
  sort(key: string){
    this.key=key;
    this.reverse = !this.reverse;
  }

}
