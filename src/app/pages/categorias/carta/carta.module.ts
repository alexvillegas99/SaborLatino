import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartaPageRoutingModule } from './carta-routing.module';

import { CartaPage } from './carta.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartaPageRoutingModule,
    ComponentsModule,
    SharedModule
  ],
  declarations: [CartaPage]
})
export class CartaPageModule {}
