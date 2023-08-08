import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UpdatePlantsComponent } from './update-plants/update-plants.component';
import { UpdateSeedsComponent } from './update-seeds/update-seeds.component';
import { SearchSeedsComponent } from './search-seeds/search-seeds.component';

import { PlantService } from './_services/plant-service.service';

@NgModule({
  declarations: [
    AppComponent,
    UpdatePlantsComponent,
    UpdateSeedsComponent,
    SearchSeedsComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [PlantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
