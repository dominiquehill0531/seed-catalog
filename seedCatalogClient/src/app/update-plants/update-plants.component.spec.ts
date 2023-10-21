import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';

import { UpdatePlantsComponent } from './update-plants.component';
import { Plant } from '../_models/plant';
import { Layer } from '../_models/layer';
import { Period } from '../_models/period';
import { ViewChild } from '@angular/core';
import { PlantService } from '../_services/plant-service.service';
import { HttpClient } from '@angular/common/http';

let component: UpdatePlantsComponent;
let fixture: ComponentFixture<UpdatePlantsComponent>;
let plantService: PlantService;

describe('UpdatePlantComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ UpdatePlantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when name field empty', () => {
    expect(component.newPlant.name).toBeFalsy();
  })

});

describe('saveNewPlant()', () => {

  let blackWalnut = new Plant();
  let plantList = plantService.listAllPlants();

  beforeEach(() => {
    blackWalnut.name = "Black Walnut";
    blackWalnut.layer = Layer.CANOPY;
    blackWalnut.periodicity = Period.PERENNIAL;
  });

  it('should save blackWalnut to plantList', () => {
    component.newPlant = blackWalnut;
    component.saveNewPlant();
    fixture.detectChanges();
    expect(plantList).toContain(blackWalnut)
  });

})
