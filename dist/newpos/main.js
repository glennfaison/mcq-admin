(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module": [
		"./src/app/auth/auth.module.ts"
	],
	"./courses/courses.module": [
		"./src/app/courses/courses.module.ts"
	],
	"./dashboards/dashboards.module": [
		"./src/app/dashboards/dashboards.module.ts"
	],
	"./questions/questions.module": [
		"./src/app/questions/questions.module.ts"
	],
	"./topics/topics.module": [
		"./src/app/topics/topics.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/components/not-found/not-found.component */ "./src/app/core/components/not-found/not-found.component.ts");
/* harmony import */ var _mcq_app_mcq_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mcq-app/mcq-app.module */ "./src/app/mcq-app/mcq-app.module.ts");





// import { AuthGuard } from './common/guards/auth.guard';
var routes = [
    {
        path: '',
        pathMatch: 'full',
        loadChildren: function () { return _mcq_app_mcq_app_module__WEBPACK_IMPORTED_MODULE_4__["McqAppModule"]; },
    },
    {
        path: '',
        pathMatch: 'full',
        loadChildren: './dashboards/dashboards.module#DashboardsModule',
    },
    {
        path: '',
        pathMatch: 'full',
        loadChildren: './auth/auth.module#AuthModule',
    },
    {
        path: '',
        pathMatch: 'full',
        loadChildren: './courses/courses.module#CoursesModule',
    },
    {
        path: '',
        pathMatch: 'full',
        loadChildren: './topics/topics.module#TopicsModule',
    },
    {
        path: '',
        pathMatch: 'full',
        loadChildren: './questions/questions.module#QuestionsModule',
    },
    {
        path: '404',
        pathMatch: 'full',
        component: _core_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// import { TranslateService } from '@ngx-translate/core';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _courses_courses_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./courses/courses.module */ "./src/app/courses/courses.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _topics_topics_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./topics/topics.module */ "./src/app/topics/topics.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _questions_questions_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./questions/questions.module */ "./src/app/questions/questions.module.ts");
/* harmony import */ var _dashboards_dashboards_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboards/dashboards.module */ "./src/app/dashboards/dashboards.module.ts");
/* harmony import */ var _mcq_app_mcq_app_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mcq-app/mcq-app.module */ "./src/app/mcq-app/mcq-app.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"],
                /* Lazy-loadable modules */
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__["AuthModule"],
                _courses_courses_module__WEBPACK_IMPORTED_MODULE_5__["CoursesModule"],
                _topics_topics_module__WEBPACK_IMPORTED_MODULE_7__["TopicsModule"],
                _questions_questions_module__WEBPACK_IMPORTED_MODULE_9__["QuestionsModule"],
                _dashboards_dashboards_module__WEBPACK_IMPORTED_MODULE_10__["DashboardsModule"],
                _mcq_app_mcq_app_module__WEBPACK_IMPORTED_MODULE_11__["McqAppModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "./src/app/auth/components/welcome/welcome.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/auth/components/login/login.component.ts");





var routes = [
    {
        path: 'welcome',
        children: [
            { path: '', component: _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"] },
        ]
    },
    {
        path: 'login',
        children: [
            { path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
        ]
    },
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "./src/app/auth/components/welcome/welcome.component.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/auth/components/login/login.component.ts");







var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ],
            providers: [],
            bootstrap: []
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/components/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/auth/components/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/auth/components/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/auth/components/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <!-- Outer Row -->\n  <div class=\"row justify-content-center\">\n\n    <div class=\"col-xl-10 col-lg-12 col-md-9\">\n\n      <div class=\"card o-hidden border-0 shadow-lg my-5\">\n        <div class=\"card-body p-0\">\n          <!-- Nested Row within Card Body -->\n          <div class=\"row\">\n            <div class=\"col-lg-6 d-none d-lg-block bg-login-image\"></div>\n            <div class=\"col-lg-6\">\n              <div class=\"p-5\">\n                <div class=\"text-center\">\n                  <h1 class=\"h4 text-gray-900 mb-4\">Welcome Back!</h1>\n                </div>\n                <div class=\"user\">\n                  <div class=\"form-group\">\n                    <input type=\"email\" class=\"form-control form-control-user\" [(ngModel)]=\"email\"\n                      aria-describedby=\"emailHelp\" placeholder=\"Enter Email Address...\" />\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"password\" class=\"form-control form-control-user\" [(ngModel)]=\"password\"\n                      placeholder=\"Password\" />\n                  </div>\n                  <div class=\"form-group\">\n                    <div class=\"custom-control custom-checkbox small\">\n                      <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck\">\n                      <label class=\"custom-control-label\" for=\"customCheck\">Remember Me</label>\n                    </div>\n                  </div>\n                  <span class=\"btn btn-primary btn-user btn-block\" (click)=\"loginButtonClicked()\">\n                    Login\n                  </span>\n                  <hr>\n                  <span class=\"btn btn-google btn-user btn-block\">\n                    <i class=\"fab fa-google fa-fw\"></i> Login with Google\n                  </span>\n                  <span class=\"btn btn-facebook btn-user btn-block\">\n                    <i class=\"fab fa-facebook-f fa-fw\"></i> Login with Facebook\n                  </span>\n                </div>\n                <hr>\n                <div class=\"text-center\">\n                  <a class=\"small\" href=\"/forgot-password\">Forgot Password?</a>\n                </div>\n                <div class=\"text-center\">\n                  <a class=\"small\" href=\"/welcome\">Create an Account!</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/auth/components/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth/components/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/toast.service */ "./src/app/core/services/toast.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authSvc, toastSvc, router) {
        this.authSvc = authSvc;
        this.toastSvc = toastSvc;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var pageTop = document.getElementById('page-top');
        pageTop.classList.add('bg-gradient-primary');
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        var pageTop = document.getElementById('page-top');
        pageTop.classList.remove('bg-gradient-primary');
    };
    LoginComponent.prototype.loginButtonClicked = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.authSvc.login(this.email, this.password)];
                    case 1:
                        res = _a.sent();
                        if (!res) {
                            throw new Error('Login failed');
                        }
                        // this.toastSvc.success('Logged in');
                        this.router.navigate(['/courses']);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.toastSvc.error(error_1.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/components/welcome/welcome.component.css":
/*!***************************************************************!*\
  !*** ./src/app/auth/components/welcome/welcome.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvY29tcG9uZW50cy93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/components/welcome/welcome.component.html":
/*!****************************************************************!*\
  !*** ./src/app/auth/components/welcome/welcome.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"card o-hidden border-0 shadow-lg my-5\">\n    <div class=\"card-body p-0\">\n      <!-- Nested Row within Card Body -->\n      <div class=\"row\">\n        <div class=\"col-lg-5 d-none d-lg-block bg-register-image\"></div>\n        <div class=\"col-lg-7\">\n          <div class=\"p-5\">\n            <div class=\"text-center\">\n              <h1 class=\"h4 text-gray-900 mb-4\">Create an Account!</h1>\n            </div>\n            <div class=\"user\">\n              <div class=\"form-group row\">\n                <div class=\"col-sm-6 mb-3 mb-sm-0\">\n                  <input type=\"text\" class=\"form-control form-control-user\" [(ngModel)]=\"firstName\"\n                    placeholder=\"First Name\">\n                </div>\n                <div class=\"col-sm-6\">\n                  <input type=\"text\" class=\"form-control form-control-user\" [(ngModel)]=\"lastName\"\n                    placeholder=\"Last Name\">\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"email\" class=\"form-control form-control-user\" [(ngModel)]=\"email\"\n                  placeholder=\"Email Address\">\n              </div>\n              <div class=\"form-group row\">\n                <div class=\"col-sm-6 mb-3 mb-sm-0\">\n                  <input type=\"password\" class=\"form-control form-control-user\" [(ngModel)]=\"password\"\n                    placeholder=\"Password\">\n                </div>\n                <div class=\"col-sm-6\">\n                  <input type=\"password\" class=\"form-control form-control-user\" [(ngModel)]=\"repeatPassword\"\n                    placeholder=\"Repeat Password\">\n                </div>\n              </div>\n              <span class=\"btn btn-primary btn-user btn-block\" (click)=\"registerButtonClicked()\">\n                Register Account\n              </span>\n              <hr>\n              <a href=\"#\" class=\"btn btn-google btn-user btn-block\">\n                <i class=\"fab fa-google fa-fw\"></i> Register with Google\n              </a>\n              <a href=\"#\" class=\"btn btn-facebook btn-user btn-block\">\n                <i class=\"fab fa-facebook-f fa-fw\"></i> Register with Facebook\n              </a>\n            </div>\n            <hr>\n            <div class=\"text-center\">\n              <a class=\"small\" href=\"/forgot-password\">Forgot Password?</a>\n            </div>\n            <div class=\"text-center\">\n              <a class=\"small\" routerLink=\"/login\">Already have an account? Login!</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/auth/components/welcome/welcome.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/auth/components/welcome/welcome.component.ts ***!
  \**************************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/toast.service */ "./src/app/core/services/toast.service.ts");





var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(authSvc, toastSvc, router) {
        this.authSvc = authSvc;
        this.toastSvc = toastSvc;
        this.router = router;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        var pageTop = document.getElementById('page-top');
        pageTop.classList.add('bg-gradient-primary');
    };
    WelcomeComponent.prototype.ngOnDestroy = function () {
        var pageTop = document.getElementById('page-top');
        pageTop.classList.remove('bg-gradient-primary');
    };
    WelcomeComponent.prototype.passwordsAreValid = function () {
        return this.password === this.repeatPassword;
    };
    WelcomeComponent.prototype.formIsValid = function () {
        return !!this.firstName && !!this.lastName && this.passwordsAreValid();
    };
    WelcomeComponent.prototype.registerButtonClicked = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        user = { firstName: this.firstName, lastName: this.lastName, email: this.email, password: this.password };
                        return [4 /*yield*/, this.authSvc.register(user)];
                    case 1:
                        _a.sent();
                        // this.toastSvc.success('Logged in');
                        this.router.navigate(['/login']);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.toastSvc.error(error_1.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/auth/components/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/auth/components/welcome/welcome.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/core/components/footer/footer.component.css":
/*!*************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/core/components/footer/footer.component.html":
/*!**************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"sticky-footer bg-white\">\n  <div class=\"container my-auto\">\n    <div class=\"copyright text-center my-auto\">\n      <span>Copyright &copy; Quiz App 2019</span>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/core/components/footer/footer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.ts ***!
  \************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/core/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/core/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/components/logout-modal/logout-modal.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/core/components/logout-modal/logout-modal.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9sb2dvdXQtbW9kYWwvbG9nb3V0LW1vZGFsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/core/components/logout-modal/logout-modal.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/core/components/logout-modal/logout-modal.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"logoutModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Ready to Leave?</h5>\n        <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">Select \"Logout\" below if you are ready to end your current session.</div>\n      <div class=\"modal-footer\">\n        <button class=\"btn btn-secondary\" type=\"button\" data-dismiss=\"modal\">Cancel</button>\n        <a class=\"btn btn-primary\" routerLink=\"/login\" data-dismiss=\"modal\" (click)=\"logout()\">Logout</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/core/components/logout-modal/logout-modal.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/core/components/logout-modal/logout-modal.component.ts ***!
  \************************************************************************/
/*! exports provided: LogoutModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutModalComponent", function() { return LogoutModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/core.service */ "./src/app/core/services/core.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/core/services/http.service.ts");




var LogoutModalComponent = /** @class */ (function () {
    function LogoutModalComponent(core, http) {
        this.core = core;
        this.http = http;
    }
    LogoutModalComponent.prototype.ngOnInit = function () {
    };
    LogoutModalComponent.prototype.logout = function () {
        localStorage.removeItem('mcq-jwt');
        this.http.accessToken = null;
        this.core.thisUser = null;
    };
    LogoutModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout-modal',
            template: __webpack_require__(/*! ./logout-modal.component.html */ "./src/app/core/components/logout-modal/logout-modal.component.html"),
            styles: [__webpack_require__(/*! ./logout-modal.component.css */ "./src/app/core/components/logout-modal/logout-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], LogoutModalComponent);
    return LogoutModalComponent;
}());



/***/ }),

/***/ "./src/app/core/components/navbar/navbar.component.css":
/*!*************************************************************!*\
  !*** ./src/app/core/components/navbar/navbar.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/core/components/navbar/navbar.component.html":
/*!**************************************************************!*\
  !*** ./src/app/core/components/navbar/navbar.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow\">\n\n  <!-- Sidebar Toggle (Topbar) -->\n  <button id=\"sidebarToggleTop\" class=\"btn btn-link d-md-none rounded-circle mr-3\">\n    <i class=\"fa fa-bars\"></i>\n  </button>\n\n  <!-- Topbar Search -->\n  <!-- <form class=\"d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search\">\n    <div class=\"input-group\">\n      <input type=\"text\" class=\"form-control bg-light border-0 small\" placeholder=\"Search for...\" aria-label=\"Search\"\n        aria-describedby=\"basic-addon2\">\n      <div class=\"input-group-append\">\n        <button class=\"btn btn-primary\" type=\"button\">\n          <i class=\"fas fa-search fa-sm\"></i>\n        </button>\n      </div>\n    </div>\n  </form> -->\n\n  <!-- Topbar Navbar -->\n  <ul class=\"navbar-nav ml-auto\">\n\n    <!-- Nav Item - Search Dropdown (Visible Only XS) -->\n    <li class=\"nav-item dropdown no-arrow d-sm-none\">\n      <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"searchDropdown\" role=\"button\" data-toggle=\"dropdown\"\n        aria-haspopup=\"true\" aria-expanded=\"false\">\n        <i class=\"fas fa-search fa-fw\"></i>\n      </a>\n      <!-- Dropdown - Messages -->\n      <div class=\"dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in\" aria-labelledby=\"searchDropdown\">\n        <form class=\"form-inline mr-auto w-100 navbar-search\">\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control bg-light border-0 small\" placeholder=\"Search for...\"\n              aria-label=\"Search\" aria-describedby=\"basic-addon2\">\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-primary\" type=\"button\">\n                <i class=\"fas fa-search fa-sm\"></i>\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </li>\n\n\n    <div class=\"topbar-divider d-none d-sm-block\"></div>\n\n    <!-- Nav Item - User Information -->\n    <li class=\"nav-item dropdown no-arrow\">\n      <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"userDropdown\" role=\"button\" data-toggle=\"dropdown\"\n        aria-haspopup=\"true\" aria-expanded=\"false\">\n        <span class=\"mr-2 d-none d-lg-inline text-gray-600 small\">Valerie Luna</span>\n        <img class=\"img-profile rounded-circle\" src=\"https://source.unsplash.com/QAB-WJcbgJk/60x60\">\n      </a>\n      <!-- Dropdown - User Information -->\n      <div class=\"dropdown-menu dropdown-menu-right shadow animated--grow-in\" aria-labelledby=\"userDropdown\">\n        <a class=\"dropdown-item\" routerLink=\"/profile\">\n          <i class=\"fas fa-user fa-sm fa-fw mr-2 text-gray-400\"></i>\n          Profile\n        </a>\n        <!-- <a class=\"dropdown-item\" href=\"#\">\n          <i class=\"fas fa-cogs fa-sm fa-fw mr-2 text-gray-400\"></i>\n          Settings\n        </a>\n        <a class=\"dropdown-item\" href=\"#\">\n          <i class=\"fas fa-list fa-sm fa-fw mr-2 text-gray-400\"></i>\n          Activity Log\n        </a> -->\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" href=\"#\" data-toggle=\"modal\" data-target=\"#logoutModal\">\n          <i class=\"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400\"></i>\n          Logout\n        </a>\n      </div>\n    </li>\n\n  </ul>\n\n</nav>\n"

/***/ }),

/***/ "./src/app/core/components/navbar/navbar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/navbar/navbar.component.ts ***!
  \************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/core/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/core/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/core/components/not-found/not-found.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/core/components/not-found/not-found.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/core/components/not-found/not-found.component.html":
/*!********************************************************************!*\
  !*** ./src/app/core/components/not-found/not-found.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Wrapper -->\n<div id=\"wrapper\">\n\n  <!-- Sidebar -->\n  <app-sidebar></app-sidebar>\n  <!-- End of Sidebar -->\n\n  <!-- Content Wrapper -->\n  <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n\n    <!-- Main Content -->\n    <div id=\"content\">\n\n      <app-navbar></app-navbar>\n\n      <!-- Begin Page Content -->\n      <div class=\"container-fluid\">\n\n        <!-- 404 Error Text -->\n        <div class=\"text-center\">\n          <div class=\"error mx-auto\" data-text=\"404\">404</div>\n          <p class=\"lead text-gray-800 mb-5\">Page Not Found</p>\n          <p class=\"text-gray-500 mb-0\">It looks like you found a glitch in the matrix...</p>\n          <a routerLink=\"/home\">&larr; Back to Dashboard</a>\n        </div>\n\n      </div>\n\n    </div>\n    <!-- End of Main Content -->\n\n    <app-footer></app-footer>\n\n  </div>\n  <!-- End of Content Wrapper -->\n\n</div>\n<!-- End of Page Wrapper -->\n\n<app-scroll-to-top-button></app-scroll-to-top-button>\n\n<app-logout-modal></app-logout-modal>\n"

/***/ }),

/***/ "./src/app/core/components/not-found/not-found.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/components/not-found/not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/core/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/core/components/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/core/components/page-view/page-view.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/core/components/page-view/page-view.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9wYWdlLXZpZXcvcGFnZS12aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/core/components/page-view/page-view.component.html":
/*!********************************************************************!*\
  !*** ./src/app/core/components/page-view/page-view.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-view works!\n</p>\n"

/***/ }),

/***/ "./src/app/core/components/page-view/page-view.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/components/page-view/page-view.component.ts ***!
  \******************************************************************/
/*! exports provided: PageViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageViewComponent", function() { return PageViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageViewComponent = /** @class */ (function () {
    function PageViewComponent() {
    }
    PageViewComponent.prototype.ngOnInit = function () {
    };
    PageViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-view',
            template: __webpack_require__(/*! ./page-view.component.html */ "./src/app/core/components/page-view/page-view.component.html"),
            styles: [__webpack_require__(/*! ./page-view.component.css */ "./src/app/core/components/page-view/page-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageViewComponent);
    return PageViewComponent;
}());



/***/ }),

/***/ "./src/app/core/components/scroll-to-top-button/scroll-to-top-button.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/core/components/scroll-to-top-button/scroll-to-top-button.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9zY3JvbGwtdG8tdG9wLWJ1dHRvbi9zY3JvbGwtdG8tdG9wLWJ1dHRvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/components/scroll-to-top-button/scroll-to-top-button.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/core/components/scroll-to-top-button/scroll-to-top-button.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"scroll-to-top rounded\" href=\"#page-top\">\n  <i class=\"fas fa-angle-up\"></i>\n</a>\n"

/***/ }),

/***/ "./src/app/core/components/scroll-to-top-button/scroll-to-top-button.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/core/components/scroll-to-top-button/scroll-to-top-button.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ScrollToTopButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToTopButtonComponent", function() { return ScrollToTopButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ScrollToTopButtonComponent = /** @class */ (function () {
    function ScrollToTopButtonComponent() {
    }
    ScrollToTopButtonComponent.prototype.ngOnInit = function () {
    };
    ScrollToTopButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scroll-to-top-button',
            template: __webpack_require__(/*! ./scroll-to-top-button.component.html */ "./src/app/core/components/scroll-to-top-button/scroll-to-top-button.component.html"),
            styles: [__webpack_require__(/*! ./scroll-to-top-button.component.css */ "./src/app/core/components/scroll-to-top-button/scroll-to-top-button.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ScrollToTopButtonComponent);
    return ScrollToTopButtonComponent;
}());



/***/ }),

/***/ "./src/app/core/components/sidebar/sidebar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/core/components/sidebar/sidebar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/core/components/sidebar/sidebar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/core/components/sidebar/sidebar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion\" id=\"accordionSidebar\">\n\n  <!-- Sidebar - Brand -->\n  <a class=\"sidebar-brand d-flex align-items-center justify-content-center\" routerLink=\"/courses\">\n    <div class=\"sidebar-brand-icon rotate-n-15\">\n      <i class=\"fas fa-laugh-wink\"></i>\n    </div>\n    <div class=\"sidebar-brand-text mx-3\">Quiz App</div>\n  </a>\n\n  <!-- Divider -->\n  <hr class=\"sidebar-divider my-0\">\n\n  <!-- Nav Item - Dashboard -->\n  <!-- <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/dashboard\">\n      <i class=\"fas fa-fw fa-tachometer-alt\"></i>\n      <span>Dashboard</span></a>\n  </li> -->\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/profile\">\n      <i class=\"fas fa-fw fa-tachometer-alt\"></i>\n      <span>Profile</span></a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/home\">\n      <i class=\"fas fa-fw fa-tachometer-alt\"></i>\n      <span>Home</span></a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/new-quiz\">\n      <i class=\"fas fa-fw fa-tachometer-alt\"></i>\n      <span>New Quiz</span></a>\n  </li>\n\n  <!-- Divider -->\n  <hr class=\"sidebar-divider\">\n\n  <!-- Heading -->\n  <div class=\"sidebar-heading\">\n    Admin\n  </div>\n\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/courses\">\n      <i class=\"fas fa-fw fa-tachometer-alt\"></i>\n      <span>Courses</span></a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/topics\">\n      <i class=\"fas fa-fw fa-tachometer-alt\"></i>\n      <span>Topics</span></a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/questions\">\n      <i class=\"fas fa-fw fa-tachometer-alt\"></i>\n      <span>Questions</span></a>\n  </li>\n\n  <!-- Divider -->\n  <hr class=\"sidebar-divider d-none d-md-block\">\n\n  <!-- Sidebar Toggler (Sidebar) -->\n  <div class=\"text-center d-none d-md-inline\">\n    <button class=\"rounded-circle border-0\" id=\"sidebarToggle\"></button>\n  </div>\n\n</ul>\n"

/***/ }),

