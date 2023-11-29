import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from 'src/app/dashboard/pages/users/models';
import { environment } from 'src/environment/environment.local';
import { loginData } from '../models';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthActions } from '../store/auth/auth.actions';
import { selectAuthUser } from '../store/auth/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authUser$ = this.store.select(selectAuthUser)

  constructor(
    private httpClient : HttpClient, 
    private router : Router, 
    private store: Store) {}

    private HandleAuthUser(authUser: User): void {
      this.store.dispatch(AuthActions.setAuthUser({data: authUser}));
      localStorage.setItem('token', authUser.token);

    }

  login(data: loginData): void  {
    this.httpClient
    .get<User[]>(`${environment.baseUrl}/users?email=${data.email}&password=${data.password}`)
    .subscribe({ 
      next: (response) => {
        if (!response.length) {
              alert('Usuario o password invalidos')
            } else {
                const authUser = response[0];
                this.HandleAuthUser(authUser),
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
            this.HandleAuthUser(authUser)
            return true;
          }
        })
      )      
  };

  logOut(): void {
    this.store.dispatch(AuthActions.resetState())
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login'])
  };
}

 