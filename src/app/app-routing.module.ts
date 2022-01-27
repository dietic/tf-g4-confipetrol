import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TestListComponent} from "./pages/test/test-list/test-list.component";
import {TestSingleComponent} from "./pages/test/test-single/test-single.component";
import {UserListComponent} from "./pages/user/user-list/user-list.component";

const routes: Routes = [
  { path: "users", component: UserListComponent},
  { path: "tests", component: TestListComponent},
  { path: "test/:id", component: TestSingleComponent},
  { path: "", redirectTo: "tests", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
