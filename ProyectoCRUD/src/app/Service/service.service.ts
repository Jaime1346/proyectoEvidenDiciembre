import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  url='http//localhost:8080/ProyectoCrud/personas'

  getPersonas(){
    return this.http.get<Persona>(this.url);
  }

  createPersona(persona:Persona){
    return this.http.post<Persona>(this.url, persona);
  }

  getPersonaID(id:Number){
    return this.http.get<Persona>(this.url+"/"+id);
  }

  modificarPersona(persona:Persona){
    return this.http.put<Persona>(this.url+"/"+persona.id,persona);
  }

  borrarPersona(persona:Persona){
    return this.http.delete<Persona>(this.url+"/"+persona.id);
  }
}
