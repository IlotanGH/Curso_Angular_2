import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.css']
})
export class Formulario2Component implements OnInit {

  sName: string;

  constructor() { }

  ngOnInit() {
    this.sName = 'Pepe';
  }

  btnBorrar(objEvent) {
    this.sName = '';
    console.dir(objEvent);
  }

  btnReset() {
    this.sName = 'Pepe';
  }

}
