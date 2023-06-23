import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialDesignModule} from "../app/material-design/material-design.module";
import { LoginComponent } from './auth/login/login.component';
import { BlogComponent } from './blogs/blog/blog.component';
import { SingleBlogComponent } from './blogs/single-blog/single-blog.component';
import { TabComponent } from './tabs/tab/tab.component';
import { Tab1Component } from './tabs/tab1/tab1.component';
import { Tab2Component } from './tabs/tab2/tab2.component';
import { Tab3Component } from './tabs/tab3/tab3.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogComponent,
    SingleBlogComponent,
    TabComponent,
    Tab1Component,
    Tab2Component,
    Tab3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
