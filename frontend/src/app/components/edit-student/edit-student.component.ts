import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import {AppServiceService} from '../../app-service.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  studentData: any = {};
  studentId: any;


  constructor(private service : AppServiceService, private router: Router) {
    const currentNavigation = this.router.getCurrentNavigation();
    if (currentNavigation && currentNavigation.extras && currentNavigation.extras.state) {
      this.studentId = currentNavigation.extras.state.id;
    }
  }

  ngOnInit(): void {
    if (this.studentId) {
      this.getStudentData();
    } else {
      this.router.navigate(['student']);
    }
  }

  getStudentData(){
    let student = {
      id : this.studentId
    }
    this.service.getOneStudentData(student).subscribe((response)=>{
      this.studentData = response[0];
    },(error)=>{
      console.log('ERROR - ', error)
    })
  }

  editStudent(values){
    const payload = {
      id: this.studentId,
      name: values.name ?? this.studentData.name,
      age: values.age ?? this.studentData.age,
      hometown: values.hometown ?? this.studentData.hometown
    };
    this.service.editStudent(payload).subscribe((response)=>{
      this.router.navigate(['student']);
    },(error)=>{
      console.log('ERROR - ', error)
    })
  }

}
