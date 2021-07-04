import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateUser } from "../models/createUser";
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import { User } from "../models/User";
import { LoginResponse } from "../models/responses/loginResponse";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiUrl: string = environment.apiUrl;
  public user: User = new User();

  constructor(private http: HttpClient) { }

  public registerUser(user: CreateUser): Observable<string> {
    const url: string = this.apiUrl + 'Account/RegisterUser';
    return this.http.post<string>(url, user);
  }

  public login(user: CreateUser): Observable<LoginResponse> {
    const url: string = this.apiUrl + 'Account/Login';
    return this.http.post<LoginResponse>(url, user);
  }
}
