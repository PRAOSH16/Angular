import { Component, OnInit, Output } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {
  @Output()
  emps: Employee[] = null;
  employees: Employee[] = [];
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService) { }
  // dependency injection

  ngOnInit() {
    this.employeeService.getAllemployee().subscribe((taskData) => this.emps = taskData);
  }
  addEmp(employee) {
    this.employeeService.addEmp(employee);
    if (!employee.id) {
      this.employeeService.addEmp(employee).subscribe((EmployeeData) => {
        this.employeeService.getAllemployee().subscribe((data) => this.emps = data),
        (error) => {
          console.error(error);
        }
      });
    }

    else {
      this.employeeService.updateEmployee(employee).subscribe((EmployeeData) => {
        this.employeeService.getAllemployee().subscribe((data) => this.emps = data),
        (error) => {
          console.error(error);
        }
      });
      
    }
    this.employee = new Employee();
  }
  // {
  //   console.log(JSON.stringify(this.employee));
  //   this.employeeService.addEmployee(this.employee);
  //   this.employeeService.getAllemployee().subscribe((taskData)=>this.emps=taskData);
  //   console.log(JSON.stringify(this.emps));

  // }
  // else {
  //   this.employeeService.updateEmployee(this.employee);
  //   this.employeeService.getAllemployee().subscribe((taskData)=>this.emps=taskData);
  // }
  removeEmployee(id: number): void {
    console.log('button clicked' + id);
    this.employeeService.removeEmployee(id).subscribe((EmployeeData) => {
      this.employeeService.getAllemployee().subscribe((data) => this.emps = data),
      (error) => {
        console.error(error);
      }
    });
  }
  updateEmployee(e) {
    Object.assign(this.employee, e);
    // this.employeeService.updateEmployee(e).subscribe((EmployeeData)=>{this.employeeService.getAllemployee().subscribe((data) => this.emps=data),
    //   (error)=>{
    //     console.error(error);
    //   }});

  }

}
