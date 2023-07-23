import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSeedsComponent } from './update-seeds.component';

describe('UpdateSeedsComponent', () => {
  let component: UpdateSeedsComponent;
  let fixture: ComponentFixture<UpdateSeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSeedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
