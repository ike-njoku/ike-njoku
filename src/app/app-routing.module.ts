import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { IndexComponent } from './index/index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ViewCvComponent } from './view-cv/view-cv.component';

const routes: Routes = [
  // index component
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'index',redirectTo:'/home'},
  {path:'home',component:IndexComponent},
  // portfolio
  {path:'portfolio',component:PortfolioComponent},
  // CV
  {path:'curriculum-vitae', component:ViewCvComponent},
  // contact 
  {path:'contact', component:ContactComponent},
  // page not found (404)
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
