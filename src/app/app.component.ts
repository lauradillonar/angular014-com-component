import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Comunicación entre Componentes';
  private _usuarioInParent = "User0104";
  
  public get usuarioInParent(): string {
    return this._usuarioInParent;
  }

  public set usuarioInParent(value: string){
    this._usuarioInParent = value;
  }
}
