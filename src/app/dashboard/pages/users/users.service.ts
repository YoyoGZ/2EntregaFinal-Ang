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
        email: 'martin@email.com',
        password: '1234',
        role: 'Admin1',
        token: '7184947851opopakismk'
      },
      {
        id: 2,
        name: 'Bob',
        lastName: 'Sinclair',
        email: 'BobSinc@email.com',
        password: '1234',
        role: 'Admin2',
        token: '7811220002gvgbjmk'
      },
      {
        id: 3,
        name: 'Armin',
        lastName: 'Van Buren',
        email: 'arminV@email.com',
        password: '1234',
        role: 'Admin3',
        token: 'ytgyhujmjkk33674u3390j3'
      }
    ]
  }
}
