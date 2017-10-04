export class Provincia {
    //id: number;
    name: string;

    // Esto de meter el public en el constructor es una paranoia rara.
    // Mejor hacerlo como un Intefaz si constructor o como una clase
    // con un constructor normal
    constructor(public id: number, name) {
        this.name = name;
    }

}