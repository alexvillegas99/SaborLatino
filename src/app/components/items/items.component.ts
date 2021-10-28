import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { platos } from 'src/app/models/platos.models';
import { AgregarPlatosPage } from 'src/app/pages/admin/categorias/carta/agregar-platos/agregar-platos.page';
import { EditarPlatoPage } from 'src/app/pages/admin/categorias/carta/editar-plato/editar-plato.page';
import { PlatosService } from 'src/app/services/platos.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  platos: platos[] = [];
  constructor(private modalController: ModalController,
    private platosService: PlatosService,
    private toastr: ToastrService,
    private alertController: AlertController) { }
  @Input() subCategoria: string = '';
  sucriptionPlatos: Subscription = new Subscription();
  ngOnInit() {
    this.getPlatos();
    console.log(this.platos)
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: AgregarPlatosPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'idSubCategoria': this.subCategoria
      }
    });
    return await modal.present();
  }
  ngonDestroy() {
    this.sucriptionPlatos.unsubscribe();
  }
  async getPlatos() {
    this.sucriptionPlatos = await this.platosService.getPlatos().subscribe(res => {
      this.platos = res.filter(item => item.idSubCategoria == this.subCategoria);

    });
  }
  async actualizarEstado(plato: platos) {
    plato.estado = !plato.estado;
    this.platosService.updatePlato(plato);
  }
  async eliminarPlato(id: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Advertencia!',
      message: 'Esta seguro de querer eliminar este p?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {

          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.platosService.deletePlato(id);
            this.showSuccess();
          }
        }
      ]
    });

    await alert.present();

  }
  showSuccess() {
    this.toastr.success('SubCategoria eliminada', 'Operación exitosa');
  }
  async editarPlato(plato: platos) {
    const modal = await this.modalController.create({
      component: EditarPlatoPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'plato': plato
      }
    });
    return await modal.present();

  }
}
