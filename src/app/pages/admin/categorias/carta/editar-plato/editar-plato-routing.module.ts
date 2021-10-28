import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarPlatoPage } from './editar-plato.page';

const routes: Routes = [
  {
    path: '',
    component: EditarPlatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarPlatoPageRoutingModule {}
