import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private  http: HttpClient) { }
  login(User) {
    return this.http.post('localhost:8080/login', {
      email: User.email,
      password: User.password
    });
  }

  register(user: { password: any; confirmPassword: any; email: any }) {
    return this.http.post('localhost:8080/register', {
      email: user.email,
      password: user.password
    });
  }
}
