import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Estrela from "./Estrela";

interface Estrelas{
    quantidade: number,
    editavel?: boolean,
    grande?: boolean
}

export default function Estrelas({
    quantidade: quantidadeAntiga, 
    editavel = false,
    grande = false,
}: Estrelas) {
    const [quantidade, setQuantidade] = useState(quantidadeAntiga);

    const RenderEstrelas = () => {
        const listaEstrelas = [];
        for (let index = 0; index < 5; index++) {
            listaEstrelas.push(
                <Estrela 
                    key={index}
                    onPress={() => setQuantidade(index + 1)}
                    editavel={!editavel}
                    preenchida={index < quantidade}
                    grande={grande}
                />
            );
        }

        return <View style={style.estrelas}>
            {listaEstrelas}
        </View>
    }

    return <RenderEstrelas />
}

const style = StyleSheet.create({
    estrelas: {
        flexDirection: "row",
    }
});