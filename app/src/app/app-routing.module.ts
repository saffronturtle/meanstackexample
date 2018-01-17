import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
