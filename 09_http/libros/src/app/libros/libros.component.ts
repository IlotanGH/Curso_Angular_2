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

  // Esto es la inyecion de dependencia del servicio Http
  constructor(private http: Http) { }

  ngOnInit() {
      this.url = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'
      this.aLibros = [];
  }

  buscarLibros() {
    this.aLibros = [];    
    this.http.get(this.url + this.claveLibro).subscribe(
      //response => console.log(response.json()),
      response => {
        const data = response.json();
        for (var i = 0; i < data.items.length; i++) {
          const bookTitle = data.items[i].volumeInfo.title;
          this.aLibros.push(bookTitle);
        }
      },
      error => console.log(error)
    );

  }

}
