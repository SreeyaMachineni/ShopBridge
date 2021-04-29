import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  authForm = new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })

  constructor(private router:Router) { }

  login(){
    if(this.authForm.value.username === this.authForm.value.password){
        this.router.navigate(['inventoryList'])
    }else{
      this.authForm.reset()
    }
  }

}
