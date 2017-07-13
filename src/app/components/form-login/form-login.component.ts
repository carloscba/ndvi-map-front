import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  form;

  @Output() login = new EventEmitter();
  title = 'Login'

  constructor(private loginService: LoginService){

  }

  ngOnInit(){

    
    this.loginService.get().subscribe(
      (response) => {
        console.log('response', response);
      },
      (error) => {
        console.log('error', error)
      },
      () => {
        console.log('end');
      }
    )

    this.form = new FormGroup({
      email : new FormControl('', Validators.compose([
        Validators.required,
      ])),
      password : new FormControl('', Validators.compose([
        Validators.required
      ])),
    });
  }

  onSubmit(loginData){
    
    console.log('loginData', loginData);

  }

  onLogin(){
    this.login.emit();
    console.log('login');
  }

}
