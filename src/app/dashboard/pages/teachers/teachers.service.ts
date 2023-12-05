import { Injectable } from '@angular/core';
import { Teacher } from './models';
import { Observable, concatMap, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment.local';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  teachers: Teacher[] = [];

  constructor(private httpClient: HttpClient) {}

  getTeachers(): Observable<Teacher[]> {
    return this.httpClient.get<Teacher[]>(`${environment.baseUrl}/teachers`);
  }
  createTeacher(data: Teacher): Observable<Teacher[]> {
    return this.httpClient.post<Teacher>(`${environment.baseUrl}/teachers`, data)
    .pipe(concatMap(() => this.getTeachers()));
  };

  deleteTeacher(id: number): Observable<Teacher[]> {
    return this.httpClient.delete<Object>(`${environment.baseUrl}/teachers/${id}`)
    .pipe(concatMap(() => this.getTeachers()))  
  };

  editTeacher(teacherId: number, data: Teacher): Observable<Teacher[]> {
    return this.httpClient.put<Teacher>(`${environment.baseUrl}/users/${teacherId}`, data)
    .pipe(concatMap(() => this.getTeachers()))
  };
}
