import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../shared/employee-detail.service";
import {ToastrService} from "ngx-toastr";
import {EmployeeModel} from "../shared/employee.model";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})

export class EmployeeDetailsComponent implements OnInit{
  constructor(public service:EmployeeService, private toastr:ToastrService) { }

  searchStr = ''
  p:number = 1;
  employeesToDelete:EmployeeModel[] = []
  reverse: boolean = false
  key = ''
  isChecked: any;
  showMe:boolean = false

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
          () => {
            this.service.refreshList();
            this.toastr.error("Deleted successfully!", 'Deleted!', {timeOut: 1000});
          },
          err => {
            console.log(err)
          }
        )
    }
  }

  sort(key: string){
    this.key = key
    this.reverse = !this.reverse
    //console.log(this.employeesToDelete)
  }

  candidateToDelete($event: any, isChecked: any, em:EmployeeModel) {
      if (isChecked){
        this.employeesToDelete.push(em)

      }else{
        let index = this.employeesToDelete.indexOf(isChecked.index)
        this.employeesToDelete.splice(index, 1)
      }
  }

  deleteMany(){
    let employeesToDelete = this.employeesToDelete.map(a=>a.employeeId)
    if (employeesToDelete.length!=0){
      if (confirm('Are you sure to delete selected records?')){
        this.service.deleteMultiple(employeesToDelete)
        this.toastr.error("Deleted successfully!", 'Deleted!', {timeOut: 1000});
      }
    }
    this.toastr.warning("No rows selected", 'Deleted!', {timeOut: 1000});
    this.employeesToDelete = []
  }

  show(){
    this.showMe=!this.showMe
    this.employeesToDelete = []
  }
}
