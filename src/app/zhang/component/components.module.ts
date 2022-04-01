import { NgModule } from '@angular/core';
import {LoginComponent} from './login/login.component';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ArticleListComponent} from './article/article-list.component';
import {ShowdownModule} from 'ngx-showdown';
import {NzCardModule} from 'ng-zorro-antd/card';
import {ArticleDetailComponent} from './article/article-detail.component';
import {NzTableModule} from 'ng-zorro-antd/table';


const COMPONENTS = [LoginComponent, ArticleListComponent, ArticleDetailComponent];

@NgModule({
  imports: [
    NzModalModule,
    NzButtonModule,
    FormsModule,
    NzFormModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    CommonModule,
    RouterModule,
    ShowdownModule,
    NzCardModule,
    NzTableModule
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class ComponentsModule { }
