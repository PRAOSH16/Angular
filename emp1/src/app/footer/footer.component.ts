import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input()
  employee: Employee=new Employee();
  emps: Employee[]=[];
  constructor() { }

  ngOnInit() {
  }

}
