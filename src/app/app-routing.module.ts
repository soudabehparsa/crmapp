import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrandComponentComponent } from './brand-component/brand-component.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactListComponent } from './contact-list/contact-list.component';

const routes: Routes = [
  { path:  '', redirectTo:  '', pathMatch:  'full' },
  {path:"Brand",component:BrandComponentComponent},
  {path:"ContactCreate",component:ContactCreateComponent},
  {path:"ContactList",component:ContactListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
