import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"
import { VehicleListComponent } from "./vehicle-list.component";
import { VehicleComponent } from "./vehicle.component";
import { VehiclesComponent } from "./vehicles.component"
const route: Routes = [
    {
        path: "",
        component: VehiclesComponent,
        children: [
            { path: '', component: VehicleListComponent },
            { path: ':id', component: VehicleComponent }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class VehiclesRouterModule {

}
export const routedComponent: any[] = [
    VehicleListComponent,
    VehicleComponent,
    VehiclesComponent
]