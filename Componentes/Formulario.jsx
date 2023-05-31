import React, {useState} from "react";
import {SafeAreaView, Button, TextInput, Text, StyleSheet, text} from "react-native";
import { stringifyValueWithProperty } from "react-native-web/dist/cjs/exports/StyleSheet/compiler";

const Formulario = () => {
    const [text, onChangeText] = React.useState("")

    return(
        <SafeAreaView style={styles.container}>
            <div className="cuadrado" View style={styles.cuadrado}>
            <TextInput style={styles.input} onChangeText={onChangeText} placeholder ="ingrese" value={text}/>
            <Text>{text.length}</Text>
            <Button title= "PRESIONAME" color="#f194ff"/>
            <hr/>
            <Text>{text}</Text>
            </div>
        </SafeAreaView>

    )
};

const styles = StyleSheet.create({
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: 'grey'
    },
    cuadrado:{
        height:300,
        width:200,
        padding:5,
        flex: 0.3,
        borderStyle:"solid",
        borderWidth:5,
        borderColor: 'gray',
        borderWidth: 2.5,
    },

});

export default Formulario;