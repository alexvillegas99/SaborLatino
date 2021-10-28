import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { sub_categoria } from '../models/sub-categoria.model';


@Injectable({
  providedIn: 'root'
})
export class SubCategoriaService {


  private SubCategoriaCollection: AngularFirestoreCollection<sub_categoria>;
  private subCategoria: Observable<sub_categoria[]>;
  constructor(private db: AngularFirestore,
    private storage: AngularFireStorage) {

    this.SubCategoriaCollection = db.collection<sub_categoria>('sub_categoria');
    this.subCategoria = this.SubCategoriaCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      }
    ))

  }
 
  getSubCategorias() {
    return this.subCategoria;
  }
  insertSubCategoria(categoria: sub_categoria) {
    return this.SubCategoriaCollection.add(categoria);

  }
  deleteSubCategoria(id: string) {
    return this.SubCategoriaCollection.doc(id).delete();
  }
  updateSubCategoria(subCategoria: sub_categoria) {
    return this.SubCategoriaCollection.doc(subCategoria.id).update(subCategoria);
  }
  getSubCategoriaByID(id: string) {
    return this.SubCategoriaCollection.doc<sub_categoria>(id).valueChanges();
  }
}
