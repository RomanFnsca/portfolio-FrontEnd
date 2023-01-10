import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute, Router } from '@angular/router';
import { ActivatedRoute, Router } from '@Angular/router';
import { Experience } from 'src/app/model/experience';
import { SExperienceService } from 'src/app/service/s-experience.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {

  experience!:Experience;

  constructor(private s_experience:SExperienceService, private activatedRouter:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.s_experience.detail(id).subscribe(
      data =>{
        this.experience = data;
      }, err => {
        alert("Error no se puede cargar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.s_experience.update(id, this.experience).subscribe(
      data =>{
        this.router.navigate([''])
      }, err => {
        alert("Error no se puede modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

}