/***/ "./src/app/core/components/sidebar/sidebar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/components/sidebar/sidebar.component.ts ***!
  \**************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/core/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/core/components/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_logout_modal_logout_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/logout-modal/logout-modal.component */ "./src/app/core/components/logout-modal/logout-modal.component.ts");
/* harmony import */ var _components_scroll_to_top_button_scroll_to_top_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/scroll-to-top-button/scroll-to-top-button.component */ "./src/app/core/components/scroll-to-top-button/scroll-to-top-button.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/core/components/navbar/navbar.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/core/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/core/components/footer/footer.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/core/components/not-found/not-found.component.ts");
/* harmony import */ var _components_page_view_page_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/page-view/page-view.component */ "./src/app/core/components/page-view/page-view.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");












var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_logout_modal_logout_modal_component__WEBPACK_IMPORTED_MODULE_3__["LogoutModalComponent"],
                _components_scroll_to_top_button_scroll_to_top_button_component__WEBPACK_IMPORTED_MODULE_4__["ScrollToTopButtonComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"],
                _components_page_view_page_view_component__WEBPACK_IMPORTED_MODULE_10__["PageViewComponent"],
            ],
            exports: [
                _components_logout_modal_logout_modal_component__WEBPACK_IMPORTED_MODULE_3__["LogoutModalComponent"],
                _components_scroll_to_top_button_scroll_to_top_button_component__WEBPACK_IMPORTED_MODULE_4__["ScrollToTopButtonComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"],
            ],
            providers: [],
            bootstrap: []
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/models/Course.model.ts":
/*!*********************************************!*\
  !*** ./src/app/core/models/Course.model.ts ***!
  \*********************************************/
/*! exports provided: Course */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
var Course = /** @class */ (function () {
    function Course() {
        this.isSelected = true;
    }
    return Course;
}());



/***/ }),

/***/ "./src/app/core/models/Question.model.ts":
/*!***********************************************!*\
  !*** ./src/app/core/models/Question.model.ts ***!
  \***********************************************/
/*! exports provided: Question */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
var Question = /** @class */ (function () {
    function Question() {
        this.isSelected = true;
    }
    return Question;
}());



/***/ }),

/***/ "./src/app/core/models/Quiz.model.ts":
/*!*******************************************!*\
  !*** ./src/app/core/models/Quiz.model.ts ***!
  \*******************************************/
/*! exports provided: Quiz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quiz", function() { return Quiz; });
var Quiz = /** @class */ (function () {
    function Quiz() {
    }
    return Quiz;
}());



/***/ }),

/***/ "./src/app/core/models/TableSettings.model.ts":
/*!****************************************************!*\
  !*** ./src/app/core/models/TableSettings.model.ts ***!
  \****************************************************/
/*! exports provided: TableSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableSettings", function() { return TableSettings; });
var TableSettings = /** @class */ (function () {
    function TableSettings() {
        this.headerHeight = 40;
        this.footerHeight = 40;
        this.rowHeight = 'auto';
        this.scrollbarH = true;
        this.scrollbarV = false;
        this.loadingIndicator = true;
        this.reorderable = true;
        this.offset = 1;
        this.columnMode = 'flex';
        this.className = 'material';
        this.limit = 5;
        this.limitOptions = [5, 10, 15, 20, 25, 30];
    }
    return TableSettings;
}());



/***/ }),

/***/ "./src/app/core/models/Topic.model.ts":
/*!********************************************!*\
  !*** ./src/app/core/models/Topic.model.ts ***!
  \********************************************/
/*! exports provided: Topic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Topic", function() { return Topic; });
var Topic = /** @class */ (function () {
    function Topic() {
        this.isSelected = true;
    }
    return Topic;
}());



/***/ }),

/***/ "./src/app/core/models/UserQuiz.model.ts":
/*!***********************************************!*\
  !*** ./src/app/core/models/UserQuiz.model.ts ***!
  \***********************************************/
/*! exports provided: UserAnswer, UserQuiz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAnswer", function() { return UserAnswer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserQuiz", function() { return UserQuiz; });
var UserAnswer = /** @class */ (function () {
    function UserAnswer() {
    }
    return UserAnswer;
}());

var UserQuiz = /** @class */ (function () {
    function UserQuiz() {
        this.userAnswerList = [];
    }
    return UserQuiz;
}());



/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/core/services/http.service.ts");
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core.service */ "./src/app/core/services/core.service.ts");




var users = __webpack_require__(/*! ../../../assets/users.json */ "./src/assets/users.json");
var AuthService = /** @class */ (function () {
    function AuthService(httpSvc, core) {
        this.httpSvc = httpSvc;
        this.core = core;
    }
    AuthService.prototype.register = function (user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, res, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = this.httpSvc.apiRoot + "/auth/signup";
                        return [4 /*yield*/, this.httpSvc.post(url, user, false)];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.login = function (email, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, res, user, jwt, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = this.httpSvc.apiRoot + "/auth/login";
                        return [4 /*yield*/, this.httpSvc.post(url, { email: email, password: password }, false)];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        user = res.user, jwt = res.jwt;
                        this.httpSvc.accessToken = jwt;
                        localStorage.setItem('mcq-jwt', jwt);
                        this.core.thisUser = user;
                        return [2 /*return*/, user];
                    case 2:
                        error_2 = _a.sent();
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.getThisUser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, res, error_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = this.httpSvc.apiRoot + "/auth/me";
                        return [4 /*yield*/, this.httpSvc.post(url, {}, false)];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        this.core.thisUser = res;
                        return [2 /*return*/, res];
                    case 2:
                        error_3 = _a.sent();
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/services/core.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/core.service.ts ***!
  \***********************************************/
/*! exports provided: CoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreService", function() { return CoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_TableSettings_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/TableSettings.model */ "./src/app/core/models/TableSettings.model.ts");



var CoreService = /** @class */ (function () {
    function CoreService() {
        this.defaultTableSettings = new _models_TableSettings_model__WEBPACK_IMPORTED_MODULE_2__["TableSettings"]();
    }
    CoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CoreService);
    return CoreService;
}());



/***/ }),

/***/ "./src/app/core/services/course.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/course.service.ts ***!
  \*************************************************/
/*! exports provided: CourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseService", function() { return CourseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/core/services/http.service.ts");



var CourseService = /** @class */ (function () {
    function CourseService(httpSvc) {
        this.httpSvc = httpSvc;
    }
    CourseService.prototype.createCourse = function (course) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, res, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = this.httpSvc.apiRoot + "/courses";
                        return [4 /*yield*/, this.httpSvc.post(url, course)];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [2 /*return*/, res];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CourseService.prototype.fetchCourses = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, res, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = this.httpSvc.apiRoot + "/courses";
                        return [4 /*yield*/, this.httpSvc.get(url, {})];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [2 /*return*/, res];
                    case 2:
                        error_2 = _a.sent();
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CourseService.prototype.updateCourse = function (course) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, res, error_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = this.httpSvc.apiRoot + "/courses/" + course._id;
                        return [4 /*yield*/, this.httpSvc.put(url, course)];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [2 /*return*/, res];
                    case 2:
                        error_3 = _a.sent();
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CourseService.prototype.deleteCourse = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, res, error_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = this.httpSvc.apiRoot + "/courses/" + id;
                        return [4 /*yield*/, this.httpSvc.delete(url, {})];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        throw error_4;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CourseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], CourseService);
    return CourseService;
}());



/***/ }),

/***/ "./src/app/core/services/http.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/http.service.ts ***!
  \***********************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        // apiRoot = 'http://localhost:4000';
        this.apiRoot = 'https://mcq-admin-api.herokuapp.com';
        this.options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        if (!this.accessToken) {
            this.accessToken = localStorage.getItem('mcq-jwt');
        }
    }
    HttpService.prototype.setOptions = function (withAuth) {
        this.options.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': "Bearer " + this.accessToken,
            'Content-Type': 'application/json'
        });
        if (withAuth && !this.accessToken) {
            throw new Error('No Access Token Found');
        }
    };
    HttpService.prototype.get = function (url, requestParams, withAuth) {
        if (withAuth === void 0) { withAuth = true; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var params, res, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.setOptions(withAuth);
                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"](requestParams).toString();
                        return [4 /*yield*/, this.http.get("" + url, this.options).toPromise()];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [2 /*return*/, res];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, error_1];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HttpService.prototype.post = function (url, requestBody, withAuth) {
        if (withAuth === void 0) { withAuth = true; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.setOptions(withAuth);
                        return [4 /*yield*/, this.http.post("" + url, requestBody, this.options).toPromise()];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [2 /*return*/, res];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, error_2];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HttpService.prototype.put = function (url, requestBody, withAuth) {
        if (withAuth === void 0) { withAuth = true; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, error_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.setOptions(withAuth);
                        return [4 /*yield*/, this.http.put("" + url, requestBody, this.options).toPromise()];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [2 /*return*/, res];
                    case 2:
                        error_3 = _a.sent();
                        return [2 /*return*/, error_3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HttpService.prototype.delete = function (url, requestBody, withAuth) {
        if (withAuth === void 0) { withAuth = true; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var params, options, res, error_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.setOptions(withAuth);
                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"](requestBody).toString();
                        options = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.options, { body: params });
                        return [4 /*yield*/, this.http.delete("" + url, options).toPromise()];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [2 /*return*/, res];
                    case 2:
                        error_4 = _a.sent();
                        return [2 /*return*/, error_4];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/core/services/question.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/question.service.ts ***!
  \***************************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/core/services/http.service.ts");



var QuestionService = /** @class */ (function () {
    function QuestionService(httpSvc) {
        this.httpSvc = httpSvc;
    }
    QuestionService.prototype.createQuestion = function (question) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, res, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = this.httpSvc.apiRoot + "/questions";
                        return [4 /*yield*/, this.httpSvc.post(url, question)];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [2 /*return*/, res];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    QuestionService.prototype.fetchQuestions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, res, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = this.httpSvc.apiRoot + "/questions";
                        return [4 /*yield*/, this.httpSvc.get(url, {})];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [2 /*return*/, res];
                    case 2:
                        error_2 = _a.sent();
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    QuestionService.prototype.updateQuestion = function (question) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, res, error_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = this.httpSvc.apiRoot + "/questions/" + question._id;
                        return [4 /*yield*/, this.httpSvc.put(url, question)];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [2 /*return*/, res];
                    case 2:
                        error_3 = _a.sent();
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    QuestionService.prototype.deleteQuestion = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, res, error_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = this.httpSvc.apiRoot + "/questions/" + id;
                        return [4 /*yield*/, this.httpSvc.delete(url, {})];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        throw error_4;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    QuestionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "./src/app/core/services/quiz.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/quiz.service.ts ***!
  \***********************************************/
/*! exports provided: QuizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizService", function() { return QuizService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/core/services/http.service.ts");



var QuizService = /** @class */ (function () {
    function QuizService(httpSvc) {
        this.httpSvc = httpSvc;
    }
    QuizService.prototype.createQuiz = function (quiz) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, res, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = this.httpSvc.apiRoot + "/quizzes";
                        return [4 /*yield*/, this.httpSvc.post(url, quiz)];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [2 /*return*/, res];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    QuizService.prototype.fetchQuizzes = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, res, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = this.httpSvc.apiRoot + "/quizzes";
                        return [4 /*yield*/, this.httpSvc.get(url, {})];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [2 /*return*/, res];
                    case 2:
                        error_2 = _a.sent();
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    QuizService.prototype.fetchQuizById = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, res, error_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = this.httpSvc.apiRoot + "/quizzes/" + id;
                        return [4 /*yield*/, this.httpSvc.get(url, {})];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [2 /*return*/, res];
                    case 2:
                        error_3 = _a.sent();
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    QuizService.prototype.updateQuiz = function (quiz) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, res, error_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = this.httpSvc.apiRoot + "/quizzes/" + quiz._id;
                        return [4 /*yield*/, this.httpSvc.put(url, quiz)];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [2 /*return*/, res];
                    case 2:
                        error_4 = _a.sent();
                        throw error_4;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    QuizService.prototype.deleteQuiz = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, res, error_5;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = this.httpSvc.apiRoot + "/quizzes/" + id;
                        return [4 /*yield*/, this.httpSvc.delete(url, {})];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        throw error_5;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    QuizService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], QuizService);
    return QuizService;
}());



/***/ }),

/***/ "./src/app/core/services/toast.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/toast.service.ts ***!
  \************************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ToastService = /** @class */ (function () {
    function ToastService() {
    }
    ToastService.prototype.success = function (msg) {
        alert(msg);
    };
    ToastService.prototype.error = function (msg) {
        alert(msg);
    };
    ToastService.prototype.info = function (msg) {
        alert(msg);
    };
    ToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToastService);
    return ToastService;
}());



/***/ }),

/***/ "./src/app/core/services/topic.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/topic.service.ts ***!
  \************************************************/
/*! exports provided: TopicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicService", function() { return TopicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/core/services/http.service.ts");



var TopicService = /** @class */ (function () {
    function TopicService(httpSvc) {
        this.httpSvc = httpSvc;
    }
    TopicService.prototype.createTopic = function (topic) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, res, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = this.httpSvc.apiRoot + "/topics";
                        return [4 /*yield*/, this.httpSvc.post(url, topic)];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [2 /*return*/, res];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TopicService.prototype.fetchTopics = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, res, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = this.httpSvc.apiRoot + "/topics";
                        return [4 /*yield*/, this.httpSvc.get(url, {})];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [2 /*return*/, res];
                    case 2:
                        error_2 = _a.sent();
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TopicService.prototype.fetchTopicsByCourseId = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, res, error_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = this.httpSvc.apiRoot + "/topics?courseId=" + id;
                        return [4 /*yield*/, this.httpSvc.get(url, {})];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [2 /*return*/, res];
                    case 2:
                        error_3 = _a.sent();
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TopicService.prototype.updateTopic = function (topic) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, res, error_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = this.httpSvc.apiRoot + "/topics/" + topic._id;
                        return [4 /*yield*/, this.httpSvc.put(url, topic)];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [2 /*return*/, res];
                    case 2:
                        error_4 = _a.sent();
                        throw error_4;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TopicService.prototype.deleteTopic = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, res, error_5;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = this.httpSvc.apiRoot + "/topics/" + id;
                        return [4 /*yield*/, this.httpSvc.delete(url, {})];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        throw error_5;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TopicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], TopicService);
    return TopicService;
}());



/***/ }),

/***/ "./src/app/core/services/user-quiz.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/user-quiz.service.ts ***!
  \****************************************************/
/*! exports provided: UserQuizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserQuizService", function() { return UserQuizService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/core/services/http.service.ts");



var UserQuizService = /** @class */ (function () {
    function UserQuizService(httpSvc) {
        this.httpSvc = httpSvc;
    }
    UserQuizService.prototype.createUserQuiz = function (userQuiz) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, res, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = this.httpSvc.apiRoot + "/user-quiz";
                        return [4 /*yield*/, this.httpSvc.post(url, userQuiz)];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [2 /*return*/, res];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserQuizService.prototype.submitForCorrection = function (userQuiz) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, res, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = this.httpSvc.apiRoot + "/user-quiz/check";
                        return [4 /*yield*/, this.httpSvc.post(url, userQuiz)];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [2 /*return*/, res];
                    case 2:
                        error_2 = _a.sent();
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserQuizService.prototype.fetchUserQuizzes = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, res, error_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = this.httpSvc.apiRoot + "/user-quiz?all=true";
                        return [4 /*yield*/, this.httpSvc.get(url, {})];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [2 /*return*/, res];
                    case 2:
                        error_3 = _a.sent();
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserQuizService.prototype.fetchMyUserQuizzes = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, res, error_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = this.httpSvc.apiRoot + "/user-quiz";
                        return [4 /*yield*/, this.httpSvc.get(url, {})];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [2 /*return*/, res];
                    case 2:
                        error_4 = _a.sent();
                        throw error_4;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserQuizService.prototype.fetchUserQuizById = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, res, error_5;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = this.httpSvc.apiRoot + "/user-quiz/" + id;
                        return [4 /*yield*/, this.httpSvc.get(url, {})];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [2 /*return*/, res];
                    case 2:
                        error_5 = _a.sent();
                        throw error_5;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserQuizService.prototype.updateUserQuiz = function (userQuiz) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, res, error_6;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        delete userQuiz.createdAt;
                        delete userQuiz.updatedAt;
                        url = this.httpSvc.apiRoot + "/user-quiz/" + userQuiz._id;
                        return [4 /*yield*/, this.httpSvc.put(url, userQuiz)];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [2 /*return*/, res];
                    case 2:
                        error_6 = _a.sent();
                        throw error_6;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserQuizService.prototype.deleteUserQuiz = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, res, error_7;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = this.httpSvc.apiRoot + "/user-quiz/" + id;
                        return [4 /*yield*/, this.httpSvc.delete(url, {})];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_7 = _a.sent();
                        throw error_7;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserQuizService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], UserQuizService);
    return UserQuizService;
}());



/***/ }),

/***/ "./src/app/courses/components/course-details-modal/course-details-modal.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/courses/components/course-details-modal/course-details-modal.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZXMvY29tcG9uZW50cy9jb3Vyc2UtZGV0YWlscy1tb2RhbC9jb3Vyc2UtZGV0YWlscy1tb2RhbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/courses/components/course-details-modal/course-details-modal.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/courses/components/course-details-modal/course-details-modal.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"courseDetailsModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">\n          <span *ngIf=\"selectAction === 'view'\">View Course Details</span>\n          <span *ngIf=\"selectAction === 'edit'\">Edit Course Details</span>\n          <span *ngIf=\"selectAction === 'delete'\">Delete This Course?</span>\n        </h5>\n        <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <span *ngIf=\"selectAction === 'delete'\">Are you sure you want to delete this Course?</span>\n        <div class=\"row no-gutters flex w-100 flex-row flex-wrap\" *ngIf=\"selectAction !== 'delete'\">\n          <div class=\"col-md-6 pr-2\">\n            <label for=\"\" class=\"text-primary\">Course Name</label>\n            <input type=\"text\" class=\"w-100 form-control form-control-sm\" *ngIf=\"selectAction !== 'view'\"\n              [(ngModel)]=\"selectedItem.name\" />\n            <span class=\"w-100 form-control form-control-sm border-0\" *ngIf=\"selectAction === 'view'\">\n              {{selectedItem.name}}\n            </span>\n          </div>\n          <div class=\"col-md-6 pl-1\">\n            <label for=\"\" class=\"text-primary\">Course Code</label>\n            <input type=\"text\" class=\"w-100 form-control form-control-sm\" *ngIf=\"selectAction !== 'view'\"\n              [(ngModel)]=\"selectedItem.courseCode\" />\n            <span class=\"w-100 form-control form-control-sm border-0\" *ngIf=\"selectAction === 'view'\">\n              {{selectedItem.courseCode}}\n            </span>\n          </div>\n          <div class=\"col-md-6 pr-2\">\n            <label for=\"\" class=\"text-primary\">Description</label>\n            <input type=\"text\" class=\"w-100 form-control form-control-sm\" *ngIf=\"selectAction !== 'view'\"\n              [(ngModel)]=\"selectedItem.description\" />\n            <span class=\"w-100 form-control form-control-sm border-0\" *ngIf=\"selectAction === 'view'\">\n              {{selectedItem.description}}\n            </span>\n          </div>\n          <div class=\"col-md-6 pl-1\">\n            <label for=\"\" class=\"text-primary\">Created By</label>\n            <input type=\"text\" class=\"w-100 form-control form-control-sm\" *ngIf=\"selectAction !== 'view'\"\n              [(ngModel)]=\"selectedItem.createdBy\" />\n            <span class=\"w-100 form-control form-control-sm border-0\" *ngIf=\"selectAction === 'view'\">\n              {{selectedItem.createdBy}}\n            </span>\n          </div>\n          <div class=\"col-md-6 pr-2\">\n            <label for=\"\" class=\"text-primary\">Created At</label>\n            <input type=\"text\" class=\"w-100 form-control form-control-sm\" *ngIf=\"selectAction !== 'view'\"\n              [(ngModel)]=\"selectedItem.createdBy\" />\n            <span class=\"w-100 form-control form-control-sm border-0\" *ngIf=\"selectAction === 'view'\">\n              {{selectedItem.createdBy}}\n            </span>\n          </div>\n          <div class=\"col-md-6 pl-1\">\n            <label for=\"\" class=\"text-primary\">Last Updated At</label>\n            <input type=\"text\" class=\"w-100 form-control form-control-sm\" *ngIf=\"selectAction !== 'view'\"\n              [(ngModel)]=\"selectedItem.createdBy\" />\n            <span class=\"w-100 form-control form-control-sm border-0\" *ngIf=\"selectAction === 'view'\">\n              {{selectedItem.createdBy}}\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button class=\"btn btn-secondary\" type=\"button\" (click)=\"close()\"\n          data-dismiss=\"modal\" *ngIf=\"selectAction !== 'view'\">Cancel</button>\n        <button class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"action()\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/courses/components/course-details-modal/course-details-modal.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/courses/components/course-details-modal/course-details-modal.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CourseDetailsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseDetailsModalComponent", function() { return CourseDetailsModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_models_Course_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/models/Course.model */ "./src/app/core/models/Course.model.ts");
/* harmony import */ var src_app_core_services_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/core.service */ "./src/app/core/services/core.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");





