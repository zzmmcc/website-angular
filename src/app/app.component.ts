import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {LoginComponent} from './zhang/component/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor() {
  }
  ngOnInit(): void {

  }
  isCollapsed = false;

  @ViewChild("loginComponent")
  loginComponent: LoginComponent

  showLogin(){
    this.loginComponent.isVisible = true;
  }
}

