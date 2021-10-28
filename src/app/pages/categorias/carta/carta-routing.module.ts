import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartaPage } from './carta.page';

const routes: Routes = [
  {
    path: '',
    component: CartaPage
  },
  {
    path: 'detalle',
    loadChildren: () => import('./detalle/detalle.module').then( m => m.DetallePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartaPageRoutingModule {}
