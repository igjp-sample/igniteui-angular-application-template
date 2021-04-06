import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeJa from '@angular/common/locales/ja';
registerLocaleData(localeJa);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { PipeModule } from './pipe.module';

import {
  IgxAvatarModule,
  IgxNavbarModule,
  IgxNavigationDrawerModule,
  IgxIconModule,
  IgxLayoutModule,
  IgxToggleModule
  } from 'igniteui-angular';

import { NavComponent } from './shared/components/nav/nav.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

import { PeopleData } from './states/people-data';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(PeopleData),
    IgxAvatarModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule,
    IgxIconModule,
    IgxLayoutModule,
    IgxToggleModule,
    PipeModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ja-JP' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
