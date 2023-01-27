import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, OnDestroy {
  allUsers: any;
  isGrid: boolean = false;

  title: string = 'Home'; /** Title/Breadcrumb and Descrition also come from rounte if define there and getting directly in page bar componenet */
  description: string = '';
  subscription: Subscription[] = [];


  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.subscription.push(this.usersService.getUsers(1).subscribe({
      next: (data) => {
        this.allUsers = data?.data;
        this.description = 'Total user : ' + (data?.data?.length ?? 0);
      },
      error: (error) => {
        console.log('There was an error in retrieving data from the server');
      }
    }));
  }

  toggle(val: boolean){
    this.isGrid = val;
  }


  ngOnDestroy(): void {
    /** unsubscribing all Subscribe observable */
    this.subscription.forEach(sub => sub.unsubscribe());
  }

}
