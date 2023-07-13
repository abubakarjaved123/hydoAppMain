import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservices:AuthService, private router:Router) { }
  formGroup!: FormGroup;
  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      contact: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  response:any;

  loginProcess(){
    if(this.formGroup.valid){
      this.authservices.login(this.formGroup.value).subscribe(result => {
        if(result.status === true){
          this.response = result
      
          // if(this.response.data.user.roles == "636a880221ec9f5b0db04d68"){
              
              localStorage.setItem('token', this.response.data.accessToken)
              localStorage.setItem('Refreshtoken', this.response.data.refreshToken)
              localStorage.setItem('userId', this.response.data.user.id)
              localStorage.setItem('userName', this.response.data.user.name)
              this.router.navigate(['/']);

          // }
        //  else{
        //   alert ('You are not allowed...')
        //   this.router.navigate(['/login'])
        //  }
          // alert(this.response.data.accessToken.user.roles)
        }
       
       else{
         alert (result.errors)
       }
      });
    }
  }

}
