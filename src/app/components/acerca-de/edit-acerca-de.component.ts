import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute, Router } from '@angular/router';
import { ActivatedRoute, Router } from '@Angular/router';
import { Person } from 'src/app/model/Person.model';
import { PersonService } from 'src/app/service/Person.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {

  person: Person = new Person("","","","");

  constructor(private activatedRouter: ActivatedRoute, private personService:PersonService, private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personService.detail(id).subscribe(data =>{
      this.person = data;
    }, err =>{
      alert("Error, no se puede modificar persona");
      this.router.navigate(['']);
    })
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.personService.update(id, this.person).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar persona");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any){

  }

}
