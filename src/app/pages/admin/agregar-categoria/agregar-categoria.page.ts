import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { categoria } from 'src/app/models/categoria.models';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agregar-categoria',
  templateUrl: './agregar-categoria.page.html',
  styleUrls: ['./agregar-categoria.page.scss'],
})
export class AgregarCategoriaPage implements OnInit {
 
  Categoria?:categoria={
    nombre:'',
    imagen:'',
    descripcion:'',
    estado:true
  }
  selectedFile:File;
    constructor(private categoriaService:CategoriaService,
      private alertCtrl:AlertController,
      private navCtrl:NavController,
      private toastr: ToastrService) { }
    ngOnInit() {
    }
    chooseFile (event) {
      this.selectedFile = event.target.files[0];
    }
    
    async agregar(){
  if(this.Categoria.nombre!=='' ){
    
  this.categoriaService.addImgCategoria(this.Categoria,this.selectedFile);
  this.navCtrl.navigateForward('/admin/categorias');
  this.Categoria=null;
  this.showSuccess();
  }else{
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      message: 'Llenar todos los campos',
      buttons: ['Aceptar']
    });
   
    await alert.present();
  }
}
showSuccess() {
  this.toastr.success('Categoria agregada','Operación exitosa');
}
}
