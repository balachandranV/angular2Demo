import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CharacterListComponent } from "./characterList/character-list.component";
import { CharacterComponent } from "./character/character.component";
import { CharactersComponent } from "./characters.component";
import { CanActivateAuthGuard } from '../can-activate.service';
const routes: Routes = [
    //  { path: '', pathMatch: 'full', redirectTo: 'characters' },
    {
        path: 'characters',
        component: CharactersComponent,
        canActivate: [CanActivateAuthGuard],
        canActivateChild: [CanActivateAuthGuard],
        children: [
            { path: '', component: CharacterListComponent },
            { path: ':id', component: CharacterComponent }
        ]

    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CharacterRoutingModule {

}

export const routedComponents=[
    CharacterListComponent,
    CharacterComponent,
    CharactersComponent
];
