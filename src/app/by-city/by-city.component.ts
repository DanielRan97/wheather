import { Component, OnInit, ViewChild,ElementRef  } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { WeatherApiService } from '../weather-api.service';
import { City } from '../city';



@Component({
  selector: 'app-by-city',
  templateUrl: './by-city.component.html',
  styleUrls: ['./by-city.component.css']
})
export class ByCityComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute, private router:Router, private weather:WeatherApiService) { }
  cityDetails:City[] =[];
  loacalArr:any[]=[];
  data:any;
  error:boolean = false;
  @ViewChild("search") searchInput: ElementRef;
  id:number;
  
  searchCity(city):void{
    if(city!=""){
      this.cityDetails = [];
      this.id = Math.random() ;
      this.weather.getByCity(city).subscribe(ele => {
        this.data = ele;
        this.cityDetails.push({name:this.data.name, country:this.data.sys.country, temp: this.data.main.temp, icon:this.data.weather[0].icon});
      })
      this.error = false;
      this.searchInput.nativeElement.value = "";
    }
  else{
  this.error = true;
      }
     
    

  }
  

  saveCity():void{
    this.loacalArr.push({id:this.id,name:this.data.name, country:this.data.sys.country, temp: this.data.main.temp, icon:this.data.weather[0].icon});
    this.weather.saveObjToStorage(this.loacalArr);
    console.log(`saved`);
     
    
    
    }
  
  
  
  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem('object'))){
      this.loacalArr =  JSON.parse(localStorage.getItem('object'))
    
    }
  }
}