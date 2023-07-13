import { Component, OnInit } from '@angular/core';
import { UserManagementServiceService } from 'src/app/services/user-management-service.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  constructor(private userData: UserManagementServiceService) { }

  Userlist: any;

  ngOnInit(): void {
    this.userData.getUserManagement().subscribe((result) => {

      this.Userlist = result
      console.log('data', this.Userlist)
    })
  }

  confirmDelete(e: any) {
    // Swal.fire({
    //   title: 'Are you sure?',
    //   text: 'You will not be able to recover this user. Are you sure you want to permanently delete this user?',
    //   icon: 'danger',
    //   shoeCancelButton: true,
    //   confirmButtonText: 'Delete Permanently',
    //   cancelButtonText: 'Cancel'
    // }).then((result:any) => {
    //   if(result.value){
    //     // delete user logic
    //   }
    // })
  }

}
