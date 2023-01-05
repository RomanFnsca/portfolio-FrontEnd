export class Person{
    id?:number;
    name:string;
    lastName:string;
    description:string;
    perfil:string;

    constructor(name:string, lastName:string, description:string, perfil:string){
        this.name = name;
        this.lastName = lastName;
        this.description = description;
        this.perfil = perfil;
    }
}