import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, pipe, map } from 'rxjs';
import { User } from 'src/app/dashboard/pages/users/models';
import { environment } from 'src/environment/environment.local';
import { loginData } from '../models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authUser$ = new BehaviorSubject<User | null>(null);

  public authUser$ = this._authUser$.asObservable();

  constructor(private httpClient : HttpClient, private router : Router) {}

  login(data: loginData): void  {
    this.httpClient
    .get<User[]>(`${environment.baseUrl}/users?email=${data.email}&password=${data.password}`)
    .subscribe({ 
      next: (response) => {
        if (!response.length) {
              alert('Usuario o password invalidos')
            } else {
                const authUser = response[0];
                this._authUser$.next(authUser);
                localStorage.setItem('token', authUser.token);
                this.router.navigate(['/dashboard/home']);
              } 
      }
    });
  }

  verifyToken(): Observable<boolean> {
    return this.httpClient.get<User[]>(
      `${environment.baseUrl}/users?token=${localStorage.getItem('token')}`
      ).pipe (
        map((users)=> {
          if (!users.length) {
            return false;
          } else {
            const authUser = users[0];
            this._authUser$.next(authUser);
            localStorage.setItem('token', authUser.token);
            return true;
          }
        })
      )      
  };

  logOut(): void {
    this._authUser$.next(null);
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login'])
  };
}

 