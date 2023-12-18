import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Eager1Component } from './eager1/eager1.component';
import { Eager2Component } from './eager2/eager2.component';
import { Eager3Component } from './eager3/eager3.component';

const routes: Routes = [
  { path: 'lazy1', loadChildren: () => import('./lazy1/lazy1.module').then(m => m.Lazy1Module) }, 
  { path: 'lazy2', loadChildren: () => import('./lazy2/lazy2.module').then(m => m.Lazy2Module) },
  {path:'eager1', component:Eager1Component},
  {path:'eager2', component:Eager2Component},
  {path:'eager3', component:Eager3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
