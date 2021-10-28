import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastrService } from 'ngx-toastr';
import { sub_categoria } from 'src/app/models/sub-categoria.model';
import { SubCategoriaService } from 'src/app/services/sub-categoria.service';


@Component({
  selector: 'app-agregar-sub-categoria',
  templateUrl: './agregar-sub-categoria.page.html',
  styleUrls: ['./agregar-sub-categoria.page.scss'],
})
export class AgregarSubCategoriaPage implements OnInit {

  constructor(private modal: ModalController,
              private subCategoriaService: SubCategoriaService,
              private toastr:ToastrService) { }
  @Input() idCategoria: string;
  subCategoria?:sub_categoria={
    nombre:'',
    estado:true,
    idCategoria:''
  }
  ngOnInit() {
  }
  dismiss() {
   
    this.modal.dismiss({
      'dismissed': true
    });
  }
  agregarSubCategoria(){
    this.subCategoria.idCategoria=this.idCategoria;
    this.subCategoriaService.insertSubCategoria(this.subCategoria);
    this.dismiss();
    this.showSuccess();
  }
  showSuccess() {
    this.toastr.success('SubCategoria agregada','Operación exitosa');
  }
}
