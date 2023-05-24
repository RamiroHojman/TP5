import React, {useState} from "react"
import {SafeAreaView, Button, TextInput, Text, StyleSheet} from "react-native"
const Formulario = () => {
    const [text, onChangeText] = React.useState("ingrese texto")
    return(
        <SafeAreaView style={styles.container}>
            <div className="cuadrado" View style={styles.cuadrado}>
            <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            />
            <Button
            title= "PRESIONAME"
            color="#f194ff"
            />
            </div>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    input:{
        height:30
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
    }
})
export default Formulario