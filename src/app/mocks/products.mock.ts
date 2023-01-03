type Category='skirts'|'pants'|'jackets'|'tshirts';
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
        title:"Pantalon Noir",
        description:"Large s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stand ",
        price:15,
        color:"noir",
        image:"asset/img/pants/pantalon-Noir",
        isAvailable:true,
        category:"pants"
    },
    {
        id:2,
        title:"Pantalon rose",
        description:"Large s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stand ",
        price:15,
        color:"rose",
        image:"asset/img/pants/pantalon-Noir",
        isAvailable:true,
        category:"pants"
    },
    {
        id:3,
        title:"Pantalon cargo",
        description:"Large s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stand ",
        price:15,
        color:"kaki",
        image:"asset/img/pants/pantalon-Noir",
        isAvailable:true,
        category:"pants"
    },
    {
        id:4,
        title:"Pantalon palazzo",
        description:"Large s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stand ",
        price:15,
        color:"vert",
        image:"asset/img/pants/pantalon-Noir",
        isAvailable:true,
        category:"pants"
    },
    {
        id:5,
        title:"Pantalon jeans",
        description:"Large s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stand ",
        price:15,
        color:"jeans bleu",
        image:"asset/img/pants/pantalon-Noir",
        isAvailable:true,
        category:"pants"
    },
    {
        id:6,
        title:"Pantalon beige",
        description:"Large s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stand ",
        price:15,
        color:"beige",
        image:"asset/img/pants/pantalon-Noir",
        isAvailable:true,
        category:"pants"
    },

]; 