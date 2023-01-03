import { NgModule } from "@angular/core";
//import { RouterModule, Routes } from "@angular/router";
import { RouterModule, Routes } from "@Angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { NewEducationComponent } from "./new-education/new-education.component";
//import { HomeComponent } from "./components/home/home.component";
//import { LoginComponent } from "./components/login/login.component";

const routes: Routes =[
    {path:'', component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'newEducation', component:NewEducationComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}
