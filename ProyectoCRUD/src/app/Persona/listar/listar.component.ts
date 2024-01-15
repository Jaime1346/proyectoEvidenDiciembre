import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{ ServiceService } from '../../Service/service.service';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {

  personas!: Persona[];
  constructor(private service:ServiceService, private router:Router){}

  ngOnInit(){
    
    this.service.getPersonas()
    .subscribe(data=>{
      this.personas=data;
    })
    
  }

  modificar(persona:Persona){
    localStorage.setItem("id",persona.id.toString());
    this.router.navigate(["modificar"]);
  }

  borrar(persona:Persona){
    this.service.borrarPersona(persona).subscribe(data=>{
      this.personas=this.personas.filter(p=>p!==persona);
      alert("Registro eliminado");
    })
  }
}
