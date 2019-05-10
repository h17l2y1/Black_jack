(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-statistic-statistic-module"],{

/***/ "./src/app/pages/statistic/statistic-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/statistic/statistic-routing.module.ts ***!
  \*************************************************************/
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
var statistic_component_1 = __webpack_require__(/*! ./statistic.component */ "./src/app/pages/statistic/statistic.component.ts");
var routes = [
    { path: '', component: statistic_component_1.StatisticComponent }
];
var StatisticRoutingModule = /** @class */ (function () {
    function StatisticRoutingModule() {
    }
    StatisticRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], StatisticRoutingModule);
    return StatisticRoutingModule;
}());
exports.StatisticRoutingModule = StatisticRoutingModule;


/***/ }),

/***/ "./src/app/pages/statistic/statistic.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/statistic/statistic.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".games{\r\n    padding: 5px;\r\n    margin: 10px;\r\n    background-color: burlywood;\r\n    width: 300px;\r\n}\r\n\r\n.players{\r\n    background-color: darkgray;\r\n}\r\n\r\n.gamesStat{\r\n    background-color: bisque;\r\n}\r\n\r\n.gameProp{\r\n    background-color: cornsilk;\r\n    margin: 5px;\r\n}\r\n\r\n.playerProp{\r\n    display: flex;\r\n    padding: 5px;\r\n    background-color: coral\r\n}\r\n\r\n.cardss{\r\n    display: flex;\r\n}\r\n\r\n.card{\r\n    display: flex;\r\n    color: white;\r\n    background-color: rgb(70, 109, 109);\r\n    margin: 10px;\r\n    padding: 10px;\r\n}\r\n\r\n.cardProp{\r\n    margin: 5px;\r\n}\r\n\r\n#pl{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin: 5px;\r\n}\r\n\r\n.bot{\r\n    padding: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RhdGlzdGljL3N0YXRpc3RpYy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdGF0aXN0aWMvc3RhdGlzdGljLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FtZXN7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5wbGF5ZXJze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XHJcbn1cclxuXHJcbi5nYW1lc1N0YXR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XHJcbn1cclxuXHJcbi5nYW1lUHJvcHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5zaWxrO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi5wbGF5ZXJQcm9we1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcmFsXHJcbn1cclxuXHJcbi5jYXJkc3N7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY2FyZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDEwOSwgMTA5KTtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkUHJvcHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4jcGx7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi5ib3R7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/statistic/statistic.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/statistic/statistic.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br>\r\n  <button class=\"btn btn-primary\" (click)=\"onBack()\">Back</button>\r\n<br>\r\n\r\n<!-- Game -->\r\n<div class=\"gameStat\" *ngIf=\"isGame\">\r\n  <div class=\"gameProp\">GameId: {{gameRes.gameId}}</div>\r\n  <div class=\"gameProp\">Winner: {{gameRes.winner}} </div>\r\n  <div class=\"gameProp\" id=\"pl\"> User\r\n    <div class=\"playerProp\">Name: {{gameRes.user.name}}</div>\r\n    <div class=\"playerProp\">Score: {{gameRes.user.score}}</div>\r\n      <div class=\"playerProp\">\r\n        <div class=\"cardss\"  *ngFor=\"let card of gameRes.user.cards\">\r\n            <div class=\"card\">\r\n                <div class=\"cardProp\">{{card.ranks}}</div>\r\n                <div class=\"cardProp\">{{card.suit}}</div>\r\n                <div class=\"cardProp\">{{card.value}}</div>\r\n            </div>\r\n        </div>\r\n      </div><br>\r\n    <div class=\"gameProp\" id=\"pl\"> Bots\r\n      <div class=\"bot\" *ngFor=\"let bot of gameRes.bots\">\r\n          <div class=\"playerProp\">Name: {{bot.name}}</div>\r\n          <div class=\"playerProp\">Score: {{bot.score}}</div>\r\n          <div class=\"playerProp\">\r\n            <div class=\"cardss\" *ngFor=\"let card of bot.cards\">\r\n                <div class=\"card\">\r\n                    <div class=\"cardProp\">{{card.ranks}}</div>\r\n                    <div class=\"cardProp\">{{card.suit}}</div>\r\n                    <div class=\"cardProp\">{{card.value}}</div>\r\n                </div>\r\n            </div>\r\n          </div><br>\r\n      </div>\r\n    </div> \r\n  </div>\r\n</div>\r\n\r\n<!-- select -->\r\n<select [(ngModel)]=\"totalPage.size\" [(ngModel)]=\"userPage.size\" (change)=\"onFirst()\">\r\n  <option>3</option>\r\n  <option>5</option>\r\n  <option>10</option>\r\n</select>\r\n<br><br>\r\n\r\n<!-- input  (ngModelChange)=\"statistic()\"  -->\r\n<div *ngIf=\"isUserNotFound\" class=\"alert alert-danger\" role=\"alert\">Not Found or haven't games</div>\r\n<div class=\"input-group mb-3\">\r\n  <div class=\"input-group-prepend\">\r\n    <button (click)=\"statistic()\" class=\"input-group-text\" id=\"basic-addon1\">Search</button>\r\n  </div>\r\n  <input id=\"input\" [(ngModel)]=\"userPage.userName\" type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n</div>\r\n\r\n<!-- table -->\r\n<table class=\"table\">  \r\n  <thead>  \r\n    <tr>  \r\n        <th>UserName</th>  \r\n        <th>Winner</th>  \r\n        <th>Score</th>  \r\n        <th>GameId</th>\r\n    </tr>  \r\n  </thead>  \r\n  <tbody>\r\n    <tr *ngFor=\"let item of newPage.page\" (click)=\"onGame(item.gameId, item.userName)\">  \r\n      <td>{{item.userName}}</td>  \r\n      <td>{{item.winner}}</td>  \r\n      <td>{{item.score}}</td>  \r\n      <td>{{item.gameId}}</td>  \r\n    </tr>  \r\n  </tbody>\r\n</table>\r\n\r\n<div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\r\n    <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\r\n      <button (click)=\"onFirst()\" class=\"btn btn-secondary\">First</button>\r\n      <button [disabled]=\"!isPrevious\" (click)=\"onStatPrevious()\"  class=\"btn btn-secondary\"><</button>\r\n      <button [disabled]=\"!isPrevious\" (click)=\"onStatPrevious()\"  class=\"btn btn-secondary\">{{newPage.pageNumber -1}}</button>\r\n      <button class=\"btn btn-secondary\">{{newPage.pageNumber}}</button>\r\n      <button [disabled]=\"!isNext\" (click)=\"onStatNext()\"  class=\"btn btn-secondary\">{{newPage.pageNumber +1}}</button>\r\n      <button [disabled]=\"!isNext\" (click)=\"onStatNext()\" class=\"btn btn-secondary\">></button>\r\n      <button  (click)=\"onLast()\"  class=\"btn btn-secondary\">Last</button>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/pages/statistic/statistic.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/statistic/statistic.component.ts ***!
  \********************************************************/
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
var statistic_service_1 = __webpack_require__(/*! ../../../shared/services/statistic.service */ "./src/shared/services/statistic.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var responseGetGameStatisticView_1 = __webpack_require__(/*! ../../../shared/models/Statistic/responseGetGameStatisticView */ "./src/shared/models/Statistic/responseGetGameStatisticView.ts");
var requestGetGameStatisticView_1 = __webpack_require__(/*! ../../../shared/models/Statistic/requestGetGameStatisticView */ "./src/shared/models/Statistic/requestGetGameStatisticView.ts");
var responsePaginationStatisticView_1 = __webpack_require__(/*! ../../../shared/models/Statistic/responsePaginationStatisticView */ "./src/shared/models/Statistic/responsePaginationStatisticView.ts");
var StatisticComponent = /** @class */ (function () {
    function StatisticComponent(router, service, fb) {
        this.router = router;
        this.service = service;
        this.fb = fb;
        this.totalPage = { page: 1, size: 3 };
        this.userPage = { page: 1, size: 3, userName: null };
        this.newPage = new responsePaginationStatisticView_1.ResponsePaginationStatisticView;
        this.gameReq = new requestGetGameStatisticView_1.RequestGetGameStatisticView;
        this.gameRes = new responseGetGameStatisticView_1.ResponseGetGameStatisticView;
        this.userId = null;
        this.gameId = null;
        this.isGame = false;
        this.isNext = true;
        this.isPrevious = true;
        this.isUser = false;
        this.isUserNotFound = false;
        this.cards = null;
    }
    StatisticComponent.prototype.ngOnInit = function () {
        this.statistic();
    };
    StatisticComponent.prototype.statistic = function () {
        if (this.userPage.userName == "" || this.userPage.userName == null) {
            this.isUserNotFound = false;
            return this.totalStat();
        }
        this.userStat();
    };
    StatisticComponent.prototype.onFirst = function () {
        this.totalPage.page = 1;
        this.userPage.page = 1;
        this.statistic();
    };
    StatisticComponent.prototype.onLast = function () {
        this.totalPage.page = this.newPage.totalPages;
        this.userPage.page = this.newPage.totalPages;
        this.statistic();
    };
    StatisticComponent.prototype.onStatNext = function () {
        this.totalPage.page += 1;
        this.userPage.page += 1;
        this.statistic();
    };
    StatisticComponent.prototype.onStatPrevious = function () {
        this.totalPage.page -= 1;
        this.userPage.page -= 1;
        this.statistic();
    };
    StatisticComponent.prototype.checker = function () {
        if (this.totalPage.page == this.newPage.totalPages) {
            this.isNext = false;
        }
        if (this.totalPage.page < this.newPage.totalPages) {
            this.isNext = true;
        }
        if (this.totalPage.page == 1) {
            this.isPrevious = false;
        }
        if (this.totalPage.page > 1) {
            this.isPrevious = true;
        }
    };
    StatisticComponent.prototype.userStat = function () {
        var _this = this;
        this.checker();
        this.service.getUserPage(this.userPage)
            .subscribe(function (data) {
            console.log(data);
            _this.newPage = data;
            _this.isUserNotFound = false;
        }, function (error) {
            if (error.status == 500) {
                console.log("User Not Found");
                _this.isUserNotFound = true;
                _this.totalStat();
            }
        });
    };
    StatisticComponent.prototype.totalStat = function () {
        var _this = this;
        this.checker();
        this.service.getPage(this.totalPage)
            .subscribe(function (response) {
            _this.newPage = response;
        });
    };
    StatisticComponent.prototype.onGame = function (gameId, userName) {
        var _this = this;
        debugger;
        this.isGame = true;
        this.gameReq.gameId = gameId;
        this.gameReq.userName = userName;
        this.service.getGame(this.gameReq)
            .subscribe(function (response) {
            _this.gameRes = response;
            console.log(response);
        });
    };
    StatisticComponent.prototype.onBack = function () {
        this.router.navigateByUrl('choose');
    };
    StatisticComponent = __decorate([
        core_1.Component({
            selector: 'app-statistic',
            template: __webpack_require__(/*! ./statistic.component.html */ "./src/app/pages/statistic/statistic.component.html"),
            styles: [__webpack_require__(/*! ./statistic.component.css */ "./src/app/pages/statistic/statistic.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router, statistic_service_1.StatisticService, forms_1.FormBuilder])
    ], StatisticComponent);
    return StatisticComponent;
}());
exports.StatisticComponent = StatisticComponent;


/***/ }),

/***/ "./src/app/pages/statistic/statistic.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/statistic/statistic.module.ts ***!
  \*****************************************************/
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
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var statistic_routing_module_1 = __webpack_require__(/*! ./statistic-routing.module */ "./src/app/pages/statistic/statistic-routing.module.ts");
var statistic_component_1 = __webpack_require__(/*! ./statistic.component */ "./src/app/pages/statistic/statistic.component.ts");
var StatisticModule = /** @class */ (function () {
    function StatisticModule() {
    }
    StatisticModule = __decorate([
        core_1.NgModule({
            declarations: [
                statistic_component_1.StatisticComponent
            ],
            imports: [
                common_1.CommonModule,
                statistic_routing_module_1.StatisticRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ]
        })
    ], StatisticModule);
    return StatisticModule;
}());
exports.StatisticModule = StatisticModule;


/***/ }),

/***/ "./src/shared/models/Statistic/requestGetGameStatisticView.ts":
/*!********************************************************************!*\
  !*** ./src/shared/models/Statistic/requestGetGameStatisticView.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RequestGetGameStatisticView = /** @class */ (function () {
    function RequestGetGameStatisticView() {
    }
    return RequestGetGameStatisticView;
}());
exports.RequestGetGameStatisticView = RequestGetGameStatisticView;


/***/ }),

