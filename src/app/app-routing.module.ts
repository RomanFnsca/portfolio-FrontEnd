import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@Angular/router";
//import { HomeComponent } from "./components/home/home.component";
//import { LoginComponent } from "./components/login/login.component";

const routes: Routes =[
   
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}
