import {Component, OnInit, ViewChild} from '@angular/core';
import {EmployeeService} from "../shared/employee-detail.service";
import {ToastrService} from "ngx-toastr";
import {EmployeeModel} from "../shared/employee.model";
import {retry} from "rxjs/operators";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})

export class EmployeeDetailsComponent implements OnInit{
  constructor(public service:EmployeeService, private toastr:ToastrService) { }

  searchStr = ''
  p:number = 1;


  ngOnInit():void  {
    this.service.refreshList()
  }

  populateForm(selectedRecord: EmployeeModel) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteEmployee(id)
        .subscribe(
          res => {
            this.service.refreshList();
            this.toastr.error("Deleted successfully!", 'Deleted!', {timeOut: 1000});
          },
          err => {
            console.log(err)
          }
        )
    }
  }

  reverse: boolean = false
  key = ''

  sort(key: string){
    this.key = key
    this.reverse = !this.reverse
  }
}
