import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ToastrService } from 'ngx-toastr';
import { sub_categoria } from 'src/app/models/sub-categoria.model';
import { AgregarSubCategoriaPage } from 'src/app/pages/admin/categorias/carta/agregar-sub-categoria/agregar-sub-categoria.page';
import { EditarSubCategoriaPage } from 'src/app/pages/admin/categorias/carta/editar-sub-categoria/editar-sub-categoria.page';
import { SubCategoriaService } from 'src/app/services/sub-categoria.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  @Input() subCategorias: sub_categoria[] = [];
  @Input() categoria: string ='';
  constructor(private modalController:ModalController,
              private subCategoriaService: SubCategoriaService,
              private toastr:ToastrService,
              private alertController:AlertController) { }
 
  ngOnInit() {
  
  }
  async presentModal() {
    const modal = await this.modalController.create({
            component: AgregarSubCategoriaPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'idCategoria' : this.categoria
      }
    });
    return await modal.present();
  }
  async actualizarEstado(subCategoria:sub_categoria) {
    subCategoria.estado=!subCategoria.estado;
    this.subCategoriaService.updateSubCategoria(subCategoria);
  }
  async eliminarSubCategoria(id:string){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Advertencia!',
      message: 'Esta seguro de querer eliminar esta subcategoria?',
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
            this.subCategoriaService.deleteSubCategoria(id);
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
  async editarSubCategoria(SubCategoria:sub_categoria){
    const modal = await this.modalController.create({
      component: EditarSubCategoriaPage,
cssClass: 'my-custom-class',
componentProps: {
  'subCategoria' : SubCategoria
} 
});
return await modal.present();

  }
}
