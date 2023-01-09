export class Experience {
    id? : number;
    nameExperience:String;
    descriptionExperience:String;

    constructor(nameExperience:string, descriptionExperience:string){
        this.nameExperience = nameExperience;
        this.descriptionExperience = descriptionExperience;
    }
}
