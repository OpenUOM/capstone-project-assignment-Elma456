import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../../app-service.service';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {

  teacherData: any;
  teacherId: any; 

  constructor(private service: AppServiceService, private router: Router) { 
    // 1. Get the routing navigation state inside the constructor safely
    const currentNavigation = this.router.getCurrentNavigation();
    if (currentNavigation && currentNavigation.extras && currentNavigation.extras.state) {
      this.teacherId = currentNavigation.extras.state.id;
    }
  }

  ngOnInit(): void {
   
    if (this.teacherId) {
      this.getTeacherData();
    } else {
      console.warn('No teacher ID state received. Redirecting home...');
      this.router.navigate(['']);
    }
  }

  getTeacherData() {
    let teacher = {
      id: this.teacherId
    };
    this.service.getOneTeacherData(teacher).subscribe((response: any) => {
    
      this.teacherData = response[0] || response; 
    }, (error) => {
      console.log('ERROR - ', error);
    });
  }

  editTeacher(values: any) {
    values.id = this.teacherId;
    this.service.editTeacher(values).subscribe((response: any) => {
     
      this.router.navigate(['']);
    }, (error) => {
      console.log('ERROR - ', error);
    });
  }

}