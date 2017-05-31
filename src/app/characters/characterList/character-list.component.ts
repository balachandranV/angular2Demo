import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Character, CharacterService } from "../shared/character.service";
import { MissionService } from '../shared/mission.service';
import { Observable } from 'rxjs/Observable';
import {Router } from '@angular/router';
@Component({
  moduleId: module.id,
  templateUrl: 'character-list.component.html',
  selector: 'character-list'
})
export class CharacterListComponent implements OnInit {
  selectedCharacter: Character;
  characters: Observable<Character[]>;
  errorMessage: any;
  @Output() changed: EventEmitter<any> = new EventEmitter();
  constructor(private characterService: CharacterService,
  private missionService: MissionService,
  private router:Router) {
    this.saveConfirmed();
  }
  ngOnInit() {
    console.log("OnInit");
    this.getCharacter();

  }
  getCharacter(value?: string) {
    this.characters = this.characterService.getCharacters(value);
  }
  clearSelection() {
    this.selectedCharacter = null;
  }

  saveConfirmed() {
    this.missionService.missionConfirmed$.subscribe(
      save => {
        this.router.navigate(['/']);
      });
  }
}
