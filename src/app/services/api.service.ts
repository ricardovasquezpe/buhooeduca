import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import {User} from "../model/user.model";
import {Observable, of} from "rxjs/index";
import {ApiResponse} from "../models/api.response";
import { tap } from 'rxjs/operators'; 

@Injectable()
export class ApiService {
  
  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://us-central1-buhooeduca-2a4ae.cloudfunctions.net/buhooeduca/api/v1';

  login(loginPayload) : Observable<ApiResponse> {
    console.log(loginPayload);
    return this.http.post<ApiResponse>('http://localhost:8080/' + 'token/generate-token', loginPayload);
  }

  getAppData(searchApp:string) : Observable<ApiResponse> {
    /*if (localStorage.getItem(searchApp)) {
      return of(JSON.parse(localStorage.getItem(searchApp)));
    }*/
    return this.http.get<any>(this.baseUrl + "/getAppData/" + searchApp).pipe(
      tap(resolvedValue => {
          localStorage.setItem(searchApp, JSON.stringify(resolvedValue));
      }));
  }
/*
  getUsers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + id);
  }

  createUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, user);
  }

  updateUser(user: User): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + user.id, user);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }*/
}