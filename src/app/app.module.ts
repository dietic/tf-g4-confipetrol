import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestListComponent } from './pages/test/test-list/test-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import { TestSingleComponent } from './pages/test/test-single/test-single.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { UserLoginComponent } from './access/user/user-login/user-login.component';
<<<<<<< Updated upstream
import { ContactusComponent } from './pages/contactus/contactus.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
=======
import { TestNewComponent } from './pages/test/test-new/test-new.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    TestListComponent,
    TestSingleComponent,
    UserListComponent,
    UserLoginComponent,
    ContactusComponent,
    AboutusComponent,
    TestNewComponent
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
