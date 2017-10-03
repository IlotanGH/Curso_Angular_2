import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamientos',
  templateUrl: './pensamientos.component.html',
  styleUrls: ['./pensamientos.component.css']
})
export class PensamientosComponent implements OnInit {

  pensamientoActual: string;
  aPensamientos: Array<string>;

  constructor() { }

  ngOnInit() {
    this.pensamientoActual = '';
    this.aPensamientos = [];
  }

  addPensamiento() {
    if (this.pensamientoActual.length > 0) {
      this.aPensamientos.push(this.pensamientoActual);
      this.pensamientoActual = '';
    }
  }

}
