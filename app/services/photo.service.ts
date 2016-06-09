import {Injectable} from "@angular/core";
import {Jsonp, Headers, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()

export class PhotoService {
    constructor(
        public jsonp:Jsonp
    ) {}


    public getPhotos(params) {

        var headers = new Headers();
        
        if (params.start_time === undefined) {
            params.start_time = '';
        }

        if (params.end_time === undefined) {
            params.end_time = '';
        }

        headers.append('Content-Type','application/json');
        headers.append('charset', 'UTF-8');

        var url = 'https://api.vk.com/method/photos.search?q=' + encodeURIComponent(params.q.toString()) + '&lat=' + params.lat +
            '&long=' + params.long + '&start_time=' + Number(params.start_time) + '&end_time=' +
            Number(params.end_time) + '&sort=' + params.sort + '&count=' + params.count +
            '&radius=' + params.radius + '&offset=' + params.offset + '&v=5.52' + '&callback=JSONP_CALLBACK';

        return this.jsonp.get(url, headers).map((result:Response)=>result.json()).toPromise();
    }
}