var CourseDetailsModalComponent = /** @class */ (function () {
    function CourseDetailsModalComponent(core, auth) {
        this.core = core;
        this.auth = auth;
        this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        if (!this.selectedItem) {
            this.setCourseAuthor();
        }
    }
    CourseDetailsModalComponent.prototype.ngOnInit = function () { };
    CourseDetailsModalComponent.prototype.setCourseAuthor = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var item, thisUser, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        item = new src_app_core_models_Course_model__WEBPACK_IMPORTED_MODULE_2__["Course"]();
                        if (!this.core.thisUser) return [3 /*break*/, 1];
                        _a = this.core.thisUser;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.auth.getThisUser()];
                    case 2:
                        _a = _b.sent();
                        _b.label = 3;
                    case 3:
                        thisUser = _a;
                        item.createdBy = thisUser._id;
                        this.selectedItem = item;
                        return [2 /*return*/];
                }
            });
        });
    };
    CourseDetailsModalComponent.prototype.action = function () {
        this.confirm.emit(this.selectedItem);
    };
    CourseDetailsModalComponent.prototype.close = function () {
        this.cancel.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_core_models_Course_model__WEBPACK_IMPORTED_MODULE_2__["Course"])
    ], CourseDetailsModalComponent.prototype, "selectedItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CourseDetailsModalComponent.prototype, "selectAction", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], CourseDetailsModalComponent.prototype, "confirm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], CourseDetailsModalComponent.prototype, "cancel", void 0);
    CourseDetailsModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-details-modal',
            template: __webpack_require__(/*! ./course-details-modal.component.html */ "./src/app/courses/components/course-details-modal/course-details-modal.component.html"),
            styles: [__webpack_require__(/*! ./course-details-modal.component.css */ "./src/app/courses/components/course-details-modal/course-details-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"],
            src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], CourseDetailsModalComponent);
    return CourseDetailsModalComponent;
}());



/***/ }),

/***/ "./src/app/courses/components/courses/courses.component.css":
/*!******************************************************************!*\
  !*** ./src/app/courses/components/courses/courses.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZXMvY29tcG9uZW50cy9jb3Vyc2VzL2NvdXJzZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/courses/components/courses/courses.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/courses/components/courses/courses.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Wrapper -->\n<div id=\"wrapper\">\n\n  <!-- Sidebar -->\n  <app-sidebar></app-sidebar>\n  <!-- End of Sidebar -->\n\n  <!-- Content Wrapper -->\n  <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n\n    <!-- Main Content -->\n    <div id=\"content\">\n\n      <app-navbar></app-navbar>\n\n      <!-- Begin Page Content -->\n      <div class=\"container-fluid\">\n\n        <!-- Page Heading -->\n        <!-- <h1 class=\"h3 mb-4 text-gray-800\">Courses</h1> -->\n        <!-- <p class=\"mb-4\">Short Description of a course</p> -->\n\n        <!-- DataTales Example -->\n        <div class=\"card shadow mb-4\">\n          <div class=\"card-header py-3 d-flex justify-content-between\">\n            <h6 class=\"m-0 font-weight-bold text-primary\">Courses</h6>\n            <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-circle btn-primary text-white\" title=\"Add a Course\"\n              data-toggle=\"modal\" data-target=\"#courseDetailsModal\" (click)=\"selectOneItem(null, 'create')\">\n              <i class=\"fas fa-plus\"></i>\n            </a>\n          </div>\n          <div class=\"card-body\">\n\n            <div class=\"d-flex justify-content-between w-100 mb-2\">\n              <span class=\"d-flex flex-nowrap\">\n                Showing\n                <select class=\"form-control form-control-sm mx-1\" [(ngModel)]=\"tblStx.limit\">\n                  <option *ngFor=\"let opt of tblStx.limitOptions\" [value]=\"opt\">{{opt}}</option>\n                </select>\n                items\n              </span>\n              <span class=\"d-flex flex-nowrap\">\n                <input type=\"search\" class=\"form-control form-control-sm\" [(ngModel)]=\"searchFilter\" />\n              </span>\n            </div>\n\n            <div class=\"table-responsive border\">\n\n              <ngx-datatable #datatable [rows]=\"itemList | filterBy: { name: searchFilter }\" class=\"bootstrap\"\n                [headerHeight]=\"tblStx.headerHeight\" [limit]=\"tblStx.limit\" [columnMode]=\"tblStx.columnMode\"\n                [footerHeight]=\"tblStx.footerHeight\" [rowHeight]=\"tblStx.rowHeight\" [trackByProp]=\"'_id'\"\n                [loadingIndicator]=\"tblStx.loadingIndicator\" [scrollbarH]=\"tblStx.scrollbarH\"\n                [reorderable]=\"tblStx.reorderable\">\n\n                <ngx-datatable-column name=\"#\" [flexGrow]=\"10\" [maxWidth]=\"50\" [cellClass]=\"'text-right'\"\n                  [headerClass]=\"'text-right'\" [sortable]=\"false\" [draggable]=\"false\">\n                  <ng-template let-rowIndex=\"rowIndex\" ngx-datatable-cell-template>\n                    <strong>{{rowIndex + 1}}</strong>\n                  </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Name\" prop=\"name\" [flexGrow]=\"45\">\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Course Code\" prop=\"courseCode\" [flexGrow]=\"25\">\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Course ID\" prop=\"_id\" [flexGrow]=\"25\">\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Actions\" [sortable]=\"false\" [flexGrow]=\"20\" [maxWidth]=\"100\"\n                  [cellClass]=\"'text-center'\" [headerClass]=\"'text-center'\" [draggable]=\"false\">\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                    <div class=\"d-flex w-100 justify-content-around\">\n                      <a href=\"javascript:void(0)\" data-toggle=\"modal\" data-target=\"#courseDetailsModal\"\n                        (click)=\"selectOneItem(row, 'view')\">\n                        <i class=\"fas fa-eye\"></i>\n                      </a>\n                      <a href=\"javascript:void(0)\" data-toggle=\"modal\" data-target=\"#courseDetailsModal\"\n                        (click)=\"selectOneItem(row, 'edit')\">\n                        <i class=\"fas fa-edit\"></i>\n                      </a>\n                      <a href=\"javascript:void(0)\" data-toggle=\"modal\" data-target=\"#courseDetailsModal\"\n                        (click)=\"selectOneItem(row, 'delete')\">\n                        <i class=\"fas fa-trash-alt\"></i>\n                      </a>\n                    </div>\n                  </ng-template>\n                </ngx-datatable-column>\n\n              </ngx-datatable>\n\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n    <!-- End of Main Content -->\n\n    <app-footer></app-footer>\n\n  </div>\n  <!-- End of Content Wrapper -->\n\n</div>\n<!-- End of Page Wrapper -->\n\n<app-scroll-to-top-button></app-scroll-to-top-button>\n\n<app-logout-modal></app-logout-modal>\n\n<app-course-details-modal *ngIf=\"!!selectedItem\" [selectedItem]=\"selectedItem\" [selectAction]=\"selectAction\"\n  (confirm)=\"onModalConfirmed($event)\" (cancel)=\"clearModalData()\">\n</app-course-details-modal>\n"

/***/ }),

/***/ "./src/app/courses/components/courses/courses.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/courses/components/courses/courses.component.ts ***!
  \*****************************************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_core_models_TableSettings_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/models/TableSettings.model */ "./src/app/core/models/TableSettings.model.ts");
/* harmony import */ var src_app_core_services_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/core.service */ "./src/app/core/services/core.service.ts");
/* harmony import */ var src_app_core_services_course_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/course.service */ "./src/app/core/services/course.service.ts");






var CoursesComponent = /** @class */ (function () {
    function CoursesComponent(core, courseSvc) {
        this.core = core;
        this.courseSvc = courseSvc;
        this.tblStx = new src_app_core_models_TableSettings_model__WEBPACK_IMPORTED_MODULE_3__["TableSettings"]();
        this.searchFilter = '';
        this.itemList = [];
        this.tblStx = this.core.defaultTableSettings;
        this.fetchCourses();
        this.itemList = __webpack_require__(/*! ../../../../assets/courses.json */ "./src/assets/courses.json");
    }
    CoursesComponent.prototype.ngOnInit = function () {
    };
    CoursesComponent.prototype.ngAfterViewInit = function () {
        this.datatable.columnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["ColumnMode"].force;
    };
    CoursesComponent.prototype.createCourse = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var newItem, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.courseSvc.createCourse(item)];
                    case 1:
                        newItem = _a.sent();
                        this.itemList = this.itemList.concat([newItem]);
                        this.fetchCourses();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CoursesComponent.prototype.fetchCourses = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.courseSvc.fetchCourses()];
                    case 1:
                        res = _a.sent();
                        if (!Array.isArray(res)) {
                            throw res;
                        }
                        this.itemList = res || [];
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CoursesComponent.prototype.updateCourse = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var newItem, error_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.courseSvc.updateCourse(item)];
                    case 1:
                        newItem = _a.sent();
                        this.fetchCourses();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CoursesComponent.prototype.deleteCourse = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.courseSvc.deleteCourse(id)];
                    case 1:
                        _a.sent();
                        this.fetchCourses();
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        console.log(error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CoursesComponent.prototype.selectOneItem = function (item, reason) {
        this.selectedItem = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item);
        this.selectAction = reason;
    };
    CoursesComponent.prototype.onModalConfirmed = function (item) {
        try {
            switch (this.selectAction) {
                case 'delete':
                    this.deleteCourse(item._id);
                    break;
                case 'edit':
                    this.updateCourse(item);
                    break;
                case 'create':
                    this.createCourse(item);
                    break;
                default:
                    break;
            }
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.clearModalData();
        }
    };
    CoursesComponent.prototype.clearModalData = function () {
        this.selectAction = null;
        this.selectedItem = null;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datatable'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"])
    ], CoursesComponent.prototype, "datatable", void 0);
    CoursesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-courses',
            template: __webpack_require__(/*! ./courses.component.html */ "./src/app/courses/components/courses/courses.component.html"),
            styles: [__webpack_require__(/*! ./courses.component.css */ "./src/app/courses/components/courses/courses.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_core_service__WEBPACK_IMPORTED_MODULE_4__["CoreService"],
            src_app_core_services_course_service__WEBPACK_IMPORTED_MODULE_5__["CourseService"]])
    ], CoursesComponent);
    return CoursesComponent;
}());



/***/ }),

/***/ "./src/app/courses/courses-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/courses/courses-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CoursesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesRoutingModule", function() { return CoursesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_courses_courses_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/courses/courses.component */ "./src/app/courses/components/courses/courses.component.ts");




var routes = [
    {
        path: 'courses',
        children: [
            { path: '', component: _components_courses_courses_component__WEBPACK_IMPORTED_MODULE_3__["CoursesComponent"] },
        ]
    },
];
var CoursesRoutingModule = /** @class */ (function () {
    function CoursesRoutingModule() {
    }
    CoursesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CoursesRoutingModule);
    return CoursesRoutingModule;
}());



/***/ }),

/***/ "./src/app/courses/courses.module.ts":
/*!*******************************************!*\
  !*** ./src/app/courses/courses.module.ts ***!
  \*******************************************/
/*! exports provided: CoursesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesModule", function() { return CoursesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_courses_courses_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/courses/courses.component */ "./src/app/courses/components/courses/courses.component.ts");
/* harmony import */ var _courses_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./courses-routing.module */ "./src/app/courses/courses-routing.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var _components_course_details_modal_course_details_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/course-details-modal/course-details-modal.component */ "./src/app/courses/components/course-details-modal/course-details-modal.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");










var CoursesModule = /** @class */ (function () {
    function CoursesModule() {
    }
    CoursesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_courses_courses_component__WEBPACK_IMPORTED_MODULE_4__["CoursesComponent"],
                _components_course_details_modal_course_details_modal_component__WEBPACK_IMPORTED_MODULE_8__["CourseDetailsModalComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _courses_routing_module__WEBPACK_IMPORTED_MODULE_5__["CoursesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterPipeModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
            ],
            providers: []
        })
    ], CoursesModule);
    return CoursesModule;
}());



/***/ }),

/***/ "./src/app/dashboards/components/main-dashboard/main-dashboard.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/dashboards/components/main-dashboard/main-dashboard.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZHMvY29tcG9uZW50cy9tYWluLWRhc2hib2FyZC9tYWluLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboards/components/main-dashboard/main-dashboard.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/dashboards/components/main-dashboard/main-dashboard.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Wrapper -->\n<div id=\"wrapper\">\n\n  <!-- Sidebar -->\n  <app-sidebar></app-sidebar>\n  <!-- End of Sidebar -->\n\n  <!-- Content Wrapper -->\n  <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n\n    <!-- Main Content -->\n    <div id=\"content\">\n\n      <app-navbar></app-navbar>\n\n      <!-- Begin Page Content -->\n      <div class=\"container-fluid\">\n\n        <!-- Page Heading -->\n        <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n          <h1 class=\"h3 mb-0 text-gray-800\">Dashboard</h1>\n          <a href=\"javascript:void(0)\" class=\"d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm\">\n            <i class=\"fas fa-download fa-sm text-white-50\"></i> Generate Report\n          </a>\n        </div>\n\n        <!-- Content Row -->\n        <div class=\"row\">\n\n          <!-- Earnings (Monthly) Card Example -->\n          <div class=\"col-xl-3 col-md-6 mb-4\">\n            <div class=\"card border-left-primary shadow h-100 py-2\">\n              <div class=\"card-body\">\n                <div class=\"row no-gutters align-items-center\">\n                  <div class=\"col mr-2\">\n                    <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\">Earnings (Monthly)</div>\n                    <div class=\"h5 mb-0 font-weight-bold text-gray-800\">$40,000</div>\n                  </div>\n                  <div class=\"col-auto\">\n                    <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!-- Earnings (Monthly) Card Example -->\n          <div class=\"col-xl-3 col-md-6 mb-4\">\n            <div class=\"card border-left-success shadow h-100 py-2\">\n              <div class=\"card-body\">\n                <div class=\"row no-gutters align-items-center\">\n                  <div class=\"col mr-2\">\n                    <div class=\"text-xs font-weight-bold text-success text-uppercase mb-1\">Earnings (Annual)</div>\n                    <div class=\"h5 mb-0 font-weight-bold text-gray-800\">$215,000</div>\n                  </div>\n                  <div class=\"col-auto\">\n                    <i class=\"fas fa-dollar-sign fa-2x text-gray-300\"></i>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!-- Earnings (Monthly) Card Example -->\n          <div class=\"col-xl-3 col-md-6 mb-4\">\n            <div class=\"card border-left-info shadow h-100 py-2\">\n              <div class=\"card-body\">\n                <div class=\"row no-gutters align-items-center\">\n                  <div class=\"col mr-2\">\n                    <div class=\"text-xs font-weight-bold text-info text-uppercase mb-1\">Tasks</div>\n                    <div class=\"row no-gutters align-items-center\">\n                      <div class=\"col-auto\">\n                        <div class=\"h5 mb-0 mr-3 font-weight-bold text-gray-800\">50%</div>\n                      </div>\n                      <div class=\"col\">\n                        <div class=\"progress progress-sm mr-2\">\n                          <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-auto\">\n                    <i class=\"fas fa-clipboard-list fa-2x text-gray-300\"></i>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!-- Pending Requests Card Example -->\n          <div class=\"col-xl-3 col-md-6 mb-4\">\n            <div class=\"card border-left-warning shadow h-100 py-2\">\n              <div class=\"card-body\">\n                <div class=\"row no-gutters align-items-center\">\n                  <div class=\"col mr-2\">\n                    <div class=\"text-xs font-weight-bold text-warning text-uppercase mb-1\">Pending Requests</div>\n                    <div class=\"h5 mb-0 font-weight-bold text-gray-800\">18</div>\n                  </div>\n                  <div class=\"col-auto\">\n                    <i class=\"fas fa-comments fa-2x text-gray-300\"></i>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- Content Row -->\n\n        <div class=\"row\">\n\n          <!-- Area Chart -->\n          <div class=\"col-xl-8 col-lg-7\">\n            <div class=\"card shadow mb-4\">\n              <!-- Card Header - Dropdown -->\n              <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\n                <h6 class=\"m-0 font-weight-bold text-primary\">Earnings Overview</h6>\n                <div class=\"dropdown no-arrow\">\n                  <a class=\"dropdown-toggle\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <i class=\"fas fa-ellipsis-v fa-sm fa-fw text-gray-400\"></i>\n                  </a>\n                  <div class=\"dropdown-menu dropdown-menu-right shadow animated--fade-in\" aria-labelledby=\"dropdownMenuLink\">\n                    <div class=\"dropdown-header\">Dropdown Header:</div>\n                    <a class=\"dropdown-item\" href=\"#\">Action</a>\n                    <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                    <div class=\"dropdown-divider\"></div>\n                    <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                  </div>\n                </div>\n              </div>\n              <!-- Card Body -->\n              <div class=\"card-body\">\n                <div class=\"chart-area\">\n                  <canvas id=\"myAreaChart\"></canvas>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!-- Pie Chart -->\n          <div class=\"col-xl-4 col-lg-5\">\n            <div class=\"card shadow mb-4\">\n              <!-- Card Header - Dropdown -->\n              <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\n                <h6 class=\"m-0 font-weight-bold text-primary\">Revenue Sources</h6>\n                <div class=\"dropdown no-arrow\">\n                  <a class=\"dropdown-toggle\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <i class=\"fas fa-ellipsis-v fa-sm fa-fw text-gray-400\"></i>\n                  </a>\n                  <div class=\"dropdown-menu dropdown-menu-right shadow animated--fade-in\" aria-labelledby=\"dropdownMenuLink\">\n                    <div class=\"dropdown-header\">Dropdown Header:</div>\n                    <a class=\"dropdown-item\" href=\"#\">Action</a>\n                    <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                    <div class=\"dropdown-divider\"></div>\n                    <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                  </div>\n                </div>\n              </div>\n              <!-- Card Body -->\n              <div class=\"card-body\">\n                <div class=\"chart-pie pt-4 pb-2\">\n                  <canvas id=\"myPieChart\"></canvas>\n                </div>\n                <div class=\"mt-4 text-center small\">\n                  <span class=\"mr-2\">\n                    <i class=\"fas fa-circle text-primary\"></i> Direct\n                  </span>\n                  <span class=\"mr-2\">\n                    <i class=\"fas fa-circle text-success\"></i> Social\n                  </span>\n                  <span class=\"mr-2\">\n                    <i class=\"fas fa-circle text-info\"></i> Referral\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- Content Row -->\n        <div class=\"row\">\n\n          <!-- Content Column -->\n          <div class=\"col-lg-6 mb-4\">\n\n            <!-- Project Card Example -->\n            <div class=\"card shadow mb-4\">\n              <div class=\"card-header py-3\">\n                <h6 class=\"m-0 font-weight-bold text-primary\">Projects</h6>\n              </div>\n              <div class=\"card-body\">\n                <h4 class=\"small font-weight-bold\">Server Migration <span class=\"float-right\">20%</span></h4>\n                <div class=\"progress mb-4\">\n                  <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 20%\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n                <h4 class=\"small font-weight-bold\">Sales Tracking <span class=\"float-right\">40%</span></h4>\n                <div class=\"progress mb-4\">\n                  <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 40%\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n                <h4 class=\"small font-weight-bold\">Customer Database <span class=\"float-right\">60%</span></h4>\n                <div class=\"progress mb-4\">\n                  <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 60%\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n                <h4 class=\"small font-weight-bold\">Payout Details <span class=\"float-right\">80%</span></h4>\n                <div class=\"progress mb-4\">\n                  <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 80%\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n                <h4 class=\"small font-weight-bold\">Account Setup <span class=\"float-right\">Complete!</span></h4>\n                <div class=\"progress\">\n                  <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n\n          <div class=\"col-lg-6 mb-4\">\n\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n    <!-- End of Main Content -->\n\n    <app-footer></app-footer>\n\n  </div>\n  <!-- End of Content Wrapper -->\n\n</div>\n<!-- End of Page Wrapper -->\n\n<app-scroll-to-top-button></app-scroll-to-top-button>\n\n<app-logout-modal></app-logout-modal>\n"

/***/ }),

