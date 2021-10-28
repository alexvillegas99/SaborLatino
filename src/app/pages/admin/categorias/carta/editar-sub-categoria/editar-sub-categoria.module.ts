import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarSubCategoriaPageRoutingModule } from './editar-sub-categoria-routing.module';

import { EditarSubCategoriaPage } from './editar-sub-categoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarSubCategoriaPageRoutingModule
  ],
  declarations: [EditarSubCategoriaPage]
})
export class EditarSubCategoriaPageModule {}
