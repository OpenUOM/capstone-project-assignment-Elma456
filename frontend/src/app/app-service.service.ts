import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  readonly ROOT_URL: string;

  constructor(private http: HttpClient) {
    this.ROOT_URL ='http://localhost:8080';
   }

   initializeDB() {
    return this.http.get('/api/initializeDB');
  }

   getTeacherData() {
    return this.http.get('/api/listTeachers')
   }
  
   getOneTeacherData(payload: Object) {
    return this.http.post('/api/getTeacherInfo', payload)
   }

   addTeacher(payload: Object) {
    return this.http.post('/api/addTeacher', payload)
   }

   deleteTeacher(payload: Object) {
    return this.http.post('/api/deleteTeacher', payload)
   }

   editTeacher(payload: Object){
    return this.http.post('/api/editTeacher', payload)
  }

  

  getStudentData() {
    return this.http.get(this.ROOT_URL + '/listStudents');
  }

  getOneStudentData(payload: Object) {
    return this.http.post(this.ROOT_URL + '/getStudentInfo', payload);
  }

  addStudent(payload: Object) {
    return this.http.post(this.ROOT_URL + '/addStudent', payload);
  }

  deleteStudent(payload: Object) {
    return this.http.post(this.ROOT_URL + '/deleteStudent', payload);
  }

  editStudent(payload: Object) {
    return this.http.post(this.ROOT_URL + '/editStudent', payload);
  }


}
