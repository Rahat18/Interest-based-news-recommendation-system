import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';

// interface ResApi {
//   code: any;
//   result: any;
//   message: any;
// }

type obj = {
  [key: string]: string | null;
};

@Injectable({
  providedIn: 'root',
})
export class APIService {
  private spinner = new Subject<boolean>();

  private params: any = {};

  capitalize = (s: string) =>
    s
      .toLowerCase()
      .split(' ')
      .map((v) => v.charAt(0).toUpperCase() + v.slice(1))
      .join(' ');

  constructor(
    private http: HttpClient,
    private notification: NzMessageService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    router.events.subscribe(() => {
      this.params = this.queryParams();
    });
  }

  public get getBaseUrl() {
    return 'localhost';
  }

  getSpinner() {
    return this.spinner.asObservable();
  }

  public get getParams() {
    return this.params;
  }

  spin(state: boolean) {
    this.spinner.next(state);
  }

  queryParams() {
    const keys = this.route.snapshot.queryParamMap.keys;
    const obj: obj = {};

    keys.forEach((e: string) => {
      obj[e] = this.route.snapshot.queryParamMap.get(e);
    });

    return obj;
  }

  openNotification(message: string, type = 'success'): void {
    this.notification.create(type, this.capitalize(message));
  }

  public get loggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  public get token(): string {
    return localStorage.getItem('token') || '';
  }

  public get userData(): object {
    return JSON.parse(localStorage.getItem('user') || '');
  }

  setUserData(user: any) {
    user.name = this.capitalize(`${user.firstName} ${user.lastName}`);
    localStorage.setItem('user', JSON.stringify(user));
    window.location.reload();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
