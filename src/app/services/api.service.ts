import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  Register  from '../models/register.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url:string = 'http://127.0.0.1:5000/lab'

  constructor(private http:HttpClient) { }

  postData(form:Register ):Observable<Register>{
    let direccion = `${this.url}/registerUser`;
    return this.http.post<Register>(direccion,form);
  }

  getUsers():Observable<any>{
    let direccion = `${this.url}/allUsers`;
    return this.http.get(direccion);
  }

  putUser(code:any):Observable<any>{
    let direccion = `${this.url}/EditUser/${code}`;
    return this.http.put(direccion,code)
  }

  deleteUser(code:any){
    let direccion = `${this.url}/Delete/${code}`;
    return this.http.delete(direccion,code)
  }
}
