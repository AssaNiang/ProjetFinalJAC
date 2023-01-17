import { Component } from '@angular/core';

interface homeBloc {
  idHome: number;
  imageHome : string;
  titleHome: string;
  descriptionHome : string;
  buttonHome?: string;
  linkHome?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  homeArray: homeBloc [] = [

    {
      idHome: 1,
      imageHome : "assets/Images/home_blue-square.png",
      titleHome: "Bienvenue sur notre e-shop",
      descriptionHome : "Ouverture officielle de notre boutique en ligne",
      buttonHome: "Je découvre",
      linkHome: "/category-products"
    },
  
    {
      idHome: 2,
      imageHome : "assets/Images/home_yellow-square.png",
      titleHome: "L'intemporalité en couleur pop",
      descriptionHome : "Une couleur coup de coeur ? Nos pièces incontournables se déclinent quelques soient vos préférences."
    }
  ]  



}
