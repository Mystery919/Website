import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImagesComponent } from './images/images.component';
import { MusicComponent } from './music/music.component';


const routes: Routes = [
  //{path: "", pathMatch: "full",redirectTo: "/home"},
  {path: 'home' , component: HomeComponent},
  { path: 'music', component: MusicComponent },
  { path: 'images', component: ImagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
