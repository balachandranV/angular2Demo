import { NgModule } from "@angular/core";
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
//import { CharacterListComponent } from "./character/character-list.component";
//import { CharacterComponent } from "./character/character.component";
//import { VehicleListComponent } from "./vehicles/vehicle-list.component";
//import { VehicleComponent } from "./vehicles/vehicle.component";
import { PageNotFoundComponent } from "./page-not-found.component";

//import { CharactersComponent } from "./character/characters.component";

import { CanActivateAuthGuard } from './can-activate.service';

import { LoginComponent } from "./login/login.component"

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/characters' },
    //{ path: 'characters', component: CharacterListComponent },
    //{ path: 'characters/:id', component: CharacterComponent },
    /*{
        path: 'characters',
        component:CharactersComponent,
        canActivate: [CanActivateAuthGuard],
        canActivateChild: [CanActivateAuthGuard],
        children: [
            { path: '', component: CharacterListComponent },
            { path: ':id', component: CharacterComponent }
        ]

    },*/

    { path: 'vehicles', loadChildren: "app/vehicles/vehicles.module#VehiclesModule" },
    { path: 'login', component: LoginComponent },
    { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
    exports: [RouterModule]

})

export class AppRoutingModule {

}

export const routableComponent: any[] = [
    //CharacterListComponent,
    //CharacterComponent,
    //  VehicleListComponent,
    //  VehicleComponent,
    PageNotFoundComponent,
    // CharactersComponent,
    LoginComponent
]

