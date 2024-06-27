import { Component, OnInit } from '@angular/core';
import { faBuildingShield, faUserTie } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  faBuildingShield = faBuildingShield;
  faUserTie=faUserTie;

  constructor() { }

  ngOnInit(): void {
  }

}
