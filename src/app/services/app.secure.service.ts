import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, Person, AuthResponse } from '../models/app.user.mode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class SecureService {
  private url:string;
  constructor(private http: HttpClient){
    this.url = "http://localhost:5050";
  }

  registerUser(user: User): Observable<string> {
     let resp:Observable<string> = null;
     const options = {
       headers: new HttpHeaders({
         'Content-Type': 'application/json'
       })
     };
     resp = this.http.post<string>(`${this.url}/createuser`, user, options);
     return resp;
  }

  authUser(user: User): Observable<AuthResponse> {
    let resp:Observable<AuthResponse> = null;
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    resp = this.http.post<AuthResponse>(`${this.url}/authuser`, user, options);
    return resp;
  }
  getPersons(token: string): Observable<Person[]> {
    let resp:Observable<Person[]> = null;
    const options = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    resp = this.http.get<Person[]>(`${this.url}/persons`, options);
    return resp;
  }
}
