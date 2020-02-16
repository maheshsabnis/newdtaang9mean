import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/app.http.service';
import { Category } from '../../models/app.category.model';
@Component({
  selector: 'app-httpservice-component',
  templateUrl: './app.httpservice.view.html'
})
export class HttpServiceComponent implements OnInit {
  // inject the HttpService in ctor''''''''
  constructor(private serv: HttpService) { }

  ngOnInit(): void {
    this.loadData();
  }
  // subscribe to the observable return type of the methods from service class
  loadData(): void {
    this.serv.getData().subscribe((resp) => {
       console.log(JSON.stringify(resp));
    });
  }

  saveData(): void {
     const cat = new Category('', 6, 'Cat00006', 'Home Appliances', 23000);
     this.serv.postData(cat).subscribe((resp) => {
       console.log(JSON.stringify(resp));
     });
  }

  updateData(): void {

  }
}
