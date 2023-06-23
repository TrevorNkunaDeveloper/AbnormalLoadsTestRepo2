import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { BlogComponent } from './blogs/blog/blog.component';
import { TabComponent } from './tabs/tab/tab.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'blog', component: BlogComponent},
  {path:'home', component: TabComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
