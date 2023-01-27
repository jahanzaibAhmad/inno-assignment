import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-page-bar',
  templateUrl: './page-bar.component.html',
  styleUrls: ['./page-bar.component.scss']
})
export class PageBarComponent {

  @Output() toggleClick = new EventEmitter<boolean>();

  isGrid: boolean = false;
  toggle(val: boolean) {
    this.isGrid = val;
    this.toggleClick.emit(val);
  }

}
