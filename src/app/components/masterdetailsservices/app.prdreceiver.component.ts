import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/app.prd.model';
import { Products } from '../../models/app.prd.model';
import { CommunicationService } from '../../services/app.communication.service';

@Component({
  selector: 'app-prdreceiver-component',
  template: `
  <h2>Product Receiver Component</h2>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <td>Prod Id</td>
          <td>Prod Name</td>
          <td>Cat Id</td>
        </tr>
      </thead>
      <tbody>
         <tr *ngFor="let p of FilterProducts">
           <td>{{p.ProdId}}</td>
           <td>{{p.ProdName}}</td>
           <td>{{p.CatId}}</td>
         </tr>
      </tbody>
    </table>
  `
})
export class PrdReceiverComponent implements OnInit {

  prd: ProductModel;
  prds = Products;
  private _FilterProducts: Array<ProductModel>;
  private _CatId : number;

  constructor(private serv: CommunicationService) {
    this._CatId = 0;
    this._FilterProducts = new Array<ProductModel>();
  }

  // subscribe to the event from the service once
  ngOnInit(): void {
    this.serv.receiverData.subscribe((data: number) => {
       this._CatId = data;
    });
  }



  // define a read-only property that will filgter data from prds based on condition
  get FilterProducts() : Array<ProductModel> {
    this._FilterProducts = new Array<ProductModel>();

    if(this._CatId >0) {
      this._FilterProducts = this.prds.filter((p,i) => {
          return p.CatId === this._CatId;
      });
    } else {
      this._FilterProducts = this.prds;
    }

    return this._FilterProducts;
  }



}
