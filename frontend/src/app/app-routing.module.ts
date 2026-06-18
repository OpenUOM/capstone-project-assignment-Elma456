import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AddNewTeacherComponent } from './components/add-new-teacher/add-new-teacher.component';
import { AddNewStudentComponent } from './components/add-new-student/add-new-student.component';
import { EditTeacherComponent } from './components/edit-teacher/edit-teacher.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { StudentTableComponent } from './components/student-table/student-table.component';
import { TeacherTableComponent } from './components/teacher-table/teacher-table.component';


const routes: Routes = [
  { path: '', component: TeacherTableComponent },
  { path: 'student', component: StudentTableComponent },
  { path: 'addTeacher', component: AddNewTeacherComponent },
  { path: 'editTeacher', component: EditTeacherComponent },
  { path: 'addStudent', component: AddNewStudentComponent },
  { path: 'editStudent', component: EditStudentComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
