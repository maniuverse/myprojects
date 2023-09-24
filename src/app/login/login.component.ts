import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(private router:Router){

  }
  ngOnInit() {
    this.loginForm = new FormGroup({
      name:new FormControl(''),
      password:new FormControl('')
    })
  }
  onSubmit() {
    console.log("this.name", this.loginForm);
    if(this.loginForm.value.name=='mani'&&this.loginForm.value.password=='123'){
      alert("login success");
      this.router.navigateByUrl('userlist');
    }
    else{
      alert('login failed');
    }
  }
  onClear(){
    this.loginForm.reset();
  }
}
