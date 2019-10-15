import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VEHICLES } from '../mock-vehicles';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {

  vehicles = VEHICLES;
  
  constructor() { }

  ngOnInit() {

  }

}
