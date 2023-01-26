import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  allUsers: any;

  constructor(
    private usersService: UsersService
  ) {

  }
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers(1).subscribe({
      next: (data) => {
        data.forEach((element: any) => {
          element.image = 'assets/images/home-industry.png'
        });
        this.allUsers = data;
      },
      error: (error) => {
        console.log('There was an error in retrieving data from the server');
      }
    });


  }


  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
