import { Component, OnInit } from '@angular/core';
import {UserService} from "../shared/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form:FormGroup

  constructor(public auth: AuthService,
              public router:Router) { }

  ngOnInit(){
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
  }

  onSubmit() {
    this.form.disable()
    this.router.navigate(['/login'],{
      queryParams:{
        registered:true
      }
    })
  }
}
