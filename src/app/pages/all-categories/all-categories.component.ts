import { Component } from '@angular/core';


interface allCategoriesBloc {
  imageCategory : string;
  descriptionCategory : string;
  buttonCategory: string;
  linkCategory: string;
}


@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})



export class AllCategoriesComponent {

allCategoryArray: allCategoriesBloc [] = [

  {
    imageCategory : "assets/Images/allcategories_tshirt.png",
    descriptionCategory : "Jetez un oeil à notre gamme de produit",
    buttonCategory: "T-Shirts",
    linkCategory: "/category-products/tshirts"
  },

  {
    imageCategory : "assets/Images/allcategories_jackets.png",
    descriptionCategory : "Jetez un oeil à notre gamme de produit",
    buttonCategory: "Vestes",
    linkCategory: "/category-products/jackets"
  },

  {
    imageCategory : "assets/Images/allcategories_skirt.png",
    descriptionCategory : "Jetez un oeil à notre gamme de produit",
    buttonCategory: "Jupes",
    linkCategory: "/category-products/skirts"
  },

  {
    imageCategory : "assets/Images/allcategories_pants.png",
    descriptionCategory : "Jetez un oeil à notre gamme de produit",
    buttonCategory: "Pantalons",
    linkCategory: "/category-products/pants"
  }

]



}
