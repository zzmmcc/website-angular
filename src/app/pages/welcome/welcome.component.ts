import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent implements OnInit {
  show: boolean = false;

  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

}
