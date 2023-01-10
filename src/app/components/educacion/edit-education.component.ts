import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
import { ActivatedRoute, Router } from '@Angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {

  education!:Education;

  constructor(private s_education:EducationService, private activatedRouter:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.s_education.detail(id).subscribe(
      data =>{
        this.education = data;
      }, err => {
        alert("Error no se puede cargar educación");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.s_education.update(id, this.education).subscribe(
      data =>{
        this.router.navigate([''])
      }, err => {
        alert("Error no se puede modificar educación");
        this.router.navigate(['']);
      }
    )
  }

}
