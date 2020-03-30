import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ByCityComponent } from './by-city/by-city.component';
import { CityListComponent } from './city-list/city-list.component';



const routes: Routes = [
  {path: '', component: CityListComponent},
  {path: 'byCity', component : ByCityComponent},
  {path: 'cityList', component: CityListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
