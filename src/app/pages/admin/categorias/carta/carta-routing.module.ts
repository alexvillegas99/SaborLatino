import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartaPage } from './carta.page';

const routes: Routes = [
  {
    path: '',
    component: CartaPage
  },
  {
    path: 'agregar-sub-categoria',
    loadChildren: () => import('./agregar-sub-categoria/agregar-sub-categoria.module').then( m => m.AgregarSubCategoriaPageModule)
  },
  {
    path: 'agregar-platos',
    loadChildren: () => import('./agregar-platos/agregar-platos.module').then( m => m.AgregarPlatosPageModule)
  },
  {
    path: 'editar-sub-categoria',
    loadChildren: () => import('./editar-sub-categoria/editar-sub-categoria.module').then( m => m.EditarSubCategoriaPageModule)
  },
  {
    path: 'editar-plato',
    loadChildren: () => import('./editar-plato/editar-plato.module').then( m => m.EditarPlatoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartaPageRoutingModule {}
