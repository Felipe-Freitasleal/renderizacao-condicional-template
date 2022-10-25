import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";
import { useState } from "react";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 150vh;
`

function App() {

  const [tela, setTela] = useState(0)

  function mudarTelaParaCadastro () {
    setTela(1)
  }

  function mudarTelaParaLogin () {
    setTela(0)
  }


  switch (tela){
    case 0:
     return (
              <MainContainer >
                <GlobalStyled />
                  <TelaLogin mudarTelaParaCadastro={mudarTelaParaCadastro}/>
              </MainContainer>
            );
       
    case 1:
      return(
       <MainContainer >
            <GlobalStyled />
               <TelaCadastro mudarTelaParaLogin={mudarTelaParaLogin} usuarioCadastrado={()=>setTela(2)}/>
          </MainContainer>
      )

    case 2:
      return(
        <MainContainer >
             <GlobalStyled />
                <TelaUsuarioCadastrado mudarTelaParaLogin={mudarTelaParaLogin}/>
        </MainContainer>
       )

    default:
      return (
        <MainContainer >
          <GlobalStyled />
            <TelaLogin mudarTelaParaCadastro={mudarTelaParaCadastro}/>
        </MainContainer>
      );
  } 
}



export default App;