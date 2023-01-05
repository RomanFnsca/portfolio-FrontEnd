import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/Person.model';
import { PersonService } from 'src/app/service/Person.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  person:Person = new Person("","","","");

  constructor(public personService:PersonService) { }

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe(data =>{this.persona = data})
  }

}
