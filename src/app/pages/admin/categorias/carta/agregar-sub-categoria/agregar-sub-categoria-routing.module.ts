import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarSubCategoriaPage } from './agregar-sub-categoria.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarSubCategoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarSubCategoriaPageRoutingModule {}
