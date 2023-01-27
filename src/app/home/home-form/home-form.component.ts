import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogsModel } from '@app/blogs/shared/blogs.model';
import { Subscription } from 'rxjs';
import { HomeModel } from '../shared/home.model';
import { HomeService } from '../shared/home.service';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.scss']
})

export class HomeFormComponent implements OnInit, OnDestroy {
  tiles!: HomeModel[];
  blogInfo!: BlogsModel[];
  subscription: Subscription[] = [];



  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getCards();
    this.getBlogs();
  }

  getCards() {
    this.subscription.push(this.homeService.getCards(1).subscribe({
      next: (data) => {
        this.tiles = data?.data;
      },
      error: (error) => {
        console.log('There was an error in retrieving data from the server');
      }
    }));
  }


  getBlogs() {
    this.subscription.push(this.homeService.getBlogs(1).subscribe({
      next: (data) => {
        this.blogInfo = data?.data;
      },
      error: () => {
        console.log('There was an error in retrieving data from the server');
      }
    }));
  }


  ngOnDestroy(): void {
    this.subscription.forEach(sub => sub.unsubscribe());
  }


}
