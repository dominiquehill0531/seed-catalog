import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlantsComponent } from './update-plants.component';
import { Plant } from '../_models/plant';
import { Layer } from '../_models/layer';
import { Period } from '../_models/period';

describe('UpdatePlantComponent', () => {
  let component: UpdatePlantsComponent;
  let fixture: ComponentFixture<UpdatePlantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
});

describe('saveNewPlant()', () => {
  let blackWalnutTree = new Plant();
  beforeEach(() => {
    UpdatePlantsComponent.prototype.saveNewPlant()
  });

  it('should save Black Walnut (Canopy, Annual) tree to Plant database', () => {
    expect(UpdatePlantsComponent.prototype.plantList).toContain(blackWalnutTree)
  });
})
