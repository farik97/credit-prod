(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+5bd":
    /*!**************************************************!*\
      !*** ./src/app/find-user/find-user.component.ts ***!
      \**************************************************/

    /*! exports provided: FindUserComponent */

    /***/
    function bd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FindUserComponent", function () {
        return FindUserComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../services/users.service */
      "6Qg2");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["mobileNumber"];
      var _c1 = ["homeNumber"];

      function FindUserComponent_form_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r2.form);
        }
      }

      var FindUserComponent = /*#__PURE__*/function () {
        function FindUserComponent(userService, fb) {
          var _this = this;

          _classCallCheck(this, FindUserComponent);

          this.userService = userService;

          this.findUser = function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var userNumber, mobile, home, token;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      userNumber = {};
                      mobile = this.mobileNumber.nativeElement.value;
                      home = this.homeNumber.nativeElement.value;

                      if (mobile !== '') {
                        userNumber['mobileNumber'] = mobile;
                      }

                      if (home !== '') {
                        userNumber['homeNumber'] = home;
                      }

                      token = window.localStorage.getItem("token");
                      _context.next = 8;
                      return this.userService.getCreditUser(userNumber, token).then(function (response) {
                        _this2.userData = response;
                        _this2.userDataReceived = true;
                        console.log(_this2.userData);
                      })["catch"](function (err) {
                        console.log(err);
                      });

                    case 8:
                      return _context.abrupt("return", _context.sent);

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          };

          this.form = fb.group({
            address: [''],
            addressRegistered: [''],
            dob: [''],
            email: [''],
            fathersName: [''],
            firstName: [''],
            homeNumber: [''],
            idCode: [''],
            idNumber: [''],
            idSeria: [''],
            lastName: [''],
            phoneNumber: [''],
            region: [''],
            regionRegistered: [''],
            salary: [''],
            workInfo: ['']
          });
        }

        _createClass(FindUserComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FindUserComponent;
      }();

      FindUserComponent.ɵfac = function FindUserComponent_Factory(t) {
        return new (t || FindUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]));
      };

      FindUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: FindUserComponent,
        selectors: [["app-find-user"]],
        viewQuery: function FindUserComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mobileNumber = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.homeNumber = _t.first);
          }
        },
        decls: 7,
        vars: 1,
        consts: [["type", "text", "placeholder", "Mobile Number"], ["mobileNumber", ""], ["type", "text", "placeholder", "Home Number"], ["homeNumber", ""], [1, "btn", "btn-primary", 3, "click"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "form-group"], ["for", "firstName"], ["formControlName", "firstName", "type", "text", "id", "fathersName", "name", "fathersName", 1, "form-control"]],
        template: function FindUserComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FindUserComponent_Template_button_click_4_listener() {
              return ctx.findUser();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "click");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, FindUserComponent_form_6_Template, 5, 1, "form", 5);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userDataReceived);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbmQtdXNlci9maW5kLXVzZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FindUserComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-find-user',
            templateUrl: './find-user.component.html',
            styleUrls: ['./find-user.component.scss']
          }]
        }], function () {
          return [{
            type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
          }];
        }, {
          mobileNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['mobileNumber']
          }],
          homeNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['homeNumber']
          }]
        });
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/farhad/Documents/shop.az/new shop.az/creditFront/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0yay":
    /*!************************************************!*\
      !*** ./src/app/requests/requests.component.ts ***!
      \************************************************/

    /*! exports provided: RequestsComponent */

    /***/
    function yay(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequestsComponent", function () {
        return RequestsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_requests_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/requests.service */
      "8aff");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "ZOsW");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function RequestsComponent_tr_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var request_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "/request/" + request_r1.id, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](request_r1.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", request_r1.firstName, " ", request_r1.lastName, " ", request_r1.firstName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", request_r1.dayOfBirth, "-", request_r1.monthOfBirth, "-", request_r1.yearOfBirth, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](request_r1.productTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](request_r1.productID);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "http://" + request_r1.productUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](request_r1.productUrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", request_r1.categoryID, " - ", request_r1.categoryName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", request_r1.sellerID, " - ", request_r1.sellerName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](request_r1.total);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](request_r1.homePhoneNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](request_r1.mobilePhoneNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", request_r1.duration, " months");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](request_r1.monthly);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](request_r1.upFront);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](request_r1.salary);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](35, 25, request_r1.status));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](request_r1.createdAt);
        }
      }

      var RequestsComponent = /*#__PURE__*/function () {
        function RequestsComponent(service, route) {
          var _this3 = this;

          _classCallCheck(this, RequestsComponent);

          this.service = service;
          this.route = route;
          this.totalSales = 0;
          this.pageStatus = this.route.snapshot.paramMap.get("status");
          this.status = this.pageStatus == 'pending' ? 'Pending' : this.pageStatus == 'declined' ? 'Declined' : this.pageStatus == 'sentForCredit' ? 'Sent For Credit' : this.pageStatus == 'loanApproved' ? 'Loan Approved' : this.pageStatus == 'loanDeclined' ? 'Loan Declined' : undefined;

          this.getRequests = function (creditTypeId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var creditStatus, token;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      creditStatus = this.route.snapshot.paramMap.get("status");
                      token = window.localStorage.getItem("token");

                      try {
                        this.creditID = creditTypeId['id'];
                      } catch (e) {
                        this.creditID = null;
                      }

                      this.service.getRequests(creditStatus, token, this.creditID).then(function (data) {
                        console.log(data);

                        if (data !== []) {
                          _this4.requests = data;
                          data.forEach(function (element) {
                            _this4.totalSales += Number(element.total);
                          });
                          console.log("".concat(_this4.totalSales, " AZN"));
                        } else {
                          _this4.requests = [];
                          _this4.totalSales = 0;
                        }

                        data !== [] ? _this4.requests = data : _this4.requests = []; // data.requests.noData.length > 0 ? (this.requests = []) : this.requests;
                        // data.totalSales > 0 ? (this.totalSales = data.totalSales) : this.totalSales = 0;
                      })["catch"](function (err) {
                        console.log(err);

                        if (err.status === 401) {
                          console.error(err.error.unauthorised);
                        }

                        if (err.status === 400) {
                          console.error(err.error.validation);
                        }

                        if (err.status === 500) {
                          console.error(err.error.error);
                        }
                      });

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          };

          this.getCreditTypes = function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this5 = this;

              var token;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      token = window.localStorage.getItem("token");
                      this.service.getCreditTypes(token).then(function (data) {
                        data.length > 0 ? _this5.creditTypes = data : _this5.creditTypes;
                      })["catch"](function (err) {
                        if (err.status === 401) {
                          console.error(err.error.unauthorised);
                        }

                        if (err.status === 400) {
                          console.error(err.error.validation);
                        }

                        if (err.status === 500) {
                          console.error(err.error.error);
                        }
                      });

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          };
        }

        _createClass(RequestsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var loggedIn = window.localStorage.getItem('loggedIn');
            var expiryTime = window.localStorage.getItem('expiry');

            if (loggedIn === 'false' || loggedIn === '') {
              window.location.href = '/login';
            } else {
              if (JSON.parse(expiryTime) < Date.now()) {
                window.localStorage.setItem('token', '');
                window.localStorage.setItem('expiry', '');
                window.localStorage.setItem('loggedIn', 'false');
                window.location.href = 'login';
              } else {
                this.getRequests(null);
                this.getCreditTypes();
              }
            }
          }
        }]);

        return RequestsComponent;
      }();

      RequestsComponent.ɵfac = function RequestsComponent_Factory(t) {
        return new (t || RequestsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
      };

      RequestsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: RequestsComponent,
        selectors: [["app-requests"]],
        decls: 44,
        vars: 5,
        consts: [["appendTo", "body", "bindLabel", "name", "bindValue", "id", "placeholder", "Select Credit Supplier", "name", "id", 1, "customSelect", 3, "items", "ngModel", "ngModelChange", "change"], [1, "table", "table-bordered", "table-striped", "table-hover", "table-dark"], [1, "thead-light"], ["scope", "col"], ["scope", "col", 1, "fullName"], [4, "ngFor", "ngForOf"], ["scope", "row", 2, "cursor", "pointer"], [3, "href"], [1, "fullName"]],
        template: function RequestsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ng-select", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RequestsComponent_Template_ng_select_ngModelChange_4_listener($event) {
              return ctx.selectedType = $event;
            })("change", function RequestsComponent_Template_ng_select_change_4_listener($event) {
              return ctx.getRequests($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "thead", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Full Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Birth Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Product Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Product ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Product URL");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Seller");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Total $");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Home Phone Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Mobile Phone Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Duration (months)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Monthly $");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Up Front $");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Salary $");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Date Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, RequestsComponent_tr_43_Template, 38, 27, "tr", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.status);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total sales: ", ctx.totalSales, " AZN");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.creditTypes)("ngModel", ctx.selectedType);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.requests);
          }
        },
        directives: [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["UpperCasePipe"]],
        styles: ["ul[_ngcontent-%COMP%] {\n  text-align: center;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nh1[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.customSelect[_ngcontent-%COMP%] {\n  width: 35%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVxdWVzdHMvcmVxdWVzdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0FBRVI7QUFDQTtFQUNJLGdCQUFBO0FBRUo7QUFBQTtFQUNJLFVBQUE7QUFHSiIsImZpbGUiOiJzcmMvYXBwL3JlcXVlc3RzL3JlcXVlc3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG5oMSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5jdXN0b21TZWxlY3Qge1xuICAgIHdpZHRoOiAzNSU7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RequestsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: "app-requests",
            templateUrl: "./requests.component.html",
            styleUrls: ["./requests.component.scss"]
          }]
        }], function () {
          return [{
            type: _services_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "1y+R":
    /*!***********************************************!*\
      !*** ./src/app/services/data/data.service.ts ***!
      \***********************************************/

    /*! exports provided: DataService */

    /***/
    function yR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataService", function () {
        return DataService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var DataService = /*#__PURE__*/function () {
        function DataService(http, urls) {
          _classCallCheck(this, DataService);

          this.http = http;
          this.urls = urls;
        }

        _createClass(DataService, [{
          key: "createRequest",
          value: function createRequest(request, token, type) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var headers;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (!(token !== '')) {
                        _context4.next = 7;
                        break;
                      }

                      headers = {
                        token: "".concat(token),
                        id: "".concat(type)
                      };
                      _context4.next = 4;
                      return this.http.post(this.urls['postCreditUrl'], request, {
                        headers: headers
                      }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(200)).toPromise();

                    case 4:
                      return _context4.abrupt("return", _context4.sent);

                    case 7:
                      _context4.next = 9;
                      return Promise.reject('No token sent');

                    case 9:
                      return _context4.abrupt("return", _context4.sent);

                    case 10:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "getRequests",
          value: function getRequests(status, token, creditTypeId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var headers;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (!(token !== '')) {
                        _context5.next = 7;
                        break;
                      }

                      headers = {
                        token: "".concat(token),
                        status: "".concat(status),
                        id: "".concat(creditTypeId)
                      };
                      _context5.next = 4;
                      return this.http.get(this.urls['getCreditsUrl'], {
                        headers: headers
                      }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(500)).toPromise();

                    case 4:
                      return _context5.abrupt("return", _context5.sent);

                    case 7:
                      _context5.next = 9;
                      return Promise.reject('No token sent');

                    case 9:
                      return _context5.abrupt("return", _context5.sent);

                    case 10:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "getRequest",
          value: function getRequest(requestID, token) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var headers;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (!(token !== '')) {
                        _context6.next = 7;
                        break;
                      }

                      headers = {
                        token: "".concat(token),
                        id: "".concat(requestID)
                      };
                      _context6.next = 4;
                      return this.http.get(this.urls['getCreditUrl'], {
                        headers: headers
                      }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(200)).toPromise();

                    case 4:
                      return _context6.abrupt("return", _context6.sent);

                    case 7:
                      _context6.next = 9;
                      return Promise.reject('No token sent');

                    case 9:
                      return _context6.abrupt("return", _context6.sent);

                    case 10:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "updateRequest",
          value: function updateRequest(request, token) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var headers;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      if (!(token !== '')) {
                        _context7.next = 10;
                        break;
                      }

                      headers = {
                        token: "".concat(token)
                      };
                      console.log(headers);
                      console.log(this.urls['updateCreditUrl']);
                      console.log(request);
                      _context7.next = 7;
                      return this.http.put(this.urls['updateCreditUrl'], request, {
                        headers: headers
                      }).pipe().toPromise();

                    case 7:
                      return _context7.abrupt("return", _context7.sent);

                    case 10:
                      _context7.next = 12;
                      return Promise.reject('No token sent');

                    case 12:
                      return _context7.abrupt("return", _context7.sent);

                    case 13:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "updateStatus",
          value: function updateStatus(requestID, status, token) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var body, headers;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      body = {
                        requestID: requestID,
                        status: status
                      };
                      headers = {
                        token: "".concat(token)
                      };
                      _context8.next = 4;
                      return this.http.put(this.urls['updateCreditStatusUrl'], body, {
                        headers: headers
                      }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(200)).toPromise();

                    case 4:
                      return _context8.abrupt("return", _context8.sent);

                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "getCreditTypes",
          value: function getCreditTypes(token) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var headers;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      if (!(token != '')) {
                        _context9.next = 7;
                        break;
                      }

                      headers = {
                        token: "".concat(token)
                      };
                      _context9.next = 4;
                      return this.http.get(this.urls['getCreditTypesUrl'], {
                        headers: headers
                      }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(100)).toPromise();

                    case 4:
                      return _context9.abrupt("return", _context9.sent);

                    case 7:
                      _context9.next = 9;
                      return Promise.reject('No token sent');

                    case 9:
                      return _context9.abrupt("return", _context9.sent);

                    case 10:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }]);

        return DataService;
      }();

      DataService.ɵfac = function DataService_Factory(t) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinvalidFactory"]();
      };

      DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: DataService,
        factory: DataService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }, {
            type: undefined
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "6Qg2":
    /*!*******************************************!*\
      !*** ./src/app/services/users.service.ts ***!
      \*******************************************/

    /*! exports provided: UsersService */

    /***/
    function Qg2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersService", function () {
        return UsersService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var UsersService = function UsersService(http) {
        var _this6 = this;

        _classCallCheck(this, UsersService);

        this.http = http;
        this.loginUrl = 'http://165.227.174.162:3000/api/loginUser';
        this.logoutUrl = 'http://165.227.174.162:3000/api/logoutUser';
        this.findUserUrl = 'http://165.227.174.162:3000/api/getCreditUser';

        this.login = function (creds) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.http.post(this.loginUrl, creds).pipe().toPromise();

                  case 2:
                    return _context10.abrupt("return", _context10.sent);

                  case 3:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        };

        this.logout = function (token) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var headers;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    headers = {
                      'token': "".concat(token)
                    };
                    _context11.next = 3;
                    return this.http["delete"](this.logoutUrl, {
                      headers: headers
                    }).pipe().toPromise();

                  case 3:
                    return _context11.abrupt("return", _context11.sent);

                  case 4:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        };

        this.getCreditUser = function (userNumber, token) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var headers;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    headers = {};
                    headers = userNumber.hasOwnProperty("mobileNumber") ? {
                      mobileNumber: userNumber['mobileNumber']
                    } : userNumber.hasOwnProperty("homeNumber") ? {
                      homeNumber: userNumber['homeNumber']
                    } : {};
                    headers['token'] = token;
                    console.log(headers);
                    _context12.next = 6;
                    return this.http.get(this.findUserUrl, {
                      headers: headers
                    }).pipe().toPromise();

                  case 6:
                    return _context12.abrupt("return", _context12.sent);

                  case 7:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        };
      };

      UsersService.ɵfac = function UsersService_Factory(t) {
        return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: UsersService,
        factory: UsersService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UsersService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "8aff":
    /*!**********************************************!*\
      !*** ./src/app/services/requests.service.ts ***!
      \**********************************************/

    /*! exports provided: RequestsService */

    /***/
    function aff(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequestsService", function () {
        return RequestsService;
      });
      /* harmony import */


      var _data_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./data/data.service */
      "1y+R");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var RequestsService = /*#__PURE__*/function (_data_data_service__W) {
        _inherits(RequestsService, _data_data_service__W);

        var _super = _createSuper(RequestsService);

        function RequestsService(httpClient) {
          _classCallCheck(this, RequestsService);

          return _super.call(this, httpClient, {
            getCreditsUrl: 'http://165.227.174.162:3000/api/credits',
            postCreditUrl: 'http://165.227.174.162:3000/api/credit',
            getCreditUrl: 'http://165.227.174.162:3000/api/credit',
            updateCreditUrl: 'http://165.227.174.162:3000/api/credit',
            updateCreditStatusUrl: 'http://165.227.174.162:3000/api/setCreditStatus',
            getCreditTypesUrl: 'http://165.227.174.162:3000/api/creditTypes'
          });
        }

        return RequestsService;
      }(_data_data_service__WEBPACK_IMPORTED_MODULE_0__["DataService"]);

      RequestsService.ɵfac = function RequestsService_Factory(t) {
        return new (t || RequestsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      RequestsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: RequestsService,
        factory: RequestsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RequestsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var token = window.localStorage.getItem('token');
            var isAuthenticated = window.localStorage.getItem('loggedIn');

            if ((token === null || token === void 0 ? void 0 : token.trim().length) > 0 && isAuthenticated == 'true') {
              var tokenExpiry = parseInt(window.localStorage.getItem('expiry'));

              if (tokenExpiry < Date.now()) {
                window.localStorage.setItem('loggedIn', '');
                window.localStorage.setItem('token', '');
                window.localStorage.setItem('expiry', '');
                window.location.href = '/login';
              } else {
                window.location.href = '/requests/pending';
              }
            } else {
              window.localStorage.setItem('loggedIn', '');
              window.localStorage.setItem('token', '');
              window.localStorage.setItem('expiry', '');
              window.location.href = '/login';
            }
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 0,
        vars: 0,
        template: function HomeComponent_Template(rf, ctx) {},
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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

      /***/
    },

    /***/
    "OnEJ":
    /*!************************************************************!*\
      !*** ./src/app/request-detail/request-detail.component.ts ***!
      \************************************************************/

    /*! exports provided: RequestDetailComponent */

    /***/
    function OnEJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequestDetailComponent", function () {
        return RequestDetailComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_requests_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../services/requests.service */
      "8aff");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function RequestDetailComponent_button_146_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RequestDetailComponent_button_146_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r4.updateStatus("sentForCredit");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Send to loan approval");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function RequestDetailComponent_button_147_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RequestDetailComponent_button_147_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r6.updateStatus("declined");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Decline loan");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function RequestDetailComponent_button_148_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RequestDetailComponent_button_148_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r8.updateStatus("loanApproved");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Loan Approved by BOKT");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function RequestDetailComponent_button_149_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RequestDetailComponent_button_149_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r10.updateStatus("loanDeclined");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Loan Declined by BOKT");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var RequestDetailComponent = /*#__PURE__*/function () {
        function RequestDetailComponent(service, route, fb) {
          _classCallCheck(this, RequestDetailComponent);

          this.service = service;
          this.route = route;
          this.form = fb.group({
            firstName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            lastName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            // email: ['', [Validators.required, Validators.email]],
            fathersName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            dayOfBirth: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]],
            monthOfBirth: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]],
            yearOfBirth: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1900)]],
            idSeria: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]],
            idNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]],
            idCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]],
            productId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]],
            productUrl: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]],
            productTitle: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]],
            sellerID: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]],
            sellerName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]],
            categoryID: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]],
            categoryName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]],
            duration: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]],
            upFront: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]],
            monthly: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]],
            total: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]],
            region: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]],
            address: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]],
            regionRegistered: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]],
            addressRegistered: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]],
            homePhoneNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]],
            mobilePhoneNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]],
            contactType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]],
            contactFrom: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            contactTime: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            workInfo: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]],
            occupationInfo: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]],
            salary: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(0)]],
            newMonthly: [""],
            newTotal: [""]
          });
        }

        _createClass(RequestDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            var requestID = this.route.snapshot.paramMap.get("id");
            var token = window.localStorage.getItem("token");
            this.service.getRequest(requestID, token).then(function (response) {
              _this7.request = response;
              console.log(_this7.request);

              _this7.form.setValue({
                firstName: _this7.request["firstName"],
                lastName: _this7.request["lastName"],
                fathersName: _this7.request["fatherName"],
                dayOfBirth: _this7.request["dayOfBirth"],
                monthOfBirth: _this7.request["monthOfBirth"],
                yearOfBirth: _this7.request["yearOfBirth"],
                idSeria: _this7.request["idSeria"],
                idNumber: _this7.request["idNumber"],
                idCode: _this7.request["idCode"],
                productId: _this7.request["productID"],
                productUrl: _this7.request["productUrl"],
                productTitle: _this7.request["productTitle"],
                sellerID: _this7.request["sellerID"],
                sellerName: _this7.request["sellerName"],
                categoryID: _this7.request["categoryID"],
                categoryName: _this7.request["categoryName"],
                duration: _this7.request["duration"],
                upFront: _this7.request["upFront"],
                monthly: _this7.request["monthly"],
                total: _this7.request["total"],
                region: _this7.request["region"],
                address: _this7.request["address"],
                regionRegistered: _this7.request["registeredRegion"],
                addressRegistered: _this7.request["registeredAddress"],
                homePhoneNumber: _this7.request["homePhoneNumber"],
                mobilePhoneNumber: _this7.request["mobilePhoneNumber"],
                contactType: _this7.request["contactType"],
                workInfo: _this7.request["workInfo"],
                occupationInfo: _this7.request["occupationInfo"],
                salary: _this7.request["salary"],
                contactFrom: _this7.request["contactFrom"],
                contactTime: _this7.request["contactTime"],
                newMonthly: 0,
                newTotal: 0
              });

              _this7.requestStatus = _this7.request['status'];
            })["catch"](function (err) {
              console.error(err);
            });
          }
        }, {
          key: "updateRequest",
          value: function updateRequest() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var token, data;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      token = window.localStorage.getItem("token");
                      data = {
                        requestID: this.request["id"],
                        firstName: this.firstName,
                        lastName: this.lastName,
                        fathersName: this.fathersName,
                        dayOfBirth: this.dayOfBirth,
                        monthOfBirth: this.monthOfBirth,
                        yearOfBirth: this.yearOfBirth,
                        idSeria: this.idSeria,
                        idNumber: this.idNumber,
                        idCode: this.idCode,
                        productID: this.productId,
                        productUrl: this.productUrl,
                        productTitle: this.productTitle,
                        sellerID: this.sellerID,
                        sellerName: this.sellerName,
                        categoryID: this.categoryID,
                        categoryName: this.categoryName,
                        duration: this.duration,
                        upFront: this.upFront,
                        monthly: this.monthly,
                        total: this.total,
                        region: this.region,
                        address: this.address,
                        regionRegistered: this.regionRegistered,
                        addressRegistered: this.addressRegistered,
                        homePhoneNumber: this.homePhoneNumber,
                        mobilePhoneNumber: this.mobilePhoneNumber,
                        contactType: this.contactType,
                        workInfo: this.workInfo,
                        occupationInfo: this.occupationInfo,
                        salary: this.salary,
                        shopAzUserId: this.request["shopAzUserId"],
                        contactFrom: this.contactFrom,
                        contactTime: this.contactTime
                      };
                      _context13.next = 4;
                      return this.service.updateRequest(data, token).then(function (response) {
                        console.log(response);
                        alert(response['success']);
                      })["catch"](function (err) {
                        console.log(err);
                      });

                    case 4:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "updateStatus",
          value: function updateStatus(status) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var token, id;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      token = window.localStorage.getItem("token");
                      id = this.request["id"];
                      _context14.next = 4;
                      return this.service.updateStatus(id, status, token).then(function (response) {
                        window.location.href = '/requests/' + status;
                        alert(response.success);
                      })["catch"](function (err) {
                        return console.log(err);
                      });

                    case 4:
                      return _context14.abrupt("return", _context14.sent);

                    case 5:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "calculateCredit",
          value: function calculateCredit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return console.log(this.upFront);

                    case 2:
                      return _context15.abrupt("return", _context15.sent);

                    case 3:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }, {
          key: "firstName",
          get: function get() {
            return this.form.get("firstName").value;
          }
        }, {
          key: "lastName",
          get: function get() {
            return this.form.get("lastName").value;
          }
        }, {
          key: "fathersName",
          get: function get() {
            return this.form.get("fathersName").value;
          }
        }, {
          key: "dayOfBirth",
          get: function get() {
            return this.form.get("dayOfBirth").value;
          }
        }, {
          key: "monthOfBirth",
          get: function get() {
            return this.form.get("monthOfBirth").value;
          }
        }, {
          key: "yearOfBirth",
          get: function get() {
            return this.form.get("yearOfBirth").value;
          }
        }, {
          key: "productId",
          get: function get() {
            return this.form.get("productId").value;
          }
        }, {
          key: "idSeria",
          get: function get() {
            return this.form.get("idSeria").value;
          }
        }, {
          key: "idCode",
          get: function get() {
            return this.form.get("idCode").value;
          }
        }, {
          key: "idNumber",
          get: function get() {
            return this.form.get("idNumber").value;
          }
        }, {
          key: "productUrl",
          get: function get() {
            return this.form.get("productUrl").value;
          }
        }, {
          key: "productTitle",
          get: function get() {
            return this.form.get("productTitle").value;
          }
        }, {
          key: "sellerID",
          get: function get() {
            return this.form.get("sellerID").value;
          }
        }, {
          key: "sellerName",
          get: function get() {
            return this.form.get("sellerName").value;
          }
        }, {
          key: "categoryID",
          get: function get() {
            return this.form.get("categoryID").value;
          }
        }, {
          key: "categoryName",
          get: function get() {
            return this.form.get("categoryName").value;
          }
        }, {
          key: "duration",
          get: function get() {
            return this.form.get("duration").value;
          }
        }, {
          key: "upFront",
          get: function get() {
            return this.form.get("upFront").value;
          }
        }, {
          key: "monthly",
          get: function get() {
            return this.form.get("monthly").value;
          }
        }, {
          key: "total",
          get: function get() {
            return this.form.get("total").value;
          }
        }, {
          key: "region",
          get: function get() {
            return this.form.get("region").value;
          }
        }, {
          key: "address",
          get: function get() {
            return this.form.get("address").value;
          }
        }, {
          key: "regionRegistered",
          get: function get() {
            return this.form.get("regionRegistered").value;
          }
        }, {
          key: "addressRegistered",
          get: function get() {
            return this.form.get("addressRegistered").value;
          }
        }, {
          key: "homePhoneNumber",
          get: function get() {
            return this.form.get("homePhoneNumber").value;
          }
        }, {
          key: "mobilePhoneNumber",
          get: function get() {
            return this.form.get("mobilePhoneNumber").value;
          }
        }, {
          key: "contactType",
          get: function get() {
            return this.form.get("contactType").value;
          }
        }, {
          key: "workInfo",
          get: function get() {
            return this.form.get("workInfo").value;
          }
        }, {
          key: "occupationInfo",
          get: function get() {
            return this.form.get("occupationInfo").value;
          }
        }, {
          key: "salary",
          get: function get() {
            return this.form.get("salary").value;
          }
        }, {
          key: "contactFrom",
          get: function get() {
            return this.form.get("contactFrom").value;
          }
        }, {
          key: "contactTime",
          get: function get() {
            return this.form.get("contactTime").value;
          }
        }, {
          key: "newMonthly",
          get: function get() {
            return this.form.get("newMonthly").value;
          }
        }, {
          key: "value",
          get: function get() {
            return this.form.get("newTotal").value;
          }
        }]);

        return RequestDetailComponent;
      }();

      RequestDetailComponent.ɵfac = function RequestDetailComponent_Factory(t) {
        return new (t || RequestDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_requests_service__WEBPACK_IMPORTED_MODULE_3__["RequestsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      RequestDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: RequestDetailComponent,
        selectors: [["app-request-detail"]],
        decls: 152,
        vars: 5,
        consts: [[3, "formGroup"], [1, "info-section"], [1, "info"], [1, "form-group"], ["for", "firstName"], ["formControlName", "firstName", "type", "text", "id", "fathersName", "name", "fathersName", 1, "form-control"], ["for", "lastName"], ["formControlName", "lastName", "type", "text", "id", "lastName", "name", "lastName", 1, "form-control"], ["for", "fathersName"], ["formControlName", "fathersName", "type", "text", "id", "fathersName", "name", "fathersName", 1, "form-control"], ["for", "dayOfBirth"], ["formControlName", "dayOfBirth", "type", "number", "id", "dayOfBirth", "name", "dayOfBirth", 1, "form-control"], ["for", "monthOfBirth"], ["formControlName", "monthOfBirth", "type", "number", "id", "monthOfBirth", "name", "monthOfBirth", 1, "form-control"], ["for", "yearOfBirth"], ["formControlName", "yearOfBirth", "type", "number", "id", "yearOfBirth", "name", "yearOfBirth", 1, "form-control"], ["for", "productId"], ["formControlName", "productId", "type", "number", "id", "productId", "name", "productId", 1, "form-control"], ["for", "productUrl"], ["formControlName", "productUrl", "type", "text", "id", "productUrl", "name", "productUrl", 1, "form-control"], ["for", "productTitle"], ["formControlName", "productTitle", "type", "text", "id", "productTitle", "name", "productTitle", 1, "form-control"], ["for", "sellerID"], ["formControlName", "sellerID", "type", "number", "id", "sellerID", "name", "sellerID", 1, "form-control"], ["for", "sellerName"], ["formControlName", "sellerName", "type", "text", "id", "sellerName", "name", "sellerName", 1, "form-control"], ["for", "categoryID"], ["formControlName", "categoryID", "type", "number", "id", "categoryID", "name", "categoryID", 1, "form-control"], ["for", "categoryName"], ["formControlName", "categoryName", "type", "text", "id", "categoryName", "name", "categoryName", 1, "form-control"], ["for", "duration"], ["formControlName", "duration", "type", "number", "id", "duration", "name", "duration", 1, "form-control"], ["for", "monthly"], ["formControlName", "monthly", "type", "number", "id", "monthly", "name", "monthly", 1, "form-control"], ["for", "total"], ["formControlName", "total", "type", "number", "id", "total", "name", "total", 1, "form-control"], ["for", "region"], ["formControlName", "region", "type", "text", "id", "region", "name", "", 1, "form-control"], ["for", "address"], ["formControlName", "address", "type", "text", "id", "address", "name", "", 1, "form-control"], ["for", "regionRegistered"], ["formControlName", "regionRegistered", "type", "text", "id", "regionRegistered", "name", "regionRegistered", 1, "form-control"], ["for", "addressRegistered"], ["formControlName", "addressRegistered", "type", "text", "id", "addressRegistered", "name", "addressRegistered", 1, "form-control"], ["for", "homePhoneNumber"], ["formControlName", "homePhoneNumber", "type", "text", "id", "homePhoneNumber", "name", "homePhoneNumber", 1, "form-control"], ["for", "mobilePhoneNumber"], ["formControlName", "mobilePhoneNumber", "type", "text", "id", "mobilePhoneNumber", "name", "mobilePhoneNumber", 1, "form-control"], ["for", "contactType"], ["formControlName", "contactType", "type", "text", "id", "contactType", "name", "contactType", 1, "form-control"], ["for", "workInfo"], ["formControlName", "workInfo", "type", "text", "id", "workInfo", "name", "workInfo", 1, "form-control"], ["for", "occupationInfo"], ["formControlName", "occupationInfo", "type", "text", "id", "occupationInfo", "name", "occupationInfo", 1, "form-control"], ["for", "salary"], ["formControlName", "salary", "type", "text", "id", "salary", "name", "salary", 1, "form-control"], ["for", "idSeria"], ["formControlName", "idSeria", "type", "text", "id", "idSeria", "name", "idSeria", 1, "form-control"], ["for", "idCode"], ["formControlName", "idCode", "type", "text", "id", "idCode", "name", "idCode", 1, "form-control"], ["for", "idNumber"], ["formControlName", "idNumber", "type", "number", "id", "idNumber", "name", "idNumber", 1, "form-control"], ["for", "upFront"], ["formControlName", "upFront", "type", "number", "id", "upFront", "name", "upFront", 1, "form-control"], ["for", "newMonthly"], ["formControlName", "newMonthly", "type", "number", "id", "newMonthly", "name", "newMonthly", 1, "form-control"], ["for", "newTotal"], ["formControlName", "newTotal", "type", "number", "id", "newTotal", "name", "newTotal", 1, "form-control"], [1, "btn", "btn-primary", 3, "click"], [1, "actions"], ["class", "btn btn-secondary", "style", "background: green;", 3, "click", 4, "ngIf"], ["class", "btn btn-secondary", "style", "background: red;", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", 2, "background", "blue", 3, "click"], [1, "btn", "btn-secondary", 2, "background", "green", 3, "click"], [1, "btn", "btn-secondary", 2, "background", "red", 3, "click"]],
        template: function RequestDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Client Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Fathers Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Day Of Birth");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Month Of Birth");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Year Of Birth");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Product Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Product Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Product URL");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Product Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Seller ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Seller Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "label", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Category ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "label", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Category Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "label", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Duration");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "label", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Monthly");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "input", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "label", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Total");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "input", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Registration Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "label", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Region");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "input", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "label", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "input", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "label", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "Region Registered");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "input", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "label", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "Address Registered");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "input", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "label", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "Home Phone Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](95, "input", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "label", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Mobile Phone Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "input", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "label", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Contact Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](103, "input", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "label", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "Work Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](107, "input", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "label", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "Work Info Note");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](111, "input", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "label", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "Salary");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](115, "input", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "label", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "ID Seria");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](119, "input", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "label", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "ID Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](123, "input", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "label", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, "ID Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](127, "input", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](130, "Calculator");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "label", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "Up Front");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](134, "input", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "label", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137, "Monthly");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](138, "input", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "label", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "Total");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](142, "input", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "button", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RequestDetailComponent_Template_button_click_143_listener() {
              return ctx.calculateCredit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, "Re-calculate with new up front payment");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](146, RequestDetailComponent_button_146_Template, 2, 0, "button", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](147, RequestDetailComponent_button_147_Template, 2, 0, "button", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](148, RequestDetailComponent_button_148_Template, 2, 0, "button", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](149, RequestDetailComponent_button_149_Template, 2, 0, "button", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "button", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RequestDetailComponent_Template_button_click_150_listener() {
              return ctx.updateRequest();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, "Update Credit Request");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](146);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.requestStatus == "pending");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.requestStatus == "pending");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.requestStatus == "sentForCredit");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.requestStatus == "sentForCredit");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        styles: ["form[_ngcontent-%COMP%] {\n  display: flex;\n  color: white;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n}\nform[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  width: 90%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\nform[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 15%;\n  background: #11D800;\n  border: 0px;\n  border-radius: 6px;\n}\nform[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  border: 1px solid white;\n}\n.info-section[_ngcontent-%COMP%] {\n  display: flex;\n  width: 90%;\n  height: 70%;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n}\n.info-section[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  padding: 10px 10px 10px 10px;\n  flex-wrap: wrap;\n  margin: 10px;\n  width: 50%;\n  display: flex;\n  justify-content: space-between;\n  background: #6ebcff;\n  border: 0px;\n  border-radius: 6px;\n}\n.info-section[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n}\n.info-section[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  width: 60%;\n}\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVxdWVzdC1kZXRhaWwvcmVxdWVzdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQUk7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFFUjtBQURRO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBR1o7QUFEUTtFQUNJLHVCQUFBO0FBR1o7QUFDQTtFQUNJLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUVKO0FBREk7RUFLSSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBRFI7QUFYUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQWFaO0FBRlE7RUFDSSxXQUFBO0FBSVo7QUFBQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUdKO0FBRkk7RUFDSSxXQUFBO0FBSVIiLCJmaWxlIjoic3JjL2FwcC9yZXF1ZXN0LWRldGFpbC9yZXF1ZXN0LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLmFjdGlvbnMge1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNSU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTFEODAwO1xuICAgICAgICAgICAgYm9yZGVyOiAwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICB9XG4gICAgfVxufVxuLmluZm8tc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogNzAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLmluZm8ge1xuICAgICAgICBoMiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYmFja2dyb3VuZDogIzZlYmNmZjtcbiAgICAgICAgYm9yZGVyOiAwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4uYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBidXR0b24ge1xuICAgICAgICBtYXJnaW46IDhweDtcbiAgICB9XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](RequestDetailComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: "app-request-detail",
            templateUrl: "./request-detail.component.html",
            styleUrls: ["./request-detail.component.scss"]
          }]
        }], function () {
          return [{
            type: _services_requests_service__WEBPACK_IMPORTED_MODULE_3__["RequestsService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./navbar/navbar.component */
      "kWWo");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "WFva":
    /*!************************************************************!*\
      !*** ./src/app/create-request/create-request.component.ts ***!
      \************************************************************/

    /*! exports provided: CreateRequestComponent */

    /***/
    function WFva(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateRequestComponent", function () {
        return CreateRequestComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_requests_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/requests.service */
      "8aff");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function CreateRequestComponent_div_134_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateRequestComponent_div_134_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var credit_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2.setCreditType(credit_r1["enum"]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var credit_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](credit_r1.name);
        }
      }

      var CreateRequestComponent = /*#__PURE__*/function () {
        function CreateRequestComponent(fb, service) {
          _classCallCheck(this, CreateRequestComponent);

          this.service = service;
          this.creditTypes = [{
            name: "Rabitebank",
            "enum": "1"
          }, {
            name: "Ferrum",
            "enum": "2"
          }];
          this.form = fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            fathersName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            dayOfBirth: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]],
            monthOfBirth: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]],
            yearOfBirth: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1900)]],
            idSeria: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            idNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]],
            idCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            productId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]],
            productUrl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            productTitle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            sellerID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]],
            sellerName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            categoryID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]],
            categoryName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            duration: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]],
            upFront: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]],
            monthly: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]],
            total: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]],
            region: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            regionRegistered: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            addressRegistered: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            homePhoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            mobilePhoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            contactType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            workInfo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            occupationInfo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            salary: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(0)]]
          });
        }

        _createClass(CreateRequestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "createCreditRequest",
          value: function createCreditRequest() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var newRequest, token, typeID;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      newRequest = {
                        firstName: this.firstName,
                        lastName: this.lastName,
                        email: this.email,
                        fathersName: this.fathersName,
                        dayOfBirth: this.dayOfBirth,
                        monthOfBirth: this.monthOfBirth,
                        yearOfBirth: this.yearOfBirth,
                        idSeria: this.idSeria,
                        idNumber: this.idNumber,
                        idCode: this.idCode,
                        productID: this.productId,
                        productUrl: this.productUrl,
                        productTitle: this.productTitle,
                        sellerName: this.sellerName,
                        categoryName: this.categoryName,
                        duration: this.duration,
                        upFront: this.upFront,
                        monthly: this.monthly,
                        total: this.total,
                        region: this.region,
                        address: this.address,
                        regionRegistered: this.regionRegistered,
                        addressRegistered: this.addressRegistered,
                        homePhoneNumber: this.homePhoneNumber,
                        mobilePhoneNumber: this.mobilePhoneNumber,
                        contactType: this.contactType,
                        workInfo: this.workInfo,
                        occupationInfo: this.occupationInfo,
                        salary: this.salary
                      };
                      token = window.localStorage.getItem('token');
                      typeID = this.creditTypeID;
                      _context16.next = 5;
                      return this.service.createRequest(newRequest, token, typeID).then(function (response) {
                        alert(response.success);
                      })["catch"](function (err) {
                        console.error(err);
                      });

                    case 5:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }
        }, {
          key: "setCreditType",
          value: function setCreditType(type) {
            this.creditTypeID = type;
            console.log(this.creditTypeID);
          }
        }, {
          key: "firstName",
          get: function get() {
            return this.form.get('firstName').value;
          }
        }, {
          key: "lastName",
          get: function get() {
            return this.form.get('lastName').value;
          }
        }, {
          key: "fathersName",
          get: function get() {
            return this.form.get('fathersName').value;
          }
        }, {
          key: "dayOfBirth",
          get: function get() {
            return this.form.get('dayOfBirth').value;
          }
        }, {
          key: "monthOfBirth",
          get: function get() {
            return this.form.get('monthOfBirth').value;
          }
        }, {
          key: "yearOfBirth",
          get: function get() {
            return this.form.get('yearOfBirth').value;
          }
        }, {
          key: "productId",
          get: function get() {
            return this.form.get('productId').value;
          }
        }, {
          key: "email",
          get: function get() {
            return this.form.get('email').value;
          }
        }, {
          key: "idSeria",
          get: function get() {
            return this.form.get('idSeria').value;
          }
        }, {
          key: "idCode",
          get: function get() {
            return this.form.get('idCode').value;
          }
        }, {
          key: "idNumber",
          get: function get() {
            return this.form.get('idNumber').value;
          }
        }, {
          key: "productUrl",
          get: function get() {
            return this.form.get('productUrl').value;
          }
        }, {
          key: "productTitle",
          get: function get() {
            return this.form.get('productTitle').value;
          }
        }, {
          key: "sellerName",
          get: function get() {
            return this.form.get('sellerName').value;
          }
        }, {
          key: "categoryName",
          get: function get() {
            return this.form.get('categoryName').value;
          }
        }, {
          key: "duration",
          get: function get() {
            return this.form.get('duration').value;
          }
        }, {
          key: "upFront",
          get: function get() {
            return this.form.get('upFront').value;
          }
        }, {
          key: "monthly",
          get: function get() {
            return this.form.get('monthly').value;
          }
        }, {
          key: "total",
          get: function get() {
            return this.form.get('total').value;
          }
        }, {
          key: "region",
          get: function get() {
            return this.form.get('region').value;
          }
        }, {
          key: "address",
          get: function get() {
            return this.form.get('address').value;
          }
        }, {
          key: "regionRegistered",
          get: function get() {
            return this.form.get('regionRegistered').value;
          }
        }, {
          key: "addressRegistered",
          get: function get() {
            return this.form.get('addressRegistered').value;
          }
        }, {
          key: "homePhoneNumber",
          get: function get() {
            return this.form.get('homePhoneNumber').value;
          }
        }, {
          key: "mobilePhoneNumber",
          get: function get() {
            return this.form.get('mobilePhoneNumber').value;
          }
        }, {
          key: "contactType",
          get: function get() {
            return this.form.get('contactType').value;
          }
        }, {
          key: "workInfo",
          get: function get() {
            return this.form.get('workInfo').value;
          }
        }, {
          key: "occupationInfo",
          get: function get() {
            return this.form.get('occupationInfo').value;
          }
        }, {
          key: "salary",
          get: function get() {
            return this.form.get('salary').value;
          }
        }]);

        return CreateRequestComponent;
      }();

      CreateRequestComponent.ɵfac = function CreateRequestComponent_Factory(t) {
        return new (t || CreateRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_requests_service__WEBPACK_IMPORTED_MODULE_3__["RequestsService"]));
      };

      CreateRequestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CreateRequestComponent,
        selectors: [["app-create-request"]],
        decls: 137,
        vars: 2,
        consts: [[3, "formGroup"], [1, "info-section"], [1, "info"], [1, "form-group"], ["for", "firstName"], ["formControlName", "firstName", "type", "text", "id", "fathersName", "name", "fathersName", 1, "form-control"], ["for", "lastName"], ["formControlName", "lastName", "type", "text", "id", "lastName", "name", "lastName", 1, "form-control"], ["for", "fathersName"], ["formControlName", "fathersName", "type", "text", "id", "fathersName", "name", "fathersName", 1, "form-control"], ["for", "dayOfBirth"], ["formControlName", "dayOfBirth", "type", "number", "id", "dayOfBirth", "name", "dayOfBirth", 1, "form-control"], ["for", "monthOfBirth"], ["formControlName", "monthOfBirth", "type", "number", "id", "monthOfBirth", "name", "monthOfBirth", 1, "form-control"], ["for", "yearOfBirth"], ["formControlName", "yearOfBirth", "type", "number", "id", "yearOfBirth", "name", "yearOfBirth", 1, "form-control"], ["for", "email"], ["formControlName", "email", "type", "text", "id", "email", "name", "email", 1, "form-control"], ["for", "productId"], ["formControlName", "productId", "type", "number", "id", "productId", "name", "productId", 1, "form-control"], ["for", "productUrl"], ["formControlName", "productUrl", "type", "text", "id", "productUrl", "name", "productUrl", 1, "form-control"], ["for", "productTitle"], ["formControlName", "productTitle", "type", "text", "id", "productTitle", "name", "productTitle", 1, "form-control"], ["for", "sellerName"], ["formControlName", "sellerName", "type", "text", "id", "sellerName", "name", "sellerName", 1, "form-control"], ["for", "categoryName"], ["formControlName", "categoryName", "type", "text", "id", "categoryName", "name", "categoryName", 1, "form-control"], ["for", "region"], ["formControlName", "region", "type", "text", "id", "region", "name", "", 1, "form-control"], ["for", "address"], ["formControlName", "address", "type", "text", "id", "address", "name", "", 1, "form-control"], ["for", "regionRegistered"], ["formControlName", "regionRegistered", "type", "text", "id", "regionRegistered", "name", "regionRegistered", 1, "form-control"], ["for", "addressRegistered"], ["formControlName", "addressRegistered", "type", "text", "id", "addressRegistered", "name", "addressRegistered", 1, "form-control"], ["for", "homePhoneNumber"], ["formControlName", "homePhoneNumber", "type", "text", "id", "homePhoneNumber", "name", "homePhoneNumber", 1, "form-control"], ["for", "mobilePhoneNumber"], ["formControlName", "mobilePhoneNumber", "type", "text", "id", "mobilePhoneNumber", "name", "mobilePhoneNumber", 1, "form-control"], ["for", "contactType"], ["formControlName", "contactType", "type", "text", "id", "contactType", "name", "contactType", 1, "form-control"], ["for", "workInfo"], ["formControlName", "workInfo", "type", "text", "id", "workInfo", "name", "workInfo", 1, "form-control"], ["for", "occupationInfo"], ["formControlName", "occupationInfo", "type", "text", "id", "occupationInfo", "name", "occupationInfo", 1, "form-control"], ["for", "salary"], ["formControlName", "salary", "type", "text", "id", "salary", "name", "salary", 1, "form-control"], ["for", "idSeria"], ["formControlName", "idSeria", "type", "text", "id", "idSeria", "name", "idSeria", 1, "form-control"], ["for", "idCode"], ["formControlName", "idCode", "type", "text", "id", "idCode", "name", "idCode", 1, "form-control"], ["for", "idNumber"], ["formControlName", "idNumber", "type", "number", "id", "idNumber", "name", "idNumber", 1, "form-control"], ["for", "duration"], ["formControlName", "duration", "type", "number", "id", "duration", "name", "duration", 1, "form-control"], ["for", "monthly"], ["formControlName", "monthly", "type", "number", "id", "monthly", "name", "monthly", 1, "form-control"], ["for", "total"], ["formControlName", "total", "type", "number", "id", "total", "name", "total", 1, "form-control"], ["for", "upFront"], ["formControlName", "upFront", "type", "number", "id", "upFront", "name", "upFront", 1, "form-control"], ["class", "info", 3, "click", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "click"], [1, "info", 3, "click"], ["type", "radio", "value", "credit.name", "name", "credit.name", 2, "width", "25px", "height", "25px"], ["for", "radio"]],
        template: function CreateRequestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Create Credit Request");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Client Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Fathers Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Day Of Birth");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Month Of Birth");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Year Of Birth");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Product Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Product Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Product URL");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Product Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Seller Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "label", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Category Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Registration Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "label", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Region");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "label", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "label", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Region Registered");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "input", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "label", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Address Registered");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "input", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "label", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Home Phone Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "input", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "label", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Mobile Phone Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "input", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "label", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Contact Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "input", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "label", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Work Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "input", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "label", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Work Info Note");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "input", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "label", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Salary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "input", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "label", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "ID Seria");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "input", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "label", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "ID Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "input", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "label", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "ID Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "input", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Calculator");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "label", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Duration");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "input", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "label", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Monthly");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "input", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "label", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "Total");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "input", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "label", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "Up Front");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "input", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](134, CreateRequestComponent_div_134_Template, 4, 1, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "button", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateRequestComponent_Template_button_click_135_listener() {
              return ctx.createCreditRequest();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Create Credit Request");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](134);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.creditTypes);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        styles: ["form[_ngcontent-%COMP%] {\n  display: flex;\n  color: white;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n}\nform[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: black;\n  text-align: left;\n}\nform[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  width: 90%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\nform[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 25%;\n  background: #11D800;\n  border: 0px;\n  border-radius: 6px;\n}\nform[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  border: 1px solid white;\n}\n.info-section[_ngcontent-%COMP%] {\n  display: flex;\n  width: 90%;\n  height: 70%;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n}\n.info-section[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  padding: 10px 10px 10px 10px;\n  flex-wrap: wrap;\n  margin: 10px;\n  width: 50%;\n  display: flex;\n  justify-content: space-between;\n  background: #6ebcff;\n  border: 0px;\n  border-radius: 6px;\n}\n.info-section[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n}\n.info-section[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXJlcXVlc3QvY3JlYXRlLXJlcXVlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQUk7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUFFUjtBQUFJO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRVI7QUFEUTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUdaO0FBRFE7RUFDSSx1QkFBQTtBQUdaO0FBQ0E7RUFDSSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQURJO0VBS0ksNEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQURSO0FBWFE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFhWjtBQUZRO0VBQ0ksV0FBQTtBQUlaIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlLXJlcXVlc3QvY3JlYXRlLXJlcXVlc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGgxIHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgICAuYWN0aW9ucyB7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxMUQ4MDA7XG4gICAgICAgICAgICBib3JkZXI6IDBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG59XG4uaW5mby1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA3MCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAuaW5mbyB7XG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNmViY2ZmO1xuICAgICAgICBib3JkZXI6IDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAuZm9ybS1ncm91cCB7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreateRequestComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-create-request',
            templateUrl: './create-request.component.html',
            styleUrls: ['./create-request.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _services_requests_service__WEBPACK_IMPORTED_MODULE_3__["RequestsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _requests_requests_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./requests/requests.component */
      "0yay");
      /* harmony import */


      var _create_request_create_request_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./create-request/create-request.component */
      "WFva");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _request_detail_request_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./request-detail/request-detail.component */
      "OnEJ");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./navbar/navbar.component */
      "kWWo");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _logout_logout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./logout/logout.component */
      "n1B2");
      /* harmony import */


      var _find_user_find_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./find-user/find-user.component */
      "+5bd");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "ZOsW");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _requests_requests_component__WEBPACK_IMPORTED_MODULE_5__["RequestsComponent"], _create_request_create_request_component__WEBPACK_IMPORTED_MODULE_6__["CreateRequestComponent"], _request_detail_request_detail_component__WEBPACK_IMPORTED_MODULE_8__["RequestDetailComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_12__["LogoutComponent"], _find_user_find_user_component__WEBPACK_IMPORTED_MODULE_13__["FindUserComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _requests_requests_component__WEBPACK_IMPORTED_MODULE_5__["RequestsComponent"], _create_request_create_request_component__WEBPACK_IMPORTED_MODULE_6__["CreateRequestComponent"], _request_detail_request_detail_component__WEBPACK_IMPORTED_MODULE_8__["RequestDetailComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_12__["LogoutComponent"], _find_user_find_user_component__WEBPACK_IMPORTED_MODULE_13__["FindUserComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "kWWo":
    /*!********************************************!*\
      !*** ./src/app/navbar/navbar.component.ts ***!
      \********************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function kWWo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function NavbarComponent_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var status_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "requests/" + status_r4["enum"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", status_r4.name, " ");
        }
      }

      function NavbarComponent_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavbarComponent_li_1_a_1_Template, 2, 2, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.viewMode == "map");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loggedIn);
        }
      }

      function NavbarComponent_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create Request");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NavbarComponent_a_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NavbarComponent_a_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Find User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(route) {
          _classCallCheck(this, NavbarComponent);

          this.route = route;
          this.title = 'creditAdminDashboard';
          this.statuses = [{
            "enum": 'pending',
            name: 'Pending'
          }, {
            "enum": 'declined',
            name: 'Declined'
          }, {
            "enum": 'sentForCredit',
            name: 'Sent For Approval'
          }, {
            "enum": 'loanApproved',
            name: 'Loan Approved'
          }, {
            "enum": 'loanDeclined',
            name: 'Loan Declined'
          }];
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var logStatus = window.localStorage.getItem('loggedIn');

            if (logStatus == 'true') {
              this.loggedIn = true;
            } else {
              this.loggedIn = false;
            }
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
      };

      NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavbarComponent,
        selectors: [["app-navbar"]],
        decls: 8,
        vars: 4,
        consts: [[1, "nav", "nav-pills"], [3, "active", 4, "ngFor", "ngForOf"], ["class", "nav-link", "href", "/createRequest", "routerLinkActive", "active current", 4, "ngIf"], ["class", "nav-link", "href", "/logout", 4, "ngIf"], ["class", "nav-link", "href", "/findUser", 4, "ngIf"], ["class", "nav-link", "routerLinkActive", "active current", 3, "href", 4, "ngIf"], ["routerLinkActive", "active current", 1, "nav-link", 3, "href"], ["href", "/createRequest", "routerLinkActive", "active current", 1, "nav-link"], ["href", "/logout", 1, "nav-link"], ["href", "/findUser", 1, "nav-link"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavbarComponent_li_1_Template, 2, 3, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavbarComponent_a_3_Template, 2, 0, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavbarComponent_a_5_Template, 2, 0, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NavbarComponent_a_7_Template, 2, 0, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.statuses);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
        styles: ["ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "n1B2":
    /*!********************************************!*\
      !*** ./src/app/logout/logout.component.ts ***!
      \********************************************/

    /*! exports provided: LogoutComponent */

    /***/
    function n1B2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
        return LogoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../services/users.service */
      "6Qg2");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var LogoutComponent = /*#__PURE__*/function () {
        function LogoutComponent(userService, router) {
          _classCallCheck(this, LogoutComponent);

          this.userService = userService;
          this.router = router;
        }

        _createClass(LogoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var token = window.localStorage.getItem('token');
            this.userService.logout(token).then(function () {
              window.localStorage.setItem('token', '');
              window.localStorage.setItem('loggedIn', '');
              window.localStorage.setItem('expiry', '');
              window.location.href = '/login';
            })["catch"](function (err) {
              alert("".concat(err));
            });
          }
        }]);

        return LogoutComponent;
      }();

      LogoutComponent.ɵfac = function LogoutComponent_Factory(t) {
        return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      LogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LogoutComponent,
        selectors: [["app-logout"]],
        decls: 0,
        vars: 0,
        template: function LogoutComponent_Template(rf, ctx) {},
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-logout',
            templateUrl: './logout.component.html',
            styleUrls: ['./logout.component.scss']
          }]
        }], function () {
          return [{
            type: _services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _find_user_find_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./find-user/find-user.component */
      "+5bd");
      /* harmony import */


      var _logout_logout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./logout/logout.component */
      "n1B2");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _request_detail_request_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./request-detail/request-detail.component */
      "OnEJ");
      /* harmony import */


      var _requests_requests_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./requests/requests.component */
      "0yay");
      /* harmony import */


      var _create_request_create_request_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./create-request/create-request.component */
      "WFva");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: 'requests/:status',
        component: _requests_requests_component__WEBPACK_IMPORTED_MODULE_5__["RequestsComponent"]
      }, {
        path: 'createRequest',
        component: _create_request_create_request_component__WEBPACK_IMPORTED_MODULE_6__["CreateRequestComponent"]
      }, {
        path: 'request/:id',
        component: _request_detail_request_detail_component__WEBPACK_IMPORTED_MODULE_4__["RequestDetailComponent"]
      }, {
        path: 'findUser',
        component: _find_user_find_user_component__WEBPACK_IMPORTED_MODULE_0__["FindUserComponent"]
      }, {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
      }, {
        path: 'logout',
        component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_1__["LogoutComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vtpD":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function vtpD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../services/users.service */
      "6Qg2");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function LoginComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Invalid username and/or password. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(router, usersService) {
          _classCallCheck(this, LoginComponent);

          this.router = router;
          this.usersService = usersService;
        }

        _createClass(LoginComponent, [{
          key: "signIn",
          value: function signIn(creds) {
            var _this8 = this;

            this.usersService.login(creds).then(function (result) {
              console.log(result);
              window.localStorage.setItem('token', result.token);
              window.localStorage.setItem('loggedIn', "true");
              window.localStorage.setItem('expiry', result.expiryTime);
              window.location.href = '/requests/pending';
            })["catch"](function (err) {
              console.log(err);
              _this8.invalidLogin = true;
            });
          }
        }, {
          key: "changeBool",
          value: function changeBool(event) {
            this.invalidLogin = false;
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["login"]],
        decls: 13,
        vars: 1,
        consts: [[1, "form-signin", 3, "ngSubmit"], ["f", "ngForm"], ["for", "inputEmail"], ["type", "email", "id", "inputEmail", "name", "email", "ngModel", "", "placeholder", "Email address", "required", "", "autofocus", "", 1, "form-control", 3, "keyup"], ["for", "inputPassword"], ["type", "password", "id", "inputPassword", "name", "password", "ngModel", "", "placeholder", "Password", "required", "", 1, "form-control", 3, "keyup"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "btn-block"], [1, "alert", "alert-danger"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_0_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

              return ctx.signIn(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Credit Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Email address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function LoginComponent_Template_input_keyup_6_listener($event) {
              return ctx.changeBool($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function LoginComponent_Template_input_keyup_9_listener($event) {
              return ctx.changeBool($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_div_10_Template, 2, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Sign in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidLogin);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        styles: ["form[_ngcontent-%COMP%] {\n  height: 400px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: space-between;\n  justify-content: center;\n}\nform[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 20px auto;\n  width: 25%;\n  text-align: left;\n}\nform[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 25%;\n  font-size: 18px;\n  font-weight: bolder;\n  text-align: left;\n}\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 25%;\n  color: black;\n  text-align: left;\n  margin: 10px auto;\n}\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 25%;\n}\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 25%;\n  margin: 10px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtBQUNKO0FBQUk7RUFDSSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUVSO0FBQUk7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFFUjtBQUFJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBRVI7QUFBSTtFQUNJLFVBQUE7QUFFUjtBQUFJO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FBRVIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoMSB7XG4gICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgICBwIHtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgICBsYWJlbCB7XG4gICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgfVxuICAgIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICB9XG4gICAgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgfVxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map