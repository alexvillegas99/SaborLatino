import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { PipesModule } from '../pipes/pipes.module';
import { ItemsClienteComponent } from './items-cliente/items-cliente.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ListaComponent,
    ItemsClienteComponent,
    ItemsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    SharedModule,
  ],
  exports: [
    ListaComponent,
    ItemsClienteComponent,
    ItemsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
