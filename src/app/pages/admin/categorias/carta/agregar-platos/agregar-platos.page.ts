import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastrService } from 'ngx-toastr';
import { alergenos, platos } from 'src/app/models/platos.models';
import { PlatosService } from 'src/app/services/platos.service';

@Component({
  selector: 'app-agregar-platos',
  templateUrl: './agregar-platos.page.html',
  styleUrls: ['./agregar-platos.page.scss'],
})
export class AgregarPlatosPage implements OnInit {
  @Input() idSubCategoria: string;
  selectedFile:File;
  alergenos: alergenos[] = [
    {
      id: 1,
      nombre: "Moluscos",
      valor: false
    },
    {
      id: 2,
      nombre: "Granos de sesamo",
      valor: false
    },
    {
      id: 3,
      nombre: "Frutos de cascara",
      valor: false
    },
    {
      id: 4,
      nombre: "Apio",
      valor: false
    },
    {
      id: 5,
      nombre: "Mostaza",
      valor: false
    },
    {
      id: 6,
      nombre: "Pescado",
      valor: false
    },
    {
      id: 7,
      nombre: "Lacteos",
      valor: false
    },
    {
      id: 8,
      nombre: "Cacahuate",
      valor: false
    },
    {
      id: 9,
      nombre: "Soja",
      valor: false
    },
    {
      id: 10,
      nombre: "Huevos",
      valor: false
    },
    {
      id: 11,
      nombre: "Crustaceos",
      valor: false
    },
    {
      id: 12,
      nombre: "Gluten",
      valor: false
    }
  ];

  plato: platos = {
    nombre: "",
    descripcion1: "", 
    descripcion2: "",
    imagen: "",
    alergenos: this.alergenos,
    estado: true,
    precio: null,
    idSubCategoria: ''
  };

  constructor(private modal: ModalController,
    private platosServices: PlatosService,
    private toastr:ToastrService) { }

  ngOnInit() {
  }
  agregar() {
    this.plato.idSubCategoria = this.idSubCategoria;
    this.platosServices.addImgPlato(this.plato,this.selectedFile);
    this.dismiss();
    this.showSuccess();
  }
  chooseFile (event) {
    this.selectedFile = event.target.files[0];
  }


  dismiss() {

    this.modal.dismiss({
      'dismissed': true
    });
  }

  showSuccess() {
    this.toastr.success('Plato agregado','Operación exitosa');
  }
}
