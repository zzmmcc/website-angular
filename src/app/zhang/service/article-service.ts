import {_HttpClient} from '@delon/theme';
import {Observable} from 'rxjs';
import {MenuDTO} from '../model/menu-dto';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ArticleService {
  private static URL = '/api/article';

  constructor(private http: _HttpClient) {
  }

  findAll(): Observable<Array<MenuDTO>> {
    return this.http.get(`${ArticleService.URL}/all`, {});
  }
}
