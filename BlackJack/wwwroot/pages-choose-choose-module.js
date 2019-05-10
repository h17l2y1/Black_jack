(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-choose-choose-module"],{

/***/ "./src/app/pages/choose/choose-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/choose/choose-routing.module.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var choose_component_1 = __webpack_require__(/*! ./choose.component */ "./src/app/pages/choose/choose.component.ts");
var routes = [
    { path: '', component: choose_component_1.ChooseComponent }
];
var ChooseRoutingModule = /** @class */ (function () {
    function ChooseRoutingModule() {
    }
    ChooseRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], ChooseRoutingModule);
    return ChooseRoutingModule;
}());
exports.ChooseRoutingModule = ChooseRoutingModule;


/***/ }),

/***/ "./src/app/pages/choose/choose.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/choose/choose.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br>\r\n\r\n<div class=\"card\" style=\"width: 18rem;\">\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">User Data</h5>\r\n      <h6 class=\"card-subtitle mb-2 text-muted\">Supa dupa player</h6>\r\n      <p class=\"card-text\"> Id: {{userModel.userId}}</p>\r\n      <p class=\"card-text\">Login: {{userModel.userName}} </p>\r\n      <p class=\"card-text\">Points: {{userModel.points}}</p>\r\n      <p class=\"card-text\">Role: {{userModel.role}}</p>\r\n      <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n          <a (click)=\"onLogout()\" class=\"btn btn-secondary\" routerLink=\"/login\" >Logout</a>\r\n          <a (click)=\"onGame()\" class=\"btn btn-secondary\" routerLink=\"/game\">Game</a>\r\n          <a class=\"btn btn-secondary\" routerLink=\"/statistic\">Statistic</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/choose/choose.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/choose/choose.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var jwt_decode = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
var transfer_service_1 = __webpack_require__(/*! ../../../shared/services/transfer.service */ "./src/shared/services/transfer.service.ts");
var account_service_1 = __webpack_require__(/*! ../../../shared/services/account.service */ "./src/shared/services/account.service.ts");
var responseSignUpAccountView_1 = __webpack_require__(/*! ../../../shared/models/Account/responseSignUpAccountView */ "./src/shared/models/Account/responseSignUpAccountView.ts");
var ChooseComponent = /** @class */ (function () {
    function ChooseComponent(accountService, transferService) {
        this.accountService = accountService;
        this.transferService = transferService;
        this.userModel = new responseSignUpAccountView_1.ResponseSignUpAccountView;
    }
    ChooseComponent.prototype.ngOnInit = function () {
        this.getUserData();
    };
    ChooseComponent.prototype.onGame = function () {
        this.transferService.setModel(this.userModel);
    };
    ChooseComponent.prototype.getUserData = function () {
        var token = localStorage.getItem('token');
        var tokenClaims = jwt_decode(token, "");
        this.userModel.userId = tokenClaims.UserId;
        this.userModel.userName = tokenClaims.UserName;
        this.userModel.role = tokenClaims.Role;
        this.userModel.points = "100";
    };
    ChooseComponent.prototype.onLogout = function () {
        this.accountService.logout();
    };
    ChooseComponent = __decorate([
        core_1.Component({
            selector: 'app-choose',
            template: __webpack_require__(/*! ./choose.component.html */ "./src/app/pages/choose/choose.component.html")
        }),
        __metadata("design:paramtypes", [account_service_1.AccountService, transfer_service_1.TransferService])
    ], ChooseComponent);
    return ChooseComponent;
}());
exports.ChooseComponent = ChooseComponent;


/***/ }),

/***/ "./src/app/pages/choose/choose.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/choose/choose.module.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var choose_routing_module_1 = __webpack_require__(/*! ./choose-routing.module */ "./src/app/pages/choose/choose-routing.module.ts");
var choose_component_1 = __webpack_require__(/*! ./choose.component */ "./src/app/pages/choose/choose.component.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var ChooseModule = /** @class */ (function () {
    function ChooseModule() {
    }
    ChooseModule = __decorate([
        core_1.NgModule({
            declarations: [
                choose_component_1.ChooseComponent
            ],
            imports: [
                common_1.CommonModule,
                choose_routing_module_1.ChooseRoutingModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
            ]
        })
    ], ChooseModule);
    return ChooseModule;
}());
exports.ChooseModule = ChooseModule;


/***/ })

}]);
//# sourceMappingURL=pages-choose-choose-module.js.map