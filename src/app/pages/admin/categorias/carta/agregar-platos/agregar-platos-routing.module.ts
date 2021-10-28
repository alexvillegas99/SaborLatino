import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarPlatosPage } from './agregar-platos.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarPlatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarPlatosPageRoutingModule {}
