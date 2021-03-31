import {Component, OnInit} from '@angular/core';
import {HttpTokenService} from '../../service/http-token-service';
import { NzFormModule } from 'ng-zorro-antd/form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isVisible: boolean = false;
  isConfirmLoading: boolean = false;

  constructor(private httpTokenService: HttpTokenService) { }
  ngOnInit(): void {
  }

  cancel() {
    this.isVisible = false;
  }
  test(){
    this.httpTokenService.login("a", "b").subscribe(data => console.log(data));
  }
  validateForm(){

  }
  submitForm(){

  }

}
