import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Layer } from '../_models/layer';
import { Period } from '../_models/period';
import { Plant } from '../_models/plant';
import { KeyValuePipe } from '@angular/common';
import { ControlContainer, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-plants',
  templateUrl: './update-plants.component.html',
  styleUrls: ['./update-plants.component.css'],
})
export class UpdatePlantsComponent implements OnInit {

  @Input('newPlant')
  newPlant: Plant = new Plant();
  layerArr = [
    Layer.CANOPY,
    Layer.SUBCANOPY,
    Layer.SHRUB,
    Layer.HERBACEOUS,
    Layer.GROUNDCOVER,
    Layer.ROOT,
    Layer.VINE,
    Layer.WATER,
    Layer.FUNGAL
  ];
  periodArr = [
    Period.ANNUAL,
    Period.BIENNIAL,
    Period.PERENNIAL,
    Period.EVERGREEN
  ]
  plantList: Plant[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  
//TODO: Create SpringBoot/MongoDB backend
//TODO: Create PlantRepository
//TODO: Refactor saveNewPlant() via backend
//TODO: Run tests
  saveNewPlant(): void{
    this.plantList.push(this.newPlant);
    console.log(this.plantList);
  }
}
