import { CharacterListComponent } from "./character-list.component";
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Character, CharacterService } from "../shared/character.service";
import { MissionService } from '../shared/mission.service';
import { Observable } from 'rxjs/Observable';

xdescribe('AppComponent', () => {
  let de: DebugElement;
  let comp: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;
  class CharacterServicMock {
    getCharacters(): Observable<boolean> { return Observable.of(true) }
  }
  class MissionServicMock {
    announceMission() {  }
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [CharacterListComponent],
      providers: [
        { provide: CharacterService, useClass: CharacterServicMock },
        { provide: MissionService, useClass: MissionServicMock }
      ]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterListComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });
  xit('should create component', () => expect(comp).toBeDefined());

})

