import {Injectable, Injector} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root'
})
export class MsgService {
  constructor(private injector: Injector) {

  }

  get msg(): NzMessageService {
    return this.injector.get(NzMessageService);
  }

  error(content: string) {
    this.msg.error(content);
  }

  success(content: string) {
    this.msg.success(content);
  }

  info(content: string) {
    this.msg.info(content);
  }
}
