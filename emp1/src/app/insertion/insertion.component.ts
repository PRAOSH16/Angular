import { Component, OnInit, Input, Output } from '@angular/core';
import { Employee } from '../employee';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-insertion',
  templateUrl: './insertion.component.html',
  styleUrls: ['./insertion.component.css']
})
export class InsertionComponent implements OnInit {
  @Output()
  add: EventEmitter<Employee>  =new EventEmitter();
  emps:Employee[]=[];
  employee: Employee=new Employee();
  constructor() { }

  ngOnInit() {
    
  }
  addEmp() {
   console.log("Triggered");
    this.add.emit(this.employee);
   
  }

}
