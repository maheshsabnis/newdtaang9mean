import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/routingapp/app.home.compontn';
import { ContactComponent } from './components/routingapp/app.contact.component';
import { AboutComponent } from './components/routingapp/app.about.component';
import { ProductReactiveFormComponent } from './components/productreactiveformcomponent/app.productreactiveform.component';

// definign Route Table
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact/:id', component: ContactComponent},
  {path: 'about', component: AboutComponent, children:[
    {path:'product', component: ProductReactiveFormComponent}
  ] },
  {path:'**', redirectTo:''} // if no match found the redirect to HomeCOmponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // load the routing at application level where the AppRoutingModule is used
})
export class AppRoutingModule { }
