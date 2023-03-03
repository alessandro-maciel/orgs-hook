import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import useProdutores from "../../../hooks/useProdutores";
import Produtor from "./Produtor";

interface Topo {
    topo: React.ElementType;
}

export default function Produtores({topo: Topo}: Topo){
    const {titulo, lista}= useProdutores();

    const TopoLista = () => {
        return <>
            <Topo/>
            <Text style={styles.titulo}>{ titulo }</Text>
        </> 
    }

    return <FlatList 
        data={lista}
        renderItem={({ item }) => <Produtor {...item}/>}
        keyExtractor={({nome}) => nome}
        ListHeaderComponent={TopoLista}
    />
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: "bold",
        color: "#464646"
    }
});