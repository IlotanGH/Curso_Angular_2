import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabeza',
  templateUrl: './cabeza.component.html',
  styleUrls: ['./cabeza.component.css']
})
export class CabezaComponent implements OnInit {

  titulo: string;

  constructor() { }

  ngOnInit() {
    this.titulo = 'Curso de Angular';
  }

}
