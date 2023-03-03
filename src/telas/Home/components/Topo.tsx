import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { carregaTopo } from "../../../services/carregaDados";
import logo from "../../../assets/logo.png";

interface Topo {
    boasVindas: string, 
    legenda: string,
}

export default function Topo(){
    const [topo, setTopo] = useState<Topo>({boasVindas: "", legenda: ""});

    useEffect(()=>{
        setTopo(carregaTopo());
    }, []);

    return <View style={styles.topo}>
        <Image source={logo} style={styles.imagem}/>
        <Text style={styles.boasVindas}>{topo.boasVindas}</Text>
        <Text style={styles.legenda}>{topo.legenda}</Text>
    </View>
}

const styles = StyleSheet.create({
    topo:{ 
        backgroundColor: '#F6F6F6',
        padding: 16,
    },
    imagem: {
        width:70,
        height: 28,
    },
    boasVindas:{
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
        color: "#464646"
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26,
        color: "#A3A3A3"
    }
}); 