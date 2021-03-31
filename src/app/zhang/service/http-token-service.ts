import {Injectable} from '@angular/core';
import {_HttpClient} from '@delon/theme';
import {Observable} from 'rxjs';
import {TokenDTO} from '../model/token-dto';
@Injectable({
  providedIn: 'root'
})
export class HttpTokenService{
  private static URL = "/api/token";

  constructor(private http: _HttpClient) {
  }

  login(account: string, password: string): Observable<TokenDTO>{
    return this.http.post<TokenDTO>(`${HttpTokenService.URL}`, {account: account, password: password});
  }


}
