import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lado',
    template: `
    <div class="">
        <h1><p>Esto irá en un lateral</p></h1>
    </div>
    `
})

export class LadoComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
