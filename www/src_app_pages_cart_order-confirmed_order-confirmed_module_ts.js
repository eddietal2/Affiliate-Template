"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_cart_order-confirmed_order-confirmed_module_ts"],{

/***/ 7054:
/*!******************************************************************************!*\
  !*** ./src/app/pages/cart/order-confirmed/order-confirmed-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderConfirmedPageRoutingModule": () => (/* binding */ OrderConfirmedPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _order_confirmed_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-confirmed.page */ 2956);




const routes = [
    {
        path: '',
        component: _order_confirmed_page__WEBPACK_IMPORTED_MODULE_0__.OrderConfirmedPage
    }
];
let OrderConfirmedPageRoutingModule = class OrderConfirmedPageRoutingModule {
};
OrderConfirmedPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrderConfirmedPageRoutingModule);



/***/ }),

/***/ 487:
/*!**********************************************************************!*\
  !*** ./src/app/pages/cart/order-confirmed/order-confirmed.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderConfirmedPageModule": () => (/* binding */ OrderConfirmedPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _order_confirmed_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-confirmed-routing.module */ 7054);
/* harmony import */ var _order_confirmed_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-confirmed.page */ 2956);







let OrderConfirmedPageModule = class OrderConfirmedPageModule {
};
OrderConfirmedPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _order_confirmed_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderConfirmedPageRoutingModule
        ],
        declarations: [_order_confirmed_page__WEBPACK_IMPORTED_MODULE_1__.OrderConfirmedPage]
    })
], OrderConfirmedPageModule);



/***/ }),

/***/ 2956:
/*!********************************************************************!*\
  !*** ./src/app/pages/cart/order-confirmed/order-confirmed.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderConfirmedPage": () => (/* binding */ OrderConfirmedPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _order_confirmed_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-confirmed.page.html?ngResource */ 5766);
/* harmony import */ var _order_confirmed_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-confirmed.page.scss?ngResource */ 4404);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let OrderConfirmedPage = class OrderConfirmedPage {
    constructor() { }
    ngOnInit() {
    }
};
OrderConfirmedPage.ctorParameters = () => [];
OrderConfirmedPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-order-confirmed',
        template: _order_confirmed_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_order_confirmed_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OrderConfirmedPage);



/***/ }),

/***/ 4404:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/cart/order-confirmed/order-confirmed.page.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1jb25maXJtZWQucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 5766:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/cart/order-confirmed/order-confirmed.page.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>order-confirmed</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cart_order-confirmed_order-confirmed_module_ts.js.map