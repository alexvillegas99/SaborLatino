import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastrService } from 'ngx-toastr';
import { sub_categoria } from 'src/app/models/sub-categoria.model';
import { SubCategoriaService } from 'src/app/services/sub-categoria.service';

@Component({
  selector: 'app-editar-sub-categoria',
  templateUrl: './editar-sub-categoria.page.html',
  styleUrls: ['./editar-sub-categoria.page.scss'],
})
export class EditarSubCategoriaPage implements OnInit {
  @Input() subCategoria: sub_categoria;
  constructor(private modal: ModalController,
    private SubCategoriaService: SubCategoriaService,
    private toastr:ToastrService) { }
  nombre: string = '';
  ngOnInit() {
    this.nombre = this.subCategoria.nombre;
  }
  dismiss() {

    this.modal.dismiss({
      'dismissed': true
    });
  }

  async editar() {
    this.subCategoria.nombre = this.nombre;

    if (this.subCategoria.nombre !== '') {
      this.SubCategoriaService.updateSubCategoria(this.subCategoria);
      this.showSuccess();
     
    }
    this.dismiss();
  }

showSuccess() {
  this.toastr.success('SubCategoria editada', 'Operación exitosa');
}
}
