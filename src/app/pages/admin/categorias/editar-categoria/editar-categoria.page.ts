import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastrService } from 'ngx-toastr';
import { categoria } from 'src/app/models/categoria.models';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.page.html',
  styleUrls: ['./editar-categoria.page.scss'],
})
export class EditarCategoriaPage implements OnInit {

  constructor(private modal:ModalController,
              private categoriaService:CategoriaService,
              private toastr:ToastrService) { }
  @Input() categoria: categoria;
nombre:string;
descripcion:string;
  selectedFile:File;
  ngOnInit() {
    
    this.nombre=this.categoria.nombre;
    this.descripcion=this.categoria.descripcion;
  }

  dismiss() {

    this.modal.dismiss({
      'dismissed': true
    });
  }

  chooseFile (event) {
    this.selectedFile = event.target.files[0];
  }


  async editar(){
    this.categoria.nombre=this.nombre;
    this.categoria.descripcion=this.descripcion;
    if(this.categoria.nombre!=='' && this.selectedFile===undefined){
      this.categoriaService.updateCategoria(this.categoria);
      }else{
      this.categoriaService.updateImagen(this.categoria,this.selectedFile);
      
      }
      this.dismiss();
      }
      showSuccess() {
        this.toastr.success('Categoria editada','Operación exitosa');
      }
}
