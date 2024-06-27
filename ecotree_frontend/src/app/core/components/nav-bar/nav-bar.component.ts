import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ClimateService} from "./services/climate.service";
import {CookieService} from "ngx-cookie-service";

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  providers: [CookieService]
})
export class NavBarComponent implements OnInit {

  foods: Food[] = [
    {value: 'Jaffna', viewValue: 'Jaffna'},
    {value: 'Kilinochchi', viewValue: 'Kilinochchi'},
    {value: 'Mannar', viewValue: 'Mannar'},
    {value: 'Mullaitivu', viewValue: 'Mullaitivu'},
    {value: 'Vavuniya', viewValue: 'Vavuniya'},
    {value: 'Puttalam', viewValue: 'Puttalam'},
    {value: 'Kurunegala', viewValue: 'Kurunegala'},
    {value: 'Gampaha', viewValue: 'Gampaha'},
    {value: 'Colombo', viewValue: 'Colombo'},
    {value: 'Kalutara', viewValue: 'Kalutara'},
    {value: 'Anuradhapura', viewValue: 'Anuradhapura'},
    {value: 'Polonnaruwa', viewValue: 'Polonnaruwa'},
    {value: 'Matale', viewValue: 'Matale'},
    {value: 'Kandy', viewValue: 'Kandy'},
    {value: 'Nuwara Eliya', viewValue: 'Nuwara Eliya'},
    {value: 'Kegalle', viewValue: 'Kegalle'},
    {value: 'Ratnapura', viewValue: 'Ratnapura'},
    {value: 'Trincomalee', viewValue: 'Trincomalee'},
    {value: 'Batticaloa', viewValue: 'Batticaloa'},
    {value: 'Ampara', viewValue: 'Ampara'},
    {value: 'Badulla', viewValue: 'Badulla'},
    {value: 'Monaragala', viewValue: 'Monaragala'},
    {value: 'Hambantota', viewValue: 'Hambantota'},
    {value: 'Matara', viewValue: 'Matara'},
    {value: 'Galle', viewValue: 'Galle'},
  ];

  foodControl = new FormControl(this.foods[2].value);

  form = new FormGroup({
    food: this.foodControl,
  });

  constructor(public climateService:ClimateService,private cookieService: CookieService,) { }

  ngOnInit(): void {

  }

  someMethod(value: any){
    console.log(value);
    this.climateService.getClimatedata(value).subscribe(res=>{
      // console.log(res)
      this.cookieService.set('Cli', JSON.stringify(res));
    })
  }


}
