


import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { BlogsModel } from '../shared/blogs.model';
import { BlogsService } from '../shared/blogs.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent {

  blogInfo!: BlogsModel[];
  subscription: Subscription[] = [];
  title: string = 'Home';/** Title/Breadcrumb and Descrition also come from rounte if define there and getting directly in page bar componenet */
  description: string = 'Blog Page Description';

  constructor(
    private blogsService: BlogsService
  ) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs() {
    this.subscription.push(this.blogsService.getBlogs(1).subscribe({
      next: (data) => {
        this.blogInfo = data?.data;
      },
      error: () => {
        console.log('There was an error in retrieving data from the server');
      }
    }));
  }

  isExpand(idx: number) {
    const eleExpand: any = document.getElementById('expand' + idx);
    eleExpand.style.height = 'auto';
    const eleRead: any = document.getElementById('read' + idx);
    eleRead.firstChild.style.display = 'none';
  }


  ngOnDestroy(): void {
    /** unsubscribing all Subscribe observable */
    this.subscription.forEach(sub => sub.unsubscribe());
  }

}
