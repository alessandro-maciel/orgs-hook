import { useState, useEffect } from "react";
import { ImageSourcePropType } from "react-native/types";
import { carregaProdutores } from "../services/carregaDados";

interface Produtores{
    titulo: string;
    lista: {
        nome: string;
        imagem: ImageSourcePropType;
        distancia: number;
        estrelas: number;
    }[];
}

export default function useProdutores(){
    const [produtores, setProdutores] = useState<Produtores>({
        titulo: "",
        lista: [],
    });

    useEffect(()=>{
        setProdutores(carregaProdutores());
    },[]);
    
    return {...produtores};
}