import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlantsComponent } from './update-plants.component';

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
