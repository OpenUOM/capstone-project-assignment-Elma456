(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_add_new_student_add_new_student_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/add-new-student/add-new-student.component */ "./src/app/components/add-new-student/add-new-student.component.ts");
/* harmony import */ var _components_add_new_teacher_add_new_teacher_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/add-new-teacher/add-new-teacher.component */ "./src/app/components/add-new-teacher/add-new-teacher.component.ts");
/* harmony import */ var _components_edit_student_edit_student_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/edit-student/edit-student.component */ "./src/app/components/edit-student/edit-student.component.ts");
/* harmony import */ var _components_edit_teacher_edit_teacher_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/edit-teacher/edit-teacher.component */ "./src/app/components/edit-teacher/edit-teacher.component.ts");
/* harmony import */ var _components_student_table_student_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/student-table/student-table.component */ "./src/app/components/student-table/student-table.component.ts");
/* harmony import */ var _components_teacher_table_teacher_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/teacher-table/teacher-table.component */ "./src/app/components/teacher-table/teacher-table.component.ts");










const routes = [
    { path: '', component: _components_teacher_table_teacher_table_component__WEBPACK_IMPORTED_MODULE_7__["TeacherTableComponent"] },
    { path: 'student', component: _components_student_table_student_table_component__WEBPACK_IMPORTED_MODULE_6__["StudentTableComponent"] },
    { path: 'addTeacher', component: _components_add_new_teacher_add_new_teacher_component__WEBPACK_IMPORTED_MODULE_3__["AddNewTeacherComponent"] },
    { path: 'addStudent', component: _components_add_new_student_add_new_student_component__WEBPACK_IMPORTED_MODULE_2__["AddNewStudentComponent"] },
    { path: 'editStudent', component: _components_edit_student_edit_student_component__WEBPACK_IMPORTED_MODULE_4__["EditStudentComponent"] },
    { path: 'editTeacher', component: _components_edit_teacher_edit_teacher_component__WEBPACK_IMPORTED_MODULE_5__["EditTeacherComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app-service.service.ts":
/*!****************************************!*\
  !*** ./src/app/app-service.service.ts ***!
  \****************************************/
/*! exports provided: AppServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppServiceService", function() { return AppServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class AppServiceService {
    constructor(http) {
        this.http = http;
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production == false) {
            this.ROOT_URL = 'test';
        }
        else {
            this.ROOT_URL = 'api';
        }
    }
    initializeDB() {
        return this.http.get(`/${this.ROOT_URL}/dbinitialize`);
    }
    getTeacherData() {
        return this.http.get(`/${this.ROOT_URL}/listTeachers`);
    }
    getStudentData() {
        return this.http.get(`/${this.ROOT_URL}/listStudents`);
    }
    getOneStudentData(payload) {
        return this.http.post(`/${this.ROOT_URL}/getStudentInfo`, payload);
    }
    getOneTeacherData(payload) {
        return this.http.post(`/${this.ROOT_URL}/getTeacherInfo`, payload);
    }
    addTeacher(payload) {
        return this.http.post(`/${this.ROOT_URL}/addTeacher`, payload);
    }
    deleteTeacher(payload) {
        return this.http.post(`/${this.ROOT_URL}/deleteTeacher`, payload);
    }
    editTeacher(payload) {
        return this.http.post(`/${this.ROOT_URL}/editTeacher`, payload);
    }
    editStudent(payload) {
        return this.http.post(`/${this.ROOT_URL}/editStudent`, payload);
    }
    addStudent(payload) {
        return this.http.post(`/${this.ROOT_URL}/addStudent`, payload);
    }
    deleteStudent(payload) {
        return this.http.post(`/${this.ROOT_URL}/deleteStudent`, payload);
    }
}
AppServiceService.ɵfac = function AppServiceService_Factory(t) { return new (t || AppServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AppServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppServiceService, factory: AppServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'capstone-frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _components_student_table_student_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/student-table/student-table.component */ "./src/app/components/student-table/student-table.component.ts");
/* harmony import */ var _components_teacher_table_teacher_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/teacher-table/teacher-table.component */ "./src/app/components/teacher-table/teacher-table.component.ts");
/* harmony import */ var _components_add_new_teacher_add_new_teacher_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/add-new-teacher/add-new-teacher.component */ "./src/app/components/add-new-teacher/add-new-teacher.component.ts");
/* harmony import */ var _components_add_new_student_add_new_student_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/add-new-student/add-new-student.component */ "./src/app/components/add-new-student/add-new-student.component.ts");
/* harmony import */ var _components_edit_student_edit_student_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/edit-student/edit-student.component */ "./src/app/components/edit-student/edit-student.component.ts");
/* harmony import */ var _components_edit_teacher_edit_teacher_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/edit-teacher/edit-teacher.component */ "./src/app/components/edit-teacher/edit-teacher.component.ts");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
        _components_student_table_student_table_component__WEBPACK_IMPORTED_MODULE_8__["StudentTableComponent"],
        _components_teacher_table_teacher_table_component__WEBPACK_IMPORTED_MODULE_9__["TeacherTableComponent"],
        _components_add_new_teacher_add_new_teacher_component__WEBPACK_IMPORTED_MODULE_10__["AddNewTeacherComponent"],
        _components_add_new_student_add_new_student_component__WEBPACK_IMPORTED_MODULE_11__["AddNewStudentComponent"],
        _components_edit_student_edit_student_component__WEBPACK_IMPORTED_MODULE_12__["EditStudentComponent"],
        _components_edit_teacher_edit_teacher_component__WEBPACK_IMPORTED_MODULE_13__["EditTeacherComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                    _components_student_table_student_table_component__WEBPACK_IMPORTED_MODULE_8__["StudentTableComponent"],
                    _components_teacher_table_teacher_table_component__WEBPACK_IMPORTED_MODULE_9__["TeacherTableComponent"],
                    _components_add_new_teacher_add_new_teacher_component__WEBPACK_IMPORTED_MODULE_10__["AddNewTeacherComponent"],
                    _components_add_new_student_add_new_student_component__WEBPACK_IMPORTED_MODULE_11__["AddNewStudentComponent"],
                    _components_edit_student_edit_student_component__WEBPACK_IMPORTED_MODULE_12__["EditStudentComponent"],
                    _components_edit_teacher_edit_teacher_component__WEBPACK_IMPORTED_MODULE_13__["EditTeacherComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/add-new-student/add-new-student.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/add-new-student/add-new-student.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddNewStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewStudentComponent", function() { return AddNewStudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_app_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app-service.service */ "./src/app/app-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class AddNewStudentComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    ngOnInit() {
    }
    createStudent(value) {
        const student = {
            id: value.id,
            name: value.name,
            age: value.age,
            hometown: value.Hometown
        };
        this.service.addStudent(student).subscribe((response) => {
            this.router.navigate(['student']);
        }, (error) => {
            console.log('ERROR - ', error);
        });
    }
}
AddNewStudentComponent.ɵfac = function AddNewStudentComponent_Factory(t) { return new (t || AddNewStudentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_service_service__WEBPACK_IMPORTED_MODULE_1__["AppServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AddNewStudentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddNewStudentComponent, selectors: [["app-add-new-student"]], decls: 10, vars: 0, consts: [["title", "Add New Student"], [1, "form-container", 3, "ngSubmit"], ["addStudentForm", "ngForm"], ["id", "student-id", "ngModel", "", "name", "id", "type", "text", "placeholder", "ID"], ["id", "student-name", "ngModel", "", "name", "name", "type", "text", "placeholder", "Name"], ["id", "student-age", "ngModel", "", "name", "age", "type", "text", "placeholder", "Age"], ["id", "student-Hometown", "ngModel", "", "name", "Hometown", "type", "text", "placeholder", "Hometown"], ["id", "student-add", 1, "form-button"]], template: function AddNewStudentComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddNewStudentComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.createStudent(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".form-container[_ngcontent-%COMP%]{\n    padding-top: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtbmV3LXN0dWRlbnQvYWRkLW5ldy1zdHVkZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZGQtbmV3LXN0dWRlbnQvYWRkLW5ldy1zdHVkZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXJ7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddNewStudentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-new-student',
                templateUrl: './add-new-student.component.html',
                styleUrls: ['./add-new-student.component.css']
            }]
    }], function () { return [{ type: src_app_app_service_service__WEBPACK_IMPORTED_MODULE_1__["AppServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/add-new-teacher/add-new-teacher.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/add-new-teacher/add-new-teacher.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddNewTeacherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewTeacherComponent", function() { return AddNewTeacherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app-service.service */ "./src/app/app-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class AddNewTeacherComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    ngOnInit() {
    }
    createTeacher(value) {
        const teacher = {
            id: value.id,
            name: value.name,
            age: value.age
        };
        this.service.addTeacher(teacher).subscribe((response) => {
            this.router.navigate(['']);
        }, (error) => {
            console.log('ERROR - ', error);
        });
    }
}
AddNewTeacherComponent.ɵfac = function AddNewTeacherComponent_Factory(t) { return new (t || AddNewTeacherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service_service__WEBPACK_IMPORTED_MODULE_1__["AppServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AddNewTeacherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddNewTeacherComponent, selectors: [["app-add-new-teacher"]], decls: 9, vars: 0, consts: [["title", "Add New Teacher"], [1, "form-container", 3, "ngSubmit"], ["addTeacherForm", "ngForm"], ["id", "teacher-id", "ngModel", "", "name", "id", "type", "text", "placeholder", "ID"], ["id", "teacher-name", "ngModel", "", "name", "name", "type", "text", "placeholder", "Name"], ["id", "teacher-age", "ngModel", "", "name", "age", "type", "text", "placeholder", "Age"], ["id", "teacher-add", 1, "form-button"]], template: function AddNewTeacherComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddNewTeacherComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.createTeacher(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".form-container[_ngcontent-%COMP%]{\n    padding-top: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtbmV3LXRlYWNoZXIvYWRkLW5ldy10ZWFjaGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZGQtbmV3LXRlYWNoZXIvYWRkLW5ldy10ZWFjaGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXJ7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddNewTeacherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-new-teacher',
                templateUrl: './add-new-teacher.component.html',
                styleUrls: ['./add-new-teacher.component.css']
            }]
    }], function () { return [{ type: _app_service_service__WEBPACK_IMPORTED_MODULE_1__["AppServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/edit-student/edit-student.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/edit-student/edit-student.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditStudentComponent", function() { return EditStudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app-service.service */ "./src/app/app-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class EditStudentComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.navigation = this.router.getCurrentNavigation();
    }
    ngOnInit() {
        this.getStudentData();
    }
    getStudentData() {
        let student = {
            id: this.navigation.extras.state.id
        };
        this.service.getOneStudentData(student).subscribe((response) => {
            this.studentData = response[0];
        }, (error) => {
            console.log('ERROR - ', error);
        });
    }
    editStudent(values) {
        values.id = this.navigation.extras.state.id;
        this.service.editStudent(values).subscribe((response) => {
            this.studentData = response[0];
        }, (error) => {
            console.log('ERROR - ', error);
        });
    }
}
EditStudentComponent.ɵfac = function EditStudentComponent_Factory(t) { return new (t || EditStudentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service_service__WEBPACK_IMPORTED_MODULE_1__["AppServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
EditStudentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditStudentComponent, selectors: [["app-edit-student"]], decls: 9, vars: 3, consts: [["title", "Edit Student Details"], [1, "form-container", 3, "ngSubmit"], ["editStudentForm", "ngForm"], ["id", "student-name", "ngModel", "", "name", "name", "type", "text", "placeholder", "Name", 3, "value"], ["id", "student-age", "ngModel", "", "name", "age", "type", "text", "placeholder", "Age", 3, "value"], ["id", "student-Hometown", "ngModel", "", "name", "hometown", "type", "text", "placeholder", "Hometown", 3, "value"], ["id", "student-edit", 1, "form-button"]], template: function EditStudentComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditStudentComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.editStudent(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Edit & Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.studentData == null ? null : ctx.studentData.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.studentData == null ? null : ctx.studentData.age);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.studentData == null ? null : ctx.studentData.hometown);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".form-container[_ngcontent-%COMP%]{\n    padding-top: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0LXN0dWRlbnQvZWRpdC1zdHVkZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lZGl0LXN0dWRlbnQvZWRpdC1zdHVkZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXJ7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditStudentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-student',
                templateUrl: './edit-student.component.html',
                styleUrls: ['./edit-student.component.css']
            }]
    }], function () { return [{ type: _app_service_service__WEBPACK_IMPORTED_MODULE_1__["AppServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/edit-teacher/edit-teacher.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/edit-teacher/edit-teacher.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditTeacherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTeacherComponent", function() { return EditTeacherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app-service.service */ "./src/app/app-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class EditTeacherComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.navigation = this.router.getCurrentNavigation();
    }
    ngOnInit() {
        this.getTeacherData();
    }
    getTeacherData() {
        let teacher = {
            id: this.navigation.extras.state.id
        };
        this.service.getOneTeacherData(teacher).subscribe((response) => {
            this.teacherData = response[0];
        }, (error) => {
            console.log('ERROR - ', error);
        });
    }
    editTeacher(values) {
        values.id = this.navigation.extras.state.id;
        this.service.editTeacher(values).subscribe((response) => {
            this.teacherData = response[0];
        }, (error) => {
            console.log('ERROR - ', error);
        });
    }
}
EditTeacherComponent.ɵfac = function EditTeacherComponent_Factory(t) { return new (t || EditTeacherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service_service__WEBPACK_IMPORTED_MODULE_1__["AppServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
EditTeacherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditTeacherComponent, selectors: [["app-edit-teacher"]], decls: 8, vars: 2, consts: [["title", "Edit Teacher Details"], [1, "form-container", 3, "ngSubmit"], ["editTeacherForm", "ngForm"], ["id", "teacher-name", "ngModel", "", "name", "name", "type", "text", "placeholder", "Name", 3, "value"], ["id", "teacher-age", "ngModel", "", "name", "age", "type", "text", "placeholder", "Age", 3, "value"], ["id", "teacher-edit", 1, "form-button"]], template: function EditTeacherComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditTeacherComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.editTeacher(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Edit & Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.teacherData == null ? null : ctx.teacherData.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.teacherData == null ? null : ctx.teacherData.age);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".form-container[_ngcontent-%COMP%]{\n    padding-top: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0LXRlYWNoZXIvZWRpdC10ZWFjaGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lZGl0LXRlYWNoZXIvZWRpdC10ZWFjaGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXJ7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditTeacherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-teacher',
                templateUrl: './edit-teacher.component.html',
                styleUrls: ['./edit-teacher.component.css']
            }]
    }], function () { return [{ type: _app_service_service__WEBPACK_IMPORTED_MODULE_1__["AppServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { bold: a0 }; };
class NavbarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], inputs: { title: "title" }, decls: 17, vars: 7, consts: [[1, "navbar-container"], [1, "logo-container"], ["width", "80px", "src", "http://placehold.jp/18/ffffff/000000/120x120.png?text=LOGO"], [1, "links-container"], ["routerLink", "", 3, "ngClass"], ["routerLink", "student", 3, "ngClass"], [1, "blank-space"], [1, "info-container"], [1, "info-text"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Teachers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.title == "Teachers"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.title == "Students"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".navbar-container[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 120px;\n    background-color: #272928;\n    display: flex;\n}\n\n.logo-container[_ngcontent-%COMP%]{\n    width: 33%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    \n}\n\n.blank-space[_ngcontent-%COMP%]{\n    width: 33%;\n\n    \n}\n\n.links-container[_ngcontent-%COMP%]{\n    width: 33%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: white;\n    font-size: 30px;\n    font-weight: 100;\n\n    \n}\n\na[_ngcontent-%COMP%]{\n    font-size: 22px;\n    margin: 20px;\n    color: white;\n    font-weight: 300;\n}\n\n.bold[_ngcontent-%COMP%]{\n    font-weight: 400;\n}\n\n.logout[_ngcontent-%COMP%]{\n    font-weight: 200;\n}\n\n.info-container[_ngcontent-%COMP%]{\n    background-color: #EEEEEE;\n    height: 100px;\n    width: 100%;\n    display: flex;\n    justify-content: left;\n    align-items: center;\n\n}\n\n.info-text-container[_ngcontent-%COMP%]{\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-left: 6%;\n   \n}\n\n.info-text[_ngcontent-%COMP%]{\n    font-size: 32px;\n    font-weight: 500;\n    letter-spacing: -2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkI7MEJBQ3NCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTs7SUFFVjswQkFDc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCOztJQUVoQjswQkFDc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLFdBQVc7SUFDWCxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1jb250YWluZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyOTI4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5sb2dvLWNvbnRhaW5lcntcbiAgICB3aWR0aDogMzMlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAvKiBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7ICovXG59XG5cbi5ibGFuay1zcGFjZXtcbiAgICB3aWR0aDogMzMlO1xuXG4gICAgLyogYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkOyAqL1xufVxuXG4ubGlua3MtY29udGFpbmVye1xuICAgIHdpZHRoOiAzMyU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG5cbiAgICAvKiBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7ICovXG59XG5cbmF7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmJvbGR7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmxvZ291dHtcbiAgICBmb250LXdlaWdodDogMjAwO1xufVxuXG4uaW5mby1jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbn1cblxuLmluZm8tdGV4dC1jb250YWluZXJ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogNiU7XG4gICBcbn1cblxuLmluZm8tdGV4dHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTJweDtcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/student-table/student-table.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/student-table/student-table.component.ts ***!
  \*********************************************************************/
/*! exports provided: StudentTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentTableComponent", function() { return StudentTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-service.service */ "./src/app/app-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function StudentTableComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentTableComponent_tr_21_Template_td_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const student_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.editStudent(student_r2[0].id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "fa-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentTableComponent_tr_21_Template_td_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const student_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.deleteStudent(student_r2[0].id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "fa-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const student_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r2[0].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r2[0].id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](2022 - student_r2[0].age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r2[0].hometown);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "student-edit-", student_r2[0].id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faPenSquare);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "student-delete-", student_r2[0].id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faTrash);
} }
class StudentTableComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrash"];
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlus"];
        this.faPenSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPenSquare"];
    }
    ngOnInit() {
        this.getStudentData();
    }
    addNewStudent() {
        this.router.navigate(['addStudent']);
    }
    editStudent(id) {
        const navigationExtras = {
            state: {
                id: id
            }
        };
        this.router.navigate(['editStudent'], navigationExtras);
    }
    getStudentData() {
        this.service.getStudentData().subscribe((response) => {
            this.studentData = Object.keys(response).map((key) => [response[key]]);
        }, (error) => {
            console.log('ERROR - ', error);
        });
    }
    deleteStudent(itemid) {
        const student = {
            id: itemid
        };
        this.service.deleteStudent(student).subscribe((response) => {
            this.getStudentData();
        });
    }
    search(value) {
        let foundItems = [];
        if (value.length <= 0) {
            this.getStudentData();
        }
        else {
            let b = this.studentData.filter((student) => {
                if (student[0].name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    foundItems.push(student);
                }
            });
            this.studentData = foundItems;
        }
    }
}
StudentTableComponent.ɵfac = function StudentTableComponent_Factory(t) { return new (t || StudentTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
StudentTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentTableComponent, selectors: [["app-student-table"]], decls: 22, vars: 2, consts: [["title", "Students"], [1, "add-btn-container"], [1, "add-btn-elements-container"], ["id", "student-search", "placeholder", "Search", 2, "height", "20px", 3, "keyup"], ["box", ""], [1, "btn", 2, "width", "120px", "height", "43px", "font-size", "14px", 3, "click"], [3, "icon"], [1, "table-container"], ["id", "student-table"], [2, "width", "50px"], [4, "ngFor", "ngForOf"], [2, "text-align", "center", 3, "id", "click"], [1, "edit-icon", 3, "icon"], [2, "text-align", "center", "color", "#FC4F4F", 3, "id", "click"], [1, "trash-icon", 3, "icon"]], template: function StudentTableComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function StudentTableComponent_Template_input_keyup_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.search(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentTableComponent_Template_button_click_5_listener() { return ctx.addNewStudent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add New \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Student ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "DOB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Hometown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, StudentTableComponent_tr_21_Template, 13, 8, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faPlus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.studentData);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["table[_ngcontent-%COMP%] {\n    font-family: 'Poppins', sans-serif;\n    border-collapse: collapse;\n    width: 75%;\n    border-radius: 10px;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n  }\n  \n  td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n    \n    text-align: left;\n    padding: 8px;\n  }\n  \n  th[_ngcontent-%COMP%]{\n    font-size: 16px;\n    background-color: #dddddd;\n  }\n  \n  tr[_ngcontent-%COMP%]{\n    font-size: 14px;\n    background-color: white;\n  }\n  \n  .table-container[_ngcontent-%COMP%]{\n    padding: 0px 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n  \n  .edit-icon[_ngcontent-%COMP%]{\n  font-size: 20px;\n  margin-left: -75px;\n  color: #5c625f;\n}\n  \n  .edit-icon[_ngcontent-%COMP%]:hover{\n  cursor: pointer;\n  color: #212322;\n}\n  \n  .trash-icon[_ngcontent-%COMP%]{\n  font-size: 16px;\n  margin-left: -75px;\n}\n  \n  .trash-icon[_ngcontent-%COMP%]:hover{\n  cursor: pointer;\n  color: #f44009;\n}\n  \n  .add-btn-container[_ngcontent-%COMP%]{\n  padding: 20px 220px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n  \n  .add-btn-elements-container[_ngcontent-%COMP%]{\n  width: 1000px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n  \n  .btn[_ngcontent-%COMP%]{\n  height: 30px;\n  font-size: 12px;\n  border-radius: 5px;\n}\n  \n  .navbar-container[_ngcontent-%COMP%]{\n  width: 100%;\n  height: 120px;\n  background-color: #272928;\n  display: flex;\n}\n  \n  .logo-container[_ngcontent-%COMP%]{\n  width: 33%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n  \n  .blank-space[_ngcontent-%COMP%]{\n  width: 33%;\n}\n  \n  .links-container[_ngcontent-%COMP%]{\n  width: 33%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 30px;\n  font-weight: 100;\n}\n  \n  a[_ngcontent-%COMP%]{\n  font-size: 22px;\n  margin: 20px;\n  color: white;\n  font-weight: 500;\n}\n  \n  .logout[_ngcontent-%COMP%]{\n  font-weight: 200;\n}\n  \n  .info-container[_ngcontent-%COMP%]{\n  background-color: #EEEEEE;\n  height: 100px;\n  width: 100%;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n  \n  .info-text-container[_ngcontent-%COMP%]{\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 6%;\n}\n  \n  .info-text[_ngcontent-%COMP%]{\n  font-size: 32px;\n  font-weight: 500;\n  letter-spacing: -2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdHVkZW50LXRhYmxlL3N0dWRlbnQtdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtDQUFrQztJQUNsQyx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQix1Q0FBdUM7RUFDekM7O0VBRUE7SUFDRSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7SUFDZix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsdUJBQXVCO0VBQ3pCOztFQUVGO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztFQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztFQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0VBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztFQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0VBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0VBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0VBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7RUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjs7RUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0VBRUE7RUFDRSxVQUFVO0FBQ1o7O0VBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztFQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztFQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztFQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixXQUFXO0VBQ1gsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0VBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7RUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdHVkZW50LXRhYmxlL3N0dWRlbnQtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcbiAgfVxuICBcbiAgdGQsIHRoIHtcbiAgICAvKiBib3JkZXI6IDAuMDFweCBzb2xpZCAjZGRkZGRkOyAqL1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG5cbiAgdGh7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG4gIH1cblxuICB0cntcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cblxuLnRhYmxlLWNvbnRhaW5lcntcbiAgICBwYWRkaW5nOiAwcHggNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5lZGl0LWljb257XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IC03NXB4O1xuICBjb2xvcjogIzVjNjI1Zjtcbn1cblxuLmVkaXQtaWNvbjpob3ZlcntcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzIxMjMyMjtcbn1cblxuLnRyYXNoLWljb257XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IC03NXB4O1xufVxuXG4udHJhc2gtaWNvbjpob3ZlcntcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2Y0NDAwOTtcbn1cblxuLmFkZC1idG4tY29udGFpbmVye1xuICBwYWRkaW5nOiAyMHB4IDIyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFkZC1idG4tZWxlbWVudHMtY29udGFpbmVye1xuICB3aWR0aDogMTAwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJ0bntcbiAgaGVpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm5hdmJhci1jb250YWluZXJ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyOTI4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubG9nby1jb250YWluZXJ7XG4gIHdpZHRoOiAzMyU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ibGFuay1zcGFjZXtcbiAgd2lkdGg6IDMzJTtcbn1cblxuLmxpbmtzLWNvbnRhaW5lcntcbiAgd2lkdGg6IDMzJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbmF7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5sb2dvdXR7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi5pbmZvLWNvbnRhaW5lcntcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmluZm8tdGV4dC1jb250YWluZXJ7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA2JTtcbn1cblxuLmluZm8tdGV4dHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogLTJweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-student-table',
                templateUrl: './student-table.component.html',
                styleUrls: ['./student-table.component.css']
            }]
    }], function () { return [{ type: _app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/teacher-table/teacher-table.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/teacher-table/teacher-table.component.ts ***!
  \*********************************************************************/
/*! exports provided: TeacherTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherTableComponent", function() { return TeacherTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-service.service */ "./src/app/app-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function TeacherTableComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherTableComponent_tr_19_Template_td_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const teacher_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.editTeacher(teacher_r2[0].id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "fa-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherTableComponent_tr_19_Template_td_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const teacher_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.deleteTeacher(teacher_r2[0].id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "fa-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const teacher_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](teacher_r2[0].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](teacher_r2[0].id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](2022 - teacher_r2[0].age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "teacher-edit-", teacher_r2[0].id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faPenSquare);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "teacher-delete-", teacher_r2[0].id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faTrash);
} }
class TeacherTableComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrash"];
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlus"];
        this.faPenSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPenSquare"];
    }
    ngOnInit() {
        this.getTeacherData();
    }
    addNewTeacher() {
        this.router.navigate(['addTeacher']);
    }
    editTeacher(id) {
        const navigationExtras = {
            state: {
                id: id
            }
        };
        this.router.navigate(['editTeacher'], navigationExtras);
    }
    initializeDB() {
        this.service.initializeDB().subscribe((response) => {
            console.log('DB is Initialized');
        }, (error) => {
            console.log('ERROR - ', error);
        });
    }
    getTeacherData() {
        this.selected = 'Teachers';
        this.service.getTeacherData().subscribe((response) => {
            this.teacherData = Object.keys(response).map((key) => [response[key]]);
        }, (error) => {
            console.log('ERROR - ', error);
        });
    }
    getStudentData() {
        this.selected = 'Students';
        this.service.getStudentData().subscribe((response) => {
            this.teacherData = response;
        }, (error) => {
            console.log('ERROR - ', error);
        });
    }
    search(value) {
        let foundItems = [];
        if (value.length <= 0) {
            this.getTeacherData();
        }
        else {
            let b = this.teacherData.filter((teacher) => {
                if (teacher[0].name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    foundItems.push(teacher);
                }
            });
            this.teacherData = foundItems;
        }
    }
    deleteTeacher(itemid) {
        const test = {
            id: itemid
        };
        this.service.deleteTeacher(test).subscribe((response) => {
            this.getTeacherData();
        });
    }
}
TeacherTableComponent.ɵfac = function TeacherTableComponent_Factory(t) { return new (t || TeacherTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
TeacherTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeacherTableComponent, selectors: [["app-teacher-table"]], decls: 20, vars: 2, consts: [["title", "Teachers"], [1, "add-btn-container"], [1, "add-btn-elements-container"], ["id", "teacher-search", "placeholder", "Search", 2, "height", "20px", 3, "keyup"], ["box", ""], [1, "btn", 2, "width", "120px", "height", "43px", "font-size", "14px", 3, "click"], [3, "icon"], [1, "table-container"], ["id", "teacher-table"], [2, "width", "50px"], [4, "ngFor", "ngForOf"], [2, "text-align", "center", 3, "id", "click"], [1, "edit-icon", 3, "icon"], [2, "text-align", "center", "color", "#FC4F4F", 3, "id", "click"], [1, "trash-icon", 3, "icon"]], template: function TeacherTableComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function TeacherTableComponent_Template_input_keyup_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.search(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherTableComponent_Template_button_click_5_listener() { return ctx.addNewTeacher(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add New \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Staff ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "DOB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TeacherTableComponent_tr_19_Template, 11, 7, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faPlus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.teacherData);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["table[_ngcontent-%COMP%] {\n    font-family: 'Poppins', sans-serif;\n    border-collapse: collapse;\n    width: 75%;\n    border-radius: 10px;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n  }\n  \n  td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n    text-align: left;\n    padding: 8px;\n  }\n  \n  th[_ngcontent-%COMP%]{\n    font-size: 16px;\n    background-color: #dddddd;\n  }\n  \n  tr[_ngcontent-%COMP%]{\n    font-size: 14px;\n    background-color: white;\n  }\n  \n  .table-container[_ngcontent-%COMP%]{\n    padding: 0px 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n  \n  .trash-icon[_ngcontent-%COMP%]{\n  font-size: 16px;\n  margin-left: -75px;\n}\n  \n  .trash-icon[_ngcontent-%COMP%]:hover{\n  cursor: pointer;\n  color: #f44009;\n}\n  \n  .add-btn-container[_ngcontent-%COMP%]{\n  padding: 20px 220px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n  \n  .add-btn-elements-container[_ngcontent-%COMP%]{\n  width: 1000px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n  \n  .btn[_ngcontent-%COMP%]{\n  height: 30px;\n  font-size: 12px;\n  border-radius: 5px;\n}\n  \n  .navbar-container[_ngcontent-%COMP%]{\n  width: 100%;\n  height: 120px;\n  background-color: #272928;\n  display: flex;\n}\n  \n  .logo-container[_ngcontent-%COMP%]{\n  width: 33%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n  \n  .blank-space[_ngcontent-%COMP%]{\n  width: 33%;\n}\n  \n  .links-container[_ngcontent-%COMP%]{\n  width: 33%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 30px;\n  font-weight: 100;\n}\n  \n  a[_ngcontent-%COMP%]{\n  font-size: 22px;\n  margin: 20px;\n  color: white;\n  font-weight: 500;\n}\n  \n  .logout[_ngcontent-%COMP%]{\n  font-weight: 200;\n}\n  \n  .info-container[_ngcontent-%COMP%]{\n  background-color: #EEEEEE;\n  height: 100px;\n  width: 100%;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n  \n  .info-text-container[_ngcontent-%COMP%]{\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 6%;\n}\n  \n  .edit-icon[_ngcontent-%COMP%]{\n  font-size: 20px;\n  margin-left: -75px;\n  color: #5c625f;\n}\n  \n  .edit-icon[_ngcontent-%COMP%]:hover{\n  cursor: pointer;\n  color: #212322;\n}\n  \n  .info-text[_ngcontent-%COMP%]{\n  font-size: 32px;\n  font-weight: 500;\n  letter-spacing: -2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZWFjaGVyLXRhYmxlL3RlYWNoZXItdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtDQUFrQztJQUNsQyx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQix1Q0FBdUM7RUFDekM7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtJQUNmLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGVBQWU7SUFDZix1QkFBdUI7RUFDekI7O0VBRUY7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0VBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztFQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0VBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0VBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0VBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7RUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjs7RUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0VBRUE7RUFDRSxVQUFVO0FBQ1o7O0VBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztFQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztFQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztFQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixXQUFXO0VBQ1gsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0VBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7RUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7RUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztFQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RlYWNoZXItdGFibGUvdGVhY2hlci10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICB3aWR0aDogNzUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xuICB9XG4gIFxuICB0ZCwgdGgge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG5cbiAgdGh7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG4gIH1cblxuICB0cntcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cblxuLnRhYmxlLWNvbnRhaW5lcntcbiAgICBwYWRkaW5nOiAwcHggNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50cmFzaC1pY29ue1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1sZWZ0OiAtNzVweDtcbn1cblxuLnRyYXNoLWljb246aG92ZXJ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmNDQwMDk7XG59XG5cbi5hZGQtYnRuLWNvbnRhaW5lcntcbiAgcGFkZGluZzogMjBweCAyMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hZGQtYnRuLWVsZW1lbnRzLWNvbnRhaW5lcntcbiAgd2lkdGg6IDEwMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5idG57XG4gIGhlaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5uYXZiYXItY29udGFpbmVye1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjkyODtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmxvZ28tY29udGFpbmVye1xuICB3aWR0aDogMzMlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYmxhbmstc3BhY2V7XG4gIHdpZHRoOiAzMyU7XG59XG5cbi5saW5rcy1jb250YWluZXJ7XG4gIHdpZHRoOiAzMyU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG5he1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbjogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubG9nb3V0e1xuICBmb250LXdlaWdodDogMjAwO1xufVxuXG4uaW5mby1jb250YWluZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbmZvLXRleHQtY29udGFpbmVye1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogNiU7XG59XG5cbi5lZGl0LWljb257XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IC03NXB4O1xuICBjb2xvcjogIzVjNjI1Zjtcbn1cblxuLmVkaXQtaWNvbjpob3ZlcntcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzIxMjMyMjtcbn1cblxuLmluZm8tdGV4dHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogLTJweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeacherTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-teacher-table',
                templateUrl: './teacher-table.component.html',
                styleUrls: ['./teacher-table.component.css']
            }]
    }], function () { return [{ type: _app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\Downloads\Capstone-Project-Tasks-main\Capstone-Project-Tasks-main\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map