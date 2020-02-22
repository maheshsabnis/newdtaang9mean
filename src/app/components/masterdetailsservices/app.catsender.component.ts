import { Component, OnInit } from '@angular/core';
import { CategoryModel, Categories } from '../../models/app.cat.model';
import { CommunicationService } from '../../services/app.communication.service';

@Component({
  selector: 'app-catsender-component',
  template: `
    <h2>Category Sender Component</h2>
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

  `
})
export class CatSenderComponent implements OnInit {
  cat: CategoryModel;
  cats = Categories;
  constructor(private serv: CommunicationService) {
    this.cat = new CategoryModel(0, '');
  }

  ngOnInit(): void { }
  getSelectedCat(c: CategoryModel) : void {
    this.cat = c;
    this.serv.onReceiveData(this.cat.CatId);
  }

}
