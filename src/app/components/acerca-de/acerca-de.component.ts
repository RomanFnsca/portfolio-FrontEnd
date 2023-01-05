import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/Person.model';
import { PersonService } from 'src/app/service/Person.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  person:Person = new Person("","","","");

  constructor(public personService:PersonService, private tokenService:TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.loadPerson();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  loadPerson(){
    this.personService.detail(1).subscribe(data =>{
      this.person = data
    })
  }

}
