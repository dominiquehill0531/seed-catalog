import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdatePlantsComponent } from './update-plants/update-plants.component';
import { UpdateSeedsComponent } from './update-seeds/update-seeds.component';
import { SearchSeedsComponent } from './search-seeds/search-seeds.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdatePlantsComponent,
    UpdateSeedsComponent,
    SearchSeedsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
