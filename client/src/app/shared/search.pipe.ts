import {Pipe, PipeTransform} from "@angular/core";
import {EmployeeModel} from "./employee.model";

@Pipe({
  name:'searchEmployees'
})
export class SearchPipe implements PipeTransform{
  transform(employees:EmployeeModel[], search:string): EmployeeModel[] {
    if (!employees || !search){
      return employees
    }
     return employees.filter(res=>
        res.name.toLowerCase().indexOf(search.toLowerCase()) == 0 ||
        res.surname.toLowerCase().indexOf(search.toLowerCase()) == 0 ||
        res.jobTitle.toLowerCase().indexOf(search.toLowerCase())== 0 ||
        res.email.toLowerCase().indexOf(search.toLowerCase()) == 0 ||
        res.phoneNumber.toString().indexOf(search.toString()) == 0
    )
  }
}