/***/ "./src/app/dashboards/components/main-dashboard/main-dashboard.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/dashboards/components/main-dashboard/main-dashboard.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MainDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainDashboardComponent", function() { return MainDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainDashboardComponent = /** @class */ (function () {
    function MainDashboardComponent() {
    }
    MainDashboardComponent.prototype.ngOnInit = function () {
    };
    MainDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-dashboard',
            template: __webpack_require__(/*! ./main-dashboard.component.html */ "./src/app/dashboards/components/main-dashboard/main-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./main-dashboard.component.css */ "./src/app/dashboards/components/main-dashboard/main-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainDashboardComponent);
    return MainDashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/dashboards-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/dashboards/dashboards-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: DashboardsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardsRoutingModule", function() { return DashboardsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main-dashboard/main-dashboard.component */ "./src/app/dashboards/components/main-dashboard/main-dashboard.component.ts");




var routes = [
    {
        path: 'dashboard',
        children: [
            { path: '', component: _components_main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["MainDashboardComponent"] },
        ]
    },
];
var DashboardsRoutingModule = /** @class */ (function () {
    function DashboardsRoutingModule() {
    }
    DashboardsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashboardsRoutingModule);
    return DashboardsRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboards/dashboards.module.ts":
/*!*************************************************!*\
  !*** ./src/app/dashboards/dashboards.module.ts ***!
  \*************************************************/
/*! exports provided: DashboardsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardsModule", function() { return DashboardsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main-dashboard/main-dashboard.component */ "./src/app/dashboards/components/main-dashboard/main-dashboard.component.ts");
/* harmony import */ var _dashboards_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboards-routing.module */ "./src/app/dashboards/dashboards-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");









var DashboardsModule = /** @class */ (function () {
    function DashboardsModule() {
    }
    DashboardsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["MainDashboardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dashboards_routing_module__WEBPACK_IMPORTED_MODULE_4__["DashboardsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterPipeModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
            ]
        })
    ], DashboardsModule);
    return DashboardsModule;
}());



/***/ }),

/***/ "./src/app/mcq-app/components/course-card/course-card.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/mcq-app/components/course-card/course-card.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21jcS1hcHAvY29tcG9uZW50cy9jb3Vyc2UtY2FyZC9jb3Vyc2UtY2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/mcq-app/components/course-card/course-card.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/mcq-app/components/course-card/course-card.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100\">\n  <div [class]=\"'card border-left-' + color + ' shadow h-100 py-2'\">\n    <div class=\"card-body text-decoration-none\">\n      <div class=\"row no-gutters align-items-center\">\n        <div class=\"col mr-2\">\n          <div [class]=\"'text-xs font-weight-bold text-' + color + ' text-uppercase mb-1'\">\n            {{course.courseCode}} &#x02192;\n          </div>\n          <div [class]=\"'text-xs font-weight-lighter text-' + color + ' mb-1'\">\n            {{course.name}}\n          </div>\n        </div>\n        <div class=\"col-auto\" style=\"cursor: pointer;\" (click)=\"isSelected = !isSelected\">\n          <a [routerLink]=\"['/new-quiz/topics']\" [queryParams]=\"{courseId: course._id}\"\n            [class]=\"'btn btn-sm btn-' + color + ' btn-circle'\" title=\"Select Course\">\n            <i class=\"fas fa-arrow-right\"></i>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/mcq-app/components/course-card/course-card.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/mcq-app/components/course-card/course-card.component.ts ***!
  \*************************************************************************/
/*! exports provided: CourseCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseCardComponent", function() { return CourseCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_models_Course_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/models/Course.model */ "./src/app/core/models/Course.model.ts");



var CourseCardComponent = /** @class */ (function () {
    function CourseCardComponent() {
        this.isSelected = true;
        this.setColor();
    }
    CourseCardComponent.prototype.ngOnInit = function () {
    };
    CourseCardComponent.prototype.setColor = function () {
        var colors = ['primary', 'secondary', 'info', 'success', 'warning', 'danger'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_core_models_Course_model__WEBPACK_IMPORTED_MODULE_2__["Course"])
    ], CourseCardComponent.prototype, "course", void 0);
    CourseCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-card',
            template: __webpack_require__(/*! ./course-card.component.html */ "./src/app/mcq-app/components/course-card/course-card.component.html"),
            styles: [__webpack_require__(/*! ./course-card.component.css */ "./src/app/mcq-app/components/course-card/course-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CourseCardComponent);
    return CourseCardComponent;
}());



/***/ }),

/***/ "./src/app/mcq-app/components/course-list/course-list.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/mcq-app/components/course-list/course-list.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21jcS1hcHAvY29tcG9uZW50cy9jb3Vyc2UtbGlzdC9jb3Vyc2UtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/mcq-app/components/course-list/course-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/mcq-app/components/course-list/course-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Wrapper -->\n<div id=\"wrapper\">\n\n  <!-- Sidebar -->\n  <app-sidebar></app-sidebar>\n  <!-- End of Sidebar -->\n\n  <!-- Content Wrapper -->\n  <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n\n    <!-- Main Content -->\n    <div id=\"content\">\n\n      <app-navbar></app-navbar>\n\n      <!-- Begin Page Content -->\n      <div class=\"container-fluid\">\n\n        <!-- Page Heading -->\n        <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n          <h1 class=\"h3 mb-0 text-gray-800\">Available Courses</h1>\n          <!-- <a href=\"javascript:void(0)\" class=\"d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm\">\n            <i class=\"fas fa-download fa-sm text-white-50\"></i> Generate Quiz\n          </a> -->\n        </div>\n        <p class=\"mb-4\">\n          Select a Course to take a Quiz. You could take a general Quiz,\n          or even get a Quiz on a specific Topic!\n        </p>\n\n        <!-- Content Row -->\n        <div class=\"row\">\n\n          <div class=\"col-xl-3 col-md-6 mb-4\" *ngFor=\"let course of courseList\">\n            <app-course-card [course]=\"course\">\n            </app-course-card>\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n    <!-- End of Main Content -->\n\n    <app-footer></app-footer>\n\n  </div>\n  <!-- End of Content Wrapper -->\n\n</div>\n<!-- End of Page Wrapper -->\n\n<app-scroll-to-top-button></app-scroll-to-top-button>\n\n<app-logout-modal></app-logout-modal>\n"

/***/ }),

/***/ "./src/app/mcq-app/components/course-list/course-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/mcq-app/components/course-list/course-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: CourseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseListComponent", function() { return CourseListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/course.service */ "./src/app/core/services/course.service.ts");



var CourseListComponent = /** @class */ (function () {
    function CourseListComponent(courseSvc) {
        this.courseSvc = courseSvc;
        this.fetchCourses();
    }
    CourseListComponent.prototype.ngOnInit = function () {
    };
    CourseListComponent.prototype.fetchCourses = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.courseSvc.fetchCourses()];
                    case 1:
                        res = _a.sent();
                        if (!Array.isArray(res)) {
                            throw res;
                        }
                        this.courseList = res || [];
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CourseListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-list',
            template: __webpack_require__(/*! ./course-list.component.html */ "./src/app/mcq-app/components/course-list/course-list.component.html"),
            styles: [__webpack_require__(/*! ./course-list.component.css */ "./src/app/mcq-app/components/course-list/course-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"]])
    ], CourseListComponent);
    return CourseListComponent;
}());



/***/ }),

/***/ "./src/app/mcq-app/components/home/home.component.css":
/*!************************************************************!*\
  !*** ./src/app/mcq-app/components/home/home.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21jcS1hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/mcq-app/components/home/home.component.html":
/*!*************************************************************!*\
  !*** ./src/app/mcq-app/components/home/home.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Wrapper -->\n<div id=\"wrapper\">\n\n    <!-- Sidebar -->\n    <app-sidebar></app-sidebar>\n    <!-- End of Sidebar -->\n\n    <!-- Content Wrapper -->\n    <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n\n      <!-- Main Content -->\n      <div id=\"content\">\n\n        <app-navbar></app-navbar>\n\n        <!-- Begin Page Content -->\n        <div class=\"container-fluid\">\n\n            <!-- Page Heading -->\n            <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n              <h1 class=\"h3 mb-0 text-gray-800\">Home</h1>\n              <!-- <a href=\"javascript:void(0)\" class=\"d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm\">\n                <i class=\"fas fa-download fa-sm text-white-50\"></i> Generate Report\n              </a> -->\n            </div>\n\n            <!-- Content Row -->\n            <div class=\"row\">\n\n              <!-- Earnings (Monthly) Card Example -->\n              <!-- <div class=\"col-xl-3 col-md-6 mb-4\">\n                <div class=\"card border-left-primary shadow h-100 py-2\">\n                  <a routerLink=\"/\" class=\"card-body text-decoration-none\">\n                    <div class=\"row no-gutters align-items-center\">\n                      <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\">Earnings (Monthly) &#x02192;</div>\n                      </div>\n                      <div class=\"col-auto\">\n                        <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\n                      </div>\n                    </div>\n                  </a>\n                </div>\n              </div> -->\n\n              <!-- Earnings (Monthly) Card Example -->\n              <div class=\"col-xl-3 col-md-6 mb-4\">\n                <div class=\"card border-left-success shadow h-100 py-2\">\n                  <a routerLink=\"/profile\" class=\"card-body text-decoration-none\">\n                    <div class=\"row no-gutters align-items-center\">\n                      <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-success text-uppercase mb-1\">View Your Profile &#x02192;</div>\n                        <!-- <div class=\"h5 mb-0 font-weight-bold text-gray-800\">$215,000</div> -->\n                      </div>\n                      <div class=\"col-auto\">\n                        <i class=\"fas fa-user fa-2x text-gray-300\"></i>\n                      </div>\n                    </div>\n                  </a>\n                </div>\n              </div>\n\n              <!-- Go to Dashboard -->\n              <!-- <div class=\"col-xl-3 col-md-6 mb-4\">\n                <div class=\"card border-left-info shadow h-100 py-2\">\n                  <a routerLink=\"/dashboard\" class=\"card-body text-decoration-none\">\n                    <div class=\"row no-gutters align-items-center\">\n                      <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-info text-uppercase mb-1\">Go to Dashboard &#x02192;</div>\n                        <div class=\"row no-gutters align-items-center\">\n                          <div class=\"col-auto\">\n                            <div class=\"h5 mb-0 mr-3 font-weight-bold text-gray-800\">50%</div>\n                          </div>\n                          <div class=\"col\">\n                            <div class=\"progress progress-sm mr-2\">\n                              <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-auto\">\n                        <i class=\"fas fa-clipboard-list fa-2x text-gray-300\"></i>\n                      </div>\n                    </div>\n                  </a>\n                </div>\n              </div> -->\n\n              <!-- View Course List -->\n              <div class=\"col-xl-3 col-md-6 mb-4\">\n                <div class=\"card border-left-warning shadow h-100 py-2\">\n                  <a routerLink=\"/new-quiz\" class=\"card-body text-decoration-none\">\n                    <div class=\"row no-gutters align-items-center\">\n                      <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-warning text-uppercase mb-1\">Take a Quiz &#x02192;</div>\n                        <!-- <div class=\"h5 mb-0 font-weight-bold text-gray-800\">18</div> -->\n                      </div>\n                      <div class=\"col-auto\">\n                        <i class=\"fas fa-book-reader fa-2x text-gray-300\"></i>\n                      </div>\n                    </div>\n                  </a>\n                </div>\n              </div>\n            </div>\n\n        </div>\n\n      </div>\n      <!-- End of Main Content -->\n\n      <app-footer></app-footer>\n\n    </div>\n    <!-- End of Content Wrapper -->\n\n  </div>\n  <!-- End of Page Wrapper -->\n\n  <app-scroll-to-top-button></app-scroll-to-top-button>\n\n  <app-logout-modal></app-logout-modal>\n"

/***/ }),

/***/ "./src/app/mcq-app/components/home/home.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/mcq-app/components/home/home.component.ts ***!
  \***********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/mcq-app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/mcq-app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/mcq-app/components/quiz-details-modal/quiz-details-modal.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/mcq-app/components/quiz-details-modal/quiz-details-modal.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21jcS1hcHAvY29tcG9uZW50cy9xdWl6LWRldGFpbHMtbW9kYWwvcXVpei1kZXRhaWxzLW1vZGFsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/mcq-app/components/quiz-details-modal/quiz-details-modal.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/mcq-app/components/quiz-details-modal/quiz-details-modal.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"quizDetailsModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">\n          <span *ngIf=\"selectAction === 'view'\">View Quiz Details</span>\n          <span *ngIf=\"selectAction === 'edit'\">Edit Quiz Details</span>\n          <span *ngIf=\"selectAction === 'delete'\">Delete This Quiz?</span>\n        </h5>\n        <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <span *ngIf=\"selectAction === 'delete'\">Are you sure you want to delete this Quiz?</span>\n        <div class=\"row no-gutters flex w-100 flex-row flex-wrap\" *ngIf=\"selectAction !== 'delete'\">\n          <div class=\"col-md-6 pr-2\">\n            <label for=\"\" class=\"text-primary\">Quiz Name</label>\n            <input type=\"text\" class=\"w-100 form-control form-control-sm\" *ngIf=\"selectAction !== 'view'\"\n              [(ngModel)]=\"selectedItem.name\" />\n            <span class=\"w-100 form-control form-control-sm border-0\" *ngIf=\"selectAction === 'view'\">\n              {{selectedItem.name}}\n            </span>\n          </div>\n          <div class=\"col-md-6 pl-1\">\n            <label for=\"\" class=\"text-primary\">Question Count</label>\n            <input type=\"number\" class=\"w-100 form-control form-control-sm\" *ngIf=\"selectAction !== 'view'\"\n              [(ngModel)]=\"selectedItem.questionCount\" />\n            <span class=\"w-100 form-control form-control-sm border-0\" *ngIf=\"selectAction === 'view'\">\n              {{selectedItem.questionCount}}\n            </span>\n          </div>\n          <div class=\"col-md-6 pr-2\">\n            <label for=\"\" class=\"text-primary\">Description</label>\n            <input type=\"text\" class=\"w-100 form-control form-control-sm\" *ngIf=\"selectAction !== 'view'\"\n              [(ngModel)]=\"selectedItem.description\" />\n            <span class=\"w-100 form-control form-control-sm border-0\" *ngIf=\"selectAction === 'view'\">\n              {{selectedItem.description}}\n            </span>\n          </div>\n          <div class=\"col-md-6 pl-1\">\n            <label for=\"\" class=\"text-primary\">Time Allowed (milliseconds)</label>\n            <input type=\"text\" class=\"w-100 form-control form-control-sm\" *ngIf=\"selectAction !== 'view'\"\n              [(ngModel)]=\"selectedItem.timeAllowed\" />\n            <span class=\"w-100 form-control form-control-sm border-0\" *ngIf=\"selectAction === 'view'\">\n              {{selectedItem.timeAllowed}}\n            </span>\n          </div>\n          <div class=\"col-md-6 pr-2\">\n            <label for=\"\" class=\"text-primary\">Created At</label>\n            <input type=\"text\" class=\"w-100 form-control form-control-sm\" *ngIf=\"selectAction !== 'view'\"\n              [(ngModel)]=\"selectedItem.createdBy\" />\n            <span class=\"w-100 form-control form-control-sm border-0\" *ngIf=\"selectAction === 'view'\">\n              {{selectedItem.createdBy}}\n            </span>\n          </div>\n          <div class=\"col-md-6 pl-1\">\n            <label for=\"\" class=\"text-primary\">Last Updated At</label>\n            <input type=\"text\" class=\"w-100 form-control form-control-sm\" *ngIf=\"selectAction !== 'view'\"\n              [(ngModel)]=\"selectedItem.createdBy\" />\n            <span class=\"w-100 form-control form-control-sm border-0\" *ngIf=\"selectAction === 'view'\">\n              {{selectedItem.createdBy}}\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button class=\"btn btn-secondary\" type=\"button\" (click)=\"close()\"\n          data-dismiss=\"modal\" *ngIf=\"selectAction !== 'view'\">Cancel</button>\n        <button class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"action()\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/mcq-app/components/quiz-details-modal/quiz-details-modal.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/mcq-app/components/quiz-details-modal/quiz-details-modal.component.ts ***!
  \***************************************************************************************/
/*! exports provided: QuizDetailsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizDetailsModalComponent", function() { return QuizDetailsModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_models_Quiz_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/models/Quiz.model */ "./src/app/core/models/Quiz.model.ts");
/* harmony import */ var src_app_core_services_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/core.service */ "./src/app/core/services/core.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");





var QuizDetailsModalComponent = /** @class */ (function () {
    function QuizDetailsModalComponent(core, auth) {
        this.core = core;
        this.auth = auth;
        this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    QuizDetailsModalComponent.prototype.ngOnInit = function () {
        if (!this.selectedItem) {
            this.setQuizAuthor();
        }
    };
    QuizDetailsModalComponent.prototype.setQuizAuthor = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var thisUser;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.selectedItem = new src_app_core_models_Quiz_model__WEBPACK_IMPORTED_MODULE_2__["Quiz"]();
                        thisUser = this.core.thisUser;
                        if (!!thisUser) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.auth.getThisUser()];
                    case 1:
                        thisUser = _a.sent();
                        _a.label = 2;
                    case 2:
                        this.selectedItem.createdBy = thisUser._id;
                        this.selectedItem.topicIdList = this.topicList.map(function (topic) { return topic._id; });
                        console.log(this.selectedItem.topicIdList);
                        console.log(this.selectedItem);
                        this.selectedItem = this.selectedItem;
                        return [2 /*return*/];
                }
            });
        });
    };
    QuizDetailsModalComponent.prototype.action = function () {
        this.confirm.emit(this.selectedItem);
    };
    QuizDetailsModalComponent.prototype.close = function () {
        this.cancel.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_core_models_Quiz_model__WEBPACK_IMPORTED_MODULE_2__["Quiz"])
    ], QuizDetailsModalComponent.prototype, "selectedItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], QuizDetailsModalComponent.prototype, "topicList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], QuizDetailsModalComponent.prototype, "selectAction", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], QuizDetailsModalComponent.prototype, "confirm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], QuizDetailsModalComponent.prototype, "cancel", void 0);
    QuizDetailsModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quiz-details-modal',
            template: __webpack_require__(/*! ./quiz-details-modal.component.html */ "./src/app/mcq-app/components/quiz-details-modal/quiz-details-modal.component.html"),
            styles: [__webpack_require__(/*! ./quiz-details-modal.component.css */ "./src/app/mcq-app/components/quiz-details-modal/quiz-details-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"],
            src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], QuizDetailsModalComponent);
    return QuizDetailsModalComponent;
}());



/***/ }),

/***/ "./src/app/mcq-app/components/quiz-history/quiz-history.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/mcq-app/components/quiz-history/quiz-history.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21jcS1hcHAvY29tcG9uZW50cy9xdWl6LWhpc3RvcnkvcXVpei1oaXN0b3J5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/mcq-app/components/quiz-history/quiz-history.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/mcq-app/components/quiz-history/quiz-history.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Wrapper -->\n<div id=\"wrapper\">\n\n    <!-- Sidebar -->\n    <app-sidebar></app-sidebar>\n    <!-- End of Sidebar -->\n\n    <!-- Content Wrapper -->\n    <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n\n      <!-- Main Content -->\n      <div id=\"content\">\n\n        <app-navbar></app-navbar>\n\n        <!-- Begin Page Content -->\n        <div class=\"container-fluid\">\n\n          <!-- Page Heading -->\n          <!-- <h1 class=\"h3 mb-4 text-gray-800\">Courses</h1> -->\n          <!-- <p class=\"mb-4\">Short Description of a course</p> -->\n\n          <!-- DataTales Example -->\n          <div class=\"card shadow mb-4\">\n            <div class=\"card-header py-3 d-flex justify-content-between\">\n              <h6 class=\"m-0 font-weight-bold text-primary\">Your Quiz History</h6>\n              <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-circle btn-primary text-white\"\n                title=\"Take a new Quiz\" (click)=\"selectOneItem(null, 'create')\">\n                <i class=\"fas fa-plus\"></i>\n              </a>\n            </div>\n            <div class=\"card-body\">\n\n              <div class=\"d-flex justify-content-between w-100 mb-2\">\n                <span class=\"d-flex flex-nowrap\">\n                  Showing\n                  <select class=\"form-control form-control-sm mx-1\" [(ngModel)]=\"tblStx.limit\">\n                    <option *ngFor=\"let opt of tblStx.limitOptions\" [value]=\"opt\">{{opt}}</option>\n                  </select>\n                  items\n                </span>\n                <span class=\"d-flex flex-nowrap\">\n                  <input type=\"search\" class=\"form-control form-control-sm\" [(ngModel)]=\"searchFilter\" />\n                </span>\n              </div>\n\n              <div class=\"table-responsive border\">\n\n                <ngx-datatable #datatable [rows]=\"itemList | filterBy: { name: searchFilter }\" class=\"bootstrap\"\n                  [headerHeight]=\"tblStx.headerHeight\" [limit]=\"tblStx.limit\" [columnMode]=\"tblStx.columnMode\"\n                  [footerHeight]=\"tblStx.footerHeight\" [rowHeight]=\"tblStx.rowHeight\" [trackByProp]=\"'_id'\"\n                  [loadingIndicator]=\"tblStx.loadingIndicator\" [scrollbarH]=\"tblStx.scrollbarH\"\n                  [reorderable]=\"tblStx.reorderable\">\n\n                  <ngx-datatable-column name=\"#\" [flexGrow]=\"10\" [maxWidth]=\"50\" [cellClass]=\"'text-right'\"\n                    [headerClass]=\"'text-right'\" [sortable]=\"false\" [draggable]=\"false\">\n                    <ng-template let-rowIndex=\"rowIndex\" ngx-datatable-cell-template>\n                      <strong>{{rowIndex + 1}}</strong>\n                    </ng-template>\n                  </ngx-datatable-column>\n                  <ngx-datatable-column name=\"Name\" prop=\"name\" [flexGrow]=\"45\">\n                  </ngx-datatable-column>\n                  <ngx-datatable-column name=\"Course Code\" prop=\"courseCode\" [flexGrow]=\"25\">\n                  </ngx-datatable-column>\n                  <ngx-datatable-column name=\"Actions\" [sortable]=\"false\" [flexGrow]=\"20\" [maxWidth]=\"100\"\n                    [cellClass]=\"'text-center'\" [headerClass]=\"'text-center'\" [draggable]=\"false\">\n                    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                      <div class=\"d-flex w-100 justify-content-around\">\n                        <a href=\"javascript:void(0)\" data-toggle=\"modal\" data-target=\"#courseDetailsModal\"\n                          (click)=\"selectOneItem(row, 'view')\">\n                          <i class=\"fas fa-eye\"></i>\n                        </a>\n                        <a href=\"javascript:void(0)\" data-toggle=\"modal\" data-target=\"#courseDetailsModal\"\n                          (click)=\"selectOneItem(row, 'edit')\">\n                          <i class=\"fas fa-edit\"></i>\n                        </a>\n                        <a href=\"javascript:void(0)\" data-toggle=\"modal\" data-target=\"#courseDetailsModal\"\n                          (click)=\"selectOneItem(row, 'delete')\">\n                          <i class=\"fas fa-trash-alt\"></i>\n                        </a>\n                      </div>\n                    </ng-template>\n                  </ngx-datatable-column>\n\n                </ngx-datatable>\n\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n      <!-- End of Main Content -->\n\n      <app-footer></app-footer>\n\n    </div>\n    <!-- End of Content Wrapper -->\n\n  </div>\n  <!-- End of Page Wrapper -->\n\n  <app-scroll-to-top-button></app-scroll-to-top-button>\n\n  <app-logout-modal></app-logout-modal>\n"

