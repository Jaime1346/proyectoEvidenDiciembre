import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-annadir',
  templateUrl: './annadir.component.html',
  styleUrls: ['./annadir.component.css']
})
export class AnnadirComponent {
  constructor(private router:Router, private service:ServiceService){}

  annadir(nombre:String, apellidos:String){
    const persona = new Persona (nombre,apellidos);
    this.service.createPersona(persona)
    .subscribe(data=>{
      alert("Se ha agregado a la persona");
      this.router.navigate(['listar']);
    })
  }
}
