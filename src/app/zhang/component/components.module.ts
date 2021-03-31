import { NgModule } from '@angular/core';
import {LoginComponent} from './login/login.component';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzFormModule} from 'ng-zorro-antd/form';


@NgModule({
  imports: [
    NzModalModule,
    NzButtonModule,
    FormsModule,
    NzFormModule,
    ReactiveFormsModule,
    NzSelectModule,
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class ComponentsModule { }
