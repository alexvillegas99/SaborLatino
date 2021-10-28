import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarPlatosPageRoutingModule } from './agregar-platos-routing.module';

import { AgregarPlatosPage } from './agregar-platos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarPlatosPageRoutingModule
  ],
  declarations: [AgregarPlatosPage]
})
export class AgregarPlatosPageModule {}
