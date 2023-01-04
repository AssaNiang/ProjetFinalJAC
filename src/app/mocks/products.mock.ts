export type Category='skirts'|'pants'|'jackets'|'tshirts';
export interface Product{
    id:number;
    title:string;
    description:string;
    price:number;
    color:string;
    image:string;
    isAvailable:boolean;
    category:Category;
}
export const PRODUCTS:Product[]=[
    {
        id:1,
        title:"Pantalon Rose",
        description:"Large s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stand ",
        price:15,
        color:"noir",
        image:"assets/Images/pants/pantalon-fushia1.png",
        isAvailable:true,
        category:"jackets"
    },
    {
        id:2,
        title:"Pantalon noir",
        description:"Large s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stand ",
        price:17,
        color:"rose",
        image:"assets/Images/pants/pantalon-Noir.png",
        isAvailable:true,
        category:"pants"
    },
    {
        id:3,
        title:"Pantalon cargo",
        description:"Large s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stand ",
        price:13,
        color:"kaki",
        image:"assets/Images/pants/pantalon-Noir.png",
        isAvailable:true,
        category:"pants"
    },
    {
        id:4,
        title:"Pantalon palazzo",
        description:"Large s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stand ",
        price:31,
        color:"vert",
        image:"assets/Images/pants/pantalon-Noir.png",
        isAvailable:true,
        category:"pants"
    },
    {
        id:5,
        title:"Pantalon jeans",
        description:"Large s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stand ",
        price:20,
        color:"jeans bleu",
        image:"assets/Images/pants/pantalon-Noir.png",
        isAvailable:true,
        category:"pants"
    },
    {
        id:6,
        title:"Pantalon beige",
        description:"Large s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stand ",
        price:18,
        color:"beige",
        image:"assets/Images/pants/pantalon-Noir.png",
        isAvailable:true,
        category:"pants"
    },

]; 