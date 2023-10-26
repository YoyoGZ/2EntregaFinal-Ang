import { Injectable } from '@angular/core';
import { User } from './models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(): User[] {
    return [
      {
        id: 1,
        name:'Martin',
        lastName: 'Solveig',
        email: 'martin@email.com'
      },
      {
        id: 2,
        name: 'Bob',
        lastName: 'Sinclair',
        email: 'BobSinc@email.com'
      },
      {
        id: 3,
        name: 'Armin',
        lastName: 'Van Buren',
        email: 'arminV@email.com'
      }
    ]
  }
}
