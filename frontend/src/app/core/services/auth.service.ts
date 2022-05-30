import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Token, User, UserInfo } from '../interfaces/user.interface';
import { AUTHORIZATION, MAIN, REGISTRATION, USER_INFO } from '../api/api.const';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  registerNewUser(userData: User): Observable<Token> {
    return this.httpClient.post<Token>(MAIN + REGISTRATION, userData);
  }

  login(userData: User): Observable<any> {
    return this.httpClient.post(MAIN + AUTHORIZATION, userData);
  }  

  logout(): void {
    localStorage.removeItem('token');
  }

  getUserInfo(): Observable<UserInfo> {
    return this.httpClient.get<UserInfo>(MAIN + USER_INFO)
  }

  isAuthentication(): boolean {
    return !!this.token;
  }

  get token(): string | null {
    return localStorage.getItem('token');
  }

}