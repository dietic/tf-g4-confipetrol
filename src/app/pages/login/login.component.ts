import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginform = this.fb.group({
    persona: this.fb.group({
      usuario:[''],
      contraseña:['']
    })
  })

  constructor(
    private fb: FormBuilder
  ) { }

  __onSubmit(){
    console.log(this.loginform.value)
  }
  
  ngOnInit(): void {
  }

}
