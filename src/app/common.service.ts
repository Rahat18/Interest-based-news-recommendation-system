import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
 
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  baseUrl = environment.baseUrl
  constructor( private http: HttpClient) { }


  getHomePageNews(){
    return this.http.get(this.baseUrl + '/news/get-news-home')
  }

  getSingleData(data:any) {
    return this.http.post(this.baseUrl + '/news/get-single-news', data)
  }


}
