import { Injectable } from '@angular/core';
import { Employee } from './employee';
import {Http,Response} from "@angular/http";
import { Observable } from '../../node_modules/rxjs/Observable';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
@Injectable()
export class EmployeeService {
  counter = 0 ;
  employee: Employee[] = [];

  constructor(private http: Http) { }
addEmp( e: Employee): Observable<Employee[]> {
  // if (!e.id) {
  //   e.id = ++this.counter;
  // }
  // console.log(JSON.stringify(e));
  // this.employee.push(e);
  // return this ;
  return this.http.post("http://localhost:3000/Employee/",e).map((response:Response)=><Employee[]>response.json());

}
getAllemployee(): Observable<Employee[]> {
  return  this.http.get("http://localhost:3000/Employee/").map((response:Response)=><Employee[]>response.json());
}
removeEmployee(id: number): Observable<Employee> {
  return this.http.delete("http://localhost:3000/Employee/"+id).map((response:Response)=><Employee>response.json()).catch(this.handleError);
}
handleError(error:Response){
  console.error(error);
  return Observable.throw(error);
}


updateEmployee(e: Employee): Observable<Employee[]> {
  //this.removeEmployee(e.id);
// this.addEmployee(e);
//  return this;
return this.http.put("http://localhost:3000/Employee/"+(e.id),e).map((response:Response)=><Employee[]>response.json());

}
}
