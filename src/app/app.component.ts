import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-story',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']

})
export class AppComponent {

  constructor() {
  }

  changed(charecter:any) {
    console.log("Event Emitter said you selected ",charecter);

  }
}

