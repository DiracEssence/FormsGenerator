import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FullForm } from '../models/requests/FullForm';
import { SessionService } from './session.service';
import { Form } from "../models/Form";

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient, private sessionService: SessionService) { }

  public CreateForm(form: FullForm): Observable<void> {
    const url: string = this.apiUrl + 'Forms/CreateForm';

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.sessionService.getToken()}`
    });

    return this.http.post<void>(url, form, { headers: headers });
  }

  public GetFormsOfUser(): Observable<Form[]> {
    const url: string = this.apiUrl + 'Forms/GetFormsOfUser';

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.sessionService.getToken()}`
    });

    return this.http.get<Form[]>(url, { headers: headers });
  }
}
