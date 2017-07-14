import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LoginService } from '../../services/login.service';
import { ProfilesService } from '../../services/profiles.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  form;

  @Output() login = new EventEmitter();
  title = 'Login'

  constructor(  
    private loginService: LoginService,
    private profilesService: ProfilesService
  ){

  }

  ngOnInit(){
    this.form = new FormGroup({
      username : new FormControl('', Validators.compose([
        Validators.required,
      ])),
      password : new FormControl('', Validators.compose([
        Validators.required
      ])),
    });
  }

  getProfile(token){
    this.profilesService.get(token).subscribe(
      (response) => {
        console.log('profile', response)
      },
      (error) => {

      },
      () => {

      }
    )
  }

  onSubmit(loginData){
    this.loginService.post(loginData).subscribe(
      (response) => {
        
        if(typeof(response.token) === 'string'){
          this.getProfile(response.token);
          this.login.emit(response);
        }
        
      },
      (error) => {
        if(typeof(error.status) === 'number'){
          alert(error.statusText)
        }
        console.log('error', error)
      },
      () => {
        console.log('end');
      }
    )
  }

}
