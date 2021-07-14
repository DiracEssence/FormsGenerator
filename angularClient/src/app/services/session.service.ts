import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { JwtHelperService } from '@auth0/angular-jwt';

const tokenKey: string = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient, private jwt: JwtHelperService) { }

  public saveToken(token: string): void {
    window.localStorage.setItem(tokenKey, token);
  }

  public getToken(): string | null {
    return window.localStorage.getItem(tokenKey);
  }

  public removeToken(): void {
    window.localStorage.removeItem(tokenKey);
  }

  public IsAuthenticated(): boolean {
    
    // const url: string = this.apiUrl + 'Account/IsAuthenticated';

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': `Bearer ${this.getToken()}`
    // })
    // console.log(headers);

    // return this.http.get<boolean>(url, { headers: headers });

    const token = this.getToken() ?? undefined;
    return !this.jwt.isTokenExpired(token);
  }

}
