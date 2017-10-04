import { BuscarService } from '../buscar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  claveLibro: string;
  aLibros: Array<string>;

  // Esto es la inyecion de dependencia del servicio BuscarService
  constructor(private buscarService: BuscarService) { }

  ngOnInit() {
      this.aLibros = [];
  }

  buscarLibros() {
    this.aLibros = this.buscarService.getLibros(this.claveLibro);
    console.log("claveLibro = " + this.claveLibro);
    console.log("aLibros = = " + this.aLibros);
  }

}
