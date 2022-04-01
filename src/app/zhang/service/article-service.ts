import {_HttpClient} from '@delon/theme';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ArticleDTO} from '../model/article/article-dto';

@Injectable({providedIn: 'root'})
export class ArticleService {
  private static URL = '/api/article';

  constructor(private http: _HttpClient) {
  }

  findAll(): Observable<Array<ArticleDTO>> {
    return this.http.get(`${ArticleService.URL}/all`, {});
  }
}
