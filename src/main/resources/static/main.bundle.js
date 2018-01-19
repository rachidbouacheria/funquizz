webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quizz_form_quizz_form_component__ = __webpack_require__("../../../../../src/app/quizz-form/quizz-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'newquizz', component: __WEBPACK_IMPORTED_MODULE_3__quizz_form_quizz_form_component__["a" /* QuizzFormComponent */] },
    { path: 'newquizz/:id', component: __WEBPACK_IMPORTED_MODULE_3__quizz_form_quizz_form_component__["a" /* QuizzFormComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* AppComponent's private CSS styles */\nh1 {\n    font-size: 1.2em;\n    color: #999;\n    margin-bottom: 0;\n  }\n  h2 {\n    font-size: 2em;\n    margin-top: 0;\n    padding-top: 0;\n  }\n  nav a {\n    padding: 5px 10px;\n    text-decoration: none;\n    margin-top: 10px;\n    display: inline-block;\n    background-color: #eee;\n    border-radius: 4px;\n  }\n  nav a:visited, a:link {\n    color: #607D8B;\n  }\n  nav a:hover {\n    color: #039be5;\n    background-color: #CFD8DC;\n  }\n  nav a.active {\n    color: #039be5;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n</div>\n\n<nav>\n  <a routerLink=\"/dashboard\">Dashboard</a>  \n  <a routerLink=\"/newquizz\">New Quizz</a>\n</nav>\n\n<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Fun Quizz';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__quizz_form_quizz_form_component__ = __webpack_require__("../../../../../src/app/quizz-form/quizz-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__quizz_service__ = __webpack_require__("../../../../../src/app/quizz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__quizz_modal_quizz_modal_component__ = __webpack_require__("../../../../../src/app/quizz-modal/quizz-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__quizz_form_quizz_form_component__["a" /* QuizzFormComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__quizz_modal_quizz_modal_component__["a" /* QuizzModalComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__quizz_service__["a" /* QuizzService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100px;\"></div>\n<form (ngSubmit)=\"onSubmit()\" #dashboardForm=\"ngForm\">\n<table class=\"table table-hover\" >\n  <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Description</th>\n      <th scope=\"col\"></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let aQuizz of model; let i = index\">\n      <th scope=\"row\">{{i+1}}    \n      <td><a data-toggle=\"modal\" href=\"#\" (click)=\"open(content, aQuizz);\" onclick=\"return false;\">{{aQuizz.name}} </a></td>\n      <td>{{aQuizz.description}}</td>\n      <td><button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"deleteQuizz(aQuizz.id);\">\n\t         <span class=\"glyphicon glyphicon-remove\"></span> Remove \n\t       </button>\n\t       \n\t       <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"selectQuizz(aQuizz.id);\">\n\t          Edit\n\t       </button>\n\t       \n       </td>\n    </tr>\n  </tbody>\n</table>\n</form>\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{modalQuizz.name}} - {{modalQuizz.description}}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n   <table class =\"intro\" >\n      <thead>\n        <tr>\n          <th scope=\"col\"></th>\n          <th scope=\"col\"></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let question of modalQuizz.questions; let i = index\">\n          <th scope=\"row\"></th>\n          <td>\n        \t\t<table class=\"table intro\" >\n        \t\t\t<tr>                        \t\t\t\t\n        \t\t\t\t<td colspan=\"3\">{{i+1}}) {{question.question}}</td>\n        \t\t\t</tr>\n        \t\t\t<tr *ngFor=\"let response of question.responses; let i = index\">                        \t\t\t\t          \t\t\t\t\n        \t\t\t\t<td width=\"5%\">\n        \t\t\t\t  <i *ngIf=\"response.correct ==='true'\" [ngClass]=\"{'material-icons': response.correct ==='true'}\">correct</i>                        \t\t\t\t\n        \t\t\t\t</td>\n        \t\t\t\t<td width=\"2%\">{{i+1}}</td>           \t\t\t\t\n        \t\t\t\t<td width=\"82%\">{{response.value}}</td> \n        \t\t\t</tr>\n          \t</table>\n          </td>                        \n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quizz_service__ = __webpack_require__("../../../../../src/app/quizz.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(router, quizzService, modalService) {
        this.router = router;
        this.quizzService = quizzService;
        this.modalService = modalService;
        this.modalQuizz = null;
        this.model = null;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quizzService.getHeroes().subscribe(function (newQuizz) {
            _this.model = newQuizz;
        });
    };
    DashboardComponent.prototype.deleteQuizz = function (quizzId) {
        var _this = this;
        this.quizzService.deleteQuizz(quizzId).subscribe(function (res) {
            for (var i = _this.model.length - 1; i >= 0; i--) {
                if (_this.model[i].id == quizzId) {
                    _this.model.splice(i, 1);
                }
            }
        });
    };
    DashboardComponent.prototype.selectQuizz = function (quizzId) {
        this.router.navigate(['newquizz', quizzId]);
        //this.quizzService.selectQuizz(quizzId).subscribe(res => { });
    };
    DashboardComponent.prototype.open = function (content, aQuizz) {
        var _this = this;
        this.modalQuizz = aQuizz;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    DashboardComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__quizz_service__["a" /* QuizzService */], __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mock-quizz.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockQuizz; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__quizz_response__ = __webpack_require__("../../../../../src/app/quizz-response.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quizz_question__ = __webpack_require__("../../../../../src/app/quizz-question.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quizz__ = __webpack_require__("../../../../../src/app/quizz.ts");



var MockQuizz = (function () {
    function MockQuizz() {
    }
    MockQuizz.prototype.getMockNewQuestion = function () {
        var resp1 = new __WEBPACK_IMPORTED_MODULE_0__quizz_response__["a" /* QuizzResponse */]('R4', 'false');
        var resp2 = new __WEBPACK_IMPORTED_MODULE_0__quizz_response__["a" /* QuizzResponse */]('R5', 'false');
        var resp3 = new __WEBPACK_IMPORTED_MODULE_0__quizz_response__["a" /* QuizzResponse */]('R6', 'false');
        var resp4 = new __WEBPACK_IMPORTED_MODULE_0__quizz_response__["a" /* QuizzResponse */]('R7', 'true');
        var responses = [resp1, resp2, resp3, resp4];
        var newQuestion = new __WEBPACK_IMPORTED_MODULE_1__quizz_question__["a" /* QuizzQuestion */]('Quelle est la couleur du cheval blanc d henry IV?', responses);
        return newQuestion;
    };
    MockQuizz.prototype.getNewQuestion = function () {
        var resp1 = new __WEBPACK_IMPORTED_MODULE_0__quizz_response__["a" /* QuizzResponse */]('', 'false');
        var resp2 = new __WEBPACK_IMPORTED_MODULE_0__quizz_response__["a" /* QuizzResponse */]('', 'false');
        var resp3 = new __WEBPACK_IMPORTED_MODULE_0__quizz_response__["a" /* QuizzResponse */]('', 'false');
        var resp4 = new __WEBPACK_IMPORTED_MODULE_0__quizz_response__["a" /* QuizzResponse */]('', 'false');
        var responses = [resp1, resp2, resp3, resp4];
        var newQuestion = new __WEBPACK_IMPORTED_MODULE_1__quizz_question__["a" /* QuizzQuestion */]('', responses);
        return newQuestion;
    };
    MockQuizz.prototype.getMockQuizz = function () {
        var quizz = new __WEBPACK_IMPORTED_MODULE_2__quizz__["a" /* Quizz */](0, '', '', []);
        return quizz;
    };
    return MockQuizz;
}());



/***/ }),

/***/ "../../../../../src/app/quizz-form/quizz-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n  }\n  \n  .ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quizz-form/quizz-form.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n      <!-- <div [hidden]=\"submitted\"> -->\n      <h1>New Quizz</h1>\n      <form (ngSubmit)=\"onSubmit()\" #quizzForm=\"ngForm\">\n\n          <div class=\"row\">\n              <div class=\"form-group col-md-9\">      \n              </div>\n              <div class=\"form-group col-md-3\">\n                  <button type=\"submit\" class=\"btn btn-success\" (click)=\"addQuizz()\" [disabled]=\"!quizzForm.form.valid\">Save Quizz</button>       \n\n              </div>\n          </div>     \n\n          <div class=\"row\">\n              <div class=\"form-group col-md-4\">        \n                  <input type=\"text\" class=\"form-control\" id=\"name\"\n                  required\n                  [(ngModel)]=\"model.name\" name=\"name\"\n                  #name=\"ngModel\" placeholder=\"Quizz Name\">\n                  <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\"> Name is required</div>\n              </div>\n              <div class=\"form-group col-md-8\">\n                    <div class=\"form-group\">\n                      \n                        <input type=\"text\" class=\"form-control\" id=\"desc\"\n                              required\n                              [(ngModel)]=\"model.description\" name=\"desc\"\n                              #desc=\"ngModel\"\n                              placeholder=\"Quizz Description\">\n                        <div [hidden]=\"desc.valid || desc.pristine\"\n                            class=\"alert alert-danger\">\n                          Name is required\n                        </div>\n                    </div>\n              </div>\n              \n          </div>\n\n          </form>\n          <form (ngSubmit)=\"onSubmit()\" #questionForm=\"ngForm\">\n          <div class=\"row\">\n\n              <div class=\"form-group col-md-12\">\n                  <label for=\"newQuestion\">Question</label>\n                \n                  <input type=\"text\" class=\"form-control\" id=\"aNewQuestion\"\n                          required\n                          [(ngModel)]=\"newQuestion.question\" name=\"aNewQuestion\"\n                          #aNewQuestion=\"ngModel\" placeholder=\"Question\">\n                    <div [hidden]=\"aNewQuestion.valid || aNewQuestion.pristine\"\n                        class=\"alert alert-danger\">\n                      Question is required\n                    </div>\n              </div>\n              <div class=\"form-group col-md-10\">\n                  <label for=\"response0\">Response</label>\n                  <input type=\"text\" class=\"form-control\" id=\"response0\"\n                          required\n                          [(ngModel)]=\"newQuestion.responses[0].value\" name=\"response0\"\n                          #response0=\"ngModel\" placeholder=\"Response 1\">\n                  <div [hidden]=\"response0.valid || response0.pristine\"\n                        class=\"alert alert-danger\">\n                      Response is required\n                  </div>\n              </div>       \n              <div class=\"form-group col-md-2\">\n                  <label for=\"inputState\">Is Correct</label>\n                  <select name=\"isCorrect0\" id=\"isCorrect0\" class=\"form-control\" [(ngModel)]=\"newQuestion.responses[0].correct\">                \n                      <option *ngFor=\"let aCorrectValue of correctValues\"\n                        [value]=\"aCorrectValue\" >{{aCorrectValue}}</select>\n              </div>\n\n              <div class=\"form-group col-md-10\">\n                  <input type=\"text\" class=\"form-control\" id=\"response1\"\n                          required\n                          [(ngModel)]=\"newQuestion.responses[1].value\" name=\"response1\"\n                          #response1=\"ngModel\" placeholder=\"Response 2\">\n                  <div [hidden]=\"response1.valid || response1.pristine\"\n                        class=\"alert alert-danger\">\n                      Response is required\n                  </div>\n                </div>      \n                <div class=\"form-group col-md-2\">\n                    <select name=\"isCorrect1\" id=\"isCorrect1\" class=\"form-control\" [(ngModel)]=\"newQuestion.responses[1].correct\">                \n                      <option *ngFor=\"let aCorrectValue of correctValues\"\n                        [value]=\"aCorrectValue\" > \n                        {{aCorrectValue}}\n                    </select>\n                </div>\n\n                <div class=\"form-group col-md-10\">\n                    <input type=\"text\" class=\"form-control\" id=\"response2\"\n                            required\n                            [(ngModel)]=\"newQuestion.responses[2].value\" name=\"response2\"\n                            #response2=\"ngModel\" placeholder=\"Response 3\">\n                    <div [hidden]=\"response2.valid || response2.pristine\"\n                          class=\"alert alert-danger\">\n                        Response is required\n                    </div>\n                  </div>      \n                  <div class=\"form-group col-md-2\">\n                      <select name=\"isCorrect2\" id=\"isCorrect2\" class=\"form-control\" [(ngModel)]=\"newQuestion.responses[2].correct\">                \n                        <option *ngFor=\"let aCorrectValue of correctValues\"\n                          [value]=\"aCorrectValue\" > \n                          {{aCorrectValue}}\n                      </select>\n                  </div>\n\n                  <div class=\"form-group col-md-10\">\n                      <input type=\"text\" class=\"form-control\" id=\"response3\"\n                              required\n                              [(ngModel)]=\"newQuestion.responses[3].value\" name=\"response3\"\n                              #response3=\"ngModel\" placeholder=\"Response 4\">\n                      <div [hidden]=\"response3.valid || response3.pristine\"\n                            class=\"alert alert-danger\">\n                          Response is required\n                      </div>\n                    </div>      \n                    <div class=\"form-group col-md-2\">\n                        <select name=\"isCorrect3\" id=\"isCorrect3\" class=\"form-control\" [(ngModel)]=\"newQuestion.responses[3].correct\">                \n                          <option *ngFor=\"let aCorrectValue of correctValues\" [value]=\"aCorrectValue\" >{{aCorrectValue}}</option>\n                        </select>\n                    </div>\n\n              <div class=\"form-group col-md-3\">\n                  <button type=\"submit\" \n                  (click)=\"addQuestion(questionForm);\"\n                  \n                  class=\"btn btn-primary\" [disabled]=\"!questionForm.form.valid\">Add Question</button>  \n              </div>\n              <div class=\"form-group col-md-9\"></div> \n          </div>\n\n          <div class=\"form-row\">\n              <div class=\"form-group col-md-12\">\n\n                <table class =\"intro\" >\n                    <thead>\n                      <tr>\n                        <th scope=\"col\"></th>\n                        <th scope=\"col\"></th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let question of model.questions; let i = index\">\n                        <th scope=\"row\"></th>\n                        <td>\n                        \t\t<table class=\"table intro\" >\n                        \t\t\t<tr>\n                        \t\t\t\t\n                        \t\t\t\t<td colspan=\"3\">{{i+1}}) {{question.question}}</td>\n                        \t\t\t\t<td width=\"2%\">\n\t\t\t                        \t\t<a data-toggle=\"modal\" href=\"#\" (click)=\"removeQuestion(i);\" onclick=\"return false;\"><i class=\"material-icons\">delete</i> </a>\n\t\t\t                        </td>\n                        \t\t\t\t\n                        \t\t\t</tr>\n                        \t\t\t<tr *ngFor=\"let response of question.responses; let i = index\">\n                        \t\t\t\t\n                        \t\t\t\t\n                        \t\t\t\t<td width=\"5%\">\n                        \t\t\t\t  <i *ngIf=\"response.correct ==='true'\" [ngClass]=\"{'material-icons': response.correct ==='true'}\">correct</i>                        \t\t\t\t\n                        \t\t\t\t</td>\n                        \t\t\t\t<td width=\"2%\">{{i+1}}</td> \n                        \t\t\t\t\n                        \t\t\t\t<td width=\"82%\">{{response.value}}</td> \n                        \t\t\t\t\n                        \t\t\t</tr>\n                        \t\t</table>\n                        </td>\n                        \n                      </tr>\n                    </tbody>\n                  </table>\n              </div>\n          </div>\n        </form>\n\n       \n  <!-- </div> -->\n\n\n  \n  <!-- <div [hidden]=\"!submitted\">\n    <h2>You submitted the following:</h2>\n    <div class=\"row\">\n      <div class=\"col-xs-3\">Name</div>\n      <div class=\"col-xs-9  pull-left\">{{ model.name }}</div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-3\">Description</div>\n        <div class=\"col-xs-9  pull-left\">{{ model.description }}</div>\n      </div>\n    <br>\n    <button class=\"btn btn-primary\" (click)=\"submitted=false\">Edit</button>\n  </div> -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/quizz-form/quizz-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizzFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quizz_service__ = __webpack_require__("../../../../../src/app/quizz.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizzFormComponent = (function () {
    function QuizzFormComponent(router, route, quizzService) {
        this.router = router;
        this.route = route;
        this.quizzService = quizzService;
        this.isUpdate = false;
        this.submitted = false;
        this.newQuestion = null;
        this.model = null;
        this.httpModel = null;
        this.correctValues = ['false', 'true'];
    }
    QuizzFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    QuizzFormComponent.prototype.addQuizz = function () {
        var _this = this;
        if (this.isUpdate) {
            this.quizzService.updateQuizz(this.model).subscribe(function (savedQuizz) {
                _this.router.navigate(['/dashboard']);
            });
        }
        else {
            this.quizzService.addQuizz(this.model).subscribe(function (savedQuizz) {
                _this.router.navigate(['/dashboard']);
            });
        }
    };
    QuizzFormComponent.prototype.addQuestion = function (questionForm) {
        var c1 = this.newQuestion.responses[0].correct;
        var c2 = this.newQuestion.responses[1].correct;
        var c3 = this.newQuestion.responses[2].correct;
        var c4 = this.newQuestion.responses[3].correct;
        if (c1 == c2 && c3 == c4 && c1 == c3) {
            if (c1 == 'false') {
                alert('At least one response must be correct');
            }
            else {
                alert('responses cannot all be correct');
            }
            return;
        }
        var numberOfCorrect = 0;
        if (c1 == 'true')
            numberOfCorrect++;
        if (c2 == 'true')
            numberOfCorrect++;
        if (c3 == 'true')
            numberOfCorrect++;
        if (c4 == 'true')
            numberOfCorrect++;
        if (numberOfCorrect > 1) {
            alert('You can only have one correct response. You have: 333' + numberOfCorrect);
            return;
        }
        // this.model.addQuestion(this.newQuestion);
        this.quizzService.addQuestion(this.model, this.newQuestion);
        //         var myJSON = JSON.stringify(this.model);
        //        console.log("============================");
        //        console.log(myJSON);
        //        console.log("============================");
        this.submitted = false;
        questionForm.reset();
        this.resetNewQuestion();
    };
    QuizzFormComponent.prototype.removeQuestion = function (questionIndex) {
        //this.model.removeQuestion(questionIndex);
        this.quizzService.removeQuestion(this.model, questionIndex);
    };
    QuizzFormComponent.prototype.resetNewQuestion = function () {
        this.newQuestion = this.quizzService.getNewQuestion();
    };
    QuizzFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newQuestion = this.quizzService.getNewQuestion();
        this.route.params.subscribe(function (params) {
            var myQuizzId = params['id'];
            if (myQuizzId) {
                _this.isUpdate = true;
                _this.quizzService.selectQuizz(myQuizzId).subscribe(function (res) {
                    _this.model = res;
                });
            }
            else {
                _this.isUpdate = false;
                _this.model = _this.quizzService.getEmptyQuizz();
            }
        });
    };
    QuizzFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-quizz-form',
            template: __webpack_require__("../../../../../src/app/quizz-form/quizz-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/quizz-form/quizz-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__quizz_service__["a" /* QuizzService */]])
    ], QuizzFormComponent);
    return QuizzFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/quizz-modal/quizz-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Modal title</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>One fine body&hellip;</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n\n<button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\">Launch demo modal</button>\n\n\n\n<pre>{{closeResult}}</pre>"

/***/ }),

/***/ "../../../../../src/app/quizz-modal/quizz-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizzModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuizzModalComponent = (function () {
    function QuizzModalComponent(modalService) {
        this.modalService = modalService;
    }
    QuizzModalComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    QuizzModalComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    QuizzModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-quizz-modal',
            template: __webpack_require__("../../../../../src/app/quizz-modal/quizz-modal.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], QuizzModalComponent);
    return QuizzModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/quizz-question.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizzQuestion; });
