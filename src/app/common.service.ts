import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  baseUrl = environment.baseUrl
  constructor(private http: HttpClient) { }


  getHomePageNews() {
    return this.http.get(this.baseUrl + '/news/get-news-home')
  }

  getSingleData(data: any) {
    return this.http.post(this.baseUrl + '/news/get-single-news', data)
  }

  getNews(data: any) {
    return this.http.post(this.baseUrl + '/news/get-news', data);
  }

  getLinks(link: string) {

    return this.http.get(link);
  }

  getLinksText(link: string) {

    return this.http.get(link, { responseType: 'text' });
  }

  login(data: any) {
    return this.http.post(this.baseUrl + '/user/login', data)
  }

  getAllInterests() {
    return this.http.get(this.baseUrl + '/interests/get-interests')
  }

  signup(data: any) {
    return this.http.post(this.baseUrl + '/user/create-user', data)
  }

  updateUser(data: any) {
    return this.http.post(this.baseUrl + '/user/update-user', data)
  }
  updatePassword(data: any) {
    return this.http.post(this.baseUrl + '/user/update-password', data)

  }

  resetPassword(data: any) {
    return this.http.post(this.baseUrl + '/user/forgot-password', data)
  }
}
