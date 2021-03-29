import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {HttpTokenService} from './zhang/service/http-token-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private httpTokenService: HttpTokenService) {
  }
  ngOnInit(): void {

  }
  isCollapsed = false;

  test(){
    this.httpTokenService.login("a", "b");
  }
}

