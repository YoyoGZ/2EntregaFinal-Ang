import { Injectable } from "@angular/core";
import { Student } from "./models";
import { Observable, concatMap, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environment/environment.local";


@Injectable({
    providedIn: 'root'
  })
  export class StudentsService {
    constructor ( private httpClient : HttpClient) {}
    students: Student[] = [];
  
    getStudents(): Observable<Student[]> {
      return this.httpClient.get<Student[]>(`${environment.baseUrl}/students`);
    }
    createStudent(data: Student): Observable<Student[]> {
      return this.httpClient.post<Student>(`${environment.baseUrl}/students`, data)
    .pipe(concatMap(() => this.getStudents()));
    };
  
    editStudent(studentId: number, data: Student): Observable<Student[]> {
      return this.httpClient.put<Student>(`${environment.baseUrl}/students/${studentId}`, data)
      .pipe(concatMap(() => this.getStudents()))
    };
  
    deleteStudent(id: number): Observable<Student[]> {
      return this.httpClient.delete<Object>(`${environment.baseUrl}/students/${id}`)
      .pipe(concatMap(() => this.getStudents()))  
    };
  
    getStudentById(id: number): Observable<Student | undefined> {
      return of(this.students.find((s) => s.id === id))
    };
  
  }