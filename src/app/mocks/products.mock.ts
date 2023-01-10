export type Category='skirts'|'pants'|'jackets'|'tshirts';
export type Size='S'|'M'|'L'|'XL';
export interface Product{
    id:number;
    title:string;
    description:string;
    price:number;
    color:string;
    wishlist:string;
    image:string[];
    isAvailable:boolean;
    size:Size[];
    imageMini1:string;
    imageMini2:string;
    imageMini3:string;
    category:Category;
}
export const PRODUCTS:Product[]=[
    {
        id:1,
        title:"Pantalon Fushia",
        description:"Existe différents détails qui rendent chaque pantalon palazzo unique. Si vous avez une taille assez marquée, choisissez un pantalon palazzo avec un cordon ou une ceinture. Si vous avez des hanches développées, évitez les pantalons avec des plis au niveau de l’abdomen. À moins d’être grande et fine, évitez les détails encombrants. Privilégiez les modèles simples et chics. Vous retrouverez également des modèles avec des fentes, soit sur les côtés, soit sur le devant. Cela peut apporter une petite touche d’originalité. Si vous êtes petites, cela vous permettra de dévoiler vos jambes en toute subtilité.",
        price:15,
        color:"Fushia",
        wishlist:"assets/Images/icons/icon_Header-heart.png",
        image:["assets/Images/pants/pantalon-fushia1.png"],
        isAvailable:true,
        size:['S','M','L','XL'],
        imageMini1:"assets/Images/pants/product_pantalon-fushia1.png",
        imageMini2:"assets/Images/pants/product_pantalon-fushia2.png",
        imageMini3:"assets/Images/pants/product_pantalon-fushia3.png",
        category:"pants"
    },
    {
        id:2,
        title:"Pantalon noir",
        description:"Existe différents détails qui rendent chaque pantalon palazzo unique. Si vous avez une taille assez marquée, choisissez un pantalon palazzo avec un cordon ou une ceinture. Si vous avez des hanches développées, évitez les pantalons avec des plis au niveau de l’abdomen. À moins d’être grande et fine, évitez les détails encombrants. Privilégiez les modèles simples et chics. Vous retrouverez également des modèles avec des fentes, soit sur les côtés, soit sur le devant. Cela peut apporter une petite touche d’originalité. Si vous êtes petites, cela vous permettra de dévoiler vos jambes en toute subtilité.",
        price:17,
        color:"Noir",
        wishlist:"assets/Images/icons/icon_Header-heart.png",

        image:["assets/Images/pants/product_pantalon-noir1.png"],
        isAvailable:true,
        size:['S','M','L','XL'],  
        imageMini1:"assets/Images/pants/product_pantalon-noir1.png",
        imageMini2:"assets/Images/pants/product_pantalon-noir2.png",
        imageMini3:"assets/Images/pants/product_pantalon-noir1.png",
        category:"pants"
    },
    {
        id:3,
        title:"Pantalon cargo",
        description:"Existe différents détails qui rendent chaque pantalon palazzo unique. Si vous avez une taille assez marquée, choisissez un pantalon palazzo avec un cordon ou une ceinture. Si vous avez des hanches développées, évitez les pantalons avec des plis au niveau de l’abdomen. À moins d’être grande et fine, évitez les détails encombrants. Privilégiez les modèles simples et chics. Vous retrouverez également des modèles avec des fentes, soit sur les côtés, soit sur le devant. Cela peut apporter une petite touche d’originalité. Si vous êtes petites, cela vous permettra de dévoiler vos jambes en toute subtilité.",
        price:13,
        color:"kaki",
        wishlist:"assets/Images/icons/icon_Header-heart.png",

        image:["assets/Images/pants/product_pantalon-treilli3.png"],
        isAvailable:true,
        size:['S','M','L','XL'],
        imageMini1:"assets/Images/pants/product_pantalon-treilli1.png",
        imageMini2:"assets/Images/pants/product_pantalon-treilli2.png",
        imageMini3:"assets/Images/pants/product_pantalon-treilli3.png",
        category:"pants"
    },
    {
        id:4,
        title:"Pantalon palazzo",
        description:"Existe différents détails qui rendent chaque pantalon palazzo unique. Si vous avez une taille assez marquée, choisissez un pantalon palazzo avec un cordon ou une ceinture. Si vous avez des hanches développées, évitez les pantalons avec des plis au niveau de l’abdomen. À moins d’être grande et fine, évitez les détails encombrants. Privilégiez les modèles simples et chics. Vous retrouverez également des modèles avec des fentes, soit sur les côtés, soit sur le devant. Cela peut apporter une petite touche d’originalité. Si vous êtes petites, cela vous permettra de dévoiler vos jambes en toute subtilité.",
        price:31,
        color:"vert",
        wishlist:"assets/Images/icons/icon_Header-heart.png",

        image:["assets/Images/pants/product_pantalon-vert1.png"],
        isAvailable:true,
        size:['S','M','L','XL'],
        imageMini1:"assets/Images/pants/product_pantalon-vert1.png",
        imageMini2:"assets/Images/pants/product_pantalon-vert2.png",
        imageMini3:"assets/Images/pants/product_pantalon-vert3.png",
        category:"pants"
    },
    {
        id:5,
        title:"Pantalon jeans",
        description:"Existe différents détails qui rendent chaque pantalon palazzo unique. Si vous avez une taille assez marquée, choisissez un pantalon palazzo avec un cordon ou une ceinture. Si vous avez des hanches développées, évitez les pantalons avec des plis au niveau de l’abdomen. À moins d’être grande et fine, évitez les détails encombrants. Privilégiez les modèles simples et chics. Vous retrouverez également des modèles avec des fentes, soit sur les côtés, soit sur le devant. Cela peut apporter une petite touche d’originalité. Si vous êtes petites, cela vous permettra de dévoiler vos jambes en toute subtilité.",
        price:20,
        color:"jeans bleu",
        wishlist:"assets/Images/icons/icon_Header-heart.png",

        image:["assets/Images/pants/product_pantalon-jean2.png"],
        isAvailable:true,
        size:['S','M','L','XL'],
        imageMini1:"assets/Images/pants/product_pantalon-jean1.png",
        imageMini2:"assets/Images/pants/product_pantalon-jean2.png",
        imageMini3:"assets/Images/pants/product_pantalon-jean1.png",
        category:"pants"
    },
    {
        id:6,
        title:"Pantalon Rose",
        description:"Existe différents détails qui rendent chaque pantalon palazzo unique. Si vous avez une taille assez marquée, choisissez un pantalon palazzo avec un cordon ou une ceinture. Si vous avez des hanches développées, évitez les pantalons avec des plis au niveau de l’abdomen. À moins d’être grande et fine, évitez les détails encombrants. Privilégiez les modèles simples et chics. Vous retrouverez également des modèles avec des fentes, soit sur les côtés, soit sur le devant. Cela peut apporter une petite touche d’originalité. Si vous êtes petites, cela vous permettra de dévoiler vos jambes en toute subtilité.",
        price:18,
        color:"Rose",
        wishlist:"assets/Images/icons/icon_Header-heart.png",

        image:["assets/Images/pants/product_pantalon-rose3.png"],
        isAvailable:true,
        size:['S','M','L','XL'],
        imageMini1:"assets/Images/pants/product_pantalon-rose1.png",
        imageMini2:"assets/Images/pants/product_pantalon-rose2.png",
        imageMini3:"assets/Images/pants/product_pantalon-rose3.png",
        category:"pants"
    },

]; 