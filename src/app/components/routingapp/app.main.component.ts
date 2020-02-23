import { Component, OnInit } from '@angular/core';

@Component({
  selector:'app-main-component',
  template: `
    <h2>The Main Component</h2>
    <table class="table table-bordered table-striped">
      <tr>
        <td>
          <a [routerLink]="['']">Home</a>
        </td>
        <td>
          <a [routerLink]="['about']">About</a>
          </td>
          <td>
          <a [routerLink]="['contact', id]">Contact</a>
        </td>
      </tr>
    </table>
    <br/>
    <router-outlet></router-outlet>
  `
})

export class MainComponent implements OnInit {
  id: number;
  constructor() {
    this.id = 1000;
  }

  ngOnInit() {

  }

}
