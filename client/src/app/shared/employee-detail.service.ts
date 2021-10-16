import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EmployeeModel} from "./employee.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  readonly baseUrl = 'https://localhost:44346/api/Employees'
  formData: EmployeeModel = new EmployeeModel();

  list :EmployeeModel[] = []

  postEmployee() {
    return this.http.post(this.baseUrl, this.formData);
  }

  putEmployee() {
    return this.http.put(`${this.baseUrl}/${this.formData.employeeId}`, this.formData);
  }

  deleteEmployee(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  refreshList(){
    this.http.get(this.baseUrl)
      .toPromise()
      .then(res =>this.list = res as EmployeeModel[]);
  }
}
