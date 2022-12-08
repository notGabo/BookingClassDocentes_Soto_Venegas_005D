import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Profesor {
  nombreProfesor: string;
  apellidoProfesor: string;
  emailProfesor: string;
  password: string;
}
const PROFESOR_KEY = 'bd_profesor';


@Injectable({
  providedIn: 'root'
})
export class RegistroProfesorService {
  private _storage: Storage;
  newProfesor: Profesor = <Profesor>{};
  constructor(private storage: Storage) {
    this.init();
  }
  async init() {
    const storage = await this.storage.create();
    this._storage = storage;

  }
  async addProfesor(dato: Profesor): Promise<any> {
    return this.storage.get(PROFESOR_KEY).then((datos: Profesor[]) => {
      if (datos) {
        datos.push(dato);
        return this.storage.set(PROFESOR_KEY, datos);
      }
      else {
        return this.storage.set(PROFESOR_KEY, [dato]);
      }
    })
  }
  getDatos(): Promise<Profesor[]> {
    return this.storage.get(PROFESOR_KEY);
  }
}
