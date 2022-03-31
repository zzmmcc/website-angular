import {Component, OnInit, ViewChild} from '@angular/core';
import {LoginComponent} from './zhang/component/login/login.component';
import {CacheService} from '@delon/cache';
import {TokenDTO} from './zhang/model/token-dto';
import {Observable} from 'rxjs';
import {MenuService} from './zhang/service/menu.service';
import {MenuDTO} from './zhang/model/menu-dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  token: TokenDTO;
  menus: Array<MenuDTO>;
  constructor(private cache: CacheService, private menuService: MenuService) {

  }
  ngOnInit(): void {
    this.flush();
    this.menus = new Array<MenuDTO>();
  }
  isCollapsed = false;

  @ViewChild("loginComponent")
  loginComponent: LoginComponent

  showLogin(){
    this.loginComponent.isVisible = true;
  }

  flush(){
    this.cache.tryGet<TokenDTO>("__token", new Observable<TokenDTO>()).subscribe(data => this.token = data);
    if (this.token){
      this.findAll();
    }
  }
  findAll(){
    this.menuService.findAll().subscribe(data => {
      this.menus = data
    });
  }
  logout(){
    this.cache.remove("__token");
    this.token = null;
    this.menus = [];
  }
}

