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
  employee_name:any;
  p:number=1
  constructor(public rs:RestService) {

  }
  ngOnInit(): void {
    this.rs.getData().subscribe((response) =>{
      this.employees = response.data;
    })
  }
  key:string = 'id';
  reverse:boolean = false;
  sort(key: string){
    this.key=key;
    this.reverse = !this.reverse;
  }


  Search(){
    if(this.employee_name == ""){
      this.ngOnInit();
    }else{
      this.employees = this.employees.filter(res =>{
        return res.employee_name.toLocaleLowerCase().match(this.employee_name.toLocaleLowerCase());
      });
    }
  }
}
