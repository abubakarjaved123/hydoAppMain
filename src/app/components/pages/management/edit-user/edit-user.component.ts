import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { UserManagementServiceService } from 'src/app/services/user-management-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(
    private userManagementService: UserManagementServiceService,
    private route: ActivatedRoute,
    private rolesData: HelperService
  ) { }

  user: any;
  id: any;
  formGroup!: FormGroup;
  roleResponce: any;

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.userManagementService.getUserById(this.id).subscribe((result:any) => {
      this.user = result[0];
      console.log(result);
      this.formGroup.patchValue(this.user);
    })

    this.rolesData.getRoles().subscribe((result) => {
      this.roleResponce = result
    })

    this.initUserForm();
  }


  initUserForm() {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      contact: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      roles: new FormControl("")
    })
  }

  updateUser() {

  }

  changeRole(e: any) {

  }
}
