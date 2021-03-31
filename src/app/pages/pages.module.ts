import { NgModule } from '@angular/core';
import {WelcomeComponent} from './welcome/welcome.component';
import {MonitorComponent} from './monitor/monitor.component';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzButtonModule} from 'ng-zorro-antd/button';


@NgModule({
  imports: [
    NzFormModule,
    NzButtonModule
  ],
  declarations: [WelcomeComponent, MonitorComponent],
  exports: [WelcomeComponent, MonitorComponent]
})
export class PagesModule { }
