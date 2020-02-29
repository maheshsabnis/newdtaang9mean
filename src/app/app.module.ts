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
import { DataGridComponent } from './directives/app.dynamictablecomponent.directive';
import { ColorDirective } from './directives/app.color.directive';
import { AboutComponent } from './components/routingapp/app.about.component';
import { ContactComponent } from './components/routingapp/app.contact.component';
import { HomeComponent } from './components/routingapp/app.home.compontn';
import { MainComponent } from './components/routingapp/app.main.component';
import { SecureComponent } from './components/securecomponent/app.secure.component';


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
    CatSenderComponent, PrdReceiverComponent,
    DataGridComponent, ColorDirective, HomeComponent, AboutComponent,
    ContactComponent, MainComponent,
    SecureComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [SecureComponent]
})
export class AppModule { }
