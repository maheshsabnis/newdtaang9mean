import { Product } from './app.product.model';
export class ProductLogic {
  private products: Array<Product>;
  constructor() {
    this.products = new Array<Product>();
    this.products.push(new Product(101, 'Laptop', 'ECT', 100000) );
    this.products.push(new Product(102, 'Iron', 'ECL', 2000) );
    this.products.push(new Product(103, 'Biscuts', 'FOD', 30) );
  }
  getData(): Array<Product> {
    return this.products;
  }
  saveData(prd: Product): Array<Product> {
    this.products.push(prd);
    return this.products;
  }
}
