import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import './rxjs-extensions';
import { AppComponent } from './app.component';
//import { CharacterService } from './character/character.service';
//import { VehicleService } from './vehicles/vehicle.service';

import { routableComponent, AppRoutingModule } from "./app-routing.module"

import { CanActivateAuthGuard } from "./can-activate.service";
import { UserProfileService } from "./login/user-profile.service"

import { CharactersModule } from "./characters/characters.module";

//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//import { VehiclesModule } from './vehicles/vehicles.module';

@NgModule({
  imports: [
    BrowserModule,
   // BusyModule,
   // BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    CharactersModule,
   // VehiclesModule,
    AppRoutingModule,
    RouterModule],

  // declarations: [VehiclesComponent],
  declarations: [AppComponent, routableComponent],
  providers: [CanActivateAuthGuard, UserProfileService],
  // bootstrap: [VehiclesComponent],
  bootstrap: [AppComponent],

})
export class AppModule { }
