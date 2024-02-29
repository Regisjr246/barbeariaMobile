import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function CadastroClienteScreen(): JSX.Element {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const [, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                <Text style={styles.title}>Cadastro Cliente</Text>

                <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#333333" onChangeText={(textEmail) => setEmail(textEmail)} />
                <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#333333" onChangeText={(textEmail) => setEmail(textEmail)} />
             
                <TextInput style={styles.input} placeholder="Celular" placeholderTextColor="#333333" onChangeText={(textCelular) => setEmail(textCelular)} />
                <TextInput style={styles.input} placeholder="CPF" placeholderTextColor="#333333" onChangeText={(textCPF) => setPassword(textCPF)}  />

                <TextInput style={styles.input} placeholder="Data de Nascimneto" placeholderTextColor="#333333" onChangeText={(textDataNascimento) => setEmail(textDataNascimento)} />
                <TextInput style={styles.input} placeholder="Cidade" placeholderTextColor="#333333" onChangeText={(textCidade) => setCd(textCidade)}  />
                <TextInput style={styles.input} placeholder="Estado" placeholderTextColor="#333333" onChangeText={(textEstado) => setEstado(textEstado)} />
                <TextInput style={styles.input} placeholder="Pais" placeholderTextColor="#333333" onChangeText={(textPais) => setPais(textPais)}  />
                <TextInput style={styles.input} placeholder="Rua" placeholderTextColor="#333333" onChangeText={(textRua) => setRua(textRua)} />
                <TextInput style={styles.input} placeholder="Numero" placeholderTextColor="#333333" onChangeText={(textNumero) => setNumero(textNumero)}  />
             
                <TextInput style={styles.input} placeholder="Bairro" placeholderTextColor="#333333" onChangeText={(textBairro) => setBairro(textBairro)}  />
                <TextInput style={styles.input} placeholder="Cep" placeholderTextColor="#333333" onChangeText={(textCep) => setCep(textCep)}  />
                <TextInput style={styles.input} placeholder="Complemento" placeholderTextColor="#333333" onChangeText={(textComplemento) => setComplemento(Complemento)}  />
                <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#333333" onChangeText={(textPassword) => setPassword(textPassword)}  />
             
             
             
                <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#333333" onChangeText={(textPassword) => setPassword(textPassword)} secureTextEntry />
                <TouchableOpacity style={styles.button} onPress={() => { login() }}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
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

export default CadastroClienteScreen;