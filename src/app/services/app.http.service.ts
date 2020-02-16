// import Injectable
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from './../models/app.category.model';
// @Injectable --> property 'providedIn' : 'root' default registered in providers aka DI container
//of application
// 'providedIn' : 'platform', the DI container of NgModule in which it is declared A special
//singleton platform injector shared by all applications on the page.
// 'providedIn' :  (NG9)'any', Provides a unique instance in every module (including lazy modules)
//that injects the token.
// if providedIn is not set then explicitely register the service in the DI container
@Injectable({
  providedIn:'root'
})
export class HttpService {
  private url:string;
  // inject HttpClient in ctor. This will be resolved by HttpClientModule
  constructor(private http: HttpClient){
    this.url = 'http://localhost:9080';
  }
  getData(): Observable<Category[]> {
     let resp: Observable<Category[]> = null;
     resp = this.http.get<Category[]>(`${this.url}/api/category`);
     return resp;
  }
  postData(cat:Category): Observable<Category> {
    let resp: Observable<Category> = null;
    // define headers
    const options = {
      headers: new HttpHeaders({
         'Content-Type' : 'application/json'
      })
    };                              // url                     body headers
    resp = this.http.post<Category>(`${this.url}/api/category`,cat,options);
    return resp;
 }
  putData(cat:Category): Observable<Category> {
    let resp: Observable<Category> = null;
    // define headers
    const options = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };                              // url                     body headers
    resp = this.http.put<Category>(`${this.url}/api/category/${cat._id}`,cat,options);
    return resp;
  }

  deleteData(id:string): Observable<Category> {
    let resp: Observable<Category> = null;
                              // url                     body headers
    resp = this.http.delete<Category>(`${this.url}/api/category/${id}`);
    return resp;
  }
}
