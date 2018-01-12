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
    { path: 'newquizz', component: __WEBPACK_IMPORTED_MODULE_3__quizz_form_quizz_form_component__["a" /* QuizzFormComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n</div>\n\n<nav>\n  <a routerLink=\"/dashboard\">Dashboard</a>  \n  <a routerLink=\"/newquizz\">New Quizz</a>\n</nav>\n\n<router-outlet></router-outlet>\n\n"

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
        this.title = 'app';
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quizz_form_quizz_form_component__ = __webpack_require__("../../../../../src/app/quizz-form/quizz-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__quizz_service__ = __webpack_require__("../../../../../src/app/quizz.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__quizz_form_quizz_form_component__["a" /* QuizzFormComponent */],
                __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__quizz_service__["a" /* QuizzService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
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

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
        var resp4 = new __WEBPACK_IMPORTED_MODULE_0__quizz_response__["a" /* QuizzResponse */]('R7', 'false');
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

module.exports = "<br/>\n<div class=\"container\">\n      <!-- <div [hidden]=\"submitted\"> -->\n      <h1>New Quizz</h1>\n      <form (ngSubmit)=\"onSubmit()\" #quizzForm=\"ngForm\">\n\n          <div class=\"form-row\">\n              <div class=\"form-group col-md-9\">      \n              </div>\n              <div class=\"form-group col-md-3\">\n                  <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!quizzForm.form.valid\">Submit</button>        \n                  <button type=\"button\" class=\"btn btn-default\" (click)=\"newQuizz(); quizzForm.reset()\">New Quizz</button>\n              </div>\n          </div>     \n\n          <div class=\"form-row\">\n              <div class=\"form-group col-md-4\">        \n                  <input type=\"text\" class=\"form-control\" id=\"name\"\n                  required\n                  [(ngModel)]=\"model.name\" name=\"name\"\n                  #name=\"ngModel\" placeholder=\"Quizz Name\">\n                  <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\"> Name is required</div>\n              </div>\n              <div class=\"form-group col-md-8\">\n                    <div class=\"form-group\">\n                      \n                        <input type=\"text\" class=\"form-control\" id=\"desc\"\n                              required\n                              [(ngModel)]=\"model.description\" name=\"desc\"\n                              #desc=\"ngModel\"\n                              placeholder=\"Quizz Description\">\n                        <div [hidden]=\"desc.valid || desc.pristine\"\n                            class=\"alert alert-danger\">\n                          Name is required\n                        </div>\n                    </div>\n              </div>\n              \n          </div>\n\n          </form>\n          <form (ngSubmit)=\"onSubmit()\" #questionForm=\"ngForm\">\n          <div class=\"form-row\">\n\n              <div class=\"form-group col-md-12\">\n                  <label for=\"newQuestion\">Question</label>\n                \n                  <input type=\"text\" class=\"form-control\" id=\"aNewQuestion\"\n                          required\n                          [(ngModel)]=\"newQuestion.question\" name=\"aNewQuestion\"\n                          #aNewQuestion=\"ngModel\" placeholder=\"Question\">\n                    <div [hidden]=\"aNewQuestion.valid || aNewQuestion.pristine\"\n                        class=\"alert alert-danger\">\n                      Question is required\n                    </div>\n              </div>\n              <div class=\"form-group col-md-10\">\n                  <label for=\"response0\">Response</label>\n                  <input type=\"text\" class=\"form-control\" id=\"response0\"\n                          required\n                          [(ngModel)]=\"newQuestion.responses[0].value\" name=\"response0\"\n                          #response0=\"ngModel\" placeholder=\"Response 1\">\n                  <div [hidden]=\"response0.valid || response0.pristine\"\n                        class=\"alert alert-danger\">\n                      Response is required\n                  </div>\n              </div>       \n              <div class=\"form-group col-md-2\">\n                  <label for=\"inputState\">Is Correct</label>\n                  <select name=\"isCorrect0\" id=\"isCorrect0\" class=\"form-control\" [(ngModel)]=\"newQuestion.responses[0].correct\">                \n                      <option *ngFor=\"let aCorrectValue of correctValues\"\n                        [value]=\"aCorrectValue\" >{{aCorrectValue}}</select>\n              </div>\n\n              <div class=\"form-group col-md-10\">\n                  <input type=\"text\" class=\"form-control\" id=\"response1\"\n                          required\n                          [(ngModel)]=\"newQuestion.responses[1].value\" name=\"response1\"\n                          #response1=\"ngModel\" placeholder=\"Response 2\">\n                  <div [hidden]=\"response1.valid || response1.pristine\"\n                        class=\"alert alert-danger\">\n                      Response is required\n                  </div>\n                </div>      \n                <div class=\"form-group col-md-2\">\n                    <select name=\"isCorrect1\" id=\"isCorrect1\" class=\"form-control\" [(ngModel)]=\"newQuestion.responses[1].correct\">                \n                      <option *ngFor=\"let aCorrectValue of correctValues\"\n                        [value]=\"aCorrectValue\" > \n                        {{aCorrectValue}}\n                    </select>\n                </div>\n\n                <div class=\"form-group col-md-10\">\n                    <input type=\"text\" class=\"form-control\" id=\"response2\"\n                            required\n                            [(ngModel)]=\"newQuestion.responses[2].value\" name=\"response2\"\n                            #response2=\"ngModel\" placeholder=\"Response 3\">\n                    <div [hidden]=\"response2.valid || response2.pristine\"\n                          class=\"alert alert-danger\">\n                        Response is required\n                    </div>\n                  </div>      \n                  <div class=\"form-group col-md-2\">\n                      <select name=\"isCorrect2\" id=\"isCorrect2\" class=\"form-control\" [(ngModel)]=\"newQuestion.responses[2].correct\">                \n                        <option *ngFor=\"let aCorrectValue of correctValues\"\n                          [value]=\"aCorrectValue\" > \n                          {{aCorrectValue}}\n                      </select>\n                  </div>\n\n                  <div class=\"form-group col-md-10\">\n                      <input type=\"text\" class=\"form-control\" id=\"response3\"\n                              required\n                              [(ngModel)]=\"newQuestion.responses[3].value\" name=\"response3\"\n                              #response3=\"ngModel\" placeholder=\"Response 4\">\n                      <div [hidden]=\"response3.valid || response3.pristine\"\n                            class=\"alert alert-danger\">\n                          Response is required\n                      </div>\n                    </div>      \n                    <div class=\"form-group col-md-2\">\n                        <select name=\"isCorrect3\" id=\"isCorrect3\" class=\"form-control\" [(ngModel)]=\"newQuestion.responses[3].correct\">                \n                          <option *ngFor=\"let aCorrectValue of correctValues\" [value]=\"aCorrectValue\" >{{aCorrectValue}}</option>\n                        </select>\n                    </div>\n\n              <div class=\"form-group col-md-3\">\n                  <button type=\"submit\" \n                  (click)=\"addQuestion(questionForm);\"\n                  \n                  class=\"btn btn-primary\" [disabled]=\"!questionForm.form.valid\">Add Question</button>  \n              </div>\n              <div class=\"form-group col-md-9\"></div> \n          </div>\n\n          <div class=\"form-row\">\n              <div class=\"form-group col-md-12\">\n\n                <table class=\"table\" >\n                    <thead>\n                      <tr>\n                        <th scope=\"col\">#</th>\n                        <th scope=\"col\">Question</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let question of model.questions; let i = index\">\n                        <th scope=\"row\">{{i+1}}</th>\n                        <td>\n<!--                         {{question.question}}<ol> -->\n<!--                             <li *ngFor=\"let response of question.responses\">{{response.value}} <span *ngIf=\"response.correct ==='true'\" [ngClass]=\"{'label label-success': response.correct ==='true'}\">Correct</span></li> -->\n<!--                           </ol> -->\n                        \t\t<table class=\"intro\" >\n                        \t\t\t<tr>\n                        \t\t\t\t<td colspan=\"3\">{{question.question}}</td>\n                        \t\t\t</tr>\n                        \t\t\t<tr *ngFor=\"let response of question.responses; let i = index\">\n                        \t\t\t\t<td width=\"2%\">{{i+1}}</td> \n                        \t\t\t\t<td width=\"5%\"><span *ngIf=\"response.correct ==='true'\" [ngClass]=\"{'glyphicon glyphicon-asterisk': response.correct ==='true'}\"></span></td>\n                        \t\t\t\t<td width=\"93%\">{{response.value}}</td> \n                        \t\t\t\t\n                        \t\t\t</tr>\n                        \t\t</table>\n                        \n                        </td>\n                        <td>\n                          \t<button type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"removeQuestion(i);\">\n\t\t\t\t\t          <span class=\"glyphicon glyphicon-remove\"></span> Remove \n\t\t\t\t\t        </button>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n              </div>\n          </div>\n        </form>\n\n       \n  <!-- </div> -->\n\n\n  \n  <!-- <div [hidden]=\"!submitted\">\n    <h2>You submitted the following:</h2>\n    <div class=\"row\">\n      <div class=\"col-xs-3\">Name</div>\n      <div class=\"col-xs-9  pull-left\">{{ model.name }}</div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-3\">Description</div>\n        <div class=\"col-xs-9  pull-left\">{{ model.description }}</div>\n      </div>\n    <br>\n    <button class=\"btn btn-primary\" (click)=\"submitted=false\">Edit</button>\n  </div> -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/quizz-form/quizz-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizzFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quizz_service__ = __webpack_require__("../../../../../src/app/quizz.service.ts");
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
    function QuizzFormComponent(quizzService) {
        this.quizzService = quizzService;
        this.submitted = false;
        this.newQuestion = null;
        this.model = null;
        this.httpModel = null;
        this.correctValues = ['false', 'true'];
    }
    QuizzFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    QuizzFormComponent.prototype.addQuestion = function (questionForm) {
        var _this = this;
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
        this.model.addQuestion(this.newQuestion);
        //         var myJSON = JSON.stringify(this.model);
        //        console.log("============================");
        //        console.log(myJSON);
        //        console.log("============================");
        this.submitted = false;
        questionForm.reset();
        this.resetNewQuestion();
        this.quizzService.getHeroes().subscribe(function (newQuizz) {
            _this.model = newQuizz;
            console.log("======== http model =========");
            console.log(newQuizz);
        });
    };
    QuizzFormComponent.prototype.removeQuestion = function (questionIndex) {
        this.model.removeQuestion(questionIndex);
    };
    QuizzFormComponent.prototype.resetNewQuestion = function () {
        this.newQuestion = this.quizzService.getNewQuestion();
    };
    QuizzFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quizzService.getMockNewQuestion1().subscribe(function (newQuestion) { return _this.newQuestion = newQuestion; });
        this.model = this.quizzService.getMockQuizz();
    };
    QuizzFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-quizz-form',
            template: __webpack_require__("../../../../../src/app/quizz-form/quizz-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/quizz-form/quizz-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__quizz_service__["a" /* QuizzService */]])
    ], QuizzFormComponent);
    return QuizzFormComponent;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mock_quizz__ = __webpack_require__("../../../../../src/app/mock-quizz.ts");
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
        this.showUrl = '/quizz';
        this.mockQuizz = new __WEBPACK_IMPORTED_MODULE_3__mock_quizz__["a" /* MockQuizz */]();
    }
    QuizzService.prototype.getMockNewQuestion = function () {
        return this.mockQuizz.getMockNewQuestion();
    };
    QuizzService.prototype.getHeroes = function () {
        return this.http.get(this.showUrl);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
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
    Quizz.prototype.addQuestion = function (aNewQuestion) {
        var addedNewQuestion = JSON.parse(JSON.stringify(aNewQuestion));
        this.questions.push(addedNewQuestion);
    };
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
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