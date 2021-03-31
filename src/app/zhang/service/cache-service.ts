import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class CacheService {

  get(key: string, model: object): any {
    return 'hello';
  }

}
