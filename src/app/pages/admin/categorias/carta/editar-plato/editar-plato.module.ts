import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarPlatoPageRoutingModule } from './editar-plato-routing.module';

import { EditarPlatoPage } from './editar-plato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarPlatoPageRoutingModule
  ],
  declarations: [EditarPlatoPage]
})
export class EditarPlatoPageModule {}
