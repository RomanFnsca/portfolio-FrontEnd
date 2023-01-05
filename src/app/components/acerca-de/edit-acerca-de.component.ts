import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/Person.model';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {

  person: Person = new Person("","","","");

  constructor() { }

  ngOnInit(): void {
  }

  onUpdate(){

  }

  uploadImage($event:any){

  }

}
