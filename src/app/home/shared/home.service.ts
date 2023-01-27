import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { map, Observable } from 'rxjs';
/** Create shared folder at component level to share Model, Service, SCSS, etc at component level */
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  endpoint = 'posts';
  endpointBlog = 'blogs';
  constructor(
    private http: HttpClient,
  ) { }

  /** API Url is in enviorment, we are passing id (may consider is any company id as it is not for specific data but for getting all data against this id) */
  getCards(id: number): Observable<any> {
    return this.http.get(environment.apiUrl + this.endpoint + '/' + id)
      .pipe(map((data: any) => data));
  }

  getBlogs(id: number): Observable<any> {
    return this.http.get(environment.apiUrl + this.endpointBlog + '/' + id)
    .pipe(map((data: any) => data));
  }

}
