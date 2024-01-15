import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoCRUD';

  constructor(private router:Router){}

  listar(){
    this.router.navigate(["listar"]);
  }

  annadir(){
    this.router.navigate(["annadir"]);
  }
}
