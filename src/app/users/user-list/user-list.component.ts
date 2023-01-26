import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy, OnChanges {
  @Input() allUsers: any;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();


  constructor(
  ) {
  }


  ngOnChanges(): void {
    this.dtOptions = {
      dom: 'Bfrtip',
    };
    console.log(this.allUsers)
    if(this.allUsers?.length > 0){
      this.dtTrigger.next(0);
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
