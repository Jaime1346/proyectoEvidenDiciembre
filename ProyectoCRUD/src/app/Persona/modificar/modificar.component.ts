import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent {

  persona!: Persona;

  constructor(private router:Router, private service:ServiceService){}

  ngOnInit(){this.modificar();}

  modificar(){
    let idString = localStorage.getItem("id");
    let id: number | null = idString ? parseInt(idString, 10) : null;
    if(id!=null){
      this.service.getPersonaID(id).subscribe(data=>{
        this.persona=data;
      });
    }
    
  }

  actualizar(nombre:String, apellidos:String){
    const persona = new Persona (nombre,apellidos);
    this.service.modificarPersona(persona).subscribe(data=>{
      this.persona = data;
      alert("Se modifico con exito");
      this.router.navigate(["listar"])
    })
  }
}
