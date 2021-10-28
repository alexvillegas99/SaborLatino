export interface platos{
    id?:string;
    nombre:string;
    descripcion1:string;
    descripcion2?:string;
    imagen:string;
    alergenos:alergenos[];
    precio:number;
    estado:boolean;
    idSubCategoria:string;
}

export interface alergenos{
    id:number;
    nombre:string;
    valor:boolean;
}