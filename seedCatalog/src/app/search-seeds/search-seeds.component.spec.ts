import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSeedsComponent } from './search-seeds.component';

describe('SearchSeedsComponent', () => {
  let component: SearchSeedsComponent;
  let fixture: ComponentFixture<SearchSeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSeedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
