import { Injectable } from '@angular/core';
import { User } from './models';
import { HttpClient } from '@angular/common/http';
import { Observable, concatMap } from 'rxjs';
import { environment } from 'src/environment/environment.local';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]>  {
    return this.httpClient.get<User[]>(`${environment.baseUrl}/users`);
  };

  createUser(data: User):  Observable<User[]> {
    return this.httpClient
    .post<User>(`${environment.baseUrl}/users`, data)
    .pipe(concatMap(() => this.getUsers()))
  };

  updateteUser(userId: number, data: User):  Observable<User[]> {
    return this.httpClient
    .put<User>(`${environment.baseUrl}/users/${userId}`, data)
    .pipe(concatMap(() => this.getUsers()))
  };

  // deleteUser(userId: number, data: User): Observable<User[]> {
  //   return this.httpClient
  //   .delete<User>(`${environment.baseUrl}/users/${userId}`, data)
  //   .pipe(concatMap(() => this.getUsers()))  
  // };
}
