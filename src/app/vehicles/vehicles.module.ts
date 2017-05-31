import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VehiclesRouterModule, routedComponent } from "./vehicles.router.components";
import { VehicleService } from './vehicle.service';

@NgModule({
    imports: [CommonModule,FormsModule,VehiclesRouterModule],
    providers: [VehicleService],
    declarations: [routedComponent],
    exports: []
})
export class VehiclesModule {

}
