import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
import { Router } from '@Angular/router';
import { Experience } from 'src/app/model/experience';
import { SExperienceService } from 'src/app/service/s-experience.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewExperienceComponent implements OnInit {

  nameExperience:string ="";
  descriptionExperience:string="";

  constructor(private s_experience:SExperienceService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(){
    const experience = new Experience(this.nameExperience,this.descriptionExperience);
    this.s_experience.save(experience).subscribe(data =>{
      alert("Se añadió experiencia");
      this.router.navigate([''])
    }, err =>{
      alert("Falló");
      this.router.navigate(['']);
    }
    )
  }

}
