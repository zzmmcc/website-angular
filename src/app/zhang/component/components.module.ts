import { NgModule } from '@angular/core';
import {LoginComponent} from './login/login.component';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzSelectModule} from 'ng-zorro-antd/select';


@NgModule({
  imports: [
    NzModalModule,
    NzButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NzSelectModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class ComponentsModule { }
