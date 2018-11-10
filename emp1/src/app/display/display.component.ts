import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input()
  emps: Employee[]=[];
  employee:Employee=new Employee();

  constructor() { }

  ngOnInit() {
  }

}
