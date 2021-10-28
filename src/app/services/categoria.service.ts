import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { categoria } from '../models/categoria.models';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {


  private filePath: any;
  private dowloadURL: Observable<string>;
  private CategoriaCollection: AngularFirestoreCollection<categoria>;
  private categoria: Observable<categoria[]>;
  constructor(private db: AngularFirestore,
    private storage: AngularFireStorage) {

    this.CategoriaCollection = db.collection<categoria>('categorias');
    this.categoria = this.CategoriaCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      }
    ))

  }
  addImgCategoria(categoria: categoria, img: File) {
    if(img!=null){

   
    this.filePath = `Categorias/${img.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, img);

    task.snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(urlImagen => {
            categoria.imagen = urlImagen;
            this.inserCategoria(categoria);
          })
        })
      ).subscribe();
    }else{
      this.inserCategoria(categoria);
    }
  }
  updateImagen(categoria: categoria, img: File) {
    this.filePath = `Categorias/${img.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, img);

    task.snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(urlImagen => {
            categoria.imagen = urlImagen;
            this.updateCategoria(categoria);
          })
        })
      ).subscribe();

  }
  getCategorias() {
    return this.categoria;
  }
  inserCategoria(categoria: categoria) {
    return this.CategoriaCollection.add(categoria);

  }
  deleteCategoria(id: string) {
    return this.CategoriaCollection.doc(id).delete();
  }
  updateCategoria(categoria: categoria) {
    return this.CategoriaCollection.doc(categoria.id).update(categoria);
  }
  getCategoria(id: string) {
    return this.CategoriaCollection.doc<categoria>(id).valueChanges();
  }
}
