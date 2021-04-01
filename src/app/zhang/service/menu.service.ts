import {_HttpClient} from '@delon/theme';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {MenuDTO} from '../model/menu-dto';

@Injectable({providedIn: 'root'})
export class MenuService {
  private static URL = "/api/menu";

  constructor(private http: _HttpClient) {
  }

  findAll(): Observable<Array<MenuDTO>>{
    return this.http.get(`${MenuService.URL}/all`, {});
  }

}
