import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestListComponent } from './pages/test/test-list/test-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import { TestSingleComponent } from './pages/test/test-single/test-single.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { UserLoginComponent } from './access/user/user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    TestListComponent,
    TestSingleComponent,
    UserListComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
