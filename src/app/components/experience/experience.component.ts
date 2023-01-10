import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience';
import { SExperienceService } from 'src/app/service/s-experience.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experience:Experience[]=[];

  constructor(private s_experience: SExperienceService, private tokenService:TokenService) { }

  isLogged=false;

  ngOnInit(): void {
    this.loadExperience();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }

  loadExperience():void{
    this.s_experience.list().subscribe(data =>{this.experience = data;})
  }

}
