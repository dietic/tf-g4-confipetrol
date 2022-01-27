import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TestListComponent} from "./pages/test/test-list/test-list.component";
import {TestSingleComponent} from "./pages/test/test-single/test-single.component";
import {UserListComponent} from "./pages/user/user-list/user-list.component";
import { AboutusComponent } from "./pages/aboutus/aboutus.component";
import { LoginComponent } from "./pages/login/login.component";
import { ContactusComponent } from "./pages/contactus/contactus.component";

const routes: Routes = [
  { path: "users", component: UserListComponent},
  { path: "tests", component: TestListComponent},
  { path: "test/:id", component: TestSingleComponent},
  { path: "", redirectTo: "tests", pathMatch: "full"},
  { path: "aboutus", component: AboutusComponent},
  { path: "login", component: LoginComponent},
  { path: "contactus", component: ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
