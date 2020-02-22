import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductReactiveFormComponent } from './components/productreactiveformcomponent/app.productreactiveform.component';
import { HttpServiceComponent } from './components/servicecomponent/app.httpservice.component';
import { CatMasterComponent } from './components/masterdetails/app.catmaster.component';
import { PrdDetailsComponent } from './components/masterdetails/app.prddetails.component';
import { CatSenderComponent } from './components/masterdetailsservices/app.catsender.component';
import { PrdReceiverComponent } from './components/masterdetailsservices/app.prdreceiver.component';


// imports: of the type array, used to import and load stabdard angular module and other
// exportebale in current angular application e.g.BrowserModule will be used to render app
// in browser

// declarations:  of the type array, used to define all components, directives and pipes
// of the current application for on-demand execution

// providers:  of the type array, used to provide DI Contianer for Angular Services so that
// they can be injected  (in Components/Directives, etc.) as on when needed

// boostrap: of the type array, used to bootstrap (activate and load) components from
// declaration in browser
@NgModule({
  declarations: [
    AppComponent, ProductReactiveFormComponent, HttpServiceComponent,
    CatMasterComponent, PrdDetailsComponent,
    CatSenderComponent, PrdReceiverComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [CatSenderComponent, PrdReceiverComponent]
})
export class AppModule { }
