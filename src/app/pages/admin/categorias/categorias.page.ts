import { Component, OnInit } from '@angular/core';
import { categoria } from 'src/app/models/categoria.models';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Subscription } from 'rxjs';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { ToastrService } from 'ngx-toastr';
import { EditarCategoriaPage } from './editar-categoria/editar-categoria.page';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  constructor(private categoriasService: CategoriaService,
    private alertController: AlertController,
    private toastr: ToastrService,
    private modalController:ModalController,
    private AuthService:AuthService,
    private navCtrl:NavController) { }
  categorias: categoria[] = [];
  sucriptionCategorias: Subscription = new Subscription();
  ngOnInit() {
    this.cargarCategorias();
  }

  ngOnDestroy() {
    this.sucriptionCategorias.unsubscribe();
  }
  async cargarCategorias() {
    this.sucriptionCategorias = await this.categoriasService.getCategorias().subscribe(res => {
      this.categorias = res;

    });

  }
  async actualizarEstado(categoria: categoria) {
    categoria.estado = !categoria.estado;
    this.categoriasService.updateCategoria(categoria);

  }
  async eliminarCategoria(id: string) {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Advertencia!',
      message: 'Esta seguro de querer eliminar esta categoria?',
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
            this.categoriasService.deleteCategoria(id);
            this.showSuccess();
          }
        }
      ]
    });

    await alert.present();


  }
  showSuccess() {
    this.toastr.success('Categoria eliminada', 'Operación exitosa');
  }
  

  
  async editarCategoria(categoria:categoria){
    const modal = await this.modalController.create({
            component: EditarCategoriaPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'categoria' : categoria
      } 
    });
    return await modal.present();
  }
  cerrarSesion() {
    this.AuthService.logout();
    this.navCtrl.navigateForward('/admin');
  }
}
