import React from "react";
import LoginScreen from "./src/login/LoginADMScren";
import LoginProfissionalScreen from "./src/login/loginProfissionalScreen";
import LoginClienteScreen from "./src/login/LoginClienteScreen";
import LoginADMScren from "./src/login/LoginADMScren";
import CadastroClienteScreen from "./src/cadastros/cadastroCliente";


function App():JSX.Element{
  return(
    //<LoginADMScren/>
    //<LoginProfissionalScreen/>
    //<LoginClienteScreen/>  
    <CadastroClienteScreen/>
    );
}
export default App;
