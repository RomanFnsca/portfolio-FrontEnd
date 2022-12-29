export class persona{
    id?:number;
    nombre:string;
    apellido:string;
    perfil:string;

    constructor(nombre:string, apellido:string, perfil:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.perfil = perfil;
    }
}