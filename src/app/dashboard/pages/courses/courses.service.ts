import { Injectable } from '@angular/core';
import { Course } from './models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses: Course[] = [
      {
        id: 1,
        name:'Robotica',
        iniDate: new Date,
        finalDate: new Date,
      },
      {
        id: 2,
        name: 'Angular CLI',
        iniDate: new Date,
        finalDate: new Date
      },
      {
        id: 3,
        name: 'Desarrollo Web',
        iniDate: new Date,
        finalDate: new Date
      }
    ];

  getCourses$(): Observable<Course[]> {
    return of(this.courses);
  }
  createCourse$(payload: Course): Observable<Course[]> {
    this.courses.push(payload);
    return of([...this.courses]);
  };

  editCourses$(id: number, payload: Course): Observable<Course[]> {
    this.courses.push(payload);
    return of(
      this.courses.map((c)  => (c.id === id ? {...c , ...payload}  : c))
    );
  }
}



