import { Component, OnInit } from '@angular/core';
import {Product, Categories} from './../../models/app.product.model';
import {ProductLogic} from './../../models/app.product.logic';
// import FormGroup and FormContol for designing Reactive Form
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { CustomValidator } from './app.custom.validator';
@Component({
  selector: 'app-productreactiveform-component',
  templateUrl: './app.productreactiveform.view.html'
})
export class ProductReactiveFormComponent implements OnInit {
  // OnInit: The Component Lifecycle interface
  product: Product;
  products: Array<Product>;
  private logic: ProductLogic;
  tableHeaders: Array<string>;
  // store Categories array in local public array variable
  categories = Categories;
  // the FormGroup object
  frmPrd: FormGroup;

  constructor() {
      this.product = new Product(0, '', '', 0);
      this.products= new Array<Product>();
      this.logic = new ProductLogic();
      this.tableHeaders  =new Array<string>();

      // define an instane of FormGroup and link Model Object (Product) with the FormGroup
      // using FormControl
      // FormControl: represent an editable element inside form tag that will
      // map with the property from Model class
      // the FormControl key e.g. ProductId will bound to HTML Element
      // using 'formControlName' attribute
      // <input type="text" formControlName="ProductId"/>
      this.frmPrd = new FormGroup({
         ProductId: new FormControl(this.product.ProductId,
            Validators.compose([
                Validators.required, Validators.minLength(2),
                Validators.maxLength(6),
                Validators.pattern('[0-9]+'),
                CustomValidator.checkEvenOdd
            ])),
         ProductName: new FormControl(this.product.ProductName),
         CategoryName: new FormControl(this.product.CategoryName),
         Price: new FormControl(this.product.Price)
      });
  }
  // the method will be immediately invoked / executes after ctor
  // this is invokes only once
  // can be used to contain heavy-logic that we cannot write in ctor
  ngOnInit(): void {
    // generate table column headers using reflection to read Product public properties
    for(let p in this.product){
      this.tableHeaders.push(p);
    }
    this.products = this.logic.getData();
  }
  save(): void {
    // read the form data (value) and assign it to the product object
    this.product = this.frmPrd.value;
    this.products = this.logic.saveData(this.product);
    console.log(JSON.stringify(this.products));
  }
  clear(): void {
    this.product = new Product(0, '', '', 0);
  }

  selectProduct(prd: Product): void {

    this.product  = Object.assign({}, prd);
    // assigning the selected product to the frmPrd value
    this.frmPrd.setValue(this.product);
  }
}
