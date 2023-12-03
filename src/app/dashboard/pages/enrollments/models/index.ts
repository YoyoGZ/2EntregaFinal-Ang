import { InterpolationConfig } from "@angular/compiler";
import { Course } from "../../courses/models";
import { User } from "../../users/models";

export interface Enrollment {
id: number,
courseId: number,
studentId: number,
user? : User,
course? : Course
}

export interface CreateEnrollmentData {
    courseId : number | null,
    studentId : number | null 
}