import { Component } from '@angular/core';
import { PhotoService } from './../services/photo.service';
import { GalleryDirective } from './gallery.directive';
import { NKDatetime } from './../ng2-datetime/ng2-datetime';

class PhotoData {
    constructor (
        public q: string,
        public lat: string,
        public long: string,
        public start_time: string,
        public end_time: string,
        public sort: string,
        public offset: string,
        public count:string,
        public radius: string
    ) {}
}


@Component({
    selector: 'photo-form',
    templateUrl: 'app/components/photo-form.html',
    directives:[GalleryDirective, NKDatetime],
    providers: [PhotoService]
})

export class PhotoForm {
    activeForm:any;
    photos:any;
    counts:any;

    constructor(
        public photoService:PhotoService
    ) {
        this.activeForm = true;
    }


    model = new PhotoData('Красная площадь, Москва','','','','','1','','10','500');

    onSubmit() {
        this.activeForm = false;
        this.photoService.getPhotos(this.model).then(
            (data)=> {
                this.counts = data.response.count;
                this.photos = data.response.items;
            },
            (error)=> {
                this.counts = 0;
                this.photos = [];
                console.log('error', error);
            }
        );
    }

    back() {
        this.activeForm = true;
        this.photos = [];
        this.counts = 0;
    }


}