import { Component, Input, OnChanges, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Character, CharacterService } from "../shared/character.service";
import { MissionService } from '../shared/mission.service';

@Component({
  moduleId: module.id,
  templateUrl: 'character.component.html',
  selector: 'my-character'
})
export class CharacterComponent implements OnInit {
  @Input() character: Character;
  private id: any;
  private editCharacter: Character;
  constructor(private characterService: CharacterService
    , private route: ActivatedRoute
    , private router: Router,
    private missionService: MissionService) {

  }

  ngOnInit() {
    if (!this.character) {
      this.route
        .params
        .map(params => params['id'])
        .do(id => this.id = +id)
        .subscribe(id => this.getCharacter())
    }
  }
  private getCharacter() {
    this.characterService.getCharacter(this.id)
      .subscribe(character => this.setEditCharacter(character));
  }
  private setEditCharacter(character: Character) {
    if (character) {
      this.character = character;
      this.editCharacter = Object.assign({}, character);
    } else {
      this.gotoCharacters();
    }
  }
  private gotoCharacters() {
    let route = ['/characters']
    this.router.navigate(route);
  }
  public save() {
         // this.missionService.announceMission("save");
          this.missionService.confirmMission("save");
  }
  public cancel() {
    this.editCharacter = Object.assign({}, this.character);
  }
}
