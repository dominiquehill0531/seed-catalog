import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Layer } from '../_models/layer';
import { Period } from '../_models/period';
import { Plant } from '../_models/plant';
import { PlantService } from '../_services/plant-service.service';

@Component({
  selector: 'app-update-plants',
  templateUrl: './update-plants.component.html',
  styleUrls: ['./update-plants.component.css'],
})
export class UpdatePlantsComponent implements OnInit {

  @Input()
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

  constructor(private plantservice: PlantService) { }

  ngOnInit(): void {
  }


//TODO: Run tests
  saveNewPlant(): void {
    this.plantservice.createPlant(this.newPlant).subscribe(
      data => {
        console.log(data);
        alert(`${this.newPlant.name} creation SUCCESS!`); //TODO: Delete after coding instant list update
        console.log(`${this.newPlant.name} creation SUCCESS!`)
      },
      error => {
        console.log(error.error.message);
        alert("Make sure all fields have values selected!");
      }
    );
  }
}
