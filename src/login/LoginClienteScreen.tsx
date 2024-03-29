import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function LoginScreen(): JSX.Element {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login() {
        const data = {
            email: email,
            password: password,
        }
        console.log(data);
    }

    return (
        <View style={styles.container}>

            <Image style={styles.logoBarbearia} resizeMode='contain' source={require('../assets/images/logo.png')} />

            <View style={styles.card}>
                <Image style={styles.logo} resizeMode='contain' source={require('../assets/images/Cliente.png')} />
                <Text style={styles.title}>Login Cliente</Text>
                <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#333333" onChangeText={(textEmail) => setEmail(textEmail)} />
                <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#333333" onChangeText={(textPassword) => setPassword(textPassword)} secureTextEntry />
                <TouchableOpacity style={styles.button} onPress={() => { login() }}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Não possui conta? Crie uma!</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ECF0F1' // Cor de fundo cinza claro
    },
    logo: {
        width: 80,
        height: 80,
        left: 90,
    },
    card: {
        backgroundColor: '#2C3E50', // Cor de fundo azul escuro
        width: 300,
        borderRadius: 20,
        padding: 20,
        elevation: 3,
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white', // Cor do título cinza escuro
        marginBottom: 20,
        textAlign: 'center'
    },
    input: {
        backgroundColor: '#BDC3C7', // Cor de fundo cinza médio
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#7F8C8D' // Cor da borda cinza claro
    },
    button: {
        backgroundColor: '#3498DB', // Cor do botão azul claro
        height: 40,
        borderRadius: 8
    },
    logoBarbearia:{
      width :150 ,
      height :110 ,
      marginBottom :20 ,
      marginTop :-200 
   },
   buttonText:{
      color :"#FFFFFF" ,
      textAlign :'center' ,
      fontSize :16 ,
      lineHeight :40 
   },
   forgotPassword:{
      color :'#3498DB', // Cor do texto azul claro
      textAlign :'center' ,
      marginTop :10 
   }
});

export default LoginScreen;