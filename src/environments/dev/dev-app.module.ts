import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../../app/app-routing.module';
import { AppComponent } from '../../app/app.component';
import { HeaderComponent } from '../../app/header/header.component';
import { LandingComponent } from '../../app/landing/landing.component';
import { AboutComponent } from '../../app/about/about.component';
import { PortfolioComponent } from '../../app/portfolio/portfolio.component';
import { IndexComponent } from '../../app/index/index.component';
import { PageNotFoundComponent } from '../../app/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewCvComponent } from '../../app/view-cv/view-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    AboutComponent,
    PortfolioComponent,
    IndexComponent,
    PageNotFoundComponent,
    ViewCvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
