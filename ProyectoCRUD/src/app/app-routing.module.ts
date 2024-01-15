import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModificarComponent } from './Persona/modificar/modificar.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { AnnadirComponent } from './Persona/annadir/annadir.component';

const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'annadir', component:AnnadirComponent},
  {path:'modificar', component:ModificarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
