import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {LoginComponent} from './zhang/component/login/login.component';
import {CacheService} from '@delon/cache';
import {TokenDTO} from './zhang/model/token-dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  token: TokenDTO;
  constructor(private cache: CacheService) {

  }
  ngOnInit(): void {
    //TODO: 重写CacheService
    this.cache.get<TokenDTO>("__token").subscribe(data => this.token = data);
  }
  isCollapsed = false;

  @ViewChild("loginComponent")
  loginComponent: LoginComponent

  showLogin(){
    this.loginComponent.isVisible = true;
  }
  flush(){
    debugger
    this.cache.get<TokenDTO>("__token").subscribe(data => this.token = data);
  }
}

