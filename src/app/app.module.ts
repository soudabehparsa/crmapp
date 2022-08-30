import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TestComponentComponent } from './test-component/test-component.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { HttpClientModule } from  '@angular/common/http';
import { BrandComponentComponent } from './brand-component/brand-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    ContactListComponent,
    ContactCreateComponent,
    BrandComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
