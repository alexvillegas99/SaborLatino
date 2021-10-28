import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarSubCategoriaPage } from './editar-sub-categoria.page';

const routes: Routes = [
  {
    path: '',
    component: EditarSubCategoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarSubCategoriaPageRoutingModule {}
