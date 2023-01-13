import { Component } from '@angular/core';


interface allCategoriesBloc {
  idCategory : number,
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
    idCategory : 1,
    imageCategory : "assets/Images/allcategories_tshirt.png",
    descriptionCategory : "Jetez un oeil à notre gamme de produit",
    buttonCategory: "T-Shirts",
    linkCategory: "/category-products/tshirts"
  },

  {
    idCategory : 2,
    imageCategory : "assets/Images/allcategories_jackets.png",
    descriptionCategory : "Jetez un oeil à notre gamme de produit",
    buttonCategory: "Vestes",
    linkCategory: "/category-products/jackets"
  },

  {
    idCategory : 3,
    imageCategory : "assets/Images/allcategories_skirt.png",
    descriptionCategory : "Jetez un oeil à notre gamme de produit",
    buttonCategory: "Jupes",
    linkCategory: "/category-products/skirts"
  },

  {
    idCategory : 4,
    imageCategory : "assets/Images/allcategories_pants.png",
    descriptionCategory : "Jetez un oeil à notre gamme de produit",
    buttonCategory: "Pantalons",
    linkCategory: "/category-products/pants"
  }

]



}
