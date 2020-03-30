import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { WeatherApiService } from '../weather-api.service';
import { City } from '../city';



@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  favCity:any[]=[];
  getFromOB1:any[]=[];

  constructor(private activeRouter:ActivatedRoute, private router:Router, private weather:WeatherApiService) { }
  
  getCity(){
    if(localStorage.getItem('object')){
      this.favCity = JSON.parse(localStorage.getItem('object'));
      console.log(this.favCity)

  }
}
  deleteUser(id){
    for(let i=0; i<this.favCity.length; i++){
      if(this.favCity[i].id==id){
        this.favCity.splice(i,1);
        this.weather.saveObjToStorage(this.favCity);
    }
  }

  for(let i=0; i<this.getFromOB1.length; i++){
    if(this.getFromOB1[i].id==id){
      this.getFromOB1.splice(i,1);
      this.weather.saveObjToStorage1(this.getFromOB1);
    }
}
}
      
  ngOnInit(): void {
    this.getCity();
    console.log(this.favCity);
   

  }

}
