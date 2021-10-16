import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../shared/employee-detail.service";
import {ToastrService} from "ngx-toastr";
import {NgForm} from "@angular/forms";
import {EmployeeModel} from "../../shared/employee.model";

@Component({
  selector: 'app-employee-detail-form',
  templateUrl: './employee-detail-form.component.html',
  styleUrls: ['./employee-detail-form.component.css']
})
export class EmployeeDetailFormComponent implements OnInit {

  constructor(public service:EmployeeService,
              private toastr:ToastrService) {
  }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    if (this.service.formData.employeeId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postEmployee().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submitted successfully', 'Added', {timeOut:1000})
      },
      err => { console.log(err); }
    );
  }



  updateRecord(form: NgForm) {
    this.service.putEmployee().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated successfully', 'Updated', {timeOut: 1000})
      },
      err => { console.log(err); }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new EmployeeModel();
  }

}