/***/ }),

/***/ "./src/app/mcq-app/components/quiz-history/quiz-history.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/mcq-app/components/quiz-history/quiz-history.component.ts ***!
  \***************************************************************************/
/*! exports provided: QuizHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizHistoryComponent", function() { return QuizHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_core_models_TableSettings_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/models/TableSettings.model */ "./src/app/core/models/TableSettings.model.ts");
/* harmony import */ var src_app_core_services_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/core.service */ "./src/app/core/services/core.service.ts");
/* harmony import */ var src_app_core_services_user_quiz_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/user-quiz.service */ "./src/app/core/services/user-quiz.service.ts");






var QuizHistoryComponent = /** @class */ (function () {
    function QuizHistoryComponent(core, userQuizSvc) {
        this.core = core;
        this.userQuizSvc = userQuizSvc;
        this.tblStx = new src_app_core_models_TableSettings_model__WEBPACK_IMPORTED_MODULE_3__["TableSettings"]();
        this.searchFilter = '';
        this.itemList = [];
        this.tblStx = this.core.defaultTableSettings;
        this.fetchUserQuizzes();
    }
    QuizHistoryComponent.prototype.ngOnInit = function () {
        this.datatable.columnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["ColumnMode"].force;
    };
    QuizHistoryComponent.prototype.createUserQuiz = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var newItem, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userQuizSvc.createUserQuiz(item)];
                    case 1:
                        newItem = _a.sent();
                        this.itemList = this.itemList.concat([newItem]);
                        this.fetchUserQuizzes();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    QuizHistoryComponent.prototype.fetchUserQuizzes = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userQuizSvc.fetchMyUserQuizzes()];
                    case 1:
                        res = _a.sent();
                        if (!Array.isArray(res)) {
                            throw res;
                        }
                        this.itemList = res || [];
                        console.log(this.itemList);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    QuizHistoryComponent.prototype.updateUserQuiz = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var newItem, error_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userQuizSvc.updateUserQuiz(item)];
                    case 1:
                        newItem = _a.sent();
                        this.fetchUserQuizzes();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    QuizHistoryComponent.prototype.deleteUserQuiz = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userQuizSvc.deleteUserQuiz(id)];
                    case 1:
                        _a.sent();
                        this.fetchUserQuizzes();
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        console.log(error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    QuizHistoryComponent.prototype.selectOneItem = function (item, reason) {
        this.selectedItem = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item);
        this.selectAction = reason;
    };
    QuizHistoryComponent.prototype.onModalConfirmed = function (item) {
        try {
            switch (this.selectAction) {
                case 'delete':
                    this.deleteUserQuiz(item._id);
                    break;
                case 'edit':
                    this.updateUserQuiz(item);
                    break;
                case 'create':
                    this.createUserQuiz(item);
                    break;
                default:
                    break;
            }
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.clearModalData();
        }
    };
    QuizHistoryComponent.prototype.clearModalData = function () {
        this.selectAction = null;
        this.selectedItem = null;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datatable'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"])
    ], QuizHistoryComponent.prototype, "datatable", void 0);
    QuizHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quiz-history',
            template: __webpack_require__(/*! ./quiz-history.component.html */ "./src/app/mcq-app/components/quiz-history/quiz-history.component.html"),
            styles: [__webpack_require__(/*! ./quiz-history.component.css */ "./src/app/mcq-app/components/quiz-history/quiz-history.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_core_service__WEBPACK_IMPORTED_MODULE_4__["CoreService"],
            src_app_core_services_user_quiz_service__WEBPACK_IMPORTED_MODULE_5__["UserQuizService"]])
    ], QuizHistoryComponent);
    return QuizHistoryComponent;
}());



/***/ }),

/***/ "./src/app/mcq-app/components/quiz-result/quiz-result.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/mcq-app/components/quiz-result/quiz-result.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21jcS1hcHAvY29tcG9uZW50cy9xdWl6LXJlc3VsdC9xdWl6LXJlc3VsdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/mcq-app/components/quiz-result/quiz-result.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/mcq-app/components/quiz-result/quiz-result.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Wrapper -->\n<div id=\"wrapper\">\n\n  <!-- Sidebar -->\n  <app-sidebar></app-sidebar>\n  <!-- End of Sidebar -->\n\n  <!-- Content Wrapper -->\n  <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n\n    <!-- Main Content -->\n    <div id=\"content\">\n\n      <app-navbar></app-navbar>\n\n      <!-- Begin Page Content -->\n      <div class=\"container-fluid\" *ngIf=\"userQuiz\">\n\n        <!-- Page Heading -->\n        <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n          <h1 class=\"h3 mb-0 text-gray-800\">\n            Quiz results for: {{userQuiz.quiz.name}}\n          </h1>\n          <!-- <span>\n            <button class=\"d-none d-sm-inline-block btn btn-sm btn-outline-primary shadow-sm btn-icon-split\"\n              (click)=\"startQuiz()\" *ngIf=\"!userQuiz\">\n              <span class=\"icon text-white-50\">\n                <i class=\"fas fa-play fa-sm text-primary\"></i>\n              </span>\n              <span class=\"text\">Start Quiz</span>\n            </button>\n            <button class=\"ml-3 d-none d-sm-inline-block btn btn-sm btn-outline-primary shadow-sm btn-icon-split\"\n              (click)=\"submitUserQuiz()\" *ngIf=\"userQuiz\">\n              <span class=\"icon text-white-50\">\n                <i class=\"fas fa-save fa-sm text-primary\"></i>\n              </span>\n              <span class=\"text\">Submit</span>\n            </button>\n          </span> -->\n        </div>\n        <p class=\"mb-4\">{{userQuiz.quiz.description}}</p>\n\n        <!-- Cards for Questions -->\n        <ol class=\"pl-3\" *ngIf=\"userQuiz && userQuiz.userAnswerList && userQuiz.userAnswerList.length\">\n          <li *ngFor=\"let userAnswer of userQuiz.userAnswerList\">\n            <app-user-answer-card [userAnswer]=\"userAnswer\" [showResults]=\"true\">\n            </app-user-answer-card>\n          </li>\n        </ol>\n\n      </div>\n\n    </div>\n    <!-- End of Main Content -->\n\n    <app-footer></app-footer>\n\n  </div>\n  <!-- End of Content Wrapper -->\n\n</div>\n<!-- End of Page Wrapper -->\n\n<app-scroll-to-top-button></app-scroll-to-top-button>\n\n<app-logout-modal></app-logout-modal>\n"

/***/ }),

/***/ "./src/app/mcq-app/components/quiz-result/quiz-result.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/mcq-app/components/quiz-result/quiz-result.component.ts ***!
  \*************************************************************************/
/*! exports provided: QuizResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizResultComponent", function() { return QuizResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_services_user_quiz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/user-quiz.service */ "./src/app/core/services/user-quiz.service.ts");




var QuizResultComponent = /** @class */ (function () {
    function QuizResultComponent(route, router, userQuizSvc) {
        this.route = route;
        this.router = router;
        this.userQuizSvc = userQuizSvc;
    }
    QuizResultComponent.prototype.ngOnInit = function () {
        this.fetchQuiz();
    };
    QuizResultComponent.prototype.fetchQuiz = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.userQuizId = this.route.snapshot.paramMap.get('id');
                        _a = this;
                        return [4 /*yield*/, this.userQuizSvc.fetchUserQuizById(this.userQuizId)];
                    case 1:
                        _a.userQuiz = _b.sent();
                        console.log(this.userQuiz);
                        return [2 /*return*/];
                }
            });
        });
    };
    QuizResultComponent.prototype.next = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userQuizSvc.submitForCorrection(this.userQuiz)];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        this.router.navigate(["/quizzes/results/" + this.userQuiz._id]);
                        return [2 /*return*/];
                }
            });
        });
    };
    QuizResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quiz-result',
            template: __webpack_require__(/*! ./quiz-result.component.html */ "./src/app/mcq-app/components/quiz-result/quiz-result.component.html"),
            styles: [__webpack_require__(/*! ./quiz-result.component.css */ "./src/app/mcq-app/components/quiz-result/quiz-result.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_core_services_user_quiz_service__WEBPACK_IMPORTED_MODULE_3__["UserQuizService"]])
    ], QuizResultComponent);
    return QuizResultComponent;
}());



/***/ }),

/***/ "./src/app/mcq-app/components/quiz/quiz.component.css":
/*!************************************************************!*\
  !*** ./src/app/mcq-app/components/quiz/quiz.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21jcS1hcHAvY29tcG9uZW50cy9xdWl6L3F1aXouY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/mcq-app/components/quiz/quiz.component.html":
/*!*************************************************************!*\
  !*** ./src/app/mcq-app/components/quiz/quiz.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Wrapper -->\n<div id=\"wrapper\">\n\n  <!-- Sidebar -->\n  <app-sidebar></app-sidebar>\n  <!-- End of Sidebar -->\n\n  <!-- Content Wrapper -->\n  <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n\n    <!-- Main Content -->\n    <div id=\"content\">\n\n      <app-navbar></app-navbar>\n\n      <!-- Begin Page Content -->\n      <div class=\"container-fluid\">\n\n        <!-- Page Heading -->\n        <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n          <h1 class=\"h3 mb-0 text-gray-800\">Quiz: {{quiz.name}}</h1>\n          <span>\n            <button class=\"d-none d-sm-inline-block btn btn-sm btn-outline-primary shadow-sm btn-icon-split\"\n              (click)=\"startQuiz()\" *ngIf=\"!userQuiz\">\n              <span class=\"icon text-white-50\">\n                <i class=\"fas fa-play fa-sm text-primary\"></i>\n              </span>\n              <span class=\"text\">Start Quiz</span>\n            </button>\n            <button class=\"ml-3 d-none d-sm-inline-block btn btn-sm btn-outline-primary shadow-sm btn-icon-split\"\n              (click)=\"submitUserQuiz()\" *ngIf=\"userQuiz\">\n              <span class=\"icon text-white-50\">\n                <i class=\"fas fa-save fa-sm text-primary\"></i>\n              </span>\n              <span class=\"text\">Submit</span>\n            </button>\n          </span>\n        </div>\n        <p class=\"mb-4\">{{quiz.description}}</p>\n\n        <!-- Cards for Questions -->\n        <ol class=\"pl-3\" *ngIf=\"userQuiz && userQuiz.userAnswerList && userQuiz.userAnswerList.length\">\n          <li *ngFor=\"let userAnswer of userQuiz.userAnswerList\">\n            <app-user-answer-card [userAnswer]=\"userAnswer\"></app-user-answer-card>\n          </li>\n        </ol>\n\n      </div>\n\n    </div>\n    <!-- End of Main Content -->\n\n    <app-footer></app-footer>\n\n  </div>\n  <!-- End of Content Wrapper -->\n\n</div>\n<!-- End of Page Wrapper -->\n\n<app-scroll-to-top-button></app-scroll-to-top-button>\n\n<app-logout-modal></app-logout-modal>\n"

/***/ }),

/***/ "./src/app/mcq-app/components/quiz/quiz.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/mcq-app/components/quiz/quiz.component.ts ***!
  \***********************************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_quiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/quiz.service */ "./src/app/core/services/quiz.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_services_user_quiz_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/user-quiz.service */ "./src/app/core/services/user-quiz.service.ts");
/* harmony import */ var src_app_core_models_UserQuiz_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/models/UserQuiz.model */ "./src/app/core/models/UserQuiz.model.ts");






var QuizComponent = /** @class */ (function () {
    function QuizComponent(route, router, quizSvc, userQuizSvc) {
        this.route = route;
        this.router = router;
        this.quizSvc = quizSvc;
        this.userQuizSvc = userQuizSvc;
        this.fetchQuiz();
    }
    QuizComponent.prototype.ngOnInit = function () {
    };
    QuizComponent.prototype.fetchQuiz = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.quizId = this.route.snapshot.paramMap.get('id');
                        // For Quiz Name and Description
                        _a = this;
                        return [4 /*yield*/, this.quizSvc.fetchQuizById(this.quizId)];
                    case 1:
                        // For Quiz Name and Description
                        _a.quiz = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    QuizComponent.prototype.startQuiz = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var item, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        item = new src_app_core_models_UserQuiz_model__WEBPACK_IMPORTED_MODULE_5__["UserQuiz"]();
                        item.quizId = this.quizId;
                        _a = this;
                        return [4 /*yield*/, this.userQuizSvc.createUserQuiz(item)];
                    case 1:
                        _a.userQuiz = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    QuizComponent.prototype.submitUserQuiz = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userQuizSvc.submitForCorrection(this.userQuiz)];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        this.router.navigate(["/quizzes/results/" + this.userQuiz._id]);
                        return [2 /*return*/];
                }
            });
        });
    };
    QuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quiz',
            template: __webpack_require__(/*! ./quiz.component.html */ "./src/app/mcq-app/components/quiz/quiz.component.html"),
            styles: [__webpack_require__(/*! ./quiz.component.css */ "./src/app/mcq-app/components/quiz/quiz.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_core_services_quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"],
            src_app_core_services_user_quiz_service__WEBPACK_IMPORTED_MODULE_4__["UserQuizService"]])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "./src/app/mcq-app/components/topic-card/topic-card.component.css":
/*!************************************************************************!*\
  !*** ./src/app/mcq-app/components/topic-card/topic-card.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21jcS1hcHAvY29tcG9uZW50cy90b3BpYy1jYXJkL3RvcGljLWNhcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/mcq-app/components/topic-card/topic-card.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/mcq-app/components/topic-card/topic-card.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100\">\n  <div [class]=\"'card border-left-' + color + ' shadow h-100 py-2'\">\n    <div class=\"card-body text-decoration-none\">\n      <div class=\"row no-gutters align-items-center\">\n        <div class=\"col mr-2\">\n          <div [class]=\"'text-xs font-weight-bold text-' + color + ' text-uppercase mb-1'\">\n            {{topic.name}}\n          </div>\n          <!-- <div class=\"text-xs font-weight-lighter text-warning mb-1\">\n            {{topic.name}}\n          </div> -->\n        </div>\n        <div class=\"col-auto\" style=\"cursor: pointer;\" (click)=\"toggleIsSelected(topic)\">\n          <i class=\"fas fa-check-square fa-2x text-primary\" *ngIf=\"topic && topic.isSelected\"></i>\n          <i class=\"fas fa-square fa-2x text-gray-300\" *ngIf=\"topic && !topic.isSelected\"></i>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/mcq-app/components/topic-card/topic-card.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/mcq-app/components/topic-card/topic-card.component.ts ***!
  \***********************************************************************/
/*! exports provided: TopicCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicCardComponent", function() { return TopicCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_models_Topic_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/models/Topic.model */ "./src/app/core/models/Topic.model.ts");



var TopicCardComponent = /** @class */ (function () {
    function TopicCardComponent() {
        this.setColor();
    }
    TopicCardComponent.prototype.ngOnInit = function () {
        this.topic.isSelected = true;
    };
    TopicCardComponent.prototype.setColor = function () {
        var colors = ['primary', 'secondary', 'info', 'success', 'warning', 'danger'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
    };
    TopicCardComponent.prototype.toggleIsSelected = function (topic) {
        topic.isSelected = !topic.isSelected;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_core_models_Topic_model__WEBPACK_IMPORTED_MODULE_2__["Topic"])
    ], TopicCardComponent.prototype, "topic", void 0);
    TopicCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topic-card',
            template: __webpack_require__(/*! ./topic-card.component.html */ "./src/app/mcq-app/components/topic-card/topic-card.component.html"),
            styles: [__webpack_require__(/*! ./topic-card.component.css */ "./src/app/mcq-app/components/topic-card/topic-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TopicCardComponent);
    return TopicCardComponent;
}());



/***/ }),

/***/ "./src/app/mcq-app/components/topic-list/topic-list.component.css":
/*!************************************************************************!*\
  !*** ./src/app/mcq-app/components/topic-list/topic-list.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21jcS1hcHAvY29tcG9uZW50cy90b3BpYy1saXN0L3RvcGljLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/mcq-app/components/topic-list/topic-list.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/mcq-app/components/topic-list/topic-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Wrapper -->\n<div id=\"wrapper\">\n\n  <!-- Sidebar -->\n  <app-sidebar></app-sidebar>\n  <!-- End of Sidebar -->\n\n  <!-- Content Wrapper -->\n  <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n\n    <!-- Main Content -->\n    <div id=\"content\">\n\n      <app-navbar></app-navbar>\n\n      <!-- Begin Page Content -->\n      <div class=\"container-fluid\">\n\n        <!-- Page Heading -->\n        <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n          <h1 class=\"h3 mb-0 text-gray-800\" *ngIf=\"topicList && topicList.length\">Available Topics</h1>\n          <h1 class=\"h3 mb-0 text-gray-800\" *ngIf=\"!topicList || !topicList.length\">No Topics Available</h1>\n          <span>\n            <button class=\"d-none d-sm-inline-block btn btn-sm btn-outline-primary shadow-sm btn-icon-split\"\n              (click)=\"selectAll()\" *ngIf=\"isAnyUnSelected\">\n              <span class=\"icon text-white-50\">\n                <i class=\"fas fa-square fa-sm text-white\"></i>\n              </span>\n              <span class=\"text\">Select All</span>\n            </button>\n            <button class=\"d-none d-sm-inline-block btn btn-sm btn-outline-primary shadow-sm btn-icon-split\"\n              (click)=\"unselectAll()\" *ngIf=\"!isAnyUnSelected\">\n              <span class=\"icon text-white-50\">\n                <i class=\"fas fa-check-square fa-sm text-primary\"></i>\n              </span>\n              <span class=\"text\">Unselect All</span>\n            </button>\n            <button class=\"d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm ml-2\"\n              (click)=\"showQuizAddModal()\" data-toggle=\"modal\" data-target=\"#quizDetailsModal\">\n              <i class=\"fas fa-download fa-sm text-white-50\"></i> Generate Quiz\n            </button>\n          </span>\n        </div>\n        <p class=\"mb-4\">\n          Select Topics to include in your Quiz. All topics under this course are\n          included by default.\n        </p>\n\n        <!-- Content Row -->\n        <div class=\"row\">\n\n          <div class=\"col-xl-3 col-md-6 mb-4\" *ngFor=\"let topic of topicList\">\n            <app-topic-card [topic]=\"topic\">\n            </app-topic-card>\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n    <!-- End of Main Content -->\n\n    <app-footer></app-footer>\n\n  </div>\n  <!-- End of Content Wrapper -->\n\n</div>\n<!-- End of Page Wrapper -->\n\n<app-scroll-to-top-button></app-scroll-to-top-button>\n\n<app-logout-modal></app-logout-modal>\n\n<app-quiz-details-modal [selectAction]=\"selectAction\" [topicList]=\"selectedTopics\"\n  (cancel)=\"clearModalData()\" (confirm)=\"onModalConfirmed($event)\"\n  *ngIf=\"!!selectAction\">\n</app-quiz-details-modal>\n"

/***/ }),

