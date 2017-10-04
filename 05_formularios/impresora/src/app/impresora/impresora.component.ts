import { Component, OnInit } from '@angular/core';

import { Provincia } from './provincias.model';

@Component({
  selector: 'app-impresora',
  templateUrl: './impresora.component.html',
  styleUrls: ['./impresora.component.css']
})
export class ImpresoraComponent implements OnInit {

  sImpresora: string;
  aImpresoras: Array<string>;
  isDisabled: boolean;
  aProvincias: Array<Provincia>
  provinciaSeleccionada: Provincia;

  constructor() { }

  ngOnInit() {
    this.isDisabled = true;
    this.aImpresoras = ['HP 1000', 'Compaq 1000', 'Lexmark 1000' , 'Canon 1000'];
    this.aProvincias = [
        {id: 2, name: 'Málaga'},
        {id: 3, name: 'Sevilla'},
        {id: 4, name: 'Cadiz'},
        {id: 5, name: 'Huelva'},
        new Provincia(6, 'Madrid')
    ];
  }

  avisarProvincia() {

  }

}
