import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService{
  constructor(private http:HttpClient) { }
  formData: User = new User();

  login(){

  }

  register(){

  }
}