/***/ "./src/app/mcq-app/components/topic-list/topic-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/mcq-app/components/topic-list/topic-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: TopicListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicListComponent", function() { return TopicListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_topic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/topic.service */ "./src/app/core/services/topic.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_services_quiz_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/quiz.service */ "./src/app/core/services/quiz.service.ts");





var TopicListComponent = /** @class */ (function () {
    function TopicListComponent(topicSvc, quizSvc, router, route) {
        this.topicSvc = topicSvc;
        this.quizSvc = quizSvc;
        this.router = router;
        this.route = route;
    }
    Object.defineProperty(TopicListComponent.prototype, "isAnyUnSelected", {
        get: function () {
            if (!Array.isArray(this.topicList)) {
                return true;
            }
            return this.topicList.some(function (topic) { return !topic.isSelected; });
        },
        enumerable: true,
        configurable: true
    });
    TopicListComponent.prototype.ngOnInit = function () {
        this.courseId = this.route.snapshot.queryParamMap.get('courseId');
        this.fetchTopics();
    };
    TopicListComponent.prototype.fetchTopics = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.topicSvc.fetchTopicsByCourseId(this.courseId)];
                    case 1:
                        res = _a.sent();
                        if (!Array.isArray(res)) {
                            throw res;
                        }
                        this.topicList = res || [];
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TopicListComponent.prototype.selectAll = function () {
        if (!Array.isArray(this.topicList)) {
            return;
        }
        this.topicList.forEach(function (topic) { return topic.isSelected = true; });
    };
    TopicListComponent.prototype.unselectAll = function () {
        if (!Array.isArray(this.topicList)) {
            return;
        }
        this.topicList.forEach(function (topic) { return topic.isSelected = false; });
    };
    TopicListComponent.prototype.createQuiz = function (quiz) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.quizSvc.createQuiz(quiz)];
                    case 1:
                        quiz = _a.sent();
                        this.router.navigate(["/quizzes/" + quiz._id]);
                        return [2 /*return*/];
                }
            });
        });
    };
    TopicListComponent.prototype.showQuizAddModal = function () {
        this.selectedTopics = this.topicList.filter(function (topic) { return topic.isSelected; });
        this.selectAction = 'create';
    };
    TopicListComponent.prototype.onModalConfirmed = function (item) {
        try {
            switch (this.selectAction) {
                case 'create':
                    this.createQuiz(item);
                    break;
                default:
                    break;
            }
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.clearModalData();
        }
    };
    TopicListComponent.prototype.clearModalData = function () {
        this.selectAction = null;
        this.selectedTopics = [];
    };
    TopicListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topic-list',
            template: __webpack_require__(/*! ./topic-list.component.html */ "./src/app/mcq-app/components/topic-list/topic-list.component.html"),
            styles: [__webpack_require__(/*! ./topic-list.component.css */ "./src/app/mcq-app/components/topic-list/topic-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_topic_service__WEBPACK_IMPORTED_MODULE_2__["TopicService"],
            src_app_core_services_quiz_service__WEBPACK_IMPORTED_MODULE_4__["QuizService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], TopicListComponent);
    return TopicListComponent;
}());



/***/ }),

/***/ "./src/app/mcq-app/components/user-answer-card/user-answer-card.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/mcq-app/components/user-answer-card/user-answer-card.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21jcS1hcHAvY29tcG9uZW50cy91c2VyLWFuc3dlci1jYXJkL3VzZXItYW5zd2VyLWNhcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/mcq-app/components/user-answer-card/user-answer-card.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/mcq-app/components/user-answer-card/user-answer-card.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100\" *ngIf=\"!showResults\">\n  <div [class]=\"'card border-left-' + color + ' shadow h-100 py-2'\">\n    <div class=\"card-body text-decoration-none\">\n      <div class=\"row no-gutters align-items-center\">\n        <div class=\"col mr-2\">\n          <div [class]=\"'text-xs font-weight-bold text-' + color + ' mb-1'\">\n            {{userAnswer.question.text}}\n          </div>\n          <div class=\"text-xs font-weight-lighter text-secondary mb-1\"\n            *ngFor=\"let option of userAnswer.question.optionList; let idx=index;\" (click)=\"toggleOption(idx)\">\n            <span>\n              <i class=\"fas fa-square\" *ngIf=\"!userAnswer.selectedOptionIndices.includes(idx)\"></i>\n              <i class=\"fas fa-check-square text-primary\" *ngIf=\"!!userAnswer.selectedOptionIndices.includes(idx)\"></i>\n            </span>\n            <span> {{option}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Alternate view, for Results page -->\n\n<div class=\"w-100\" *ngIf=\"showResults\">\n  <div [class]=\"'card border-left-' + color + ' shadow h-100 py-2'\">\n    <div class=\"card-body text-decoration-none\">\n      <div class=\"row no-gutters align-items-center\">\n        <div class=\"col mr-2\">\n          <div [class]=\"'text-xs font-weight-bold text-' + color + ' mb-1'\">\n            {{userAnswer.question.text}}\n          </div>\n\n          <div class=\"text-xs font-weight-lighter text-success mb-1\"\n            *ngFor=\"let idx of userAnswer.question.correctOptionIndices; let idx=index;\">\n            <span>\n              <i class=\"fas fa-square\" *ngIf=\"!userAnswer.selectedOptionIndices.includes(idx)\"></i>\n              <i class=\"fas fa-check-square text-primary\" *ngIf=\"!!userAnswer.selectedOptionIndices.includes(idx)\"></i>\n            </span>\n            <span> {{userAnswer.question.optionList[idx]}}</span>\n          </div>\n\n          <hr/> <!-- Separate vertically -->\n\n          <div class=\"text-xs font-weight-lighter text-danger mb-1\"\n            *ngFor=\"let idx of userAnswer.selectedOptionIndices; let idx=index;\">\n            <span>\n              <i class=\"fas fa-square\" *ngIf=\"!userAnswer.selectedOptionIndices.includes(idx)\"></i>\n              <i class=\"fas fa-check-square text-primary\" *ngIf=\"!!userAnswer.selectedOptionIndices.includes(idx)\"></i>\n            </span>\n            <span> {{userAnswer.question.optionList[idx]}}</span>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/mcq-app/components/user-answer-card/user-answer-card.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/mcq-app/components/user-answer-card/user-answer-card.component.ts ***!
  \***********************************************************************************/
/*! exports provided: UserAnswerCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAnswerCardComponent", function() { return UserAnswerCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_models_UserQuiz_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/models/UserQuiz.model */ "./src/app/core/models/UserQuiz.model.ts");



var UserAnswerCardComponent = /** @class */ (function () {
    function UserAnswerCardComponent() {
        this.showResults = false;
        this.setColor();
    }
    Object.defineProperty(UserAnswerCardComponent.prototype, "color", {
        get: function () {
            if (this.userAnswer.isCorrect) {
                return 'success';
            }
            if (this.userAnswer.isCorrect === false) {
                return 'danger';
            }
            if (!this.userAnswer || this.showResults) {
                return 'secondary';
            }
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    UserAnswerCardComponent.prototype.ngOnInit = function () { };
    UserAnswerCardComponent.prototype.setColor = function () {
        var colors = ['primary', 'secondary', 'info', 'success', 'warning', 'danger'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
    };
    UserAnswerCardComponent.prototype.toggleOption = function (index) {
        var indexToToggleAt = this.userAnswer.selectedOptionIndices.findIndex(function (i) { return i === index; });
        if (indexToToggleAt === -1) {
            this.userAnswer.selectedOptionIndices = this.userAnswer.selectedOptionIndices.concat([index]);
        }
        else {
            this.userAnswer.selectedOptionIndices.splice(indexToToggleAt, 1);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_core_models_UserQuiz_model__WEBPACK_IMPORTED_MODULE_2__["UserAnswer"])
    ], UserAnswerCardComponent.prototype, "userAnswer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserAnswerCardComponent.prototype, "showResults", void 0);
    UserAnswerCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-answer-card',
            template: __webpack_require__(/*! ./user-answer-card.component.html */ "./src/app/mcq-app/components/user-answer-card/user-answer-card.component.html"),
            styles: [__webpack_require__(/*! ./user-answer-card.component.css */ "./src/app/mcq-app/components/user-answer-card/user-answer-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserAnswerCardComponent);
    return UserAnswerCardComponent;
}());



/***/ }),

/***/ "./src/app/mcq-app/mcq-app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/mcq-app/mcq-app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: McqAppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McqAppRoutingModule", function() { return McqAppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/mcq-app/components/home/home.component.ts");
/* harmony import */ var _components_course_list_course_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/course-list/course-list.component */ "./src/app/mcq-app/components/course-list/course-list.component.ts");
/* harmony import */ var _components_topic_list_topic_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/topic-list/topic-list.component */ "./src/app/mcq-app/components/topic-list/topic-list.component.ts");
/* harmony import */ var _components_quiz_history_quiz_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/quiz-history/quiz-history.component */ "./src/app/mcq-app/components/quiz-history/quiz-history.component.ts");
/* harmony import */ var _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/quiz/quiz.component */ "./src/app/mcq-app/components/quiz/quiz.component.ts");
/* harmony import */ var _components_quiz_result_quiz_result_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/quiz-result/quiz-result.component */ "./src/app/mcq-app/components/quiz-result/quiz-result.component.ts");









var routes = [
    {
        path: 'home',
        children: [
            { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
        ]
    },
    {
        path: 'quizzes',
        children: [
            { path: ':id', component: _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_7__["QuizComponent"] },
            { path: 'results/:id', component: _components_quiz_result_quiz_result_component__WEBPACK_IMPORTED_MODULE_8__["QuizResultComponent"] },
        ]
    },
    {
        path: 'profile',
        pathMatch: 'full',
        children: [
            { path: '', component: _components_quiz_history_quiz_history_component__WEBPACK_IMPORTED_MODULE_6__["QuizHistoryComponent"] },
        ]
    },
    {
        path: 'new-quiz',
        children: [
            { path: '', component: _components_course_list_course_list_component__WEBPACK_IMPORTED_MODULE_4__["CourseListComponent"] },
            {
                path: 'topics',
                children: [
                    { path: '', component: _components_topic_list_topic_list_component__WEBPACK_IMPORTED_MODULE_5__["TopicListComponent"] },
                ]
            },
        ]
    },
];
var McqAppRoutingModule = /** @class */ (function () {
    function McqAppRoutingModule() {
    }
    McqAppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], McqAppRoutingModule);
    return McqAppRoutingModule;
}());



/***/ }),

/***/ "./src/app/mcq-app/mcq-app.module.ts":
/*!*******************************************!*\
  !*** ./src/app/mcq-app/mcq-app.module.ts ***!
  \*******************************************/
/*! exports provided: McqAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McqAppModule", function() { return McqAppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mcq_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mcq-app-routing.module */ "./src/app/mcq-app/mcq-app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/mcq-app/components/home/home.component.ts");
/* harmony import */ var _components_course_list_course_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/course-list/course-list.component */ "./src/app/mcq-app/components/course-list/course-list.component.ts");
/* harmony import */ var _components_topic_card_topic_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/topic-card/topic-card.component */ "./src/app/mcq-app/components/topic-card/topic-card.component.ts");
/* harmony import */ var _components_course_card_course_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/course-card/course-card.component */ "./src/app/mcq-app/components/course-card/course-card.component.ts");
/* harmony import */ var _components_topic_list_topic_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/topic-list/topic-list.component */ "./src/app/mcq-app/components/topic-list/topic-list.component.ts");
/* harmony import */ var _components_quiz_history_quiz_history_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/quiz-history/quiz-history.component */ "./src/app/mcq-app/components/quiz-history/quiz-history.component.ts");
/* harmony import */ var _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/quiz/quiz.component */ "./src/app/mcq-app/components/quiz/quiz.component.ts");
/* harmony import */ var _components_quiz_details_modal_quiz_details_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/quiz-details-modal/quiz-details-modal.component */ "./src/app/mcq-app/components/quiz-details-modal/quiz-details-modal.component.ts");
/* harmony import */ var _components_user_answer_card_user_answer_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/user-answer-card/user-answer-card.component */ "./src/app/mcq-app/components/user-answer-card/user-answer-card.component.ts");
/* harmony import */ var _components_quiz_result_quiz_result_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/quiz-result/quiz-result.component */ "./src/app/mcq-app/components/quiz-result/quiz-result.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



















var McqAppModule = /** @class */ (function () {
    function McqAppModule() {
    }
    McqAppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_course_list_course_list_component__WEBPACK_IMPORTED_MODULE_9__["CourseListComponent"],
                _components_topic_card_topic_card_component__WEBPACK_IMPORTED_MODULE_10__["TopicCardComponent"],
                _components_course_card_course_card_component__WEBPACK_IMPORTED_MODULE_11__["CourseCardComponent"],
                _components_topic_list_topic_list_component__WEBPACK_IMPORTED_MODULE_12__["TopicListComponent"],
                _components_quiz_history_quiz_history_component__WEBPACK_IMPORTED_MODULE_13__["QuizHistoryComponent"],
                _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_14__["QuizComponent"],
                _components_quiz_details_modal_quiz_details_modal_component__WEBPACK_IMPORTED_MODULE_15__["QuizDetailsModalComponent"],
                _components_user_answer_card_user_answer_card_component__WEBPACK_IMPORTED_MODULE_16__["UserAnswerCardComponent"],
                _components_quiz_result_quiz_result_component__WEBPACK_IMPORTED_MODULE_17__["QuizResultComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _mcq_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["McqAppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"],
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_6__["FilterPipeModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"],
            ]
        })
    ], McqAppModule);
    return McqAppModule;
}());



/***/ }),

/***/ "./src/app/questions/components/question-details-modal/question-details-modal.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/questions/components/question-details-modal/question-details-modal.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9ucy9jb21wb25lbnRzL3F1ZXN0aW9uLWRldGFpbHMtbW9kYWwvcXVlc3Rpb24tZGV0YWlscy1tb2RhbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/questions/components/question-details-modal/question-details-modal.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/questions/components/question-details-modal/question-details-modal.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"questionDetailsModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">\n          <span *ngIf=\"selectAction === 'view'\">View Question Details</span>\n          <span *ngIf=\"selectAction === 'edit'\">Edit Question Details</span>\n          <span *ngIf=\"selectAction === 'delete'\">Delete This Question?</span>\n        </h5>\n        <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <span *ngIf=\"selectAction === 'delete'\">Are you sure you want to delete this Question?</span>\n        <div class=\"row no-gutters flex w-100 flex-row flex-wrap\" *ngIf=\"selectAction !== 'delete'\">\n          <div class=\"col-md-6 pr-2\">\n            <label for=\"\" class=\"text-primary\">Question Text</label>\n            <input type=\"text\" class=\"w-100 form-control form-control-sm\" *ngIf=\"selectAction !== 'view'\"\n              [(ngModel)]=\"selectedItem.text\" />\n            <span class=\"w-100 form-control form-control-sm border-0\" *ngIf=\"selectAction === 'view'\">\n              {{selectedItem.text}}\n            </span>\n          </div>\n          <div class=\"col-md-6 pl-1\">\n            <label for=\"\" class=\"text-primary\">Unique Answer?</label>\n            <input type=\"text\" class=\"w-100 form-control form-control-sm\" *ngIf=\"selectAction !== 'view'\"\n              [(ngModel)]=\"selectedItem.hasUniqueAnswer\" />\n            <span class=\"w-100 form-control form-control-sm border-0\" *ngIf=\"selectAction === 'view'\">\n              {{selectedItem.hasUniqueAnswer? 'Yes': 'No'}}\n            </span>\n          </div>\n          <div class=\"col-md-6 pr-2\">\n            <label for=\"\" class=\"text-primary\">Topic Id</label>\n            <input type=\"text\" class=\"w-100 form-control form-control-sm\" *ngIf=\"selectAction !== 'view'\"\n              [(ngModel)]=\"selectedItem.topicId\" />\n            <span class=\"w-100 form-control form-control-sm border-0\" *ngIf=\"selectAction === 'view'\">\n              {{selectedItem.topicId}}\n            </span>\n          </div>\n          <div class=\"col-md-6 pl-1\">\n            <label for=\"\" class=\"text-primary\">Created By</label>\n            <input type=\"text\" class=\"w-100 form-control form-control-sm\" *ngIf=\"selectAction !== 'view'\"\n              [(ngModel)]=\"selectedItem.createdBy\" />\n            <span class=\"w-100 form-control form-control-sm border-0\" *ngIf=\"selectAction === 'view'\">\n              {{selectedItem.createdBy}}\n            </span>\n          </div>\n          <div class=\"col-md-6 pr-2\">\n            <label for=\"\" class=\"text-primary\">Created At</label>\n            <input type=\"text\" class=\"w-100 form-control form-control-sm\" *ngIf=\"selectAction !== 'view'\"\n              [(ngModel)]=\"selectedItem.createdBy\" />\n            <span class=\"w-100 form-control form-control-sm border-0\" *ngIf=\"selectAction === 'view'\">\n              {{selectedItem.createdBy}}\n            </span>\n          </div>\n          <div class=\"col-md-6 pl-1\">\n            <label for=\"\" class=\"text-primary\">Last Updated At</label>\n            <input type=\"text\" class=\"w-100 form-control form-control-sm\" *ngIf=\"selectAction !== 'view'\"\n              [(ngModel)]=\"selectedItem.createdBy\" />\n            <span class=\"w-100 form-control form-control-sm border-0\" *ngIf=\"selectAction === 'view'\">\n              {{selectedItem.createdBy}}\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button class=\"btn btn-secondary\" type=\"button\" (click)=\"close()\"\n          data-dismiss=\"modal\" *ngIf=\"selectAction !== 'view'\">Cancel</button>\n        <button class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"action()\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/questions/components/question-details-modal/question-details-modal.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/questions/components/question-details-modal/question-details-modal.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: QuestionDetailsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionDetailsModalComponent", function() { return QuestionDetailsModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_models_Question_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/models/Question.model */ "./src/app/core/models/Question.model.ts");
/* harmony import */ var src_app_core_services_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/core.service */ "./src/app/core/services/core.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");





var QuestionDetailsModalComponent = /** @class */ (function () {
    function QuestionDetailsModalComponent(core, auth) {
        this.core = core;
        this.auth = auth;
        this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        if (!this.selectedItem) {
            this.setQuestionAuthor();
        }
    }
    QuestionDetailsModalComponent.prototype.ngOnInit = function () { };
    QuestionDetailsModalComponent.prototype.setQuestionAuthor = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var item, thisUser, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        item = new src_app_core_models_Question_model__WEBPACK_IMPORTED_MODULE_2__["Question"]();
                        if (!this.core.thisUser) return [3 /*break*/, 1];
                        _a = this.core.thisUser;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.auth.getThisUser()];
                    case 2:
                        _a = _b.sent();
                        _b.label = 3;
                    case 3:
                        thisUser = _a;
                        item.createdBy = thisUser._id;
                        this.selectedItem = item;
                        return [2 /*return*/];
                }
            });
        });
    };
    QuestionDetailsModalComponent.prototype.action = function () {
        this.confirm.emit(this.selectedItem);
    };
    QuestionDetailsModalComponent.prototype.close = function () {
        this.cancel.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_core_models_Question_model__WEBPACK_IMPORTED_MODULE_2__["Question"])
    ], QuestionDetailsModalComponent.prototype, "selectedItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], QuestionDetailsModalComponent.prototype, "selectAction", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], QuestionDetailsModalComponent.prototype, "confirm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], QuestionDetailsModalComponent.prototype, "cancel", void 0);
    QuestionDetailsModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-question-details-modal',
            template: __webpack_require__(/*! ./question-details-modal.component.html */ "./src/app/questions/components/question-details-modal/question-details-modal.component.html"),
            styles: [__webpack_require__(/*! ./question-details-modal.component.css */ "./src/app/questions/components/question-details-modal/question-details-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"],
            src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], QuestionDetailsModalComponent);
    return QuestionDetailsModalComponent;
}());



/***/ }),

/***/ "./src/app/questions/components/questions/questions.component.css":
/*!************************************************************************!*\
  !*** ./src/app/questions/components/questions/questions.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9ucy9jb21wb25lbnRzL3F1ZXN0aW9ucy9xdWVzdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/questions/components/questions/questions.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/questions/components/questions/questions.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Wrapper -->\n<div id=\"wrapper\">\n\n  <!-- Sidebar -->\n  <app-sidebar></app-sidebar>\n  <!-- End of Sidebar -->\n\n  <!-- Content Wrapper -->\n  <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n\n    <!-- Main Content -->\n    <div id=\"content\">\n\n      <app-navbar></app-navbar>\n\n      <!-- Begin Page Content -->\n      <div class=\"container-fluid\">\n\n        <!-- Page Heading -->\n        <!-- <h1 class=\"h3 mb-4 text-gray-800\">Questions</h1> -->\n        <!-- <p class=\"mb-4\">Short Description of a question</p> -->\n\n        <!-- DataTales Example -->\n        <div class=\"card shadow mb-4\">\n          <div class=\"card-header py-3 d-flex justify-content-between\">\n            <h6 class=\"m-0 font-weight-bold text-primary\">Questions</h6>\n            <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-circle btn-primary text-white\" title=\"Add a Question\"\n              data-toggle=\"modal\" data-target=\"#questionDetailsModal\" (click)=\"selectOneItem(null, 'create')\">\n              <i class=\"fas fa-plus\"></i>\n            </a>\n          </div>\n          <div class=\"card-body\">\n\n            <div class=\"d-flex justify-content-between w-100 mb-2\">\n              <span class=\"d-flex flex-nowrap\">\n                Showing\n                <select class=\"form-control form-control-sm mx-1\" [(ngModel)]=\"tblStx.limit\">\n                  <option *ngFor=\"let opt of tblStx.limitOptions\" [value]=\"opt\">{{opt}}</option>\n                </select>\n                items\n              </span>\n              <span class=\"d-flex flex-nowrap\">\n                <input type=\"search\" class=\"form-control form-control-sm\" [(ngModel)]=\"searchFilter\" />\n              </span>\n            </div>\n\n            <div class=\"table-responsive border\">\n\n              <ngx-datatable #datatable [rows]=\"itemList | filterBy: { text: searchFilter }\" class=\"bootstrap\"\n                [headerHeight]=\"tblStx.headerHeight\" [limit]=\"tblStx.limit\" [columnMode]=\"tblStx.columnMode\"\n                [footerHeight]=\"tblStx.footerHeight\" [rowHeight]=\"tblStx.rowHeight\" [trackByProp]=\"'_id'\"\n                [loadingIndicator]=\"tblStx.loadingIndicator\" [scrollbarH]=\"tblStx.scrollbarH\"\n                [reorderable]=\"tblStx.reorderable\">\n\n                <ngx-datatable-column name=\"#\" [flexGrow]=\"10\" [maxWidth]=\"50\" [cellClass]=\"'text-right'\"\n                  [headerClass]=\"'text-right'\" [sortable]=\"false\" [draggable]=\"false\">\n                  <ng-template let-rowIndex=\"rowIndex\" ngx-datatable-cell-template>\n                    <strong>{{rowIndex + 1}}</strong>\n                  </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Question Text\" prop=\"text\" [flexGrow]=\"60\">\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Topic\" prop=\"topicId\" [flexGrow]=\"30\">\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Actions\" [sortable]=\"false\" [flexGrow]=\"20\" [maxWidth]=\"100\"\n                  [cellClass]=\"'text-center'\" [headerClass]=\"'text-center'\" [draggable]=\"false\">\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                    <div class=\"d-flex w-100 justify-content-around\">\n                      <a href=\"javascript:void(0)\" data-toggle=\"modal\" data-target=\"#questionDetailsModal\"\n                        (click)=\"selectOneItem(row, 'view')\">\n                        <i class=\"fas fa-eye\"></i>\n                      </a>\n                      <a href=\"javascript:void(0)\" data-toggle=\"modal\" data-target=\"#questionDetailsModal\"\n                        (click)=\"selectOneItem(row, 'edit')\">\n                        <i class=\"fas fa-edit\"></i>\n                      </a>\n                      <a href=\"javascript:void(0)\" data-toggle=\"modal\" data-target=\"#questionDetailsModal\"\n                        (click)=\"selectOneItem(row, 'delete')\">\n                        <i class=\"fas fa-trash-alt\"></i>\n                      </a>\n                    </div>\n                  </ng-template>\n                </ngx-datatable-column>\n\n              </ngx-datatable>\n\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n    <!-- End of Main Content -->\n\n    <app-footer></app-footer>\n\n  </div>\n  <!-- End of Content Wrapper -->\n\n</div>\n<!-- End of Page Wrapper -->\n\n<app-scroll-to-top-button></app-scroll-to-top-button>\n\n<app-logout-modal></app-logout-modal>\n\n<app-question-details-modal *ngIf=\"!!selectedItem\" [selectedItem]=\"selectedItem\" [selectAction]=\"selectAction\"\n  (confirm)=\"onModalConfirmed($event)\" (cancel)=\"clearModalData()\">\n</app-question-details-modal>\n"

/***/ }),

