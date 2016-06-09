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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require('rxjs/add/operator/map');
require('rxjs/Rx');
var PhotoService = (function () {
    function PhotoService(jsonp) {
        this.jsonp = jsonp;
    }
    PhotoService.prototype.getPhotos = function (params) {
        var headers = new http_1.Headers();
        if (params.start_time === undefined) {
            params.start_time = '';
        }
        if (params.end_time === undefined) {
            params.end_time = '';
        }
        headers.append('Content-Type', 'application/json');
        headers.append('charset', 'UTF-8');
        var url = 'https://api.vk.com/method/photos.search?q=' + encodeURIComponent(params.q.toString()) + '&lat=' + params.lat +
            '&long=' + params.long + '&start_time=' + Number(params.start_time) + '&end_time=' +
            Number(params.end_time) + '&sort=' + params.sort + '&count=' + params.count +
            '&radius=' + params.radius + '&offset=' + params.offset + '&v=5.52' + '&callback=JSONP_CALLBACK';
        return this.jsonp.get(url, headers).map(function (result) { return result.json(); }).toPromise();
    };
    PhotoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Jsonp])
    ], PhotoService);
    return PhotoService;
}());
exports.PhotoService = PhotoService;
//# sourceMappingURL=photo.service.js.map