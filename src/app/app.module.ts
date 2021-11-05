import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalserviceService } from './service/modalservice.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrendingComponent } from './trending/trending.component';
import {HttpClientModule} from '@angular/common/http';
import {NewsapiserviceService} from './service/newsapiservice.service';
import { NavComponent } from './nav/nav.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@NgModule({
  declarations: [
    AppComponent,
    TrendingComponent,
    NavComponent,
    CarouselComponent,
    ScienceComponent,
    SportsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
  ],
  providers: [NewsapiserviceService,ModalserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
