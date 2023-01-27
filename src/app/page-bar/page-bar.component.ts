import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-page-bar',
  templateUrl: './page-bar.component.html',
  styleUrls: ['./page-bar.component.scss']
})
export class PageBarComponent {

@Input() heading!: string;
@Input() description!: string;
@Input() isGridBtn: boolean = false;

  @Output() toggleClick = new EventEmitter<boolean>();

  isGrid: boolean = false;
  toggle(val: boolean) {
    this.isGrid = val;
    this.toggleClick.emit(val);
  }

}
