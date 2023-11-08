import { Injectable } from '@angular/core';
import { Teacher } from './models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  teachers: Teacher[] = [
      {
        id: 1,
        name:'Lionel',
        lastName: 'Messi',
        curso:'Javascript',
        email: 'lmessi@email.com'
      },
      {
        id: 2,
        name: 'Cristiano',
        lastName: 'Ronaldo',
        curso: 'Ux/Ui',
        email: 'cristiano@email.com'
      },
      {
        id: 3,
        name: 'Jodeph',
        lastName: 'Guardiola',
        curso: 'Angular CLI',
        email: 'pepguar@email.com'
      }
    ];

  getTeachers$(): Observable<Teacher[]> {
      return of(this.teachers);
    }
  createTeacher$(payload: Teacher): Observable<Teacher[]> {
    this.teachers.push(payload);
    return of([...this.teachers])
    };

  deleteTeacher$(id: number): Observable<Teacher[]> {
    this.teachers = this.teachers.filter((t) => t.id === id);
    return of(this.teachers);
    };

  editTeacher$(id: number, payload: Teacher): Observable<Teacher[]> {
    return of(
      this.teachers.map((t)  => (t.id === id ? {...t , ...payload} : t))
    )
    };

  getTeacherById$(id: number): Observable<Teacher | undefined> {
    return of(this.teachers.find((t) => t.id === id))
    };
}
