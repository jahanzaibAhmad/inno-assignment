import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  icon: string;
  amount: string;
}


@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.scss']
})


export class HomeFormComponent {

  tiles: Tile[] = [
    { text: 'Total Orders', amount: '345', cols: 1, rows: 2, color: 'white', icon: 'shopping_cart' },
    { text: 'Total Expenses', amount: '267', cols: 1, rows: 2, color: 'white', icon: 'save' },
    { text: 'Total Revenue', amount: '345', cols: 1, rows: 2, color: 'white', icon: 'assessment' },
    { text: 'New Users', amount: '345', cols: 1, rows: 2, color: 'white', icon: 'person' },
  ];


}
