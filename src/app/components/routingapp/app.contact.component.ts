import { Component, OnInit } from '@angular/core';
// ActivatedRoute will be used to subscribe to parameters in route
import {ActivatedRoute} from '@angular/router';
@Component({
  selector:'app-contact-component',
  template: `
     <h2> The Contact Component</h2>
     <div>{{message}}</div>
  `
})
export class ContactComponent implements OnInit {
  message: string;
  constructor(private act: ActivatedRoute) {
    this.message = 'This is Contact Component';
  }
  // subscribe to the route parameter
  ngOnInit() {
      this.act.params.subscribe((parameter) => {
         this.message += parameter.id; // read the value of the parameter
      });
  }
}
