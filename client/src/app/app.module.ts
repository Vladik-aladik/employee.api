import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeDetailFormComponent } from './employee-details/employee-detail-form/employee-detail-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {SearchPipe} from "./shared/search.pipe";
import {NgxPaginationModule} from "ngx-pagination";
import {OrderModule} from "ngx-order-pipe";
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from "./app-routing.module";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './shared/layouts/footer/footer.component';
import {NavbarComponent} from "./shared/layouts/navbar/navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    EmployeeDetailFormComponent,
    SearchPipe,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    OrderModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatSelectModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
