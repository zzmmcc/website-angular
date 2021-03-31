import { Component, OnInit } from '@angular/core';
import {HttpTokenService} from '../../zhang/service/http-token-service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent implements OnInit {
  show: boolean = false;

  constructor(private httpTokenService: HttpTokenService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  test(){
    this.httpTokenService.login("a", "b").subscribe(data => console.log(data));
  }

}
