import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',  // the custom HTML Tag that will be used for rendering compoent's html
  templateUrl: './app.component.html', // the HTML UI
  styleUrls: ['./app.component.css'] // styles used by the UI
})
export class AppComponent {
  title = 'my-ng-app';
  header: string;
  name: string;
  expr: string;

  constructor(){
    this.header = 'The First Component';
    this.name = '';
    this.expr = eval("200 * 500");
  }

  display(evt): void {
    // evt.target is the  element that raised the event and value is its 'value' attribute
     this.header = `The New Header.... ${evt.target.value}`;

  }
}
