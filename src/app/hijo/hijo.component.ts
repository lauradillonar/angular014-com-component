import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  private _usuarioInChild: string ='';
  
  public get elUsuarioInChild(): string{
    return this._usuarioInChild;
  }

  @Input('usuarioInChild') public set elUsuarioInChild(value: string){
    this._usuarioInChild=value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
