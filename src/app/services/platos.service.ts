import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { platos } from '../models/platos.models';

@Injectable({
  providedIn: 'root'
})
export class PlatosService {

  
  private filePath: any;
  private PlatosCollection: AngularFirestoreCollection<platos>;
  private plato: Observable<platos[]>;
  constructor(private db: AngularFirestore,
    private storage: AngularFireStorage) {

    this.PlatosCollection = db.collection<platos>('platos');
    this.plato = this.PlatosCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      }
    ))

  }
  addImgPlato(plato: platos, img: File) {
    if(img!=null){

   
    this.filePath = `platos/${img.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, img);

    task.snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(urlImagen => {
            plato.imagen = urlImagen;
            this.insertPlato(plato);
          })
        })
      ).subscribe();
    }else{
      this.insertPlato(plato);
    }
  }
  updateImagen(plato: platos, img: File) {
    this.filePath = `platos/${img.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, img);

    task.snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(urlImagen => {
            plato.imagen = urlImagen;
            this.updatePlato(plato);
          })
        })
      ).subscribe();

  }
  getPlatos() {
    return this.plato;
  }
  insertPlato(plato: platos) {
    return this.PlatosCollection.add(plato);

  }
  deletePlato(id: string) {
    return this.PlatosCollection.doc(id).delete();
  }
  updatePlato(plato: platos) {
    return this.PlatosCollection.doc(plato.id).update(plato);
  }
  getPlato(id: string) {
    return this.PlatosCollection.doc<platos>(id).valueChanges();
  }


}
