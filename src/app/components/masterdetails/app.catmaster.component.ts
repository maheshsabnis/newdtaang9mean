import { Component, OnInit } from '@angular/core';
import { CategoryModel, Categories } from '../../models/app.cat.model';

@Component({
  selector: 'app-catmaster-component',
  template: `
    <h2>Category Component</h2>
    <div>{{message}}</div>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <td>Cat Id</td>
          <td>Cat Name</td>
        </tr>
      </thead>
      <tbody>
         <tr *ngFor="let c of cats" (click)="getSelectedCat(c)">
           <td>{{c.CatId}}</td>
           <td>{{c.CatName}}</td>
         </tr>
      </tbody>
    </table>
    <hr>
    <app-prddetails-component [CatId]="cat.CatId" (notifyBack)="receive($event)"></app-prddetails-component>
  `
})
export class CatMasterComponent implements OnInit {
  cat: CategoryModel;
  cats = Categories;
  message: string;
  constructor() {
    this.cat = new CategoryModel(0, '');
    this.message = '';
  }

  ngOnInit(): void { }
  getSelectedCat(c: CategoryModel) : void {
    this.cat = c;
  }
  receive(evt): void {
    this.message = evt;
  }
}
