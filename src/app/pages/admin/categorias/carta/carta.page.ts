import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { categoria } from 'src/app/models/categoria.models';
import { sub_categoria } from 'src/app/models/sub-categoria.model';
import { AuthService } from 'src/app/services/auth.service';
import { SubCategoriaService } from 'src/app/services/sub-categoria.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.page.html',
  styleUrls: ['./carta.page.scss'],
})
export class CartaPage implements OnInit {

  constructor(
    private ruta: ActivatedRoute,
    private subCategoriaService:SubCategoriaService,
    private AuthService:AuthService,
    private navCtrl:NavController
  ) { }
categoria:string='';
sucriptionSubCategorias: Subscription = new Subscription();
subCategorias:sub_categoria[]= [];
  ngOnInit() {
    this.categoria=this.ruta.snapshot.params.categoria;
    this.getSubCategorias();
  }
  async getSubCategorias(){
    this.sucriptionSubCategorias = await this.subCategoriaService.getSubCategorias().subscribe(res => {
      this.subCategorias = res.filter(item => item.idCategoria == this.categoria);
    });

  }
  cerrarSesion() {
    this.AuthService.logout();
    this.navCtrl.navigateForward('/admin');
  }
}
