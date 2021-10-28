import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { platos } from 'src/app/models/platos.models';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  constructor(private modalController:ModalController) { }
  @Input() plato: platos = null;
  ngOnInit() {
  }

  dismiss() {
   
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
