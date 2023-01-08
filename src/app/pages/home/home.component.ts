import { Component } from '@angular/core';

interface homeBloc {
  imageHome : string;
  titleHome: string;
  descriptionHome : string;
  buttonHome?: string;
  linkHome?: string;
}

interface homeCarrousel {
  imageCarrousel : string;
  altCarrousel: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  homeArray: homeBloc [] = [

    {
      imageHome : "assets/Images/home_blue-square.png",
      titleHome: "Bienvenue sur notre e-shop",
      descriptionHome : "Ouverture officielle de notre boutique en ligne",
      buttonHome: "Je découvre",
      linkHome: "/category-products"
    },
  
    {
      imageHome : "assets/Images/home_yellow-square.png",
      titleHome: "L'intemporalité en couleur pop",
      descriptionHome : "Une couleur coup de coeur ? Nos pièces incontournables se déclinent quelques soient vos préférences."
    }
  ]  

homeCarrouselArray: homeCarrousel [] = [

  {
    imageCarrousel : "assets/Images/home_placeholder-bestseller-tshirt.jpg",
    altCarrousel: "best-seller Tshirt"
  },

  {
    imageCarrousel : "assets/Images/home_placeholder-bestseller-jacket.jpg",
    altCarrousel: "best-seller Veste"
  },

  {
    imageCarrousel : "assets/Images/home_placeholder-bestseller-skirt.jpg",
    altCarrousel: "best-seller Jupe"
  },

  {
    imageCarrousel : "assets/Images/home_placeholder-bestseller-pants.PNG",
    altCarrousel: "best-seller Pantalon"
  }

]

  


}
