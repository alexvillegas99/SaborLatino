import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { platos } from 'src/app/models/platos.models';
import { DetallePage } from 'src/app/pages/categorias/carta/detalle/detalle.page';
import { PlatosService } from 'src/app/services/platos.service';

@Component({
  selector: 'app-items-cliente',
  templateUrl: './items-cliente.component.html',
  styleUrls: ['./items-cliente.component.scss'],
})
export class ItemsClienteComponent implements OnInit {

  platos:platos[]=[];
  constructor(private modalController:ModalController,
              private platosService:PlatosService) { }
  @Input() subCategoria: string ='';
  sucriptionPlatos: Subscription = new Subscription();
  ngOnInit() {
    this.getPlatos();
  
  }
 ngonDestroy() {
   this.sucriptionPlatos.unsubscribe();
 }
  async getPlatos(){
    this.sucriptionPlatos = await this.platosService.getPlatos().subscribe(res => {
      this.platos = res.filter(item => item.idSubCategoria == this.subCategoria &&  item.estado == true);
    
    });
  }
  async presentModal(plato:platos) {
    const modal = await this.modalController.create({
      component: DetallePage,
      cssClass: 'my-custom-class',
      componentProps: {
        'plato' : plato
      } 
    });
    return await modal.present();
  }

}
