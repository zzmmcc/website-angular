import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpTokenService} from '../../service/http-token-service';
import {MsgService} from '../../service/common/msg-service';
import {CacheService} from '@delon/cache';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isVisible: boolean = false;
  isConfirmLoading: boolean = false;
  username: string;
  password: string;

  @Output()
  emitter: EventEmitter<string> = new EventEmitter<string>();

  constructor(private httpTokenService: HttpTokenService, private msg: MsgService,
              private cache: CacheService) {
  }

  ngOnInit(): void {
    this.password = '';
    this.username = '';
  }

  cancel() {
    this.isVisible = false;
  }

  login() {
    this.httpTokenService.login(this.username, this.password).subscribe(data => {
      if (data && data.token) {
        this.cache.set("__token", data, {expire: 60*10});
        this.msg.success('登录成功!');
        this.emitter.emit();
        this.cancel();
      }
    });
  }

  validateForm() {

  }

  submitForm() {

  }

}
