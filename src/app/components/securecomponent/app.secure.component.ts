import { Component, OnInit } from '@angular/core';
import { SecureService } from '../../services/app.secure.service';
import { User } from '../../models/app.user.mode';

@Component({
  selector: 'app-secure-component',
  template:  `
     <input type="button" value="Register" class="btn btn-warning" (click)="registerUser()"/>
     <br/>
     <input type="button" value="Auth User" class="btn btn-danger" (click)="authUser()"/>
     <br/>
     <input type="button" value="Get Persons" class="btn btn-success" (click)="getData()"/>
  `
})

export class SecureComponent implements OnInit {

  constructor(private serv: SecureService) { }

  ngOnInit() {

  }

  registerUser(): void {
     const user = new User("ajay","pas123");
     this.serv.registerUser(user).subscribe((resp)=>{
       console.log(resp);
     }, (error) => {
       console.log(`Errro Occures ${error}`);
     });
  }

  authUser(): void {
    const user = new User("ajay","pas123");
    this.serv.authUser(user).subscribe((resp)=>{
      sessionStorage.setItem('token', resp.accessToken);
      console.log(resp);
    }, (error) => {
      console.log(`Errro Occures ${error}`);
    });
  }
  getData(): void {
    let token: string = sessionStorage.getItem('token');
    this.serv.getPersons(token).subscribe((resp)=>{
      console.log(JSON.stringify(resp));
    }, (error) => {
      console.log(`Errro Occures ${error}`);
    });
  }
}
