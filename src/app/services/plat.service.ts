import { Injectable } from '@angular/core';
import { Plat } from "../model/plat";
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class PlatService {

  constructor( private httpClient : HttpClient) { }

  addPlat(plat :Plat ): Observable<Plat>
  {
    return null;
  }
  getPlatById(id) : Observable<Plat[]>
  {
    return this.httpClient.get<Plat[]>("http://localhost:1337/plats/"+id).pipe();
  }

  public getAllPlats(): Observable<Plat[]>
  {
    return this.httpClient.get<Plat[]>("http://localhost:1337/plats").pipe();
  }

  deletePlat(id)
  {
    return this.httpClient.delete("http://localhost:1337/plats/"+id).pipe();
  }

  updatePlat(plat : Plat)
  {

  }
}
