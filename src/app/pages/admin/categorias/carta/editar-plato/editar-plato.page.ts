import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastrService } from 'ngx-toastr';
import { alergenos, platos } from 'src/app/models/platos.models';
import { PlatosService } from 'src/app/services/platos.service';

@Component({
  selector: 'app-editar-plato',
  templateUrl: './editar-plato.page.html',
  styleUrls: ['./editar-plato.page.scss'],
})
export class EditarPlatoPage implements OnInit {
@Input() plato:platos;
  constructor(private modal:ModalController,
              private platosServies:PlatosService,
              private toastr:ToastrService) { }
  selectedFile:File;
  //
    nombre:string;
    descripcion1;
    descripcion2;
    precio:number=0;
    estado:boolean;
  // 
  ngOnInit() {
    this.nombre=this.plato.nombre;
    this.descripcion1=this.plato.descripcion1;
    this.descripcion2=this.plato.descripcion2;
    this.precio=this.plato.precio;
    
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
    this.plato.nombre=this.nombre;
    this.plato.descripcion1=this.descripcion1
    this.plato.descripcion2 = this.descripcion2;
    this.plato.precio =this.precio;
    if(this.selectedFile!=null){
      this.platosServies.updateImagen(this.plato,this.selectedFile);
    }else{
      this.platosServies.updatePlato(this.plato);
    }
    this.dismiss();
  }
  showSuccess() {
    this.toastr.success('Plato editado', 'Operación exitosa');
  }
}
