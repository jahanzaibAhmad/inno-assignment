import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-block-list',
  templateUrl: './user-block-list.component.html',
  styleUrls: ['./user-block-list.component.scss']
})
export class UserBlockListComponent {
  @Input() allUsers: any;
}
