import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogsModel } from '@app/blogs/shared/blogs.model';
import { Subscription } from 'rxjs';
import { HomeModel } from '../shared/home.model';
import { HomeService } from '../shared/home.service';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.scss']
  /** We may use changedetection strategy here on push if we have manp parent child component which are effecting our performance performance */
})

/** Note: I have may used "any" datatype due to shortage of time */

export class HomeFormComponent implements OnInit, OnDestroy {
  tiles!: HomeModel[]; /** Each model define as interface */
  blogInfo!: BlogsModel[];
  subscription: Subscription[] = [];
  title: string = 'Home';/** Title/Breadcrumb and Descrition also come from rounte if define there and getting directly in page bar componenet */
  description: string = 'Home Page Description';


  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getCards();
    this.getBlogs();
  }

  getCards() {
    /** Getting data from (https://jsonplaceholder.typicode.com/) bt forking on my git hub https://github.com/jahanzaibAhmad/demoapi*/
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
    /** we are not adding cross service to make it loosely couple (So, I rewrite blog method in homeService), 
     * we may use shared service in global shared folder */

    /**Getting data from (https://jsonplaceholder.typicode.com/) bt forking on my git hub https://github.com/jahanzaibAhmad/demoapi*/
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
    /** unsubscribing all Subscribe observable */
    this.subscription.forEach(sub => sub.unsubscribe());
  }


}
