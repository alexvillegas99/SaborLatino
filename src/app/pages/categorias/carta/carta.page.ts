import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { sub_categoria } from 'src/app/models/sub-categoria.model';
import { SubCategoriaService } from 'src/app/services/sub-categoria.service';
import { DetallePage } from './detalle/detalle.page';
@Component({
  selector: 'app-carta',
  templateUrl: './carta.page.html',
  styleUrls: ['./carta.page.scss'],
})
export class CartaPage implements OnInit {
  sucriptionSubCategorias: Subscription = new Subscription();
  subCategorias: sub_categoria[] = [];
  constructor(public modalController: ModalController,
    private ruta: ActivatedRoute,
    private subCategoriaService: SubCategoriaService) { }
  categoria: string;
  ngOnInit() {
    this.categoria = this.ruta.snapshot.params.categoria;
    this.getSubCategorias();
  
  }
  ngOnDestroy() {
    this.sucriptionSubCategorias.unsubscribe();
  }
  async getSubCategorias() {
    this.sucriptionSubCategorias = await this.subCategoriaService.getSubCategorias().subscribe(res => {
      this.subCategorias = res.filter(item => item.idCategoria == this.categoria && item.estado==true);
    });
  }
 

}
