import { Component } from '@angular/core';


// Interface qui sert de model pour les listes de liens (Menu et Légal) dans le footer
interface footerLink {
  footerLinkName: string;
  footerLinkPage: string;
}

// Interface pour mise en place des Réseaux Sociaux dans le footer
interface footerRS {
  footerLogoRS: string;
  footerLinkRS: string;
  footerAltRS: string;
}




@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  // Liste Liens du Menu dans le footer
  footerLinkMenuArray: footerLink [] = [

    {
      footerLinkName: "Accueil",
      footerLinkPage: "/"
    },

    {
      footerLinkName: "Catégories",
      footerLinkPage: "/category-products"
    },

    {
      footerLinkName: "A propos",
      footerLinkPage: "/**"
    }
  
  ]

  // Liste Liens Légaux dans le footer
  footerLinkLegalArray: footerLink [] = [

    {
      footerLinkName: "Mentions légales",
      footerLinkPage: "/**"
    },

    {
      footerLinkName: "CGU-CGV",
      footerLinkPage: "/**"
    },

    {
      footerLinkName: "Politique de confidentialité",
      footerLinkPage: "/**"
    }
  
  ]

// Liste des RS dans le footer
footerRSArray: footerRS [] = [

  {
    footerLogoRS: "assets/Images/icons/icon_RS-twitter-bleue.png",
    footerLinkRS: "/",
    footerAltRS: "Logo Twitter"
  },

  {
    footerLogoRS: "assets/Images/icons/icon_RS-ins-beue.png",
    footerLinkRS: "/",
    footerAltRS: "Logo Instagram"
  },

  {
    footerLogoRS: "assets/Images/icons/icon_RS-snap-bleue.png",
    footerLinkRS: "/",
    footerAltRS: "Logo Snapchat"
  },

  {
    footerLogoRS: "assets/Images/icons/icon_RS-fb-bleue.png",
    footerLinkRS: "/",
    footerAltRS: "Logo Facebook"
  }


]

}
