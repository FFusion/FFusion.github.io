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
var photo_service_1 = require('./../services/photo.service');
var gallery_directive_1 = require('./gallery.directive');
var ng2_datetime_1 = require('./../ng2-datetime/ng2-datetime');
var PhotoData = (function () {
    function PhotoData(q, lat, long, start_time, end_time, sort, offset, count, radius) {
        this.q = q;
        this.lat = lat;
        this.long = long;
        this.start_time = start_time;
        this.end_time = end_time;
        this.sort = sort;
        this.offset = offset;
        this.count = count;
        this.radius = radius;
    }
    return PhotoData;
}());
var PhotoForm = (function () {
    function PhotoForm(photoService) {
        this.photoService = photoService;
        this.model = new PhotoData('Красная площадь, Москва', '', '', '', '', '0', '', '10', '500');
        this.activeForm = true;
    }
    PhotoForm.prototype.onSubmit = function () {
        var _this = this;
        this.activeForm = false;
        this.photoService.getPhotos(this.model).then(function (data) {
            _this.counts = data.response.count;
            _this.photos = data.response.items;
        }, function (error) {
            _this.counts = 0;
            _this.photos = [];
            console.log('error', error);
        });
    };
    PhotoForm.prototype.back = function () {
        this.activeForm = true;
        this.photos = [];
        this.counts = 0;
    };
    PhotoForm = __decorate([
        core_1.Component({
            selector: 'photo-form',
            templateUrl: 'app/components/photo-form.html',
            directives: [gallery_directive_1.GalleryDirective, ng2_datetime_1.NKDatetime],
            providers: [photo_service_1.PhotoService]
        }), 
        __metadata('design:paramtypes', [photo_service_1.PhotoService])
    ], PhotoForm);
    return PhotoForm;
}());
exports.PhotoForm = PhotoForm;
//# sourceMappingURL=photo-form.js.map