import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { categoria } from 'src/app/models/categoria.models';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  sucriptionCategorias: Subscription = new Subscription();
  categorias: categoria[] = [];
  constructor( private categoriasService: CategoriaService,) { }
contacto:boolean=false;
  ngOnInit() {
    this.cargarCategorias();
  }
  ngOnDestroy() {
    this.sucriptionCategorias.unsubscribe();
  }
  CambioTipo(e): void{
    if (e.detail.value == 'categoria') {
      this.contacto=false;
      }else{
        this.contacto=true;
      }
  }
  async cargarCategorias() {
    this.sucriptionCategorias = await this.categoriasService.getCategorias().subscribe(res => {
      this.categorias = res.filter(item => item.estado == true);

    });

  }

}
