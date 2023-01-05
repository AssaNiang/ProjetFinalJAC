export type Category='skirts'|'pants'|'jackets'|'tshirts';
export type Size='S'|'M'|'L'|'XL';
export interface Product{
    id:number;
    title:string;
    description:string;
    price:number;
    color:string;
    image:string[];
    isAvailable:boolean;
    size:Size[];
    category:Category;
}
export const PRODUCTS:Product[]=[
    {
        id:1,
        title:"Pantalon Fushia",
        description:"Large s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stand ",
        price:15,
        color:"Fushia",
        image:["assets/Images/pants/pantalon-fushia1.png"],
        isAvailable:true,
        size:['S','M'],
        category:"jackets"
    },
    {
        id:2,
        title:"Pantalon noir",
        description:"Large s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stand ",
        price:17,
        color:"Noir",
        image:["assets/Images/pants/pantalon-Noir.png"],
        isAvailable:true,
        size:['S','M'],
        category:"pants"
    },
    {
        id:3,
        title:"Pantalon cargo",
        description:"Large s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stand ",
        price:13,
        color:"kaki",
        image:["assets/Images/pants/product_pantalon-treilli3.png"],
        isAvailable:true,
        size:['S','M'],
        category:"pants"
    },
    {
        id:4,
        title:"Pantalon palazzo",
        description:"Large s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stand ",
        price:31,
        color:"vert",
        image:["assets/Images/pants/product_pantalon-vert1.png"],
        isAvailable:true,
        size:['S','M'],
        category:"pants"
    },
    {
        id:5,
        title:"Pantalon jeans",
        description:"Large s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stand ",
        price:20,
        color:"jeans bleu",
        image:["assets/Images/pants/product_pantalon-jean2.png"],
        isAvailable:true,
        size:['S','M'],
        category:"pants"
    },
    {
        id:6,
        title:"Pantalon Rose",
        description:"Large s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stand ",
        price:18,
        color:"Rose",
        image:["assets/Images/pants/product_pantalon-rose3.png"],
        isAvailable:true,
        size:['S','M'],
        category:"pants"
    },

]; 