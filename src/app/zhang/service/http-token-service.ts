import {Injectable} from '@angular/core';
import {_HttpClient} from '@delon/theme';
import {Observable} from 'rxjs';
import {JWTTokenModel} from '@delon/auth';
@Injectable({
  providedIn: 'root'
})
export class HttpTokenService{
  private static URL = "/api/token";

  constructor(private http: _HttpClient) {
  }

  login(account: string, password: string): Observable<JWTTokenModel>{
    return this.http.post<JWTTokenModel>(`${HttpTokenService.URL}`, {account: account, password: password});
  }


}