/***/ "./src/shared/models/Statistic/responseGetGameStatisticView.ts":
/*!*********************************************************************!*\
  !*** ./src/shared/models/Statistic/responseGetGameStatisticView.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ResponseGetGameStatisticView = /** @class */ (function () {
    function ResponseGetGameStatisticView() {
    }
    return ResponseGetGameStatisticView;
}());
exports.ResponseGetGameStatisticView = ResponseGetGameStatisticView;


/***/ }),

/***/ "./src/shared/models/Statistic/responsePaginationStatisticView.ts":
/*!************************************************************************!*\
  !*** ./src/shared/models/Statistic/responsePaginationStatisticView.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ResponsePaginationStatisticView = /** @class */ (function () {
    function ResponsePaginationStatisticView() {
    }
    return ResponsePaginationStatisticView;
}());
exports.ResponsePaginationStatisticView = ResponsePaginationStatisticView;


/***/ }),

/***/ "./src/shared/services/statistic.service.ts":
/*!**************************************************!*\
  !*** ./src/shared/services/statistic.service.ts ***!
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
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var environment_1 = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var StatisticService = /** @class */ (function () {
    function StatisticService(http) {
        this.http = http;
        this.rootUrl = environment_1.environment.apiUrl;
    }
    StatisticService.prototype.getGame = function (model) {
        return this.http.get(this.rootUrl + 'Statistic/GetGame/?userName=' + model.userName + "&gameId=" + model.gameId);
    };
    StatisticService.prototype.getPage = function (model) {
        return this.http.get(this.rootUrl + 'Statistic/GetPagination/?page=' + model.page + "&size=" + model.size);
    };
    StatisticService.prototype.getUserPage = function (model) {
        return this.http.get(this.rootUrl + 'Statistic/GetUserStat/?page=' + model.page + "&size=" + model.size + "&userName=" + model.userName);
    };
    StatisticService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], StatisticService);
    return StatisticService;
}());
exports.StatisticService = StatisticService;


/***/ })

}]);
//# sourceMappingURL=pages-statistic-statistic-module.js.map