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
var core_1 = require('@angular/core');
var GalleryDirective = (function () {
    function GalleryDirective() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], GalleryDirective.prototype, "photos", void 0);
    GalleryDirective = __decorate([
        core_1.Component({
            selector: 'light-gallery',
            template: " <div class=\"row\">\n        <div class=\"col-md-3 col-xs-12 col-sm-3 gallery-item\" *ngFor=\"let item of photos\">\n            <a href=\"{{item.photo_807}}\" target=\"_blank\">\n                <img src=\"{{item.photo_130}}\" alt=\"\u0444\u043E\u0442\u043E \u0432\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0435\" title=\"\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0444\u043E\u0442\u043E \u043B\u0443\u0447\u0448\u0435\u0433\u043E \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430\"/>\n            </a>\n        </div>\n    </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], GalleryDirective);
    return GalleryDirective;
}());
exports.GalleryDirective = GalleryDirective;
//# sourceMappingURL=gallery.directive.js.map