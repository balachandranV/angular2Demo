import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {CharacterRoutingModule,routedComponents}from "./characters.routing.module";
import { CharacterService } from './shared/character.service';
import { MissionService } from './shared/mission.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports:[CommonModule,FormsModule,CharacterRoutingModule,ReactiveFormsModule],
    exports:[],
    declarations:[routedComponents],
    providers:[CharacterService,MissionService]

})
export class CharactersModule{

}
