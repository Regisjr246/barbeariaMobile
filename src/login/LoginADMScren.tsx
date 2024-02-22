import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

function LoginADMScren(): JSX.Element {

const[email,setEmail]=useState("");
const[passsord,setPassword]=useState("");





function login(){
    const dados={
        email:email,
        passsord:passsord,
    }

console.log(dados);

}





    return (
        <View style={styles.container}>

<Image style={styles.logoBarbearia} resizeMode='contain' source={require('../assets/images/logo.png')} />
            


           
            
            <View style={styles.card}>
            <Image style={styles.logo} resizeMode='contain' source={require('../assets/images/clientes.png')} />
                <Text style={styles.title}>Login</Text>
                
                <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor={"#151413"}  onChangeText={(textEmail)=>setEmail(textEmail)}   ></TextInput>

            
               
               <TextInput style={styles.input} placeholder="Senha" placeholderTextColor={"#151413"}  onChangeText={(textPassword)=>setPassword(textPassword)} secureTextEntry  ></TextInput>

                <TouchableOpacity style={styles.button}  onPress={()=>{login() }}>
                    <Text style={styles.buttonText} > Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity    >
                    <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
                </TouchableOpacity>

                <TouchableOpacity >
                    <Text  style={styles.forgotSingin}>Não possui conta? Cadastre-se!</Text>
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
        backgroundColor: '#F76900'
    },

    logo: {
        width: 80,
        height: 80,
        left:90
    },


    logoBarbearia:{
        width:800,
        height: 80,
        marginBottom: 20,
        marginTop: -200
    },

    card: {
        backgroundColor: "#FFFFFF",
        width: 300,
        borderRadius: 10,
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
        color: '#151413',
        marginBottom: 20,
        textAlign: 'center',
    },

    input: {
        backgroundColor: '#D7D4D1',
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#F76900'
    },


    button: {
        backgroundColor: '#836FFF',
        height: 40,
        borderRadius: 8
    },

    buttonText: {
        color: "#FFFFFF",
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 40
    },

    forgotPassword:{
       color:'#836FFF',
       textAlign:'center',
       marginTop:10, 
    },
    forgotSingin:{
        color:'#836FFF',
        textAlign:'center',
        marginTop:0, 
    }








});

export default LoginADMScren;