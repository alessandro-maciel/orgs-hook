import React from "react";
import estrela from "../assets/estrela.png";
import estrelaCinza from "../assets/estrelaCinza.png";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

interface Estrela {
    onPress: () => void,
    editavel: boolean,
    preenchida: boolean,
    grande?: boolean,
}

export default function Estrela({onPress, editavel, preenchida, grande = false}: Estrela){
    const estilos = stylesFunction(grande);

    const getImage = () => {
        if (preenchida) {
            return estrela;
        }

        return estrelaCinza;
    }

    return <TouchableOpacity
        onPress={onPress}
        disabled={editavel}
    >
        <Image source={getImage()} style={estilos.estrela}/>
    </TouchableOpacity>
}

const stylesFunction = (grande: boolean) => StyleSheet.create({
    estrela: {
        width: grande ? 36: 12,
        height: grande ? 36: 12,
        marginRight: 2,
    },
});