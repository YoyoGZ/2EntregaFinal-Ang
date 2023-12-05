import { Injectable } from '@angular/core';
import { Course } from './models';
import { Observable, concatMap, of } from 'rxjs';
import { environment } from 'src/environment/environment.local';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses: Course[] = [];

  constructor(private httpClient: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`${environment.baseUrl}/courses`);
  }
  createCourse(data: Course): Observable<Course[]> {
    return this.httpClient.post<Course>(`${environment.baseUrl}/courses`, data)
    .pipe(concatMap(() => this.getCourses()));
  };

  editCourses(courseId: number, data: Course): Observable<Course[]> {
    return this.httpClient.put<Course>(`${environment.baseUrl}/courses/${courseId}`, data)
    .pipe(concatMap(() => this.getCourses()))
  };

  deleteCourse(id: number): Observable<Course[]> {
    return this.httpClient.delete<Object>(`${environment.baseUrl}/courses/${id}`)
    .pipe(concatMap(() => this.getCourses()))  
  };

  getCourseById(id: number): Observable<Course | undefined> {
    return of(this.courses.find((c) => c.id === id))
  };
}



