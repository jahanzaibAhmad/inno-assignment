import { Component } from '@angular/core';
import { BlogsModel } from '../shared/blogs.model';
import { BlogsService } from '../shared/blogs.service';


@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent {

  tiles!: BlogsModel[];

  constructor(
    private blogsService: BlogsService
  ) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs() {
    this.blogsService.getBlogs(1).subscribe({
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
