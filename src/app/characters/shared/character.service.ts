import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CONFIG } from '../../config';

export class Character {
  constructor(public id: number, public name: string, public side: string) { }
}

@Injectable()
export class CharacterService {
  constructor(private http: Http) {

  }
  getCharacter(id: number) {
   return this.getCharacters()
         .map(characters => characters.find((character:Character) => character.id === id));
  }
  getCharacters(value?: string) {
    return this.http.get(CONFIG.baseUrls.characters)
      .map((response: Response) => <Character[]>response.json().data)
      .catch(this.handleError);
  }


  private handleError(error: Response) {
    console.error(error);
    let msg = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(msg);
  }
}
