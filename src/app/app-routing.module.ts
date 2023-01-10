import { NgModule } from "@angular/core";
//import { RouterModule, Routes } from "@angular/router";
import { RouterModule, Routes } from "@Angular/router";
import { EditAcercaDeComponent } from "./components/acerca-de/edit-acerca-de.component";
import { EditExperienceComponent } from "./components/experience/edit-experience.component";
import { NewExperienceComponent } from "./components/experience/new-experience.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { NewEducationComponent } from "./new-education/new-education.component";
//import { HomeComponent } from "./components/home/home.component";
//import { LoginComponent } from "./components/login/login.component";

const routes: Routes =[
    {path:'', component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'newEducation', component:NewEducationComponent},
    {path:'editAcercaDe/:id', component:EditAcercaDeComponent},
    {path:'newExperience', component:NewExperienceComponent},
    {path:'editExperience/:id', component:EditExperienceComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}
