import { BrowserModule } from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import {DelonAuthModule, SimpleInterceptor, TokenService} from '@delon/auth';
import {TokenInterceptor} from './core/interceptor/token-interceptor';
import {NzMessageService} from 'ng-zorro-antd/message';
import {ComponentsModule} from './zhang/component/components.module';
import {NzFormModule} from 'ng-zorro-antd/form';
import {AppComponent} from './app.component';
import {ShowdownModule} from 'ngx-showdown';
import {NzCardMetaComponent, NzCardModule} from 'ng-zorro-antd/card';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    DelonAuthModule,
    FormsModule,
    HttpClientModule,
    IconsProviderModule,
    NzLayoutModule,
    NzCardModule,
    NzMenuModule,
    NzFormModule,
    NzBreadCrumbModule,
    ComponentsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ShowdownModule,
  ],
  providers: [
    // { provide: NZ_I18N, useValue: en_US },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: NzMessageService, useClass: NzMessageService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
