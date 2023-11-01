import { Injectable } from "@angular/core";
import { Student } from "./models";
import { Observable, of } from "rxjs";


@Injectable({
    providedIn: 'root'
  })
  export class StudentsService {
  
    students: Student[] = [
        {
          id: 1,
          name:'Jonas',
          lastName: "Viale",
          email: "jonviale@mail.com",
        },
        {
          id: 2,
          name:'Changuito',
          lastName: "Leuco",
          email: "pibeleucoe@mail.com",
        },
        {
          id: 3,
          name:'Luis',
          lastName: "Pedri",
          email: "lpedri@mail.com",
        }
      ];
  
    getStudents$(): Observable<Student[]> {
      return of(this.students);
    }
    createStudent$(payload: Student): Observable<Student[]> {
      this.students.push(payload);
      return of([...this.students])
    };
  
    editStudent$(id: number, payload: Student): Observable<Student[]> {
      // this.students.push(payload);
      return of(
        this.students.map((e)  => (e.id === id ? {...e , ...payload} : e))
      )
    };
  
    deleteStudent$(id: number): Observable<Student[]> {
     this.students = this.students.filter((c) => c.id === id);
     return of(this.students);
    };
  
    getStudentById$(id: number): Observable<Student | undefined> {
      return of(this.students.find((c) => c.id === id))
    };
  
  }