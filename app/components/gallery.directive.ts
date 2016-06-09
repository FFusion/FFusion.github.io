import {Component, Input} from '@angular/core';

@Component({
    selector:'light-gallery',
    template:` <div class="row">
        <div class="col-md-3 col-xs-12 col-sm-3 gallery-item" *ngFor="let item of photos">
            <a href="{{item.photo_807}}" target="_blank">
                <img src="{{item.photo_130}}" alt="фото вконтакте" title="Посмотреть фото лучшего качества"/>
            </a>
        </div>
    </div>`
})

export class GalleryDirective {

    @Input() photos: any;
    constructor() {}
}
