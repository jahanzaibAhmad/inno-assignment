import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  endpoint: string = 'users';
  constructor(private http: HttpClient) { }

  getUsers(id: number): Observable<any> {
    return this.http.get(environment.apiUrl + this.endpoint + '/' + id)
      .pipe(map((data: any) => data));
  }
}
