import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from 'src/app/models/app.prd.model';
import { Products } from '../../models/app.prd.model';

@Component({
  selector: 'app-prddetails-component',
  template: `
  <h2>Product Component</h2>
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
    <hr>
    <input type="button" value="Notify Back" class="btn btn-warning" (click)="onNotifyBack()"/>
  `
})
export class PrdDetailsComponent implements OnInit {

  prd: ProductModel;
  prds = Products;
  private _FilterProducts: Array<ProductModel>;
  private _CatId : number;
  @Output()
  notifyBack: EventEmitter<string>;

  constructor() {
    this._CatId = 0;
    this._FilterProducts = new Array<ProductModel>();
    this.notifyBack  =new EventEmitter<string>();
  }

  @Input()
  set CatId(v: number) {
    this._CatId = v;
    console.log(v);
  }
  get CatId() : number {
    return this._CatId;
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


  onNotifyBack(): void {
    this.notifyBack.emit(`We found ${this._FilterProducts.length} records for Categoey Id ${this._CatId}`);
  }

  ngOnInit(): void { }
}
