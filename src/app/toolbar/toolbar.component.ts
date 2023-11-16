import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
})
export class ToolbarComponent {
  @Input() 
  theappname: string;

  constructor() {
    // theappname lähetettään html:ään mutta arvo tulee app.componenetista
    this.theappname = 'Tämä ei tee mitään, arvo tulee app.componentista';
  }
}
