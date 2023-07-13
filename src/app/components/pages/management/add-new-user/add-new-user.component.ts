import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';
import { HelperService } from 'src/app/services/helper.service';
import { UserManagementServiceService } from 'src/app/services/user-management-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {

  constructor(private rolesData:HelperService, private addNew:UserManagementServiceService, private fb: FormBuilder) { }
  
  Userlist:any;

  roleResponce:any;
  //getformGroup! : FormGroup;
  formGroup! : FormGroup;
  token:any = localStorage.getItem('token')


  ngOnInit(): void {
   
    this.rolesData.getRoles().subscribe((result)=>{
      
       this.roleResponce = result
      //  this.roleResponce = this.roleResponce.data
       console.log('Roles',this.roleResponce)
  })
  this.initUserForm();
}

  // form = this._fb.group({
  //   roles:this._fb.array([])
  // })

  // get roles(){
  //   return this.form.controls["roles"] as FormArray
  // }

  // get roles(){
  //   return this.getformGroup.get('roles') as FormArray
  // }

  // addroles(){
  //   this.roles.push(this.formGroup.control(''));
  // }


  initUserForm(){
    // this.getformGroup = this.formGroup.group({

    //   name : [''],
    //   roles: this.formGroup.array([  [''], //0 points to this
    //   ]),
    // username:  [''],
    //  email:  [''],
    //  contact:  [''],
    //  password:  [''],
    //  password_confirmation: new FormControl('', [Validators.required]),
    // })

  

    this.formGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    contact: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
   // roles: new FormControl('', [Validators.required]),
    // roles:  new FormArray([ new FormControl('', [Validators.required])]),
    // roles: this.formBuilder.array({}),
    roles: new FormControl(""),
    password_confirmation: new FormControl('', [Validators.required]),
    })
    
    
  }


companyContact: any;
  changeWebsite(e: any) {
    console.log(e.target.value);
    return this.companyContact;
  }
  
  addUser(){

  //console.log(this.formGroup.value.roles)


    if(this.formGroup.valid){
      this.addNew.addNewUser(this.formGroup.value).subscribe(result => {
        if(result.status === true){
          window.location.href='/management'
        }
        else{
          alert ('Some Error')
        }
      } )
    }
    else{
     alert("form not validated")
     console.log(this.formGroup)
    }
  }
}
