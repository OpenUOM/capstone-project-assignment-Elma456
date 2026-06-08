import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  private ROOT_URL: string;

  constructor(private http: HttpClient) {
    this.ROOT_URL ='http://localhost:8080'
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
}