var QuizzQuestion = (function () {
    function QuizzQuestion(question, responses) {
        this.question = question;
        this.responses = responses;
    }
    return QuizzQuestion;
}());



/***/ }),

/***/ "../../../../../src/app/quizz-response.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizzResponse; });
var QuizzResponse = (function () {
    function QuizzResponse(value, correct) {
        this.value = value;
        this.correct = correct;
    }
    return QuizzResponse;
}());



/***/ }),

/***/ "../../../../../src/app/quizz.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizzService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quizz__ = __webpack_require__("../../../../../src/app/quizz.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mock_quizz__ = __webpack_require__("../../../../../src/app/mock-quizz.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var QuizzService = (function () {
    function QuizzService(http) {
        this.http = http;
        this.quizzUrl = '/quizz';
        this.mockQuizz = new __WEBPACK_IMPORTED_MODULE_4__mock_quizz__["a" /* MockQuizz */]();
    }
    QuizzService.prototype.getEmptyQuizz = function () {
        var quizz = new __WEBPACK_IMPORTED_MODULE_3__quizz__["a" /* Quizz */](0, '', '', []);
        return quizz;
    };
    QuizzService.prototype.getMockNewQuestion = function () {
        return this.mockQuizz.getMockNewQuestion();
    };
    QuizzService.prototype.getHeroes = function () {
        return this.http.get(this.quizzUrl);
    };
    QuizzService.prototype.addQuizz = function (quizz) {
        return this.http.post(this.quizzUrl, quizz, httpOptions);
    };
    QuizzService.prototype.addQuestion = function (quizz, aNewQuestion) {
        var addedNewQuestion = JSON.parse(JSON.stringify(aNewQuestion));
        quizz.questions.push(addedNewQuestion);
    };
    QuizzService.prototype.removeQuestion = function (quizz, questionIndex) {
        quizz.questions.splice(questionIndex, 1);
    };
    QuizzService.prototype.updateQuizz = function (quizz) {
        return this.http.put(this.quizzUrl, quizz, httpOptions);
    };
    QuizzService.prototype.deleteQuizz = function (quizzId) {
        var delete_url = "/quizz/" + quizzId;
        return this.http.delete(delete_url, httpOptions);
    };
    QuizzService.prototype.selectQuizz = function (quizzId) {
        var select_url = "/quizz/" + quizzId;
        return this.http.get(select_url, httpOptions);
    };
    QuizzService.prototype.removeQuizz = function (name) {
        alert('Removing quizz ubs= service ' + name);
    };
    QuizzService.prototype.getMockNewQuestion1 = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(this.mockQuizz.getMockNewQuestion());
    };
    QuizzService.prototype.getNewQuestion = function () {
        return this.mockQuizz.getNewQuestion();
    };
    QuizzService.prototype.getMockQuizz = function () {
        return this.mockQuizz.getMockQuizz();
    };
    QuizzService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], QuizzService);
    return QuizzService;
}());



/***/ }),

/***/ "../../../../../src/app/quizz.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Quizz; });
var Quizz = (function () {
    function Quizz(id, name, description, questions) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.questions = questions;
    }
    //     addQuestion(aNewQuestion: QuizzQuestion){
    //          let addedNewQuestion  = JSON.parse(JSON.stringify(aNewQuestion ));
    //          this.questions.push(addedNewQuestion);
    //     }
    Quizz.prototype.removeQuestion = function (questionIndex) {
        this.questions.splice(questionIndex, 1);
    };
    return Quizz;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map