/***/ "./src/app/questions/components/questions/questions.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/questions/components/questions/questions.component.ts ***!
  \***********************************************************************/
/*! exports provided: QuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function() { return QuestionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_core_models_TableSettings_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/models/TableSettings.model */ "./src/app/core/models/TableSettings.model.ts");
/* harmony import */ var src_app_core_services_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/core.service */ "./src/app/core/services/core.service.ts");
/* harmony import */ var src_app_core_services_question_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/question.service */ "./src/app/core/services/question.service.ts");






var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent(core, questionSvc) {
        this.core = core;
        this.questionSvc = questionSvc;
        this.tblStx = new src_app_core_models_TableSettings_model__WEBPACK_IMPORTED_MODULE_3__["TableSettings"]();
        this.searchFilter = '';
        this.itemList = [];
        this.tblStx = this.core.defaultTableSettings;
        this.fetchQuestions();
        this.itemList = __webpack_require__(/*! ../../../../assets/questions.json */ "./src/assets/questions.json");
    }
    QuestionsComponent.prototype.ngOnInit = function () {
    };
    QuestionsComponent.prototype.ngAfterViewInit = function () {
        this.datatable.columnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["ColumnMode"].force;
    };
    QuestionsComponent.prototype.createQuestion = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var newItem, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.questionSvc.createQuestion(item)];
                    case 1:
                        newItem = _a.sent();
                        this.itemList = this.itemList.concat([newItem]);
                        this.fetchQuestions();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    QuestionsComponent.prototype.fetchQuestions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.questionSvc.fetchQuestions()];
                    case 1:
                        res = _a.sent();
                        if (!Array.isArray(res)) {
                            throw res;
                        }
                        this.itemList = res || [];
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    QuestionsComponent.prototype.updateQuestion = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var newItem, error_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.questionSvc.updateQuestion(item)];
                    case 1:
                        newItem = _a.sent();
                        this.fetchQuestions();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    QuestionsComponent.prototype.deleteQuestion = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.questionSvc.deleteQuestion(id)];
                    case 1:
                        _a.sent();
                        this.fetchQuestions();
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        console.log(error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    QuestionsComponent.prototype.selectOneItem = function (item, reason) {
        this.selectedItem = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item);
        this.selectAction = reason;
    };
    QuestionsComponent.prototype.onModalConfirmed = function (item) {
        try {
            switch (this.selectAction) {
                case 'delete':
                    this.deleteQuestion(item._id);
                    break;
                case 'edit':
                    this.updateQuestion(item);
                    break;
                case 'create':
                    this.createQuestion(item);
                    break;
                default:
                    break;
            }
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.clearModalData();
        }
    };
    QuestionsComponent.prototype.clearModalData = function () {
        this.selectAction = null;
        this.selectedItem = null;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datatable'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"])
    ], QuestionsComponent.prototype, "datatable", void 0);
    QuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-questions',
            template: __webpack_require__(/*! ./questions.component.html */ "./src/app/questions/components/questions/questions.component.html"),
            styles: [__webpack_require__(/*! ./questions.component.css */ "./src/app/questions/components/questions/questions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_core_service__WEBPACK_IMPORTED_MODULE_4__["CoreService"],
            src_app_core_services_question_service__WEBPACK_IMPORTED_MODULE_5__["QuestionService"]])
    ], QuestionsComponent);
    return QuestionsComponent;
}());



/***/ }),

/***/ "./src/app/questions/questions-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/questions/questions-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: QuestionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsRoutingModule", function() { return QuestionsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_questions_questions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/questions/questions.component */ "./src/app/questions/components/questions/questions.component.ts");




var routes = [
    {
        path: 'questions',
        children: [
            { path: '', component: _components_questions_questions_component__WEBPACK_IMPORTED_MODULE_3__["QuestionsComponent"] },
        ]
    },
];
var QuestionsRoutingModule = /** @class */ (function () {
    function QuestionsRoutingModule() {
    }
    QuestionsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], QuestionsRoutingModule);
    return QuestionsRoutingModule;
}());



/***/ }),

/***/ "./src/app/questions/questions.module.ts":
/*!***********************************************!*\
  !*** ./src/app/questions/questions.module.ts ***!
  \***********************************************/
/*! exports provided: QuestionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsModule", function() { return QuestionsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_questions_questions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/questions/questions.component */ "./src/app/questions/components/questions/questions.component.ts");
/* harmony import */ var _questions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./questions-routing.module */ "./src/app/questions/questions-routing.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var _components_question_details_modal_question_details_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/question-details-modal/question-details-modal.component */ "./src/app/questions/components/question-details-modal/question-details-modal.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");










var QuestionsModule = /** @class */ (function () {
    function QuestionsModule() {
    }
    QuestionsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_questions_questions_component__WEBPACK_IMPORTED_MODULE_4__["QuestionsComponent"],
                _components_question_details_modal_question_details_modal_component__WEBPACK_IMPORTED_MODULE_8__["QuestionDetailsModalComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _questions_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuestionsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterPipeModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
            ],
            providers: []
        })
    ], QuestionsModule);
    return QuestionsModule;
}());



/***/ }),

/***/ "./src/app/topics/components/topic-details-modal/topic-details-modal.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/topics/components/topic-details-modal/topic-details-modal.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcGljcy9jb21wb25lbnRzL3RvcGljLWRldGFpbHMtbW9kYWwvdG9waWMtZGV0YWlscy1tb2RhbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/topics/components/topic-details-modal/topic-details-modal.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/topics/components/topic-details-modal/topic-details-modal.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"topicDetailsModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">\n          <span *ngIf=\"selectAction === 'view'\">View Topic Details</span>\n          <span *ngIf=\"selectAction === 'edit'\">Edit Topic Details</span>\n          <span *ngIf=\"selectAction === 'delete'\">Delete This Topic?</span>\n        </h5>\n        <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <span *ngIf=\"selectAction === 'delete'\">Are you sure you want to delete this Topic?</span>\n        <div class=\"row no-gutters flex w-100 flex-row flex-wrap\" *ngIf=\"selectAction !== 'delete'\">\n          <div class=\"col-md-6 pr-2\">\n            <label for=\"\" class=\"text-primary\">Topic Name</label>\n            <input type=\"text\" class=\"w-100 form-control form-control-sm\" *ngIf=\"selectAction !== 'view'\"\n              [(ngModel)]=\"selectedItem.name\" />\n            <span class=\"w-100 form-control form-control-sm border-0\" *ngIf=\"selectAction === 'view'\">\n              {{selectedItem.name}}\n            </span>\n          </div>\n          <div class=\"col-md-6 pl-1\">\n            <label for=\"\" class=\"text-primary\">Course Id</label>\n            <input type=\"text\" class=\"w-100 form-control form-control-sm\" *ngIf=\"selectAction !== 'view'\"\n              [(ngModel)]=\"selectedItem.courseId\" />\n            <span class=\"w-100 form-control form-control-sm border-0\" *ngIf=\"selectAction === 'view'\">\n              {{selectedItem.courseId}}\n            </span>\n          </div>\n          <div class=\"col-md-6 pr-2\">\n            <label for=\"\" class=\"text-primary\">Description</label>\n            <input type=\"text\" class=\"w-100 form-control form-control-sm\" *ngIf=\"selectAction !== 'view'\"\n              [(ngModel)]=\"selectedItem.description\" />\n            <span class=\"w-100 form-control form-control-sm border-0\" *ngIf=\"selectAction === 'view'\">\n              {{selectedItem.description}}\n            </span>\n          </div>\n          <div class=\"col-md-6 pl-1\">\n            <label for=\"\" class=\"text-primary\">Created By</label>\n            <input type=\"text\" class=\"w-100 form-control form-control-sm\" *ngIf=\"selectAction !== 'view'\"\n              [(ngModel)]=\"selectedItem.createdBy\" />\n            <span class=\"w-100 form-control form-control-sm border-0\" *ngIf=\"selectAction === 'view'\">\n              {{selectedItem.createdBy}}\n            </span>\n          </div>\n          <div class=\"col-md-6 pr-2\">\n            <label for=\"\" class=\"text-primary\">Created At</label>\n            <input type=\"text\" class=\"w-100 form-control form-control-sm\" *ngIf=\"selectAction !== 'view'\"\n              [(ngModel)]=\"selectedItem.createdBy\" />\n            <span class=\"w-100 form-control form-control-sm border-0\" *ngIf=\"selectAction === 'view'\">\n              {{selectedItem.createdBy}}\n            </span>\n          </div>\n          <div class=\"col-md-6 pl-1\">\n            <label for=\"\" class=\"text-primary\">Last Updated At</label>\n            <input type=\"text\" class=\"w-100 form-control form-control-sm\" *ngIf=\"selectAction !== 'view'\"\n              [(ngModel)]=\"selectedItem.createdBy\" />\n            <span class=\"w-100 form-control form-control-sm border-0\" *ngIf=\"selectAction === 'view'\">\n              {{selectedItem.createdBy}}\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button class=\"btn btn-secondary\" type=\"button\" (click)=\"close()\"\n          data-dismiss=\"modal\" *ngIf=\"selectAction !== 'view'\">Cancel</button>\n        <button class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"action()\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/topics/components/topic-details-modal/topic-details-modal.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/topics/components/topic-details-modal/topic-details-modal.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TopicDetailsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicDetailsModalComponent", function() { return TopicDetailsModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_models_Topic_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/models/Topic.model */ "./src/app/core/models/Topic.model.ts");
/* harmony import */ var src_app_core_services_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/core.service */ "./src/app/core/services/core.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");





var TopicDetailsModalComponent = /** @class */ (function () {
    function TopicDetailsModalComponent(core, auth) {
        this.core = core;
        this.auth = auth;
        this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        if (!this.selectedItem) {
            this.setTopicAuthor();
        }
    }
    TopicDetailsModalComponent.prototype.ngOnInit = function () { };
    TopicDetailsModalComponent.prototype.setTopicAuthor = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var item, thisUser, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        item = new src_app_core_models_Topic_model__WEBPACK_IMPORTED_MODULE_2__["Topic"]();
                        if (!this.core.thisUser) return [3 /*break*/, 1];
                        _a = this.core.thisUser;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.auth.getThisUser()];
                    case 2:
                        _a = _b.sent();
                        _b.label = 3;
                    case 3:
                        thisUser = _a;
                        item.createdBy = thisUser._id;
                        this.selectedItem = item;
                        return [2 /*return*/];
                }
            });
        });
    };
    TopicDetailsModalComponent.prototype.action = function () {
        this.confirm.emit(this.selectedItem);
    };
    TopicDetailsModalComponent.prototype.close = function () {
        this.cancel.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_core_models_Topic_model__WEBPACK_IMPORTED_MODULE_2__["Topic"])
    ], TopicDetailsModalComponent.prototype, "selectedItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TopicDetailsModalComponent.prototype, "selectAction", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TopicDetailsModalComponent.prototype, "confirm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TopicDetailsModalComponent.prototype, "cancel", void 0);
    TopicDetailsModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topic-details-modal',
            template: __webpack_require__(/*! ./topic-details-modal.component.html */ "./src/app/topics/components/topic-details-modal/topic-details-modal.component.html"),
            styles: [__webpack_require__(/*! ./topic-details-modal.component.css */ "./src/app/topics/components/topic-details-modal/topic-details-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"],
            src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], TopicDetailsModalComponent);
    return TopicDetailsModalComponent;
}());



/***/ }),

/***/ "./src/app/topics/components/topics/topics.component.css":
/*!***************************************************************!*\
  !*** ./src/app/topics/components/topics/topics.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcGljcy9jb21wb25lbnRzL3RvcGljcy90b3BpY3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/topics/components/topics/topics.component.html":
/*!****************************************************************!*\
  !*** ./src/app/topics/components/topics/topics.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Wrapper -->\n<div id=\"wrapper\">\n\n  <!-- Sidebar -->\n  <app-sidebar></app-sidebar>\n  <!-- End of Sidebar -->\n\n  <!-- Content Wrapper -->\n  <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n\n    <!-- Main Content -->\n    <div id=\"content\">\n\n      <app-navbar></app-navbar>\n\n      <!-- Begin Page Content -->\n      <div class=\"container-fluid\">\n\n        <!-- Page Heading -->\n        <!-- <h1 class=\"h3 mb-4 text-gray-800\">Topics</h1> -->\n        <!-- <p class=\"mb-4\">Short Description of a topic</p> -->\n\n        <!-- DataTales Example -->\n        <div class=\"card shadow mb-4\">\n          <div class=\"card-header py-3 d-flex justify-content-between\">\n            <h6 class=\"m-0 font-weight-bold text-primary\">Topics</h6>\n            <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-circle btn-primary text-white\" title=\"Add a Topic\"\n              data-toggle=\"modal\" data-target=\"#topicDetailsModal\" (click)=\"selectOneItem(null, 'create')\">\n              <i class=\"fas fa-plus\"></i>\n            </a>\n          </div>\n          <div class=\"card-body\">\n\n            <div class=\"d-flex justify-content-between w-100 mb-2\">\n              <span class=\"d-flex flex-nowrap\">\n                Showing\n                <select class=\"form-control form-control-sm mx-1\" [(ngModel)]=\"tblStx.limit\">\n                  <option *ngFor=\"let opt of tblStx.limitOptions\" [value]=\"opt\">{{opt}}</option>\n                </select>\n                items\n              </span>\n              <span class=\"d-flex flex-nowrap\">\n                <input type=\"search\" class=\"form-control form-control-sm\" [(ngModel)]=\"searchFilter\" />\n              </span>\n            </div>\n\n            <div class=\"table-responsive border\">\n\n              <ngx-datatable #datatable [rows]=\"itemList | filterBy: { name: searchFilter }\" class=\"bootstrap\"\n                [headerHeight]=\"tblStx.headerHeight\" [limit]=\"tblStx.limit\" [columnMode]=\"tblStx.columnMode\"\n                [footerHeight]=\"tblStx.footerHeight\" [rowHeight]=\"tblStx.rowHeight\" [trackByProp]=\"'_id'\"\n                [loadingIndicator]=\"tblStx.loadingIndicator\" [scrollbarH]=\"tblStx.scrollbarH\"\n                [reorderable]=\"tblStx.reorderable\">\n\n                <ngx-datatable-column name=\"#\" [flexGrow]=\"10\" [maxWidth]=\"50\" [cellClass]=\"'text-right'\"\n                  [headerClass]=\"'text-right'\" [sortable]=\"false\" [draggable]=\"false\">\n                  <ng-template let-rowIndex=\"rowIndex\" ngx-datatable-cell-template>\n                    <strong>{{rowIndex + 1}}</strong>\n                  </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Name\" prop=\"name\" [flexGrow]=\"30\">\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Description\" prop=\"description\" [flexGrow]=\"60\">\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Topic ID\" prop=\"_id\" [flexGrow]=\"25\">\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Actions\" [sortable]=\"false\" [flexGrow]=\"20\" [maxWidth]=\"100\"\n                  [cellClass]=\"'text-center'\" [headerClass]=\"'text-center'\" [draggable]=\"false\">\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                    <div class=\"d-flex w-100 justify-content-around\">\n                      <a href=\"javascript:void(0)\" data-toggle=\"modal\" data-target=\"#topicDetailsModal\"\n                        (click)=\"selectOneItem(row, 'view')\">\n                        <i class=\"fas fa-eye\"></i>\n                      </a>\n                      <a href=\"javascript:void(0)\" data-toggle=\"modal\" data-target=\"#topicDetailsModal\"\n                        (click)=\"selectOneItem(row, 'edit')\">\n                        <i class=\"fas fa-edit\"></i>\n                      </a>\n                      <a href=\"javascript:void(0)\" data-toggle=\"modal\" data-target=\"#topicDetailsModal\"\n                        (click)=\"selectOneItem(row, 'delete')\">\n                        <i class=\"fas fa-trash-alt\"></i>\n                      </a>\n                    </div>\n                  </ng-template>\n                </ngx-datatable-column>\n\n              </ngx-datatable>\n\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n    <!-- End of Main Content -->\n\n    <app-footer></app-footer>\n\n  </div>\n  <!-- End of Content Wrapper -->\n\n</div>\n<!-- End of Page Wrapper -->\n\n<app-scroll-to-top-button></app-scroll-to-top-button>\n\n<app-logout-modal></app-logout-modal>\n\n<app-topic-details-modal *ngIf=\"!!selectedItem\" [selectedItem]=\"selectedItem\" [selectAction]=\"selectAction\"\n  (confirm)=\"onModalConfirmed($event)\" (cancel)=\"clearModalData()\">\n</app-topic-details-modal>\n"

/***/ }),

/***/ "./src/app/topics/components/topics/topics.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/topics/components/topics/topics.component.ts ***!
  \**************************************************************/
/*! exports provided: TopicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicsComponent", function() { return TopicsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_core_models_TableSettings_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/models/TableSettings.model */ "./src/app/core/models/TableSettings.model.ts");
/* harmony import */ var src_app_core_services_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/core.service */ "./src/app/core/services/core.service.ts");
/* harmony import */ var src_app_core_services_topic_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/topic.service */ "./src/app/core/services/topic.service.ts");






var TopicsComponent = /** @class */ (function () {
    function TopicsComponent(core, topicSvc) {
        this.core = core;
        this.topicSvc = topicSvc;
        this.tblStx = new src_app_core_models_TableSettings_model__WEBPACK_IMPORTED_MODULE_3__["TableSettings"]();
        this.searchFilter = '';
        this.itemList = [];
        this.tblStx = this.core.defaultTableSettings;
        this.fetchTopics();
        // this.itemList = require('../../../../assets/topics.json');
    }
    TopicsComponent.prototype.ngOnInit = function () {
    };
    TopicsComponent.prototype.ngAfterViewInit = function () {
        this.datatable.columnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["ColumnMode"].force;
    };
    TopicsComponent.prototype.createTopic = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var newItem, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.topicSvc.createTopic(item)];
                    case 1:
                        newItem = _a.sent();
                        this.itemList = this.itemList.concat([newItem]);
                        this.fetchTopics();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TopicsComponent.prototype.fetchTopics = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.topicSvc.fetchTopics()];
                    case 1:
                        res = _a.sent();
                        if (!Array.isArray(res)) {
                            throw res;
                        }
                        this.itemList = res || [];
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TopicsComponent.prototype.updateTopic = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var newItem, error_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.topicSvc.updateTopic(item)];
                    case 1:
                        newItem = _a.sent();
                        this.fetchTopics();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TopicsComponent.prototype.deleteTopic = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.topicSvc.deleteTopic(id)];
                    case 1:
                        _a.sent();
                        this.fetchTopics();
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        console.log(error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TopicsComponent.prototype.selectOneItem = function (item, reason) {
        this.selectedItem = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item);
        this.selectAction = reason;
    };
    TopicsComponent.prototype.onModalConfirmed = function (item) {
        try {
            switch (this.selectAction) {
                case 'delete':
                    this.deleteTopic(item._id);
                    break;
                case 'edit':
                    this.updateTopic(item);
                    break;
                case 'create':
                    this.createTopic(item);
                    break;
                default:
                    break;
            }
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.clearModalData();
        }
    };
    TopicsComponent.prototype.clearModalData = function () {
        this.selectAction = null;
        this.selectedItem = null;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datatable'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"])
    ], TopicsComponent.prototype, "datatable", void 0);
    TopicsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topics',
            template: __webpack_require__(/*! ./topics.component.html */ "./src/app/topics/components/topics/topics.component.html"),
            styles: [__webpack_require__(/*! ./topics.component.css */ "./src/app/topics/components/topics/topics.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_core_service__WEBPACK_IMPORTED_MODULE_4__["CoreService"],
            src_app_core_services_topic_service__WEBPACK_IMPORTED_MODULE_5__["TopicService"]])
    ], TopicsComponent);
    return TopicsComponent;
}());



