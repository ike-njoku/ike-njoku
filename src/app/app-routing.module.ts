import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  // index component
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'index',redirectTo:'/home'},
  {path:'home',component:IndexComponent},
  // portfolio
  {path:'portfolio',component:PortfolioComponent}
  // page not found (404)



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
