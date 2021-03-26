import { NgModule } from '@angular/core';
import {WelcomeComponent} from './welcome/welcome.component';
import {MonitorComponent} from './monitor/monitor.component';


@NgModule({
  imports: [],
  declarations: [WelcomeComponent, MonitorComponent],
  exports: [WelcomeComponent, MonitorComponent]
})
export class PagesModule { }
