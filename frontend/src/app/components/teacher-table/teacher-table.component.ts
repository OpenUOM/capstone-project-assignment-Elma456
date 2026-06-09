import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { faTrash, faPlus, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { AppServiceService } from '../../app-service.service';

@Component({
  selector: 'app-teacher-table',
  templateUrl: './teacher-table.component.html',
  styleUrls: ['./teacher-table.component.css']
})
export class TeacherTableComponent implements OnInit {

  faTrash = faTrash;
  faPlus = faPlus;
  faPenSquare = faPenSquare;
  
  // Standard array pattern to avoid nested template mapping matrix issues
  teacherData: any[] = [];
  selected: string = 'Teachers';

  constructor(private service: AppServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getTeacherData();
  }

  addNewTeacher(): void {
    this.router.navigate(['addTeacher']);
  }

  editTeacher(id: any): void {
    const navigationExtras: NavigationExtras = {
      state: { id: id }
    };
    this.router.navigate(['editTeacher'], navigationExtras);
  }

  initializeDB(): void {
    this.service.initializeDB().subscribe((response) => {
      console.log('DB is Initialized');
    }, (error) => {
      console.log('ERROR - ', error);
    });
  }

  getTeacherData(): void {
    this.selected = 'Teachers';
    this.service.getTeacherData().subscribe((response: any) => {
      // Standardize to a flat array format
      this.teacherData = Array.isArray(response) ? response : Object.values(response);
    }, (error) => {
      console.log('ERROR - ', error);
    });
  }

  getStudentData(): void {
    this.selected = 'Students';
    this.service.getStudentData().subscribe((response: any) => {
      // Standardize to matching flat array format
      this.teacherData = Array.isArray(response) ? response : Object.values(response);
    }, (error) => {
      console.log('ERROR - ', error);
    });
  }

  search(value: string): void {
    const query = value.toLowerCase().trim();

    if (query.length <= 0) {
      // Reload the correct tab view data conditionally
      if (this.selected === 'Teachers') {
        this.getTeacherData();
      } else {
        this.getStudentData();
      }
    } else {
      // Filter directly on the uniform flat array elements
      this.teacherData = this.teacherData.filter((item) => {
        return item && item.name && item.name.toLowerCase().includes(query);
      });
    }
  }

  deleteTeacher(itemid: any): void {
    const test = { id: itemid };
    this.service.deleteTeacher(test).subscribe((response) => {
      this.getTeacherData();
    });
  }
}