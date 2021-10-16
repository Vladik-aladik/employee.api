import { Component, OnInit } from '@angular/core';
import {UserService} from "../shared/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  aSub:Subscription;

  constructor(public auth:AuthService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(){
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
  }

  onSubmit() {
    this.form.disable()
    this.aSub = this.auth.login(this.form.value).subscribe(
      ()=>this.router.navigate(['/table'])
    )
  }
}
