import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarSubCategoriaPageRoutingModule } from './agregar-sub-categoria-routing.module';

import { AgregarSubCategoriaPage } from './agregar-sub-categoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarSubCategoriaPageRoutingModule
  ],
  declarations: [AgregarSubCategoriaPage]
})
export class AgregarSubCategoriaPageModule {}
