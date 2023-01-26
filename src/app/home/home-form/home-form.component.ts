import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeModel } from '../shared/home.model';
import { HomeService } from '../shared/home.service';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.scss']
})

export class HomeFormComponent implements OnInit, OnDestroy {
  tiles!: HomeModel[];
  // tiles: Tile[] = [
  //   { text: 'Total Orders', amount: '345', cols: 1, rows: 2, color: 'white', icon: 'shopping_cart' },
  //   { text: 'Total Expenses', amount: '267', cols: 1, rows: 2, color: 'white', icon: 'save' },
  //   { text: 'Total Revenue', amount: '345', cols: 1, rows: 2, color: 'white', icon: 'assessment' },
  //   { text: 'New Users', amount: '345', cols: 1, rows: 2, color: 'white', icon: 'person' },
  // ];


  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    this.homeService.getCards(1).subscribe({
      next: (data) => {
        this.tiles = data?.data;
      },
      error: (error) => {
        console.log('There was an error in retrieving data from the server');
      }
    });


  }


  ngOnDestroy(): void {

  }


}
