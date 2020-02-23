import { Component, OnInit } from '@angular/core';
// Router class provides method to route based on event
import {Router} from '@angular/router';
@Component({
  selector:'app-About-component',
  template: `
     <h2> The About Component</h2>
     <div>{{message}}</div>
     <br>
     <input type="button" value="Navigate to Contact" class="btn btn-warning"
      (click)="navigateToContact()">
      <br>
      <input type="text" [(ngModel)]="id" class="form-control">
     <br>
     <a [routerLink]="['product']">Product</a>
     <br/>
     <router-outlet></router-outlet>
  `
})
export class AboutComponent implements OnInit {
  message: string;
  id: number;
  constructor(private router: Router) {
    this.message = 'This is About Component';
  }
  navigateToContact(): void {
    this.router.navigate(['contact', this.id]);
  }
  ngOnInit() {

  }

}
