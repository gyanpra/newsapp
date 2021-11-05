import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendingComponent } from './trending/trending.component';
import {ScienceComponent} from './science/science.component';
import {SportsComponent} from './sports/sports.component';
const routes: Routes = [
  {
    path: '',component: TrendingComponent

  },
  {
    path: 'science',component: ScienceComponent
  },
  {
    path: 'sports',component: SportsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