/***/ }),

/***/ "./src/app/topics/topics-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/topics/topics-routing.module.ts ***!
  \*************************************************/
/*! exports provided: TopicsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicsRoutingModule", function() { return TopicsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_topics_topics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/topics/topics.component */ "./src/app/topics/components/topics/topics.component.ts");




var routes = [
    {
        path: 'topics',
        children: [
            { path: '', component: _components_topics_topics_component__WEBPACK_IMPORTED_MODULE_3__["TopicsComponent"] },
        ]
    },
];
var TopicsRoutingModule = /** @class */ (function () {
    function TopicsRoutingModule() {
    }
    TopicsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TopicsRoutingModule);
    return TopicsRoutingModule;
}());



/***/ }),

/***/ "./src/app/topics/topics.module.ts":
/*!*****************************************!*\
  !*** ./src/app/topics/topics.module.ts ***!
  \*****************************************/
/*! exports provided: TopicsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicsModule", function() { return TopicsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_topics_topics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/topics/topics.component */ "./src/app/topics/components/topics/topics.component.ts");
/* harmony import */ var _topics_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./topics-routing.module */ "./src/app/topics/topics-routing.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var _components_topic_details_modal_topic_details_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/topic-details-modal/topic-details-modal.component */ "./src/app/topics/components/topic-details-modal/topic-details-modal.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");










var TopicsModule = /** @class */ (function () {
    function TopicsModule() {
    }
    TopicsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_topics_topics_component__WEBPACK_IMPORTED_MODULE_4__["TopicsComponent"],
                _components_topic_details_modal_topic_details_modal_component__WEBPACK_IMPORTED_MODULE_8__["TopicDetailsModalComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _topics_routing_module__WEBPACK_IMPORTED_MODULE_5__["TopicsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterPipeModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
            ],
            providers: []
        })
    ], TopicsModule);
    return TopicsModule;
}());



/***/ }),

/***/ "./src/assets/courses.json":
/*!*********************************!*\
  !*** ./src/assets/courses.json ***!
  \*********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, default */
/***/ (function(module) {

module.exports = [{"name":"Tiger Nixon","description":"System Architect","createdBy":"Edinburgh","courseCode":"61","Start date":"2011/04/25","_id":"$320,800"},{"name":"Garrett Winters","description":"Accountant","createdBy":"Tokyo","courseCode":"63","Start date":"2011/07/25","_id":"$170,750"},{"name":"Ashton Cox","description":"Junior Technical Author","createdBy":"San Francisco","courseCode":"66","Start date":"2009/01/12","_id":"$86,000"},{"name":"Cedric Kelly","description":"Senior Javascript Developer","createdBy":"Edinburgh","courseCode":"22","Start date":"2012/03/29","_id":"$433,060"},{"name":"Airi Satou","description":"Accountant","createdBy":"Tokyo","courseCode":"33","Start date":"2008/11/28","_id":"$162,700"},{"name":"Brielle Williamson","description":"Integration Specialist","createdBy":"New York","courseCode":"61","Start date":"2012/12/02","_id":"$372,000"},{"name":"Herrod Chandler","description":"Sales Assistant","createdBy":"San Francisco","courseCode":"59","Start date":"2012/08/06","_id":"$137,500"},{"name":"Rhona Davidson","description":"Integration Specialist","createdBy":"Tokyo","courseCode":"55","Start date":"2010/10/14","_id":"$327,900"},{"name":"Colleen Hurst","description":"Javascript Developer","createdBy":"San Francisco","courseCode":"39","Start date":"2009/09/15","_id":"$205,500"},{"name":"Sonya Frost","description":"Software Engineer","createdBy":"Edinburgh","courseCode":"23","Start date":"2008/12/13","_id":"$103,600"},{"name":"Jena Gaines","description":"Office Manager","createdBy":"London","courseCode":"30","Start date":"2008/12/19","_id":"$90,560"},{"name":"Quinn Flynn","description":"Support Lead","createdBy":"Edinburgh","courseCode":"22","Start date":"2013/03/03","_id":"$342,000"},{"name":"Charde Marshall","description":"Regional Director","createdBy":"San Francisco","courseCode":"36","Start date":"2008/10/16","_id":"$470,600"},{"name":"Haley Kennedy","description":"Senior Marketing Designer","createdBy":"London","courseCode":"43","Start date":"2012/12/18","_id":"$313,500"},{"name":"Tatyana Fitzpatrick","description":"Regional Director","createdBy":"London","courseCode":"19","Start date":"2010/03/17","_id":"$385,750"},{"name":"Michael Silva","description":"Marketing Designer","createdBy":"London","courseCode":"66","Start date":"2012/11/27","_id":"$198,500"},{"name":"Paul Byrd","description":"Chief Financial Officer (CFO)","createdBy":"New York","courseCode":"64","Start date":"2010/06/09","_id":"$725,000"},{"name":"Gloria Little","description":"Systems Administrator","createdBy":"New York","courseCode":"59","Start date":"2009/04/10","_id":"$237,500"},{"name":"Bradley Greer","description":"Software Engineer","createdBy":"London","courseCode":"41","Start date":"2012/10/13","_id":"$132,000"},{"name":"Dai Rios","description":"Personnel Lead","createdBy":"Edinburgh","courseCode":"35","Start date":"2012/09/26","_id":"$217,500"},{"name":"Jenette Caldwell","description":"Development Lead","createdBy":"New York","courseCode":"30","Start date":"2011/09/03","_id":"$345,000"},{"name":"Yuri Berry","description":"Chief Marketing Officer (CMO)","createdBy":"New York","courseCode":"40","Start date":"2009/06/25","_id":"$675,000"},{"name":"Caesar Vance","description":"Pre-Sales Support","createdBy":"New York","courseCode":"21","Start date":"2011/12/12","_id":"$106,450"},{"name":"Doris Wilder","description":"Sales Assistant","createdBy":"Sidney","courseCode":"23","Start date":"2010/09/20","_id":"$85,600"},{"name":"Angelica Ramos","description":"Chief Executive Officer (CEO)","createdBy":"London","courseCode":"47","Start date":"2009/10/09","_id":"$1,200,000"},{"name":"Gavin Joyce","description":"Developer","createdBy":"Edinburgh","courseCode":"42","Start date":"2010/12/22","_id":"$92,575"},{"name":"Jennifer Chang","description":"Regional Director","createdBy":"Singapore","courseCode":"28","Start date":"2010/11/14","_id":"$357,650"},{"name":"Brenden Wagner","description":"Software Engineer","createdBy":"San Francisco","courseCode":"28","Start date":"2011/06/07","_id":"$206,850"},{"name":"Fiona Green","description":"Chief Operating Officer (COO)","createdBy":"San Francisco","courseCode":"48","Start date":"2010/03/11","_id":"$850,000"},{"name":"Shou Itou","description":"Regional Marketing","createdBy":"Tokyo","courseCode":"20","Start date":"2011/08/14","_id":"$163,000"},{"name":"Michelle House","description":"Integration Specialist","createdBy":"Sidney","courseCode":"37","Start date":"2011/06/02","_id":"$95,400"},{"name":"Suki Burks","description":"Developer","createdBy":"London","courseCode":"53","Start date":"2009/10/22","_id":"$114,500"},{"name":"Prescott Bartlett","description":"Technical Author","createdBy":"London","courseCode":"27","Start date":"2011/05/07","_id":"$145,000"},{"name":"Gavin Cortez","description":"Team Leader","createdBy":"San Francisco","courseCode":"22","Start date":"2008/10/26","_id":"$235,500"},{"name":"Martena Mccray","description":"Post-Sales support","createdBy":"Edinburgh","courseCode":"46","Start date":"2011/03/09","_id":"$324,050"},{"name":"Unity Butler","description":"Marketing Designer","createdBy":"San Francisco","courseCode":"47","Start date":"2009/12/09","_id":"$85,675"},{"name":"Howard Hatfield","description":"Office Manager","createdBy":"San Francisco","courseCode":"51","Start date":"2008/12/16","_id":"$164,500"},{"name":"Hope Fuentes","description":"Secretary","createdBy":"San Francisco","courseCode":"41","Start date":"2010/02/12","_id":"$109,850"},{"name":"Vivian Harrell","description":"Financial Controller","createdBy":"San Francisco","courseCode":"62","Start date":"2009/02/14","_id":"$452,500"},{"name":"Timothy Mooney","description":"Office Manager","createdBy":"London","courseCode":"37","Start date":"2008/12/11","_id":"$136,200"},{"name":"Jackson Bradshaw","description":"Director","createdBy":"New York","courseCode":"65","Start date":"2008/09/26","_id":"$645,750"},{"name":"Olivia Liang","description":"Support Engineer","createdBy":"Singapore","courseCode":"64","Start date":"2011/02/03","_id":"$234,500"},{"name":"Bruno Nash","description":"Software Engineer","createdBy":"London","courseCode":"38","Start date":"2011/05/03","_id":"$163,500"},{"name":"Sakura Yamamoto","description":"Support Engineer","createdBy":"Tokyo","courseCode":"37","Start date":"2009/08/19","_id":"$139,575"},{"name":"Thor Walton","description":"Developer","createdBy":"New York","courseCode":"61","Start date":"2013/08/11","_id":"$98,540"},{"name":"Finn Camacho","description":"Support Engineer","createdBy":"San Francisco","courseCode":"47","Start date":"2009/07/07","_id":"$87,500"},{"name":"Serge Baldwin","description":"Data Coordinator","createdBy":"Singapore","courseCode":"64","Start date":"2012/04/09","_id":"$138,575"},{"name":"Zenaida Frank","description":"Software Engineer","createdBy":"New York","courseCode":"63","Start date":"2010/01/04","_id":"$125,250"},{"name":"Zorita Serrano","description":"Software Engineer","createdBy":"San Francisco","courseCode":"56","Start date":"2012/06/01","_id":"$115,000"},{"name":"Jennifer Acosta","description":"Junior Javascript Developer","createdBy":"Edinburgh","courseCode":"43","Start date":"2013/02/01","_id":"$75,650"},{"name":"Cara Stevens","description":"Sales Assistant","createdBy":"New York","courseCode":"46","Start date":"2011/12/06","_id":"$145,600"},{"name":"Hermione Butler","description":"Regional Director","createdBy":"London","courseCode":"47","Start date":"2011/03/21","_id":"$356,250"},{"name":"Lael Greer","description":"Systems Administrator","createdBy":"London","courseCode":"21","Start date":"2009/02/27","_id":"$103,500"},{"name":"Jonas Alexander","description":"Developer","createdBy":"San Francisco","courseCode":"30","Start date":"2010/07/14","_id":"$86,500"},{"name":"Shad Decker","description":"Regional Director","createdBy":"Edinburgh","courseCode":"51","Start date":"2008/11/13","_id":"$183,000"},{"name":"Michael Bruce","description":"Javascript Developer","createdBy":"Singapore","courseCode":"29","Start date":"2011/06/27","_id":"$183,000"},{"name":"Donna Snider","description":"Customer Support","createdBy":"New York","courseCode":"27","Start date":"2011/01/25","_id":"$112,000"}];

/***/ }),

/***/ "./src/assets/questions.json":
/*!***********************************!*\
  !*** ./src/assets/questions.json ***!
  \***********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, default */
/***/ (function(module) {

module.exports = [{"name":"Tiger Nixon","description":"System Architect","createdBy":"Edinburgh","courseCode":"61","Start date":"2011/04/25","_id":"$320,800"},{"name":"Garrett Winters","description":"Accountant","createdBy":"Tokyo","courseCode":"63","Start date":"2011/07/25","_id":"$170,750"},{"name":"Ashton Cox","description":"Junior Technical Author","createdBy":"San Francisco","courseCode":"66","Start date":"2009/01/12","_id":"$86,000"},{"name":"Cedric Kelly","description":"Senior Javascript Developer","createdBy":"Edinburgh","courseCode":"22","Start date":"2012/03/29","_id":"$433,060"},{"name":"Airi Satou","description":"Accountant","createdBy":"Tokyo","courseCode":"33","Start date":"2008/11/28","_id":"$162,700"},{"name":"Brielle Williamson","description":"Integration Specialist","createdBy":"New York","courseCode":"61","Start date":"2012/12/02","_id":"$372,000"},{"name":"Herrod Chandler","description":"Sales Assistant","createdBy":"San Francisco","courseCode":"59","Start date":"2012/08/06","_id":"$137,500"},{"name":"Rhona Davidson","description":"Integration Specialist","createdBy":"Tokyo","courseCode":"55","Start date":"2010/10/14","_id":"$327,900"},{"name":"Colleen Hurst","description":"Javascript Developer","createdBy":"San Francisco","courseCode":"39","Start date":"2009/09/15","_id":"$205,500"},{"name":"Sonya Frost","description":"Software Engineer","createdBy":"Edinburgh","courseCode":"23","Start date":"2008/12/13","_id":"$103,600"},{"name":"Jena Gaines","description":"Office Manager","createdBy":"London","courseCode":"30","Start date":"2008/12/19","_id":"$90,560"},{"name":"Quinn Flynn","description":"Support Lead","createdBy":"Edinburgh","courseCode":"22","Start date":"2013/03/03","_id":"$342,000"},{"name":"Charde Marshall","description":"Regional Director","createdBy":"San Francisco","courseCode":"36","Start date":"2008/10/16","_id":"$470,600"},{"name":"Haley Kennedy","description":"Senior Marketing Designer","createdBy":"London","courseCode":"43","Start date":"2012/12/18","_id":"$313,500"},{"name":"Tatyana Fitzpatrick","description":"Regional Director","createdBy":"London","courseCode":"19","Start date":"2010/03/17","_id":"$385,750"},{"name":"Michael Silva","description":"Marketing Designer","createdBy":"London","courseCode":"66","Start date":"2012/11/27","_id":"$198,500"},{"name":"Paul Byrd","description":"Chief Financial Officer (CFO)","createdBy":"New York","courseCode":"64","Start date":"2010/06/09","_id":"$725,000"},{"name":"Gloria Little","description":"Systems Administrator","createdBy":"New York","courseCode":"59","Start date":"2009/04/10","_id":"$237,500"},{"name":"Bradley Greer","description":"Software Engineer","createdBy":"London","courseCode":"41","Start date":"2012/10/13","_id":"$132,000"},{"name":"Dai Rios","description":"Personnel Lead","createdBy":"Edinburgh","courseCode":"35","Start date":"2012/09/26","_id":"$217,500"},{"name":"Jenette Caldwell","description":"Development Lead","createdBy":"New York","courseCode":"30","Start date":"2011/09/03","_id":"$345,000"},{"name":"Yuri Berry","description":"Chief Marketing Officer (CMO)","createdBy":"New York","courseCode":"40","Start date":"2009/06/25","_id":"$675,000"},{"name":"Caesar Vance","description":"Pre-Sales Support","createdBy":"New York","courseCode":"21","Start date":"2011/12/12","_id":"$106,450"},{"name":"Doris Wilder","description":"Sales Assistant","createdBy":"Sidney","courseCode":"23","Start date":"2010/09/20","_id":"$85,600"},{"name":"Angelica Ramos","description":"Chief Executive Officer (CEO)","createdBy":"London","courseCode":"47","Start date":"2009/10/09","_id":"$1,200,000"},{"name":"Gavin Joyce","description":"Developer","createdBy":"Edinburgh","courseCode":"42","Start date":"2010/12/22","_id":"$92,575"},{"name":"Jennifer Chang","description":"Regional Director","createdBy":"Singapore","courseCode":"28","Start date":"2010/11/14","_id":"$357,650"},{"name":"Brenden Wagner","description":"Software Engineer","createdBy":"San Francisco","courseCode":"28","Start date":"2011/06/07","_id":"$206,850"},{"name":"Fiona Green","description":"Chief Operating Officer (COO)","createdBy":"San Francisco","courseCode":"48","Start date":"2010/03/11","_id":"$850,000"},{"name":"Shou Itou","description":"Regional Marketing","createdBy":"Tokyo","courseCode":"20","Start date":"2011/08/14","_id":"$163,000"},{"name":"Michelle House","description":"Integration Specialist","createdBy":"Sidney","courseCode":"37","Start date":"2011/06/02","_id":"$95,400"},{"name":"Suki Burks","description":"Developer","createdBy":"London","courseCode":"53","Start date":"2009/10/22","_id":"$114,500"},{"name":"Prescott Bartlett","description":"Technical Author","createdBy":"London","courseCode":"27","Start date":"2011/05/07","_id":"$145,000"},{"name":"Gavin Cortez","description":"Team Leader","createdBy":"San Francisco","courseCode":"22","Start date":"2008/10/26","_id":"$235,500"},{"name":"Martena Mccray","description":"Post-Sales support","createdBy":"Edinburgh","courseCode":"46","Start date":"2011/03/09","_id":"$324,050"},{"name":"Unity Butler","description":"Marketing Designer","createdBy":"San Francisco","courseCode":"47","Start date":"2009/12/09","_id":"$85,675"},{"name":"Howard Hatfield","description":"Office Manager","createdBy":"San Francisco","courseCode":"51","Start date":"2008/12/16","_id":"$164,500"},{"name":"Hope Fuentes","description":"Secretary","createdBy":"San Francisco","courseCode":"41","Start date":"2010/02/12","_id":"$109,850"},{"name":"Vivian Harrell","description":"Financial Controller","createdBy":"San Francisco","courseCode":"62","Start date":"2009/02/14","_id":"$452,500"},{"name":"Timothy Mooney","description":"Office Manager","createdBy":"London","courseCode":"37","Start date":"2008/12/11","_id":"$136,200"},{"name":"Jackson Bradshaw","description":"Director","createdBy":"New York","courseCode":"65","Start date":"2008/09/26","_id":"$645,750"},{"name":"Olivia Liang","description":"Support Engineer","createdBy":"Singapore","courseCode":"64","Start date":"2011/02/03","_id":"$234,500"},{"name":"Bruno Nash","description":"Software Engineer","createdBy":"London","courseCode":"38","Start date":"2011/05/03","_id":"$163,500"},{"name":"Sakura Yamamoto","description":"Support Engineer","createdBy":"Tokyo","courseCode":"37","Start date":"2009/08/19","_id":"$139,575"},{"name":"Thor Walton","description":"Developer","createdBy":"New York","courseCode":"61","Start date":"2013/08/11","_id":"$98,540"},{"name":"Finn Camacho","description":"Support Engineer","createdBy":"San Francisco","courseCode":"47","Start date":"2009/07/07","_id":"$87,500"},{"name":"Serge Baldwin","description":"Data Coordinator","createdBy":"Singapore","courseCode":"64","Start date":"2012/04/09","_id":"$138,575"},{"name":"Zenaida Frank","description":"Software Engineer","createdBy":"New York","courseCode":"63","Start date":"2010/01/04","_id":"$125,250"},{"name":"Zorita Serrano","description":"Software Engineer","createdBy":"San Francisco","courseCode":"56","Start date":"2012/06/01","_id":"$115,000"},{"name":"Jennifer Acosta","description":"Junior Javascript Developer","createdBy":"Edinburgh","courseCode":"43","Start date":"2013/02/01","_id":"$75,650"},{"name":"Cara Stevens","description":"Sales Assistant","createdBy":"New York","courseCode":"46","Start date":"2011/12/06","_id":"$145,600"},{"name":"Hermione Butler","description":"Regional Director","createdBy":"London","courseCode":"47","Start date":"2011/03/21","_id":"$356,250"},{"name":"Lael Greer","description":"Systems Administrator","createdBy":"London","courseCode":"21","Start date":"2009/02/27","_id":"$103,500"},{"name":"Jonas Alexander","description":"Developer","createdBy":"San Francisco","courseCode":"30","Start date":"2010/07/14","_id":"$86,500"},{"name":"Shad Decker","description":"Regional Director","createdBy":"Edinburgh","courseCode":"51","Start date":"2008/11/13","_id":"$183,000"},{"name":"Michael Bruce","description":"Javascript Developer","createdBy":"Singapore","courseCode":"29","Start date":"2011/06/27","_id":"$183,000"},{"name":"Donna Snider","description":"Customer Support","createdBy":"New York","courseCode":"27","Start date":"2011/01/25","_id":"$112,000"}];

/***/ }),

/***/ "./src/assets/users.json":
/*!*******************************!*\
  !*** ./src/assets/users.json ***!
  \*******************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = [{"username":"Admin","email":"administrator@test.com","password":"admin","posUser":"200100","posPassword":"password","posMid":"host","posMidType":"localhost","createdAt":""},{"username":"Faison","email":"glenn@faison.com","password":"glennfaison","posUser":"200100","posPassword":"password","posMid":"host","posMidType":"localhost","createdAt":""},{"username":"Loe","email":"loe@lovedoc.com","password":"loe","posUser":"200100","posPassword":"password","posMid":"host","posMidType":"localhost","createdAt":""}];

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
var environment = {
    production: false
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/osx/Code/Angular/mcq-admin/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map