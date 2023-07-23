import { Component, OnInit } from '@angular/core';
import { Layer } from '../_models/layer';
import { Period } from '../_models/period';
import { Plant } from '../_models/plant';

@Component({
  selector: 'app-update-plants',
  templateUrl: './update-plants.component.html',
  styleUrls: ['./update-plants.component.css']
})
export class UpdatePlantsComponent implements OnInit {

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
//TODO: Implement saveNewPlant()
//TODO: Run tests
  saveNewPlant(plant: Plant): void{
    
  }
}
