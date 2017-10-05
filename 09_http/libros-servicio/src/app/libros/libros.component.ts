import { Http } from '@angular/http';
import { BuscarService } from '../buscar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  url: string;
  claveLibro: string;
  aLibros: Array<string>;

  constructor(public buscarService: BuscarService) {}

  ngOnInit() {      
      this.aLibros = [];
  }

  buscarLibros() {
    console.log(this.buscarService.getLibros(this.claveLibro));    
    //this.aLibros = 
  }

}
