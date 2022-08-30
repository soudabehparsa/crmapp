import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';

const routes: Routes = [
  { path:  '', redirectTo:  '', pathMatch:  'full' },
  {path:"test",component:TestComponentComponent},
  {path:"test1",component:TestComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
