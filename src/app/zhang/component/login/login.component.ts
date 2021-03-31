import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpTokenService} from '../../service/http-token-service';
import {MsgService} from '../../service/common/msg-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isVisible: boolean = false;
  isConfirmLoading: boolean = false;
  username: string ;
  password: string ;

  @Output()
  emitter: EventEmitter<string> = new EventEmitter<string>();

  constructor(private httpTokenService: HttpTokenService, private msg: MsgService) { }
  ngOnInit(): void {
    this.password = ""
    this.username = ""
  }

  cancel() {
    this.isVisible = false;
  }
  login(){
    this.httpTokenService.login(this.username, this.password).subscribe(data => {
      if (data && data.token){
        this.msg.success("登录成功!");
        this.emitter.emit();
        this.cancel();
      }
    });
  }
  validateForm(){

  }
  submitForm(){

  }

}
