import { Component, OnInit } from '@angular/core';
//Si no funciona cambiar a----import { Router } from '@angular/router';
import { Router } from '@Angular/router';
import { Education } from '../model/education';

import { EducationService } from '../service/education.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent implements OnInit {

  nameEducation!: string;
  descriptionEducation!:string;
  constructor(private educationService:EducationService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const education = new Education(this.nameEducation,this.descriptionEducation);
    this.educationService.save(education).subscribe(data =>{
      alert("Se añadió educación");
      this.router.navigate([''])
    }, err =>{
      alert("Falló");
      this.router.navigate(['']);
    }
    )
  }

}
