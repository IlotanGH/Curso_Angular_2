import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  aNombres: Array<string>; // Forma 1 de definir array de string
  // aDatos: string[]; // Forma 2 de definir array de string

  constructor() { }

  ngOnInit() {
    this.aNombres = ['Jose', 'Esther', 'Triana' , 'Amaranta'];
  }

}
