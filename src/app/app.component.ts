import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Comunicación entre Componentes';
  mensajeInParent: string = "";
  
  getMensaje(e: string){
    console.log(e);
    this.mensajeInParent = e;
  }
}
